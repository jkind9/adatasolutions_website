<script lang="ts">
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';

  interface Props {
    animation?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'scale' | 'clip-reveal' | 'blur-up';
    delay?: number;
    duration?: number;
    stagger?: number;
    blur?: boolean;
    start?: string;
    end?: string;
    scrub?: boolean;
    once?: boolean;
    children: any;
  }

  let {
    animation = 'fade-up',
    delay = 0,
    duration = 1,
    stagger = 0,
    blur = true,
    start = 'top 85%',
    end = 'top 20%',
    scrub = false,
    once = true,
    children
  }: Props = $props();

  let container: HTMLElement;
  let triggered = $state(false);

  function getAnimationConfig(type: string, useBlur: boolean) {
    const blurFrom = useBlur ? 'blur(12px)' : 'blur(0px)';
    const blurTo = 'blur(0px)';

    const configs: Record<string, { from: gsap.TweenVars; to: gsap.TweenVars }> = {
      'fade-up': {
        from: { y: 80, opacity: 0, filter: blurFrom },
        to: { y: 0, opacity: 1, filter: blurTo }
      },
      'blur-up': {
        from: { yPercent: 100, opacity: 0, filter: 'blur(15px)' },
        to: { yPercent: 0, opacity: 1, filter: 'blur(0px)' }
      },
      'fade-in': {
        from: { opacity: 0, filter: blurFrom },
        to: { opacity: 1, filter: blurTo }
      },
      'slide-left': {
        from: { x: -100, opacity: 0, filter: blurFrom },
        to: { x: 0, opacity: 1, filter: blurTo }
      },
      'slide-right': {
        from: { x: 100, opacity: 0, filter: blurFrom },
        to: { x: 0, opacity: 1, filter: blurTo }
      },
      'scale': {
        from: { scale: 0.8, opacity: 0, filter: blurFrom },
        to: { scale: 1, opacity: 1, filter: blurTo }
      },
      'clip-reveal': {
        from: { clipPath: 'inset(0 100% 0 0)', opacity: 0 },
        to: { clipPath: 'inset(0 0% 0 0)', opacity: 1 }
      }
    };

    return configs[type] || configs['fade-up'];
  }

  onMount(() => {
    if (!browser) return;

    gsap.registerPlugin(ScrollTrigger);

    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    const config = getAnimationConfig(animation, blur && !isMobile);

    const tween = gsap.fromTo(
      container,
      config.from,
      {
        ...config.to,
        duration: isMobile ? duration * 0.8 : duration,
        delay: delay / 1000,
        stagger,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: container,
          start,
          end,
          scrub,
          toggleActions: once ? 'play none none none' : 'play none none reverse',
          onEnter: () => {
            triggered = true;
          },
          onLeaveBack: () => {
            if (!once) triggered = false;
          }
        }
      }
    );

    return () => {
      tween.kill();
      ScrollTrigger.getAll()
        .filter((st) => st.trigger === container)
        .forEach((st) => st.kill());
    };
  });
</script>

<div bind:this={container} class="scroll-reveal" class:triggered>
  {@render children()}
</div>

<style>
  .scroll-reveal {
    opacity: 0;
    will-change: opacity, transform, filter;
  }

</style>
