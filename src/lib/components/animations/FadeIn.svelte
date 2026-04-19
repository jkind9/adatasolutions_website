<script lang="ts">
	import { onMount } from 'svelte';

	interface Props {
		delay?: number;
		duration?: number;
		y?: number;
		x?: number;
		threshold?: number;
		once?: boolean;
		class?: string;
		children?: import('svelte').Snippet;
	}

	let {
		delay = 0,
		duration = 600,
		y = 20,
		x = 0,
		threshold = 0.1,
		once = true,
		class: className = '',
		children
	}: Props = $props();

	let isVisible = $state(false);
	let element: HTMLElement;

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						isVisible = true;
						if (once) {
							observer.unobserve(entry.target);
						}
					} else if (!once) {
						isVisible = false;
					}
				});
			},
			{ threshold }
		);

		if (element) {
			observer.observe(element);
		}

		return () => observer.disconnect();
	});
</script>

<div
	bind:this={element}
	class="fade-in {className}"
	class:visible={isVisible}
	style="--y: {y}px; --x: {x}px; --duration: {duration}ms; --delay: {delay}ms;"
>
	{@render children?.()}
</div>

<style>
	.fade-in {
		opacity: 0;
		transform: translateY(var(--y)) translateX(var(--x));
		transition: opacity var(--duration) ease-out, transform var(--duration) ease-out;
		transition-delay: var(--delay);
		will-change: opacity, transform;
	}

	.fade-in.visible {
		opacity: 1;
		transform: translateY(0) translateX(0);
	}
</style>
