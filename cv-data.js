const monthNames = { jan: 0, january: 0, januar: 0, feb: 1, february: 1, februar: 1, mar: 2, march: 2, mär: 2, märz: 2, maerz: 2, apr: 3, april: 3, may: 4, mai: 4, jun: 5, june: 5, juni: 5, jul: 6, july: 6, juli: 6, aug: 7, august: 7, sep: 8, sept: 8, september: 8, oct: 9, october: 9, okt: 9, oktober: 9, nov: 10, november: 10, dec: 11, december: 11, dez: 11, dezember: 11 };
const monthNamePattern = 'jan(?:uary|uar)?|feb(?:ruary|ruar)?|mar(?:ch)?|mär(?:z)?|maerz|apr(?:il)?|may|mai|jun(?:e|i)?|jul(?:y|i)?|aug(?:ust)?|sep(?:t(?:ember)?)?|oct(?:ober)?|okt(?:ober)?|nov(?:ember)?|dec(?:ember)?|dez(?:ember)?';
const exactDatePattern = new RegExp(`(\\d{1,2})\\.?\\s+(${monthNamePattern})\\.?\\s+(\\d{4})`, 'i');
const tagRules = {
  internship: { type: 'work' },
  volunteer: { type: 'work' },
  extracurricular: { type: 'education' },
};
const escapeHtml = (value) => String(value).replace(/[&<>'"]/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[character]));
const monthIndex = (year, month) => Number(year) * 12 + month;

const readDatePart = (value, isEnd) => {
  const text = value.trim().toLowerCase();
  const now = new Date();
  if (text === 'present' || text === 'current' || text === 'heute' || text === 'laufend') return monthIndex(now.getFullYear(), now.getMonth() + 1);
  const match = text.match(new RegExp(`(?:(${monthNamePattern})\\.?\\s+)?(\\d{4})`, 'i'));
  if (!match) return null;
  const month = match[1] ? monthNames[match[1].toLowerCase()] : (isEnd ? 11 : 0);
  return monthIndex(match[2], isEnd ? month + 1 : month);
};

const readDatePosition = (value, isEnd) => {
  const text = value.trim().toLowerCase();
  const exact = text.match(exactDatePattern);
  if (!exact) return readDatePart(value, isEnd);
  const year = Number(exact[3]);
  const month = monthNames[exact[2].toLowerCase()];
  const daysInMonth = new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
  const day = Number(exact[1]);
  // End dates include their final day, so their boundary lies immediately
  // after it; start dates begin at the start of their stated day.
  return monthIndex(year, month) + (day - 1 + (isEnd ? 1 : 0)) / daysInMonth;
};

const readCalendarDay = (value, isEnd) => {
  const text = value.trim().toLowerCase();
  if (text === 'present' || text === 'current' || text === 'heute' || text === 'laufend') {
    const now = new Date();
    return Date.UTC(now.getFullYear(), now.getMonth() + 1, 1);
  }
  const exact = text.match(exactDatePattern);
  if (exact) return Date.UTC(Number(exact[3]), monthNames[exact[2].toLowerCase()], Number(exact[1]) + (isEnd ? 1 : 0));
  const month = readDatePart(value, isEnd);
  return month === null ? null : Date.UTC(Math.floor(month / 12), month % 12, 1);
};

const parseRange = (date) => {
  const parts = date.split(/\s*(?:—|–|-|\bto\b)\s*/i);
  const start = readDatePart(parts[0], false);
  const end = parts[1] ? readDatePart(parts[1], true) : start + 1;
  const startPosition = readDatePosition(parts[0], false);
  const endPosition = parts[1] ? readDatePosition(parts[1], true) : startPosition + 1;
  const startAt = readCalendarDay(parts[0], false);
  const endAt = parts[1] ? readCalendarDay(parts[1], true) : startAt + 86400000;
  return { start, end: Math.max(end || start + 1, start + 1), startPosition, endPosition: Math.max(endPosition || startPosition + 1, startPosition + 1 / 31), startAt, endAt: Math.max(endAt || startAt + 86400000, startAt + 86400000) };
};

const timelineText = siteText.timeline;
const tagLabel = (tag) => siteText.tags[tag] || tag || '';
const card = (entry) => `<button class="timeline-card timeline-card--${entry.tag || entry.type}${entry.isCompact ? ' timeline-card--compact' : ''}" type="button" aria-haspopup="dialog" aria-label="${escapeHtml(`${timelineText.detailsFor} ${entry.title}`)}">${entry.isCompact ? `<span class="card-type card-tag">${escapeHtml(tagLabel(entry.tag))}</span>` : `<span class="card-type">${escapeHtml(tagLabel(entry.type))}</span><span class="card-date">${escapeHtml(entry.date)}</span>`}<strong>${escapeHtml(entry.title)}</strong><span class="card-organisation">${escapeHtml(entry.organisation)}</span>${entry.location ? `<span class="card-location">${escapeHtml(entry.location)}</span>` : ''}${entry.isCompact ? '' : `<span class="card-preview">${escapeHtml(entry.description)}</span>`}<span class="card-more">${escapeHtml(timelineText.viewDetails)} <b aria-hidden="true">↗</b></span></button>`;
const range = (entry) => {
  const [startLabel, endLabel = startLabel] = entry.date.split(/\s*(?:—|–|-|\bto\b)\s*/i);
  return `<div class="timeline-range ${entry.type}${entry.tag ? ` tag-${entry.tag}` : ''}" data-entry-index="${entry.index}" style="--range-start:${entry.rangeStartMonth};--range-duration:${entry.rangeVisualDurationMonths}" aria-label="${escapeHtml(entry.date)}"><span class="range-boundary range-boundary--end">${escapeHtml(timelineText.end)} · ${escapeHtml(endLabel)}</span><span class="range-boundary range-boundary--start">${escapeHtml(timelineText.start)} · ${escapeHtml(startLabel)}</span></div>`;
};
const buildMonthTicks = (calendarPosition) => calendarPosition.map((offset) => `<span class="month-tick" style="--tick-month:${offset}" aria-hidden="true"></span>`).join('');
const connectorColours = { work: '#2775b8', education: '#e77928', internship: '#378e5b', volunteer: '#8156b1', extracurricular: '#cda21c' };
const drawConnectorPaths = (timeline, entries) => {
  const box = timeline.getBoundingClientRect();
  let svg = timeline.querySelector('.timeline-connectors');
  if (!svg) {
    timeline.insertAdjacentHTML('afterbegin', '<svg class="timeline-connectors" aria-hidden="true"></svg>');
    svg = timeline.querySelector('.timeline-connectors');
  }
  const width = timeline.clientWidth;
  const height = timeline.scrollHeight;
  svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
  svg.setAttribute('width', width);
  svg.setAttribute('height', height);
  svg.innerHTML = entries.map((entry) => {
    const item = timeline.querySelector(`.timeline-item[data-entry-index="${entry.index}"] .timeline-card`);
    const rangeElement = timeline.querySelector(`.timeline-range[data-entry-index="${entry.index}"]`);
    if (!item || !rangeElement) return '';
    const cardBox = item.getBoundingClientRect();
    const rangeBox = rangeElement.getBoundingClientRect();
    const fromX = entry.type === 'work' ? cardBox.right - box.left : cardBox.left - box.left;
    const fromY = cardBox.top - box.top + cardBox.height / 2;
    // Meet the outside edge of the relevant lane: the connector should blend
    // directly into its highlighted range instead of stopping in its centre.
    const toX = entry.type === 'work' ? rangeBox.left - box.left : rangeBox.right - box.left;
    const toY = rangeBox.top - box.top + rangeBox.height / 2;
    const colour = connectorColours[entry.tag || entry.type];
    const filters = new Set((timeline.dataset.activeFilters || '').split(' ').filter(Boolean));
    const isFilteredOut = timeline.dataset.activeFilters !== undefined && !filters.has(entry.tag || entry.type);
    return `<line class="timeline-connection ${entry.type}${isFilteredOut ? ' is-filtered-out' : ''}" data-entry-index="${entry.index}" x1="${fromX}" y1="${fromY}" x2="${toX}" y2="${toY}" stroke="${colour}" stroke-width="1.5" stroke-opacity=".72" />`;
  }).join('');
};

const detailParagraphs = (text) => String(text || '').split(/\n\s*\n/).filter(Boolean).map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join('');
const detailImages = (images = []) => images.map((image) => {
  const source = typeof image === 'string' ? image : image.src;
  const alt = typeof image === 'string' ? '' : image.alt || '';
  return source ? `<figure><img src="${escapeHtml(source)}" alt="${escapeHtml(alt)}">${alt ? `<figcaption>${escapeHtml(alt)}</figcaption>` : ''}</figure>` : '';
}).join('');

const ensureDetailModal = () => {
  let modal = document.getElementById('entry-detail-modal');
  if (modal) return modal;
  document.body.insertAdjacentHTML('beforeend', `<div id="entry-detail-modal" class="entry-modal" hidden><div class="entry-modal__backdrop" data-modal-close></div><section class="entry-modal__panel" role="dialog" aria-modal="true" aria-labelledby="entry-modal-title" tabindex="-1"><button class="entry-modal__close" type="button" data-modal-close aria-label="${escapeHtml(timelineText.closeDetails)}">×</button><p class="entry-modal__meta" id="entry-modal-meta"></p><h3 id="entry-modal-title"></h3><p class="entry-modal__organisation" id="entry-modal-organisation"></p><p class="entry-modal__location" id="entry-modal-location"></p><div class="entry-modal__content" id="entry-modal-content"></div><div class="entry-modal__images" id="entry-modal-images"></div></section></div>`);
  modal = document.getElementById('entry-detail-modal');
  modal.querySelectorAll('[data-modal-close]').forEach((element) => element.addEventListener('click', closeDetailModal));
  return modal;
};

let lastFocusedEntry;
const closeDetailModal = () => {
  const modal = document.getElementById('entry-detail-modal');
  if (!modal || modal.hidden) return;
  modal.hidden = true;
  document.body.classList.remove('modal-open');
  lastFocusedEntry?.focus();
};

const openDetailModal = (entry, trigger) => {
  const modal = ensureDetailModal();
  lastFocusedEntry = trigger;
  modal.querySelector('#entry-modal-meta').textContent = `${tagLabel(entry.tag || entry.type)} · ${entry.date}`;
  modal.querySelector('#entry-modal-title').textContent = entry.title;
  modal.querySelector('#entry-modal-organisation').textContent = entry.organisation || '';
  modal.querySelector('#entry-modal-location').textContent = entry.location || '';
  modal.querySelector('#entry-modal-content').innerHTML = detailParagraphs(entry.details || entry.description);
  modal.querySelector('#entry-modal-images').innerHTML = detailImages(entry.images);
  modal.hidden = false;
  document.body.classList.add('modal-open');
  modal.querySelector('.entry-modal__panel').focus();
};

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeDetailModal();
});

