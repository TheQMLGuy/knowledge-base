import { navigate } from 'astro:transitions/client';

/**
 * Any element with data-portal="/some/path" becomes a portal:
 * the overlay grows from the click point, then we navigate,
 * and the View Transition animates the arrival.
 * Swap this effect for whichever portal the chosen design defines.
 */
export function wirePortals() {
  const overlay = document.getElementById('portal');
  if (!overlay) return;
  overlay.classList.remove('opening');

  document.querySelectorAll<HTMLElement>('[data-portal]').forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const href = el.dataset.portal!;
      if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
        navigate(href);
        return;
      }
      overlay.style.setProperty('--px', `${e.clientX}px`);
      overlay.style.setProperty('--py', `${e.clientY}px`);
      requestAnimationFrame(() => overlay.classList.add('opening'));
      overlay.addEventListener('transitionend', () => navigate(href), { once: true });
    });
  });
}
