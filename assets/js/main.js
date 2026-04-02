/* assets/js/main.js — Wind River Trading Co */
(function () {
  'use strict';

  /* ── Mobile nav toggle ──────────────────────────────── */
  var toggle = document.querySelector('.nav-toggle');
  var nav    = document.querySelector('.site-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }

  /* ── Active nav link ────────────────────────────────── */
  var links = document.querySelectorAll('.site-nav a');
  var path  = window.location.pathname.split('/').pop() || 'index.html';

  links.forEach(function (link) {
    var href = link.getAttribute('href').split('/').pop();
    if (href === path) {
      link.classList.add('active');
    }
  });

}());