const buildTimeline = () => {
  const timeline = document.getElementById('timeline');
  if (!timeline) return;
  const entries = cvEntries.map((entry) => ({ ...entry, ...parseRange(entry.date) })).filter((entry) => Number.isFinite(entry.start));
  const firstMonth = Math.min(...entries.map((entry) => entry.start));
  const lastMonth = Math.max(...entries.map((entry) => entry.end));
  const paddingMonths = 3;
  const minimumCardMonths = 15;
  const compactCardMonths = 10.5;

  const entryGapMonths = 2;
  const calendarMonths = lastMonth - firstMonth + paddingMonths * 2;
  entries.forEach((entry) => {
    entry.dateStartMonth = lastMonth + paddingMonths - entry.end;
    entry.actualDurationMonths = entry.end - entry.start;
    const requestedTag = String(entry.tag || entry.category || (tagRules[entry.type] ? entry.type : '')).trim().toLowerCase();
    entry.tag = tagRules[requestedTag] ? requestedTag : null;
    if (entry.tag) entry.type = tagRules[entry.tag].type;
    entry.isCompact = Boolean(entry.tag);
    entry.cardMinimumMonths = entry.isCompact ? compactCardMonths : minimumCardMonths;
    entry.minimumVisualMonths = entry.isCompact ? compactCardMonths : Math.max(entry.actualDurationMonths, minimumCardMonths);
  });

  // Build one stretchable calendar shared by both columns. Each ordinary
  // month starts at one unit; sequential entries can add extra space to it.
  const spacingConstraints = Array.from({ length: calendarMonths + 1 }, () => []);
  ['work', 'education'].forEach((type) => {
    const trackEntries = entries.filter((entry) => entry.type === type);
    trackEntries.forEach((entry) => {
      const containers = trackEntries.filter((other) => {
        const overlapMonths = Math.min(other.end, entry.end) - Math.max(other.start, entry.start);
        return other !== entry && other.start <= entry.start && other.end >= entry.end && overlapMonths > 1 && (other.end - other.start) > (entry.end - entry.start);
      });
      entry.parent = containers.sort((a, b) => (a.end - a.start) - (b.end - b.start))[0];
      // Tagged entries are always compact overlays. Untagged entries are only
      // layered when they genuinely sit inside a longer placement.
      entry.isOverlay = entry.isCompact;
      entry.isNested = Boolean(entry.parent) || entry.isCompact;
    });
    const getNestingLevel = (entry) => entry.parent ? getNestingLevel(entry.parent) + 1 : 0;
    trackEntries.forEach((entry) => { entry.nestingLevel = getNestingLevel(entry) + (entry.isOverlay && !entry.parent ? 1 : 0); });

    // A one-month overlap is treated as a hand-off. Only two standard cards
    // can extend the shared calendar; compact tagged cards stay date-aligned.
    trackEntries.slice().sort((a, b) => a.dateStartMonth - b.dateStartMonth).forEach((entry, index, ordered) => {
      if (index === 0) return;
      const previous = ordered[index - 1];
      const overlapMonths = Math.min(previous.end, entry.end) - Math.max(previous.start, entry.start);
      if (overlapMonths <= 1 && !previous.isOverlay && !entry.isOverlay && entry.dateStartMonth > previous.dateStartMonth) {
        spacingConstraints[entry.dateStartMonth].push({ from: previous.dateStartMonth, size: previous.minimumVisualMonths + entryGapMonths });
      }
    });
  });

  const calendarPosition = Array.from({ length: calendarMonths + 1 }, (_, index) => index);
  for (let month = 1; month <= calendarMonths; month += 1) {
    calendarPosition[month] = Math.max(calendarPosition[month], calendarPosition[month - 1] + 1);
    spacingConstraints[month].forEach((constraint) => {
      calendarPosition[month] = Math.max(calendarPosition[month], calendarPosition[constraint.from] + constraint.size);
    });
  }
  const calendarOffset = (position) => {
    const boundedPosition = Math.min(calendarMonths, Math.max(0, position));
    const before = Math.floor(boundedPosition);
    const fraction = boundedPosition - before;
    const after = Math.min(calendarMonths, before + 1);
    return calendarPosition[before] + (calendarPosition[after] - calendarPosition[before]) * fraction;
  };
  entries.forEach((entry) => {
    entry.dateStartPosition = lastMonth + paddingMonths - entry.endPosition;
    entry.dateEndPosition = lastMonth + paddingMonths - entry.startPosition;
    entry.rangeStartMonth = calendarOffset(entry.dateStartPosition);
    entry.visualStartMonth = entry.rangeStartMonth;
    entry.rangeVisualDurationMonths = calendarOffset(entry.dateEndPosition) - entry.rangeStartMonth;
    entry.visualDurationMonths = entry.isCompact ? entry.cardMinimumMonths : Math.max(entry.rangeVisualDurationMonths, entry.minimumVisualMonths);
    entry.markerDistance = 0;
  });

  entries.forEach((entry) => {
    entry.markerDistance = entry.visualStartMonth - entry.rangeStartMonth;
    entry.connectorLength = Math.abs(entry.markerDistance);
  });
  const totalMonths = Math.max(
    calendarPosition[calendarMonths],
    ...entries.map((entry) => entry.visualStartMonth + entry.visualDurationMonths + paddingMonths),
  );
  timeline.style.setProperty('--timeline-months', totalMonths);
  timeline.style.setProperty('--minimum-card-months', minimumCardMonths);
  entries.forEach((entry, index) => { entry.index = index; });
  timeline.innerHTML = buildMonthTicks(calendarPosition) + entries.map(range).join('') + entries.map((entry) => {
    // The newest end date is at the top; time flows down toward the past.
    const nestedClass = entry.isNested ? ' is-nested' : '';
    const tagClass = entry.tag ? ` tag-${entry.tag}` : '';
    const connectorDirection = entry.markerDistance < 0 ? ' connector-down' : '';
    return `<article class="timeline-item ${entry.type}${nestedClass}${tagClass}${entry.isCompact ? ' is-compact' : ''}${connectorDirection}" data-entry-index="${entry.index}" style="--start-month:${entry.visualStartMonth};--duration-months:${entry.visualDurationMonths};--entry-minimum-months:${entry.cardMinimumMonths};--marker-distance:${entry.markerDistance};--connector-length:${entry.connectorLength};--nest-level:${entry.nestingLevel};--nest-inset:${entry.nestingLevel * .9}rem"><span class="timeline-connector" aria-hidden="true"></span>${card(entry)}</article>`;
  }).join('') + buildYearTicks(firstMonth, lastMonth, paddingMonths, calendarPosition, calendarMonths);

  timeline.querySelectorAll('.timeline-card').forEach((cardElement, index) => cardElement.addEventListener('click', () => openDetailModal(entries[index], cardElement)));
  setupTimelineFilters(timeline, entries);
  setupTimelineHoverInteractions(timeline);
  requestAnimationFrame(() => {
    packStandardEntries(timeline, entries);
    packCompactEntries(timeline, entries);
    fitTimelineHeight(timeline);
    fitTextAroundCompactCards(timeline);
    drawConnectorPaths(timeline, entries);
  });
  window.addEventListener('resize', () => {
    packStandardEntries(timeline, entries);
    packCompactEntries(timeline, entries);
    fitTimelineHeight(timeline);
    fitTextAroundCompactCards(timeline);
    drawConnectorPaths(timeline, entries);
  }, { passive: true });
};

