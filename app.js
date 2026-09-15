/* Renderer: builds every panel from CONTENT[lang] and wires nav + filters. */
(function () {
  'use strict';

  var TAB_ORDER = ['plasma', 'laser', 'water', 'oxy', 'mill', 'common', 'faults'];
  var BEAD = {
    plasma: 'var(--arc)', laser: 'var(--beam)', water: 'var(--water)',
    oxy: 'var(--heat)', mill: 'var(--mech)', common: 'var(--steel)', faults: 'var(--bad)'
  };
  var TAGCLS = { prog: 't-prog', cons: 't-cons', set: 't-set', mach: 't-mach', safe: 't-safe' };

  var lang = 'uk';
  var tab = 'plasma';

  function store(k, v) {
    try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); }
    catch (e) { return null; }
  }

  /* ---------- block renderers ---------- */
  function block(b, C, accent) {
    switch (b.type) {
      case 'p':
        return '<p>' + b.html + '</p>';
      case 'note':
        return '<p class="note">' + b.html + '</p>';
      case 'ul':
        return '<ul>' + b.items.map(function (i) { return '<li>' + i + '</li>'; }).join('') + '</ul>';
      case 'chips':
        return '<div class="chips">' + b.items.map(function (i) {
          return '<span class="chip">' + i + '</span>';
        }).join('') + '</div>';
      case 'grid':
        return '<div class="grid2">' + b.cells.map(function (c) {
          return '<div class="cell">' +
            (c.kv ? '<div class="kv">' + c.kv + '</div>' : '') +
            (c.h3 ? '<h3>' + c.h3 + '</h3>' : '') +
            '<p>' + c.p + '</p></div>';
        }).join('') + '</div>';
      case 'callout':
        return '<div class="callout"' + (b.color ? ' style="border-left-color:' + b.color + '"' : '') + '>' +
          '<div class="hd"' + (b.color ? ' style="color:' + b.color + '"' : '') + '>' + b.hd + '</div>' +
          '<p>' + b.p + '</p></div>';
      case 'table':
        return '<div class="tbl-wrap"><table><thead><tr>' +
          b.head.map(function (h) { return '<th>' + h + '</th>'; }).join('') +
          '</tr></thead><tbody>' +
          b.rows.map(function (r) {
            return '<tr><td class="sym">' + r[0] + '</td><td class="cause">' + r[1] + '</td></tr>';
          }).join('') + '</tbody></table></div>';
      case 'fig':
        return '<figure class="fig">' + SVG[b.svg](C.svg[b.svg]) + '</figure>' +
          (b.caption ? '<figcaption>' + b.caption + '</figcaption>' : '');
      default:
        return '';
    }
  }

  function techPage(key, C) {
    var P = C.pages[key];
    var html = '<div class="panelview">' +
      '<div class="phead">' +
      '<div class="eyebrow" style="color:' + P.color + '">' + P.eyebrow + '</div>' +
      '<h1>' + P.h1 + '</h1>' +
      '<p class="lede">' + P.lede + '</p></div>';
    P.sections.forEach(function (s) {
      html += '<section><h2><span class="n" style="color:' + P.color + '">' + s.n + '</span>' + s.h2 + '</h2>';
      s.blocks.forEach(function (b) { html += block(b, C, P.color); });
      html += '</section>';
    });
    return html + '</div>';
  }

  function faultsPage(C) {
    var F = C.faults, rows = FAULTS[lang];
    var html = '<div class="panelview">' +
      '<div class="phead">' +
      '<div class="eyebrow" style="color:var(--bad)">' + F.eyebrow + '</div>' +
      '<h1>' + F.h1 + '</h1><p class="lede">' + F.lede + '</p></div>' +
      '<section><div class="search-row">' +
      '<input type="search" id="q" placeholder="' + F.ph + '" aria-label="' + F.h1 + '">' +
      '<div class="filters" id="filters">';
    ['all', 'plasma', 'laser', 'water', 'oxy', 'mill'].forEach(function (k) {
      html += '<button aria-pressed="' + (k === 'all') + '" data-f="' + k + '">' + F.filters[k] + '</button>';
    });
    html += '</div><span class="count" id="count"></span></div>' +
      '<div class="tbl-wrap"><table id="ftable"><thead><tr>' +
      F.head.map(function (h) { return '<th>' + h + '</th>'; }).join('') +
      '</tr></thead><tbody>';
    rows.forEach(function (r) {
      html += '<tr data-t="' + r[0] + '"><td>' + F.names[r[1]] + '</td>' +
        '<td class="sym">' + r[2] + '</td><td class="cause">' + r[3] + '</td>' +
        '<td><span class="tag ' + TAGCLS[r[4]] + '">' + F.tags[r[4]] + '</span></td></tr>';
    });
    return html + '</tbody></table></div></section></div>';
  }

  /* ---------- wiring ---------- */
  function wireFaults(C) {
    var q = document.getElementById('q');
    if (!q) return;
    var rows = [].slice.call(document.querySelectorAll('#ftable tbody tr'));
    var count = document.getElementById('count');
    var filters = document.getElementById('filters');
    var active = 'all';

    function apply() {
      var term = q.value.trim().toLowerCase(), shown = 0;
      rows.forEach(function (r) {
        var okF = active === 'all' || r.getAttribute('data-t').indexOf(active) !== -1;
        var okQ = !term || r.textContent.toLowerCase().indexOf(term) !== -1;
        var on = okF && okQ;
        r.hidden = !on;
        if (on) shown++;
      });
      count.textContent = shown + ' ' + C.faults.of + ' ' + rows.length;
    }
    q.addEventListener('input', apply);
    filters.addEventListener('click', function (e) {
      var b = e.target.closest('button[data-f]');
      if (!b) return;
      active = b.getAttribute('data-f');
      [].forEach.call(filters.querySelectorAll('button'), function (x) {
        x.setAttribute('aria-pressed', x === b ? 'true' : 'false');
      });
      apply();
    });
    apply();
  }

  function renderNav(C) {
    var nav = document.getElementById('nav');
    nav.innerHTML = TAB_ORDER.map(function (k) {
      return '<button role="tab" data-k="' + k + '" aria-selected="' + (k === tab) + '">' +
        '<span class="bead" style="background:' + BEAD[k] + '"></span>' + C.tabs[k] + '</button>';
    }).join('');
  }

  function renderView(C) {
    document.getElementById('view').innerHTML =
      tab === 'faults' ? faultsPage(C) : techPage(tab, C);
    if (tab === 'faults') wireFaults(C);
  }

  function render(scroll) {
    var C = CONTENT[lang];
    document.documentElement.lang = C.htmlLang;
    document.getElementById('brandName').textContent = C.brand;
    document.getElementById('brandSub').textContent = C.sub;
    document.getElementById('foot').textContent = C.foot;
    renderNav(C);
    renderView(C);
    [].forEach.call(document.querySelectorAll('#langs button'), function (b) {
      b.setAttribute('aria-pressed', b.getAttribute('data-l') === lang ? 'true' : 'false');
    });
    if (scroll) window.scrollTo(0, 0);
  }

  document.getElementById('nav').addEventListener('click', function (e) {
    var b = e.target.closest('button[data-k]');
    if (!b) return;
    tab = b.getAttribute('data-k');
    store('tab', tab);
    render(true);
  });

  document.getElementById('langs').addEventListener('click', function (e) {
    var b = e.target.closest('button[data-l]');
    if (!b) return;
    lang = b.getAttribute('data-l');
    store('lang', lang);
    render(false);
  });

  var savedLang = store('lang');
  if (savedLang && CONTENT[savedLang]) lang = savedLang;
  var savedTab = store('tab');
  if (savedTab && TAB_ORDER.indexOf(savedTab) !== -1) tab = savedTab;

  render(false);
})();
