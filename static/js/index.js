'use strict';
const copyButton = document.getElementById('copy-citation');
if (copyButton) {
  copyButton.addEventListener('click', async () => {
    const text = document.getElementById('citation').textContent;
    const status = document.getElementById('copy-status');
    try {
      await navigator.clipboard.writeText(text);
      status.textContent = 'BibTeX copied to clipboard.';
    } catch {
      const range = document.createRange();
      range.selectNodeContents(document.getElementById('citation'));
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      status.textContent = 'Citation selected. Press Ctrl+C or ⌘C to copy.';
    }
  });
}

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let motionPaused = reducedMotion.matches;
function updateMotion() {
  document.body.classList.toggle('motion-paused', motionPaused);
  document.body.classList.toggle('motion-enabled', !motionPaused);
  document.querySelectorAll('img[data-animated]').forEach(image => {
    const source = motionPaused ? image.dataset.still : image.dataset.animated;
    if (image.getAttribute('src') !== source) image.src = source;
  });
}
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.06 });
  document.querySelectorAll('main figure:not([data-static]), main .cards, main .section h2, main .table-scroll, .highlights').forEach(element => {
    element.classList.add('reveal');
    observer.observe(element);
  });
}
updateMotion();
reducedMotion.addEventListener('change', event => { motionPaused = event.matches; updateMotion(); });