const buildYearTicks = (firstMonth, lastMonth, paddingMonths, calendarPosition, calendarMonths) => {
  const firstYear = Math.floor(firstMonth / 12);
  const lastYear = Math.floor((lastMonth - 1) / 12);
  return Array.from({ length: lastYear - firstYear + 1 }, (_, index) => {
    const year = firstYear + index;
    const monthOffset = lastMonth + paddingMonths - monthIndex(year, 0);
    const offset = calendarPosition[Math.min(calendarMonths, Math.max(0, monthOffset))];
    return `<div class="year-tick" style="--tick-month:${offset}"><span>${year}</span></div>`;
  }).join('');
};

const setupMobileTimelineSwitcher = () => {
  const timeline = document.getElementById('timeline');
  const buttons = document.querySelectorAll('.timeline-key button');
  if (!timeline || !buttons.length) return;
  buttons.forEach((button) => button.addEventListener('click', () => {
    const type = button.classList.contains('education-key') ? 'education' : 'work';
    timeline.classList.toggle('mobile-work-active', type === 'work');
    timeline.classList.toggle('mobile-education-active', type === 'education');
    buttons.forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
  }));
};

const setupTimelineHoverInteractions = (timeline) => {
  let activeItem = null;
  const activate = (item) => {
    if (item === activeItem) return;
    activeItem?.classList.remove('is-hover-active');
    item?.classList.add('is-hover-active');
    activeItem = item;
  };
  const scoreCard = (cardElement, x, y) => {
    const box = cardElement.getBoundingClientRect();
    const horizontal = (x - (box.left + box.width / 2)) / Math.max(box.width, 1);
    const vertical = (y - (box.top + box.height / 2)) / Math.max(box.height, 1);
    return horizontal ** 2 + vertical ** 2;
  };
  timeline.addEventListener('pointermove', (event) => {
    if (event.pointerType && event.pointerType !== 'mouse') return;
    const candidates = [...timeline.querySelectorAll('.timeline-item .timeline-card')]
      .filter((cardElement) => {
        const box = cardElement.getBoundingClientRect();
        return box.width && box.height && event.clientX >= box.left && event.clientX <= box.right && event.clientY >= box.top && event.clientY <= box.bottom;
      })
      .map((cardElement) => ({ cardElement, item: cardElement.closest('.timeline-item'), score: scoreCard(cardElement, event.clientX, event.clientY) }));
    if (!candidates.length) return activate(null);
    const preferred = candidates.reduce((best, candidate) => candidate.score < best.score ? candidate : best);
    const current = candidates.find((candidate) => candidate.item === activeItem);
    // A modest threshold prevents flicker around overlap boundaries while
    // still allowing a hidden neighbour to become the active card.
    if (!current || preferred.item !== activeItem && preferred.score + .08 < current.score) activate(preferred.item);
  });
  timeline.addEventListener('pointerleave', () => activate(null));
};

