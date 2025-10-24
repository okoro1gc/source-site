// Force real page loads for any .html link (GitHub Pages + Sheets exports)
document.addEventListener('click', e => {
  const a = e.target.closest('a');
  if (!a) return;
  const href = a.getAttribute('href');
  if (!href) return;

  // Only intercept local html page links (Shoes.html, Bags.html, etc.)
  if (/\.html(\?|#|$)/i.test(href)) {
    e.preventDefault();
    window.top.location.assign(href);
  }
});

// Remove new-tab behavior
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a[target]').forEach(a => a.removeAttribute('target'));
});
