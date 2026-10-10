/* ==========================================================================
   DYNACROWN Visual Script UI Editor — Tutorial Book
   Vanilla JS. No dependencies, no build step.
   ========================================================================== */
(function () {
  'use strict';

  var $  = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* ------------------------------------------------------------ progress */
  var progress = $('#progress');
  var backTop  = $('#backTop');

  function onScroll() {
    var h = document.documentElement;
    var max = h.scrollHeight - h.clientHeight;
    var pct = max > 0 ? (h.scrollTop / max) * 100 : 0;
    if (progress) progress.style.width = pct.toFixed(2) + '%';
    if (backTop) backTop.classList.toggle('show', h.scrollTop > 600);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  onScroll();

  if (backTop) {
    backTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ------------------------------------------------------ mobile sidebar */
  var sidebar = $('#sidebar');
  var menuBtn = $('#menuBtn');
  var scrim   = $('#scrim');

  function setMenu(open) {
    if (!sidebar) return;
    sidebar.classList.toggle('open', open);
    if (scrim) {
      scrim.hidden = !open;
      // force a frame so the transition runs
      if (open) requestAnimationFrame(function () { scrim.classList.add('show'); });
      else scrim.classList.remove('show');
    }
    if (menuBtn) menuBtn.setAttribute('aria-expanded', String(open));
  }
  if (menuBtn) {
    menuBtn.addEventListener('click', function () {
      setMenu(!sidebar.classList.contains('open'));
    });
  }
  if (scrim) scrim.addEventListener('click', function () { setMenu(false); });
  $$('#navlist a').forEach(function (a) {
    a.addEventListener('click', function () { if (window.innerWidth <= 940) setMenu(false); });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setMenu(false);
  });

  /* ----------------------------------------------------------- scrollspy */
  var navLinks = $$('#navlist a');
  var chapters = navLinks
    .map(function (a) { return document.getElementById(a.getAttribute('href').slice(1)); })
    .filter(Boolean);

  var railLinks = $$('#railList a');

  function spy() {
    var y = window.scrollY + 120;
    var current = chapters[0];
    chapters.forEach(function (sec) { if (sec.offsetTop <= y) current = sec; });
    if (!current) return;
    var id = current.id;

    navLinks.forEach(function (a) {
      a.classList.toggle('active', a.getAttribute('href') === '#' + id);
    });
    railLinks.forEach(function (a) {
      a.classList.toggle('active', a.getAttribute('href') === '#' + id);
    });
  }
  window.addEventListener('scroll', spy, { passive: true });
  window.addEventListener('resize', spy);
  spy();

  /* ----------------------------------------------------- zone inspector */
  var ZONES = {
    1: ['Zone 1 — Top Toolbar',
        'Projects / Home, New · Import · Export, Undo / Redo, Global Search, Grid & Snap, Preview toggle, Guided Tutorial, Workspace Guide, Settings and ⚡ Generate Script.'],
    2: ['Zone 2 — Element Library (Palette)',
        'Categorised building blocks: Flow (Triggers, Forms), Controls (Buttons, Toggles, Sliders, Dropdowns, Inputs) and Actions (Commands, Effects, Teleports, Delays, Page Navigation). Click to add at the canvas centre, or drag onto exact coordinates — with mobile touch ghosting.'],
    3: ['Zone 3 — Blueprint Canvas',
        'Dark blue blueprint canvas with pan, zoom (wheel / pinch), box-selection, snap and connection bezier curves. Shortcuts: Del, Ctrl+Z, Ctrl+Y, Ctrl+C, Ctrl+V, Space to pan.'],
    4: ['Zone 4 — Properties Panel',
        'Select any node to edit its parameters live: titles, item IDs, min/max values, crouch flags, dynamic result variable names — plus persistent 📝 sticky notes.'],
    5: ['Zone 5 (left) — Live Minecraft Preview',
        'Pixel-accurate Bedrock form simulator: form title, body, buttons, toggles, sliders and inputs, rendered from the current trigger path.'],
    6: ['Zone 5 (right) — Game Output',
        'Live console logging simulated player actions, command invocations, ${var} substitutions and which condition branch was taken.']
  };

  var readout = $('#zoneReadout');
  function paintZone(n) {
    if (!readout || !ZONES[n]) return;
    readout.innerHTML = '<b></b><p></p>';
    readout.querySelector('b').textContent = ZONES[n][0];
    readout.querySelector('p').textContent = ZONES[n][1];
    $$('#zoneMap .zone').forEach(function (z) {
      z.classList.toggle('on', z.dataset.zone === String(n));
    });
  }
  $$('#zoneMap .zone').forEach(function (z) {
    var show = function () { paintZone(z.dataset.zone); };
    z.addEventListener('mouseenter', show);
    z.addEventListener('focus', show);
    z.addEventListener('click', show);
    z.setAttribute('tabindex', '0');
    z.setAttribute('role', 'button');
  });

  /* --------------------------------------------------- node table filter */
  var chips  = $$('.chip[data-filter]');
  var search = $('#nodeSearch');
  var rows   = $$('#nodeTable tbody tr');
  var count  = $('#nodeCount');
  var empty  = $('#nodeEmpty');
  var activeFilter = 'all';

  function applyFilter() {
    var q = (search ? search.value : '').trim().toLowerCase();
    var shown = 0;
    rows.forEach(function (tr) {
      var okCat = activeFilter === 'all' || tr.dataset.cat === activeFilter;
      var okTxt = !q || tr.textContent.toLowerCase().indexOf(q) !== -1;
      var show = okCat && okTxt;
      tr.hidden = !show;
      if (show) shown++;
    });
    if (count) count.textContent = shown + (shown === 1 ? ' node' : ' nodes');
    if (empty) empty.hidden = shown !== 0;
  }
  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      chips.forEach(function (c) { c.classList.remove('on'); });
      chip.classList.add('on');
      activeFilter = chip.dataset.filter;
      applyFilter();
    });
  });
  if (search) search.addEventListener('input', applyFilter);
  applyFilter();

  /* ------------------------------------------------------- copy buttons */
  function flash(btn, label) {
    var old = btn.textContent;
    btn.textContent = label;
    btn.classList.add('done');
    setTimeout(function () {
      btn.textContent = old;
      btn.classList.remove('done');
    }, 1400);
  }

  function copyText(text, btn) {
    var fallback = function () {
      var ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      var ok = false;
      try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
      document.body.removeChild(ta);
      if (btn) flash(btn, ok ? '✓ Copied' : '✗ Failed');
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () {
        if (btn) flash(btn, '✓ Copied');
      }, fallback);
    } else {
      fallback();
    }
  }

  $$('.codeblock .copy-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var block = btn.closest('.codeblock');
      var pre = block ? block.querySelector('pre') : null;
      if (!pre) return;
      // textContent is universally supported and exact for <pre>; innerText is a
      // fallback only (it is undefined in some non-browser DOM environments).
      var text = (typeof pre.textContent === 'string' && pre.textContent.length)
        ? pre.textContent
        : (pre.innerText || '');
      copyText(text.replace(/\s+$/, ''), btn);
    });
  });

  /* ------------------------------------------------- live form simulator */
  var sw      = $('#sw-vision');
  var yRange  = $('#yRange');
  var yOut    = $('#yOut');
  var submit  = $('#submitBtn');
  var cancel  = $('#cancelBtn');
  var log     = $('#console');
  var clr     = $('#clearLog');
  var vision  = true;
  var seq     = 0;

  function stamp() {
    seq += 1;
    return '[' + String(seq).padStart(2, '0') + '] ';
  }

  function line(cls, text) {
    if (!log) return;
    var d = document.createElement('div');
    d.className = 'l' + (cls ? ' ' + cls : '');
    d.textContent = stamp() + text;
    log.appendChild(d);
    log.scrollTop = log.scrollHeight;
  }

  if (sw) {
    var toggleSw = function () {
      vision = !vision;
      sw.classList.toggle('on', vision);
      sw.setAttribute('aria-checked', String(vision));
      line('dim', 'player toggled "Enable Night Vision" -> giveVision = ' + vision);
    };
    sw.addEventListener('click', toggleSw);
    sw.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleSw(); }
    });
  }

  if (yRange && yOut) {
    yRange.addEventListener('input', function () {
      yOut.textContent = yRange.value;
    });
    yRange.addEventListener('change', function () {
      line('dim', 'player set slider "Teleport Height (Y)" -> targetY = ' + yRange.value);
    });
  }

  if (clr && log) {
    clr.addEventListener('click', function () {
      log.innerHTML = '';
      seq = 0;
      line('dim', '// Game Output cleared');
    });
  }

  if (cancel) {
    cancel.addEventListener('click', function () {
      line('br', 'form.canceled = true  ->  res.canceled, returning early (no actions run)');
    });
  }

  if (submit) {
    submit.addEventListener('click', function () {
      var targetY = yRange ? Number(yRange.value) : 100;

      line('ok', 'itemUse: minecraft:compass (isSneaking = true) -> openForm_staffUtilityMenu(player)');
      line('',   'form submitted  formValues = [' + vision + ', ' + targetY + ']');
      line('',   '  giveVision = ' + vision);
      line('',   '  targetY    = ' + targetY);
      line('br', 'if (giveVision == true)  ->  ' + vision + ' == true  =>  ' +
                 (vision ? 'BRANCH yes ✓' : 'BRANCH no ✗ (skipped)'));

      if (vision) {
        line('ok',  'player.addEffect("night_vision", 300 * 20, { amplifier: 1 })');
        line('cmd', 'runCommand: tp @s ~ ' + targetY + ' ~');
        line('ok',  'flow complete · 2 actions executed');
      } else {
        line('dim', 'no actions on the no ✗ branch — nothing executed');
      }
    });
  }

  /* ------------------------------------------------------------- print */
  var printBtn = $('#printBtn');
  if (printBtn) printBtn.addEventListener('click', function () { window.print(); });
})();