const packStandardEntries = (timeline, entries) => {
  const monthSize = Number.parseFloat(getComputedStyle(timeline).getPropertyValue('--month-size'));
  const standardItems = [...timeline.querySelectorAll('.timeline-item:not(.is-compact)')];
  standardItems.forEach((item) => item.style.removeProperty('--standard-offset'));

  ['work', 'education'].forEach((type) => {
    const track = entries.filter((entry) => !entry.isCompact && entry.type === type).map((entry) => {
      const item = timeline.querySelector(`.timeline-item[data-entry-index="${entry.index}"]`);
      return { entry, item, cardElement: item?.querySelector('.timeline-card'), desiredTop: entry.rangeStartMonth * monthSize };
    }).filter(({ item, cardElement }) => item && cardElement && item.getClientRects().length);
    track.sort((first, second) => first.desiredTop - second.desiredTop || second.entry.endAt - first.entry.endAt);

    let previous = null;
    track.forEach(({ entry, item, cardElement, desiredTop }) => {
      const sharedMonths = previous ? Math.min(previous.entry.end, entry.end) - Math.max(previous.entry.start, entry.start) : Infinity;
      const packedTop = previous && sharedMonths <= 1
        ? Math.max(desiredTop, previous.bottom + 18)
        : desiredTop;
      item.style.setProperty('--standard-offset', `${packedTop - desiredTop}px`);
      previous = { entry, bottom: packedTop + cardElement.getBoundingClientRect().height };
    });
  });
};

