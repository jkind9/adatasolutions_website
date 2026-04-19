<script lang="ts">
  let {
    variant = 'primary',
    size = 'md',
    href = '',
    target = '_self',
    disabled = false,
    loading = false,
    fullWidth = false,
    onclick,
    children
  }: {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    href?: string;
    target?: string;
    disabled?: boolean;
    loading?: boolean;
    fullWidth?: boolean;
    onclick?: () => void;
    children: any;
  } = $props();

  let isLink = $derived(href !== '');
</script>

{#if isLink}
  <a
    {href}
    {target}
    class="button {variant} {size}"
    class:fullWidth
    class:disabled
    rel={target === '_blank' ? 'noopener noreferrer' : undefined}
  >
    <span class="button-bg"></span>
    <span class="button-glow"></span>
    {#if loading}
      <span class="spinner"></span>
    {/if}
    <span class="content" class:loading>
      {@render children()}
    </span>
  </a>
{:else}
  <button
    class="button {variant} {size}"
    class:fullWidth
    {disabled}
    {onclick}
  >
    <span class="button-bg"></span>
    <span class="button-glow"></span>
    {#if loading}
      <span class="spinner"></span>
    {/if}
    <span class="content" class:loading>
      {@render children()}
    </span>
  </button>
{/if}

<style>
  .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-weight: 600;
    border-radius: var(--radius-md);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    cursor: pointer;
    border: none;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    position: relative;
    font-family: inherit;
    overflow: hidden;
    isolation: isolate;
  }

  .button.fullWidth {
    width: 100%;
  }

  /* Background layer for sweep effect */
  .button-bg {
    position: absolute;
    inset: 0;
    z-index: -2;
    transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  }

  /* Glow effect */
  .button-glow {
    position: absolute;
    inset: -2px;
    z-index: -1;
    border-radius: inherit;
    opacity: 0;
    transition: opacity 0.3s ease;
    filter: blur(10px);
  }

  .button:hover .button-glow {
    opacity: 1;
  }

  /* Sizes */
  .button.sm {
    padding: 0.5rem 1rem;
    font-size: 0.75rem;
  }

  .button.md {
    padding: 0.75rem 1.5rem;
    font-size: 0.875rem;
  }

  .button.lg {
    padding: 1rem 2.25rem;
    font-size: 1rem;
  }

  /* === PRIMARY VARIANT === */
  .button.primary {
    background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
    color: white;
    box-shadow: 0 4px 15px rgba(26, 54, 93, 0.4);
  }

  .button.primary .button-bg {
    background: linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-primary) 100%);
    transform: translateY(100%);
  }

  .button.primary .button-glow {
    background: var(--color-primary);
  }

  .button.primary:hover:not(.disabled) {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(26, 54, 93, 0.5);
  }

  .button.primary:hover:not(.disabled) .button-bg {
    transform: translateY(0);
  }

  .button.primary:active:not(.disabled) {
    transform: translateY(-1px);
  }

  /* === SECONDARY VARIANT === */
  .button.secondary {
    background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-dark) 100%);
    color: white;
    box-shadow: 0 4px 15px rgba(0, 64, 128, 0.3);
  }

  .button.secondary .button-bg {
    background: linear-gradient(135deg, var(--color-accent-light) 0%, var(--color-accent) 100%);
    transform: translateY(100%);
  }

  .button.secondary .button-glow {
    background: var(--color-accent);
  }

  .button.secondary:hover:not(.disabled) {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(0, 64, 128, 0.4);
  }

  .button.secondary:hover:not(.disabled) .button-bg {
    transform: translateY(0);
  }

  /* === OUTLINE VARIANT === */
  .button.outline {
    background: transparent;
    border: 2px solid var(--color-primary);
    color: var(--color-primary);
  }

  .button.outline .button-bg {
    background: var(--color-primary);
    transform: scaleX(0);
    transform-origin: left;
  }

  .button.outline .button-glow {
    background: var(--color-primary);
  }

  .button.outline:hover:not(.disabled) {
    color: white;
    border-color: var(--color-primary-light);
    transform: translateY(-3px);
  }

  .button.outline:hover:not(.disabled) .button-bg {
    transform: scaleX(1);
  }

  /* === GHOST VARIANT === */
  .button.ghost {
    background: transparent;
    color: var(--color-text-muted);
  }

  .button.ghost .button-bg {
    background: rgba(255, 255, 255, 0.08);
    transform: scale(0);
    border-radius: inherit;
  }

  .button.ghost:hover:not(.disabled) {
    color: var(--color-text);
  }

  .button.ghost:hover:not(.disabled) .button-bg {
    transform: scale(1);
  }

  /* States */
  .button.disabled,
  .button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none !important;
  }

  .content {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: opacity 0.3s ease, transform 0.3s ease;
    position: relative;
    z-index: 1;
  }

  .button:hover:not(.disabled) .content {
    transform: translateX(2px);
  }

  .content.loading {
    opacity: 0;
  }

  .spinner {
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;
    border: 2px solid currentColor;
    border-right-color: transparent;
    border-radius: 50%;
    animation: spin 0.6s linear infinite;
    z-index: 1;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  /* Shine effect on hover */
  .button::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: left 0.5s ease;
  }

  .button:hover:not(.disabled)::before {
    left: 100%;
  }
</style>
