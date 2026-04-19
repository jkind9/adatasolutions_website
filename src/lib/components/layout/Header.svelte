<script lang="ts">
  import { page } from '$app/stores';
  import { browser } from '$app/environment';
  import MobileNav from './MobileNav.svelte';

  let scrolled = $state(false);
  let hidden = $state(false);
  let mobileNavOpen = $state(false);
  let lastScrollY = 0;
  const hideThreshold = 100;

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/expertise', label: 'Expertise' },
    { href: '/about', label: 'About' }
  ];

  $effect(() => {
    if (!browser) return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Update scrolled state for background appearance
      scrolled = currentScrollY > 50;

      // Hide/reveal logic based on scroll direction
      if (currentScrollY > hideThreshold) {
        // Scrolling down - hide navbar
        if (currentScrollY > lastScrollY) {
          hidden = true;
        }
        // Scrolling up - show navbar
        else if (currentScrollY < lastScrollY) {
          hidden = false;
        }
      } else {
        // Near top - always show
        hidden = false;
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  });

  function toggleMobileNav() {
    mobileNavOpen = !mobileNavOpen;
  }

  function closeMobileNav() {
    mobileNavOpen = false;
  }
</script>

<header class="header" class:scrolled class:hidden>
  <div class="header-content">
    <a href="/" class="logo-section">
      <img src="/images/logo.png" alt="Alexander Data Solutions" class="logo" />
      <div class="logo-text">
        <span class="company-name">Alexander Data Solutions</span>
        <span class="tagline">Pioneering new technology</span>
      </div>
    </a>

    <nav class="desktop-nav">
      {#each navLinks as link}
        <a
          href={link.href}
          class="nav-link"
          class:active={$page.url.pathname === link.href}
        >
          {link.label}
        </a>
      {/each}
      <a
        href="https://www.linkedin.com/in/jamesalexander-146239a4/"
        target="_blank"
        rel="noopener noreferrer"
        class="linkedin-btn"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
        Connect
      </a>
    </nav>

    <button class="hamburger" onclick={toggleMobileNav} aria-label="Toggle menu">
      <span class="hamburger-line" class:open={mobileNavOpen}></span>
      <span class="hamburger-line" class:open={mobileNavOpen}></span>
      <span class="hamburger-line" class:open={mobileNavOpen}></span>
    </button>
  </div>
</header>

<MobileNav isOpen={mobileNavOpen} {navLinks} onClose={closeMobileNav} />

<style>
  .header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    padding: 1rem 0;
    transition:
      transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1),
      background 0.3s ease,
      padding 0.3s ease,
      box-shadow 0.3s ease;
    background: transparent;
    will-change: transform;
  }

  .header.hidden {
    transform: translateY(-100%);
  }

  .header.scrolled {
    background: var(--color-header-bg, rgba(10, 10, 10, 0.95));
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    padding: 0.75rem 0;
    box-shadow: var(--shadow-lg);
  }

  .header-content {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo-section {
    display: flex;
    align-items: center;
    gap: 1rem;
    text-decoration: none;
    color: inherit;
  }

  .logo {
    width: 50px;
    height: 50px;
    object-fit: contain;
    transition: transform var(--transition-normal);
  }

  .logo-section:hover .logo {
    transform: scale(1.05);
  }

  .logo-text {
    display: flex;
    flex-direction: column;
  }

  .company-name {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--color-text);
    letter-spacing: -0.01em;
  }

  .tagline {
    font-size: 0.75rem;
    color: var(--color-text-muted);
    font-weight: 400;
  }

  .desktop-nav {
    display: none;
    align-items: center;
    gap: 2rem;
  }

  @media (min-width: 900px) {
    .desktop-nav {
      display: flex;
    }
  }

  .nav-link {
    position: relative;
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--color-text-muted);
    text-decoration: none;
    padding: 0.5rem 0;
    transition: color var(--transition-fast);
  }

  .nav-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--color-primary);
    transition: width var(--transition-normal);
  }

  .nav-link:hover,
  .nav-link.active {
    color: var(--color-text);
  }

  .nav-link:hover::after,
  .nav-link.active::after {
    width: 100%;
  }

  .linkedin-btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background: var(--color-primary);
    color: white;
    border-radius: var(--radius-md);
    font-size: 0.875rem;
    font-weight: 600;
    text-decoration: none;
    transition: all var(--transition-fast);
  }

  .linkedin-btn:hover {
    background: var(--color-primary-light);
    box-shadow: var(--shadow-glow);
    color: white;
  }

  .hamburger {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    width: 32px;
    height: 32px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 4px;
  }

  @media (min-width: 900px) {
    .hamburger {
      display: none;
    }
  }

  .hamburger-line {
    width: 24px;
    height: 2px;
    background: var(--color-text);
    border-radius: 2px;
    transition: all var(--transition-fast);
    transform-origin: center;
  }

  .hamburger-line.open:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }

  .hamburger-line.open:nth-child(2) {
    opacity: 0;
  }

  .hamburger-line.open:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -5px);
  }

  @media (max-width: 600px) {
    .logo-text {
      display: none;
    }

    .logo {
      width: 40px;
      height: 40px;
    }
  }
</style>