const packCompactEntries = (timeline, entries) => {
  const compactItems = [...timeline.querySelectorAll('.timeline-item.is-compact')];
  compactItems.forEach((item) => item.style.removeProperty('--compact-offset'));
  const monthSize = Number.parseFloat(getComputedStyle(timeline).getPropertyValue('--month-size'));
  const compactGap = 12;

  ['work', 'education'].forEach((type) => {
    const track = entries.filter((entry) => entry.isCompact && entry.type === type).map((entry) => {
      const item = timeline.querySelector(`.timeline-item[data-entry-index="${entry.index}"]`);
      const cardElement = item?.querySelector('.timeline-card');
      return { entry, item, cardElement, desiredTop: entry.rangeStartMonth * monthSize };
    }).filter(({ item, cardElement }) => item && cardElement && item.getClientRects().length);
    track.sort((first, second) => first.desiredTop - second.desiredTop || second.entry.endAt - first.entry.endAt);

    let previousBottom = -Infinity;
    track.forEach(({ item, cardElement, desiredTop }) => {
      const packedTop = Math.max(desiredTop, previousBottom + compactGap);
      item.style.setProperty('--compact-offset', `${packedTop - desiredTop}px`);
      const cardHeight = cardElement.getBoundingClientRect().height;
      previousBottom = packedTop + cardHeight;
    });
  });
};

