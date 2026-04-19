<script lang="ts">
  import { onMount } from 'svelte';

  let {
    text = '',
    animation = 'typewriter',
    delay = 0,
    speed = 50,
    tag = 'span'
  }: {
    text: string;
    animation?: 'typewriter' | 'fade-words' | 'slide-up-words';
    delay?: number;
    speed?: number;
    tag?: 'span' | 'h1' | 'h2' | 'h3' | 'p';
  } = $props();

  let displayText = $state('');
  let words = $state<{ word: string; visible: boolean }[]>([]);
  let started = $state(false);

  onMount(() => {
    const timer = setTimeout(() => {
      started = true;

      if (animation === 'typewriter') {
        let i = 0;
        const interval = setInterval(() => {
          if (i <= text.length) {
            displayText = text.slice(0, i);
            i++;
          } else {
            clearInterval(interval);
          }
        }, speed);

        return () => clearInterval(interval);
      } else {
        words = text.split(' ').map(word => ({ word, visible: false }));
        words.forEach((_, index) => {
          setTimeout(() => {
            words[index].visible = true;
          }, index * 100);
        });
      }
    }, delay);

    return () => clearTimeout(timer);
  });
</script>

{#if animation === 'typewriter'}
  <svelte:element this={tag} class="animated-text typewriter" class:started>
    {displayText}<span class="cursor" class:started>|</span>
  </svelte:element>
{:else}
  <svelte:element this={tag} class="animated-text {animation}">
    {#each words as { word, visible }, i}
      <span class="word" class:visible>
        {word}{i < words.length - 1 ? '\u00A0' : ''}
      </span>
    {/each}
  </svelte:element>
{/if}

<style>
  .animated-text {
    display: inline;
  }

  .typewriter {
    min-height: 1.2em;
  }

  .cursor {
    opacity: 0;
    animation: blink 1s step-end infinite;
  }

  .cursor.started {
    opacity: 1;
  }

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }

  .word {
    display: inline-block;
    opacity: 0;
    transition: opacity 0.3s ease-out, transform 0.3s ease-out;
  }

  .fade-words .word {
    transform: none;
  }

  .slide-up-words .word {
    transform: translateY(10px);
  }

  .word.visible {
    opacity: 1;
    transform: translateY(0);
  }
</style>
