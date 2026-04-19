<script lang="ts">
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';

  interface SlideContent {
    title: string;
    description: string;
    paragraphs: string[];
    images: string[];
    color: string;
  }

  let {
    slide,
    index,
    backgroundImage
  }: {
    slide: SlideContent;
    index: number;
    backgroundImage?: string;
  } = $props();

  let isEven = $derived(index % 2 === 0);
  let section: HTMLElement;

  onMount(() => {
    if (!browser) return;

    gsap.registerPlugin(ScrollTrigger);

    const isMobile = window.matchMedia('(max-width: 768px)').matches;

    // Dramatic clip-path reveal for the entire slide
    gsap.fromTo(
      section,
      {
        clipPath: isEven ? 'inset(0 100% 0 0)' : 'inset(0 0 0 100%)',
        opacity: 0.3
      },
      {
        clipPath: 'inset(0 0% 0 0%)',
        opacity: 1,
        duration: 1.4,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );

    // Animate the title with dramatic entrance
    const title = section.querySelector('.slide-title');
    if (title) {
      gsap.fromTo(
        title,
        {
          y: 100,
          opacity: 0,
          rotateX: -45,
          filter: isMobile ? 'none' : 'blur(20px)'
        },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          filter: 'blur(0px)',
          duration: 1.2,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            toggleActions: 'play none none none'
          }
        }
      );
    }

    // Animate the description
    const description = section.querySelector('.slide-description');
    if (description) {
      gsap.fromTo(
        description,
        {
          y: 60,
          opacity: 0,
          filter: isMobile ? 'none' : 'blur(12px)'
        },
        {
          y: 0,
          opacity: 1,
          filter: 'blur(0px)',
          duration: 1,
          delay: 0.2,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            toggleActions: 'play none none none'
          }
        }
      );
    }

    // Animate paragraphs with stagger
    const paragraphs = section.querySelectorAll('.paragraph');
    gsap.fromTo(
      paragraphs,
      {
        x: isEven ? -80 : 80,
        opacity: 0,
        filter: isMobile ? 'none' : 'blur(8px)'
      },
      {
        x: 0,
        opacity: 1,
        filter: 'blur(0px)',
        duration: 0.9,
        stagger: 0.15,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 60%',
          toggleActions: 'play none none none'
        }
      }
    );

    // Animate images with dramatic scale and rotation
    const images = section.querySelectorAll('.image-wrapper');
    gsap.fromTo(
      images,
      {
        scale: 0.6,
        opacity: 0,
        rotateY: isEven ? 25 : -25,
        filter: isMobile ? 'none' : 'blur(15px)'
      },
      {
        scale: 1,
        opacity: 1,
        rotateY: 0,
        filter: 'blur(0px)',
        duration: 1.1,
        stagger: 0.12,
        ease: 'back.out(1.2)',
        scrollTrigger: {
          trigger: section,
          start: 'top 65%',
          toggleActions: 'play none none none'
        }
      }
    );

    // Animate overlay with gradient shift
    const overlay = section.querySelector('.slide-overlay');
    if (overlay) {
      gsap.fromTo(
        overlay,
        { opacity: 1 },
        {
          opacity: 0.85,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );
    }

    return () => {
      ScrollTrigger.getAll()
        .filter((st) => section.contains(st.trigger as Element) || st.trigger === section)
        .forEach((st) => st.kill());
    };
  });
</script>

<section
  bind:this={section}
  class="expertise-slide"
  style="
    --slide-color: {slide.color};
    {backgroundImage ? `background-image: url(${backgroundImage});` : ''}
  "
