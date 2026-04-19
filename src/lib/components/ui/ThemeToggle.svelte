<script lang="ts">
  import { theme } from '$lib/stores/theme';

  function handleToggle() {
    theme.toggle();
  }
</script>

<button
  class="theme-toggle"
  onclick={handleToggle}
  aria-label={$theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
  title={$theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
>
  {#if $theme === 'dark'}
    <!-- Sun icon for switching to light mode -->
    <svg
      class="icon sun"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <circle cx="12" cy="12" r="5"></circle>
      <line x1="12" y1="1" x2="12" y2="3"></line>
      <line x1="12" y1="21" x2="12" y2="23"></line>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
      <line x1="1" y1="12" x2="3" y2="12"></line>
      <line x1="21" y1="12" x2="23" y2="12"></line>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    </svg>
  {:else}
    <!-- Moon icon for switching to dark mode -->
    <svg
      class="icon moon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
  {/if}
</button>

<style>
  .theme-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    padding: 0;
    background: transparent;
    border: 2px solid var(--color-accent);
    border-radius: var(--radius-md);
    cursor: pointer;
    transition: all var(--transition-fast);
    color: var(--color-text);
  }

  .theme-toggle:hover {
    background: var(--color-accent);
    color: white;
    box-shadow: 0 0 12px var(--color-accent-light);
  }

  .theme-toggle:focus-visible {
    outline: 2px solid var(--color-accent-light);
    outline-offset: 2px;
  }

  .icon {
    width: 20px;
    height: 20px;
    transition: transform var(--transition-fast);
  }

  .theme-toggle:hover .icon {
    transform: rotate(15deg) scale(1.1);
  }

  .sun {
    color: #fbbf24;
  }

  .theme-toggle:hover .sun {
    color: white;
  }

  .moon {
    color: var(--color-accent-light);
  }

  .theme-toggle:hover .moon {
    color: white;
  }
</style>
