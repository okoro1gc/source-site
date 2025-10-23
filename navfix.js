document.addEventListener('click', function (e) {
  const a = e.target.closest('a[href$=".html"]');
  if (a) {
    e.preventDefault();
    const href = a.getAttribute('href');
    // Completely bypass Google Sheets overlays
    window.top.location.href = href;
  }
});
