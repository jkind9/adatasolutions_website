<script lang="ts">
  let {
    variant = 'default',
    size = 'md',
    children
  }: {
    variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning';
    size?: 'sm' | 'md' | 'lg';
    children: any;
  } = $props();
</script>

<span class="badge {variant} {size}">
  {@render children()}
</span>

<style>
  .badge {
    display: inline-flex;
    align-items: center;
    font-weight: 500;
    border-radius: var(--radius-full);
    transition: all var(--transition-fast);
    white-space: nowrap;
  }

  /* Sizes */
  .badge.sm {
    padding: 0.125rem 0.5rem;
    font-size: 0.625rem;
  }

  .badge.md {
    padding: 0.25rem 0.75rem;
    font-size: 0.75rem;
  }

  .badge.lg {
    padding: 0.375rem 1rem;
    font-size: 0.875rem;
  }

  /* Variants */
  .badge.default {
    background: rgba(255, 255, 255, 0.1);
    color: var(--color-text-muted);
  }

  .badge.primary {
    background: rgba(26, 54, 93, 0.2);
    color: var(--color-primary-light);
  }

  .badge.secondary {
    background: rgba(8, 145, 178, 0.2);
    color: var(--color-accent-light);
  }

  .badge.success {
    background: rgba(34, 197, 94, 0.2);
    color: #4ade80;
  }

  .badge.warning {
    background: rgba(234, 179, 8, 0.2);
    color: #fbbf24;
  }
</style>