const fitTimelineHeight = (timeline) => {
  timeline.style.removeProperty('min-height');
  const timelineBox = timeline.getBoundingClientRect();
  const baselineHeight = timelineBox.height;
  const requiredHeight = Math.max(
    baselineHeight,
    ...[...timeline.querySelectorAll('.timeline-item .timeline-card')]
      .filter((cardElement) => cardElement.getClientRects().length)
      .map((cardElement) => cardElement.getBoundingClientRect().bottom - timelineBox.top + 12),
  );
  if (requiredHeight > baselineHeight) timeline.style.minHeight = `${requiredHeight}px`;
};

const fitTextAroundCompactCards = (timeline) => {
  const compactCards = [...timeline.querySelectorAll('.timeline-item.is-compact .timeline-card')]
    .filter((cardElement) => cardElement.getClientRects().length);
  const textSelector = '.card-type, .card-date, strong, .card-organisation, .card-location, .card-preview, .card-more';
  const standardCards = timeline.querySelectorAll('.timeline-item:not(.is-compact) .timeline-card');

  standardCards.forEach((cardElement) => {
    const textElements = cardElement.querySelectorAll(textSelector);
    textElements.forEach((element) => {
      element.style.maxWidth = '';
      element.style.marginLeft = '';
    });

    const cardBox = cardElement.getBoundingClientRect();
    const cardStyle = getComputedStyle(cardElement);
    const contentLeft = cardBox.left + Number.parseFloat(cardStyle.paddingLeft);
    const contentRight = cardBox.right - Number.parseFloat(cardStyle.paddingRight);

    textElements.forEach((element) => {
      const textBox = element.getBoundingClientRect();
      const obstructions = compactCards.map((compactCard) => compactCard.getBoundingClientRect()).filter((compactBox) => (
        compactBox.bottom > textBox.top + 1
        && compactBox.top < textBox.bottom - 1
        && compactBox.right > textBox.left + 1
        && compactBox.left < textBox.right - 1
      ));
      if (!obstructions.length) return;

      const clearance = 10;
      const blockedIntervals = obstructions
        .map((compactBox) => ({
          start: Math.max(contentLeft, compactBox.left - clearance),
          end: Math.min(contentRight, compactBox.right + clearance),
        }))
        .filter((interval) => interval.end > interval.start)
        .sort((first, second) => first.start - second.start)
        .reduce((intervals, interval) => {
          const previous = intervals.at(-1);
          if (previous && interval.start <= previous.end) previous.end = Math.max(previous.end, interval.end);
          else intervals.push(interval);
          return intervals;
        }, []);
      const freeIntervals = [];
      let cursor = contentLeft;
      blockedIntervals.forEach((interval) => {
        if (interval.start > cursor) freeIntervals.push({ start: cursor, end: interval.start });
        cursor = Math.max(cursor, interval.end);
      });
      if (cursor < contentRight) freeIntervals.push({ start: cursor, end: contentRight });
      if (!freeIntervals.length) return;

      // Keep text at its normal left edge when possible; otherwise move it to
      // the widest unobstructed segment inside the same card.
      const available = freeIntervals[0].end - freeIntervals[0].start > 36
        ? freeIntervals[0]
        : freeIntervals.reduce((widest, interval) => (interval.end - interval.start > widest.end - widest.start ? interval : widest));
      element.style.marginLeft = `${available.start - contentLeft}px`;
      element.style.maxWidth = `${available.end - available.start}px`;
    });
  });
};

const setupTimelineFilters = (timeline, entries) => {
  const buttons = document.querySelectorAll('.timeline-filter');
  if (!buttons.length) return;
  const applyFilters = () => {
    const activeFilters = new Set([...buttons]
      .filter((button) => button.getAttribute('aria-pressed') === 'true')
      .map((button) => button.dataset.filter));
    timeline.dataset.activeFilters = [...activeFilters].join(' ');
    entries.forEach((entry) => {
      const isVisible = activeFilters.has(entry.tag || entry.type);
      timeline.querySelectorAll(`[data-entry-index="${entry.index}"]`).forEach((element) => element.classList.toggle('is-filtered-out', !isVisible));
    });
    packStandardEntries(timeline, entries);
    packCompactEntries(timeline, entries);
    fitTimelineHeight(timeline);
    fitTextAroundCompactCards(timeline);
    drawConnectorPaths(timeline, entries);
  };
  buttons.forEach((button) => button.addEventListener('click', () => {
    button.setAttribute('aria-pressed', String(button.getAttribute('aria-pressed') !== 'true'));
    applyFilters();
  }));
  applyFilters();
};

buildTimeline();
setupMobileTimelineSwitcher();
