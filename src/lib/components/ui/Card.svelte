<script lang="ts">
  let {
    variant = 'default',
    href = '',
    target = '_self',
    onclick,
    children
  }: {
    variant?: 'default' | 'elevated' | 'outline';
    href?: string;
    target?: string;
    onclick?: () => void;
    children: any;
  } = $props();

  const isLink = href !== '';
</script>

{#if isLink}
  <a
    {href}
    {target}
    class="card {variant}"
    rel={target === '_blank' ? 'noopener noreferrer' : undefined}
  >
    {@render children()}
  </a>
{:else if onclick}
  <button class="card {variant}" {onclick}>
    {@render children()}
  </button>
{:else}
  <div class="card {variant}">
    {@render children()}
  </div>
{/if}

<style>
  .card {
    display: block;
    padding: 1.5rem;
    border-radius: var(--radius-lg);
    text-decoration: none;
    color: inherit;
    background: transparent;
    border: none;
    cursor: default;
    transition: all var(--transition-normal);
    width: 100%;
    text-align: left;
  }

  .card.default {
    background: var(--color-surface-card);
    border: 1px solid rgba(255, 255, 255, 0.05);
  }

  .card.elevated {
    background: rgba(20, 20, 20, 0.6);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow: var(--shadow-md);
  }

  .card.outline {
    background: transparent;
    border: 2px solid rgba(255, 255, 255, 0.1);
  }

  a.card,
  button.card {
    cursor: pointer;
  }

  a.card:hover,
  button.card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-glow);
    border-color: rgba(8, 145, 178, 0.4);
  }

  .card.outline:hover {
    border-color: var(--color-accent);
    background: rgba(8, 145, 178, 0.08);
  }

  button.card {
    font: inherit;
  }
</style>
