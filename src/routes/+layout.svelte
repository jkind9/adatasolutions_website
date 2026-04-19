<script lang="ts">
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';
  import Header from '$lib/components/layout/Header.svelte';
  import Footer from '$lib/components/layout/Footer.svelte';
  import { theme } from '$lib/stores/theme';
  import '../app.css';

  let { children } = $props();

  onMount(() => {
    theme.initialize();
  });

  // Easter egg: Shift+A+S+D to access Pong game
  let keysPressed = $state(new Set<string>());

  function handleKeydown(e: KeyboardEvent) {
    if (e.shiftKey) {
      keysPressed.add(e.key.toLowerCase());

      if (keysPressed.has('a') && keysPressed.has('s') && keysPressed.has('d')) {
        goto('/game');
        keysPressed = new Set();
      }
    }
  }

  function handleKeyup() {
    keysPressed = new Set();
  }
</script>

<svelte:window onkeydown={handleKeydown} onkeyup={handleKeyup} />

<div class="app">
  <Header />
  <main class="main">
    {@render children()}
  </main>
  <Footer />
</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .main {
    flex: 1;
    padding-top: 80px; /* Account for fixed header */
  }
</style>