>
  <div class="slide-overlay"></div>

  <div class="slide-content" class:reverse={!isEven}>
    <div class="text-section">
      <h2 class="slide-title">{slide.title}</h2>
      <p class="slide-description">{slide.description}</p>

      <div class="paragraphs">
        {#each slide.paragraphs as paragraph}
          <p class="paragraph">{paragraph}</p>
        {/each}
      </div>
    </div>

    <div class="images-section">
      {#each slide.images as image, imgIndex}
        <div class="image-wrapper" style="--img-index: {imgIndex}">
          <img src={image} alt="{slide.title} visualization" loading="lazy" />
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .expertise-slide {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background-size: cover;
    background-position: center;
    padding: 6rem 1.5rem;
    will-change: clip-path, opacity;
    perspective: 1000px;
  }

  .slide-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      rgba(10, 10, 10, 0.95) 0%,
      rgba(10, 10, 10, 0.85) 50%,
      rgba(10, 10, 10, 0.9) 100%
    );
  }

  .slide-content {
    position: relative;
    z-index: 1;
    max-width: 1400px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
    align-items: center;
  }

  @media (min-width: 1024px) {
    .slide-content {
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
    }

    .slide-content.reverse {
      direction: rtl;
    }

    .slide-content.reverse > * {
      direction: ltr;
    }
  }

  .text-section {
    max-width: 600px;
    transform-style: preserve-3d;
  }

  .slide-title {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 800;
    color: var(--slide-color);
    margin-bottom: 1rem;
    line-height: 1.1;
    will-change: transform, opacity, filter;
    transform-style: preserve-3d;
  }

  .slide-description {
    font-size: 1.25rem;
    color: var(--color-text);
    font-weight: 500;
    margin-bottom: 2rem;
    line-height: 1.4;
    will-change: transform, opacity, filter;
  }

  .paragraphs {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .paragraph {
    font-size: 1rem;
    color: var(--color-text-muted);
    line-height: 1.7;
    will-change: transform, opacity, filter;
  }

  .images-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    align-items: start;
    transform-style: preserve-3d;
  }

  .image-wrapper {
    position: relative;
    border-radius: var(--radius-lg);
    overflow: hidden;
    background: var(--color-surface-card);
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
    will-change: transform, opacity, filter;
    transform-style: preserve-3d;
  }

  .image-wrapper:hover {
    transform: scale(1.08) rotateY(5deg);
    z-index: 10;
    box-shadow:
      0 25px 50px rgba(0, 0, 0, 0.5),
      0 0 30px var(--slide-color, rgba(8, 145, 178, 0.4));
  }

  .image-wrapper img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: contain;
    transition: transform 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
  }

  .image-wrapper:hover img {
    transform: scale(1.1);
  }

  .image-wrapper:first-child:last-child {
    grid-column: span 2;
  }

  /* Handle 4 images in a 2x2 grid */
  .images-section:has(.image-wrapper:nth-child(4)) {
    grid-template-columns: repeat(2, 1fr);
  }

  /* Handle 3 images - 2 on top, 1 spanning bottom */
  .images-section:has(.image-wrapper:nth-child(3)):not(:has(.image-wrapper:nth-child(4))) .image-wrapper:nth-child(3) {
    grid-column: span 2;
  }

  @media (max-width: 768px) {
    .images-section {
      grid-template-columns: 1fr;
    }

    .image-wrapper:first-child:last-child,
    .images-section:has(.image-wrapper:nth-child(3)):not(:has(.image-wrapper:nth-child(4))) .image-wrapper:nth-child(3) {
      grid-column: span 1;
    }

    .images-section:has(.image-wrapper:nth-child(4)) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 480px) {
    .images-section,
    .images-section:has(.image-wrapper:nth-child(4)) {
      grid-template-columns: 1fr;
    }
  }

  /* === LIGHT THEME OVERRIDES === */
  :global([data-theme="light"]) .slide-overlay {
    background: linear-gradient(
      135deg,
      rgba(232, 244, 252, 0.97) 0%,
      rgba(240, 249, 255, 0.95) 50%,
      rgba(232, 244, 252, 0.97) 100%
    );
  }

  :global([data-theme="light"]) .slide-description {
    color: #0a1628;
  }

  :global([data-theme="light"]) .paragraph {
    color: #1e3a5f;
  }

  :global([data-theme="light"]) .image-wrapper {
    background: rgba(255, 255, 255, 0.95);
    border: 1px solid rgba(26, 54, 93, 0.15);
    box-shadow: 0 4px 12px rgba(26, 54, 93, 0.1);
  }

  :global([data-theme="light"]) .image-wrapper:hover {
    box-shadow:
      0 25px 50px rgba(26, 54, 93, 0.2),
      0 0 30px var(--slide-color, rgba(8, 145, 178, 0.3));
  }
</style>
