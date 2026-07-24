// Mobile nav toggle
(function () {
  var toggle = document.querySelector('.nav-toggle');
  if (!toggle) return;
  toggle.addEventListener('click', function () {
    document.body.classList.toggle('nav-open');
    var expanded = document.body.classList.contains('nav-open');
    toggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
  });
  // Close panel when a link inside it is clicked
  document.querySelectorAll('.mobile-panel a').forEach(function (a) {
    a.addEventListener('click', function () {
      document.body.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
})();
