import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { browser } from '$app/environment';

export function initSmoothScroll(): Lenis | null {
  if (!browser) return null;

  gsap.registerPlugin(ScrollTrigger);

  const lenis = new Lenis({
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 2
  });

  // Sync Lenis scroll with ScrollTrigger on every scroll event
  lenis.on('scroll', () => {
    ScrollTrigger.update();
  });

  // Use GSAP ticker to drive Lenis animation loop
  gsap.ticker.add((time: number) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  // Refresh ScrollTrigger after a short delay to ensure DOM is ready
  requestAnimationFrame(() => {
    ScrollTrigger.refresh();
  });

  return lenis;
}

export function destroySmoothScroll(lenis: Lenis | null): void {
  if (!lenis) return;
  lenis.destroy();
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  ScrollTrigger.clearScrollMemory();
}
