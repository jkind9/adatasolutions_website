<script lang="ts">
  import { page } from '$app/stores';
  import ThemeToggle from '$lib/components/ui/ThemeToggle.svelte';

  interface NavLink {
    href: string;
    label: string;
  }

  let {
    isOpen = false,
    navLinks = [] as NavLink[],
    onClose
  }: {
    isOpen: boolean;
    navLinks: NavLink[];
    onClose: () => void;
  } = $props();

  function handleLinkClick() {
    onClose();
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape') {
      onClose();
    }
  }

  $effect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  });
</script>

<svelte:window onkeydown={handleKeydown} />

{#if isOpen}
  <div class="mobile-nav-overlay" onclick={onClose} role="presentation"></div>
{/if}

<nav class="mobile-nav" class:open={isOpen}>
  <div class="mobile-nav-content">
    <div class="mobile-nav-header">
      <span class="mobile-nav-title">Menu</span>
    </div>

    <div class="mobile-nav-links">
      {#each navLinks as link}
        <a
          href={link.href}
          class="mobile-nav-link"
          class:active={$page.url.pathname === link.href}
          onclick={handleLinkClick}
        >
          {link.label}
        </a>
      {/each}
    </div>

    <div class="mobile-nav-footer">
      <div class="theme-toggle-row">
        <span class="theme-label">Theme</span>
        <ThemeToggle />
      </div>
      <a
        href="https://www.linkedin.com/in/jamesalexander-146239a4/"
        target="_blank"
        rel="noopener noreferrer"
        class="linkedin-btn-mobile"
        onclick={handleLinkClick}
      >
        <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
        Connect on LinkedIn
      </a>
    </div>
  </div>
</nav>

<style>
  .mobile-nav-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    z-index: 150;
    animation: fadeIn 0.3s ease-out;
  }

  .mobile-nav {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 280px;
    max-width: 85vw;
    background: var(--color-surface);
    z-index: 200;
    transform: translateX(-100%);
    transition: transform 0.3s ease-out;
    display: flex;
    flex-direction: column;
  }

  .mobile-nav.open {
    transform: translateX(0);
  }

  .mobile-nav-content {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 2rem 1.5rem;
  }

  .mobile-nav-header {
    padding-bottom: 2rem;
    border-bottom: 1px solid var(--color-glass-border, rgba(255, 255, 255, 0.1));
    margin-bottom: 2rem;
  }

  .mobile-nav-title {
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--color-text-muted);
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  .mobile-nav-links {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    flex: 1;
  }

  .mobile-nav-link {
    display: block;
    padding: 1rem 1.5rem;
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--color-text-muted);
    text-decoration: none;
    border-radius: var(--radius-md);
    transition: all var(--transition-fast);
  }

  .mobile-nav-link:hover,
  .mobile-nav-link.active {
    color: var(--color-text);
    background: var(--color-surface-card);
  }

  .mobile-nav-link.active {
    color: var(--color-primary-light);
  }

  .mobile-nav-footer {
    padding-top: 2rem;
    border-top: 1px solid var(--color-glass-border, rgba(255, 255, 255, 0.1));
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .theme-toggle-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 0;
  }

  .theme-label {
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--color-text-muted);
  }

  .linkedin-btn-mobile {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    width: 100%;
    padding: 1rem;
    background: var(--color-primary);
    color: white;
    border-radius: var(--radius-md);
    font-size: 1rem;
    font-weight: 600;
    text-decoration: none;
    transition: all var(--transition-fast);
  }

  .linkedin-btn-mobile:hover {
    background: var(--color-primary-light);
    color: white;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
</style>
