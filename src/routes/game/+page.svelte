<script lang="ts">
  import Pong from '$lib/components/game/Pong.svelte';
  import Button from '$lib/components/ui/Button.svelte';
</script>

<svelte:head>
  <title>Pong | Alexander Data Solutions Ltd</title>
  <meta name="description" content="A hidden easter egg - a classic Pong game." />
  <meta name="robots" content="noindex" />
</svelte:head>

<div class="game-page">
  <div class="game-header">
    <Button href="/" variant="ghost" size="sm">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
        <path d="M19 12H5M12 19l-7-7 7-7" />
      </svg>
      Back to Home
    </Button>
    <span class="easter-egg-badge">Easter Egg Found!</span>
  </div>

  <Pong />

  <div class="game-footer">
    <p class="secret-hint">
      You found the secret! Press <kbd>Shift</kbd>+<kbd>A</kbd>+<kbd>S</kbd>+<kbd>D</kbd> on any page to return here.
    </p>
  </div>
</div>

<style>
  .game-page {
    min-height: calc(100vh - 80px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem 1.5rem;
    background: radial-gradient(ellipse at center, rgba(8, 145, 178, 0.1) 0%, transparent 70%);
  }

  .game-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 600px;
    margin-bottom: 2rem;
  }

  .easter-egg-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background: linear-gradient(135deg, rgba(34, 197, 94, 0.2) 0%, rgba(34, 197, 94, 0.1) 100%);
    border: 1px solid rgba(34, 197, 94, 0.3);
    border-radius: var(--radius-full);
    font-size: 0.75rem;
    font-weight: 600;
    color: #4ade80;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  .game-footer {
    margin-top: 2rem;
    text-align: center;
  }

  .secret-hint {
    font-size: 0.875rem;
    color: var(--color-text-muted);
  }

  kbd {
    display: inline-block;
    padding: 0.125rem 0.375rem;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: var(--radius-sm);
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.75rem;
  }
</style>
