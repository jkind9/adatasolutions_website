<script lang="ts">
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import { gsap } from 'gsap';
  import Button from '$lib/components/ui/Button.svelte';
  import NeuralNetwork from '$lib/components/ui/NeuralNetwork.svelte';

  let mounted = $state(false);
  let taglineIndex = $state(0);

  const taglines = [
    'Computer Vision',
    'Machine Learning',
    'Agentic AI',
    'Cloud Solutions',
    'Data Science'
  ];

  const industries = [
    { name: 'Formula 1', icon: '🏎️' },
    { name: 'Defense', icon: '🛡️' },
    { name: 'Banking', icon: '🏦' },
    { name: 'Manufacturing', icon: '⚙️' },
    { name: 'Construction', icon: '🏗️' }
  ];

  onMount(() => {
    if (!browser) return;

    mounted = true;

    const isMobile = window.matchMedia('(max-width: 768px)').matches;

    // Set initial hidden states immediately
    gsap.set('.hero-badge', { y: 40, opacity: 0, scale: 0.9, filter: 'blur(10px)' });
    gsap.set('.char', { yPercent: 110, opacity: 0, rotateX: -90, filter: 'blur(8px)' });
    gsap.set('.hero-tagline', { y: 40, opacity: 0, filter: 'blur(8px)' });
    gsap.set('.hero-description', { y: 40, opacity: 0, filter: 'blur(6px)' });
    gsap.set('.industry-badges', { y: 30, opacity: 0 });
    gsap.set('.industry-item', { scale: 0.7, opacity: 0, y: 20 });
    gsap.set('.hero-cta > *', { y: 30, opacity: 0, scale: 0.9, filter: 'blur(5px)' });
    gsap.set('.stat', { y: 50, opacity: 0, scale: 0.8 });

    // GSAP Timeline for hero entrance with enhanced animations
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' }, delay: 0.1 });

    // Animate badge with blur
    tl.to('.hero-badge',
      { y: 0, opacity: 1, scale: 1, filter: 'blur(0px)', duration: 1 }
    );

    // Animate title characters with 3D rotation and blur
    const titleChars = document.querySelectorAll('.char');
    tl.to(titleChars,
      {
        yPercent: 0,
        opacity: 1,
        rotateX: 0,
        filter: 'blur(0px)',
        duration: 1.2,
        stagger: 0.025,
        ease: 'expo.out'
      },
      '-=0.5'
    );

    // Animate tagline with blur
    tl.to('.hero-tagline',
      { y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.9 },
      '-=0.7'
    );

    // Animate description with blur
    tl.to('.hero-description',
      { y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.9 },
      '-=0.6'
    );

    // Animate industry badges with stagger
    tl.to('.industry-badges',
      { y: 0, opacity: 1, duration: 0.6 },
      '-=0.5'
    );

    tl.to('.industry-item',
      { scale: 1, opacity: 1, y: 0, duration: 0.5, stagger: 0.06, ease: 'back.out(1.7)' },
      '-=0.4'
    );

    // Animate CTA buttons with scale and blur
    tl.to('.hero-cta > *',
      { y: 0, opacity: 1, scale: 1, filter: 'blur(0px)', duration: 0.7, stagger: 0.12 },
      '-=0.4'
    );

    // Animate stats with dramatic entrance
    tl.to('.stat',
      { y: 0, opacity: 1, scale: 1, duration: 0.7, stagger: 0.1, ease: 'back.out(1.4)' },
      '-=0.4'
    );

    // Rotating tagline
    const interval = setInterval(() => {
      taglineIndex = (taglineIndex + 1) % taglines.length;
    }, 3000);

    // Enhanced mouse parallax with quickTo for smoother tracking
    let xToOrb1: gsap.QuickToFunc | null = null;
    let yToOrb1: gsap.QuickToFunc | null = null;
    let xToOrb2: gsap.QuickToFunc | null = null;
    let yToOrb2: gsap.QuickToFunc | null = null;
    let xToOrb3: gsap.QuickToFunc | null = null;
    let yToOrb3: gsap.QuickToFunc | null = null;

    if (!isMobile) {
      const orb1 = document.querySelector('.orb-1');
      const orb2 = document.querySelector('.orb-2');
      const orb3 = document.querySelector('.orb-3');

      if (orb1) {
        xToOrb1 = gsap.quickTo(orb1, 'x', { duration: 0.8, ease: 'power3.out' });
        yToOrb1 = gsap.quickTo(orb1, 'y', { duration: 0.8, ease: 'power3.out' });
      }
      if (orb2) {
        xToOrb2 = gsap.quickTo(orb2, 'x', { duration: 1, ease: 'power3.out' });
        yToOrb2 = gsap.quickTo(orb2, 'y', { duration: 1, ease: 'power3.out' });
      }
      if (orb3) {
        xToOrb3 = gsap.quickTo(orb3, 'x', { duration: 1.2, ease: 'power3.out' });
        yToOrb3 = gsap.quickTo(orb3, 'y', { duration: 1.2, ease: 'power3.out' });
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (isMobile) return;

      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 2;
      const y = (clientY / innerHeight - 0.5) * 2;

      if (xToOrb1 && yToOrb1) {
        xToOrb1(x * 60);
        yToOrb1(y * 60);
      }
      if (xToOrb2 && yToOrb2) {
        xToOrb2(x * -40);
        yToOrb2(y * -40);
      }
      if (xToOrb3 && yToOrb3) {
        xToOrb3(x * 25);
        yToOrb3(y * 25);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearInterval(interval);
      window.removeEventListener('mousemove', handleMouseMove);
      tl.kill();
    };
  });

  function splitText(text: string): string[] {
    return text.split('');
  }
</script>

<section class="hero">
  <!-- Animated Background -->
  <div class="hero-background">
    <!-- Neural Network Animation -->
    <NeuralNetwork
      density={70}
      color="#0891b2"
      accentColor="#22d3ee"
      speed={0.4}
      connectionDistance={140}
      firingRate={0.02}
    />

    <div class="gradient-orb orb-1"></div>
    <div class="gradient-orb orb-2"></div>
    <div class="gradient-orb orb-3"></div>
  </div>

  <div class="hero-content" class:mounted>
    <div class="hero-text">
      <span class="hero-badge">
        <span class="badge-dot"></span>
        Problem Solver • Idea Generator • Industry Agnostic
      </span>

      <h1 class="hero-title">
        <span class="title-line">
          {#each splitText('Alexander Data') as char, i}
            <span class="char" style="animation-delay: {i * 0.03}s">{char === ' ' ? '\u00A0' : char}</span>
          {/each}
        </span>
        <span class="title-line accent">
          {#each splitText('Solutions') as char, i}
            <span class="char" style="animation-delay: {(i + 15) * 0.03}s">{char}</span>
          {/each}
        </span>
      </h1>

      <div class="hero-tagline">
        <span class="static-text">Pioneering</span>
        <span class="rotating-wrapper">
          {#key taglineIndex}
            <span class="rotating-text">
              {taglines[taglineIndex]}
            </span>
          {/key}
        </span>
      </div>

      <p class="hero-description">
        I don't just solve problems — I <span class="highlight">generate ideas</span> that transform businesses.
        From <span class="highlight">Formula 1</span> to <span class="highlight">Defense</span>,
        <span class="highlight">Banking</span> to <span class="highlight">Manufacturing</span> —
        I bring fresh thinking to every industry. Patent holder. Innovator. Results-driven.
      </p>

      <!-- Industry badges -->
      <div class="industry-badges">
        <span class="badges-label">Proven across:</span>
        <div class="badges-list">
          {#each industries as industry}
            <span class="industry-item">
              <span class="industry-icon">{industry.icon}</span>
              {industry.name}
            </span>
          {/each}
        </div>
      </div>

      <div class="hero-cta">
        <Button href="#projects" variant="primary" size="lg">
          <span class="btn-content">
            View Projects
            <svg class="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </span>
        </Button>
        <Button href="/about" variant="outline" size="lg">
          About Me
        </Button>
      </div>

      <div class="hero-stats">
        <div class="stat">
          <span class="stat-value">
            <span class="stat-number">5</span>
            <span class="stat-plus">+</span>
          </span>
          <span class="stat-label">Industries</span>
          <div class="stat-bar"></div>
        </div>
        <div class="stat">
          <span class="stat-value">
            <span class="stat-number">1</span>
          </span>
          <span class="stat-label">Patent</span>
          <div class="stat-bar"></div>
        </div>
        <div class="stat">
          <span class="stat-value">
            <span class="stat-number">8</span>
            <span class="stat-plus">+</span>
          </span>
          <span class="stat-label">Years</span>
          <div class="stat-bar"></div>
        </div>
        <div class="stat">
          <span class="stat-value">
            <span class="stat-number">∞</span>
          </span>
          <span class="stat-label">Ideas</span>
          <div class="stat-bar"></div>
        </div>
      </div>
    </div>

  </div>

  <div class="scroll-indicator" class:mounted>
    <span>Scroll to explore</span>
    <div class="scroll-line">
      <div class="scroll-dot"></div>
    </div>
  </div>
</section>

<style>
  .hero {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    overflow: hidden;
    padding: 2rem 1.5rem;
  }

  /* === BACKGROUND EFFECTS === */
  .hero-background {
    position: absolute;
    inset: 0;
    z-index: 0;
    overflow: hidden;
  }

  .gradient-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(120px);
    will-change: transform;
  }

  .orb-1 {
    width: 800px;
    height: 800px;
    background: radial-gradient(circle, rgba(8, 145, 178, 0.4) 0%, transparent 70%);
    top: -300px;
    right: -200px;
    animation: orbPulse 8s ease-in-out infinite;
  }

  .orb-2 {
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(26, 54, 93, 0.4) 0%, transparent 70%);
    bottom: -200px;
    left: -200px;
    animation: orbPulse 10s ease-in-out infinite reverse;
  }

  .orb-3 {
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(8, 145, 178, 0.25) 0%, transparent 70%);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: orbPulse 6s ease-in-out infinite;
  }

  @keyframes orbPulse {
    0%, 100% { opacity: 0.3; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(1.1); }
  }

  /* === CONTENT === */
  .hero-content {
    position: relative;
    z-index: 1;
    width: 100%;
    padding: 0 2rem;
  }

  @media (min-width: 768px) {
    .hero-content {
      padding: 0 4rem;
    }
  }

  @media (min-width: 1024px) {
    .hero-content {
      padding: 0 6rem;
    }
  }

  /* Badge */
  .hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.625rem 1.25rem;
    background: linear-gradient(135deg, rgba(8, 145, 178, 0.2), rgba(8, 145, 178, 0.05));
    border: 1px solid rgba(8, 145, 178, 0.4);
    border-radius: var(--radius-full);
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--color-accent-light);
    margin-bottom: 1.5rem;
    backdrop-filter: blur(10px);
  }

  .badge-dot {
    width: 8px;
    height: 8px;
    background: #4ade80;
    border-radius: 50%;
    animation: pulse 2s ease-in-out infinite;
    box-shadow: 0 0 10px #4ade80;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(1.2); }
  }

  /* Title with character animation and 3D perspective */
  .hero-title {
    font-size: clamp(2.5rem, 7vw, 5.5rem);
    font-weight: 900;
    line-height: 1.05;
    margin-bottom: 1.5rem;
    letter-spacing: -0.03em;
    perspective: 1000px;
  }

  .title-line {
    display: block;
    overflow: hidden;
    transform-style: preserve-3d;
  }

  .char {
    display: inline-block;
    background: linear-gradient(135deg, #ffffff 0%, #e0e0e0 50%, #a0a0a0 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    transform-style: preserve-3d;
    will-change: transform, opacity, filter;
  }

  .title-line.accent .char {
    background: linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-primary) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  /* Tagline */
  .hero-tagline {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    align-items: baseline;
    font-size: clamp(1.25rem, 3vw, 1.75rem);
    margin-bottom: 1.5rem;
  }

  .static-text {
    color: var(--color-text-muted);
    font-weight: 400;
  }

  .rotating-wrapper {
    display: inline-block;
    min-width: 220px;
  }

  @media (min-width: 768px) {
    .rotating-wrapper {
      min-width: 280px;
    }
  }

  .rotating-text {
    display: inline-block;
    color: transparent;
    font-weight: 700;
    background: linear-gradient(90deg, var(--color-primary-light), var(--color-accent-light));
    -webkit-background-clip: text;
    background-clip: text;
    animation: taglineSlideUp 0.5s ease-out;
    white-space: nowrap;
  }

  @keyframes taglineSlideUp {
    from {
      transform: translateY(30%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  /* Description */
  .hero-description {
    font-size: 1.125rem;
    color: var(--color-text-muted);
    line-height: 1.8;
    margin-bottom: 2.5rem;
    max-width: 600px;
  }

  .highlight {
    color: var(--color-text);
    font-weight: 600;
    position: relative;
  }

  .highlight::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, var(--color-primary), var(--color-accent));
    transform: scaleX(0);
    transform-origin: left;
    animation: underlineIn 0.6s ease-out forwards;
    animation-delay: 1.5s;
  }

  @keyframes underlineIn {
    to { transform: scaleX(1); }
  }

  /* Industry Badges */
  .industry-badges {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;
    padding: 0.75rem 0;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }

  .badges-label {
    font-size: 0.75rem;
    color: var(--color-text-muted);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    white-space: nowrap;
  }

  .badges-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
  }

  .industry-item {
    display: flex;
    align-items: center;
    gap: 0.375rem;
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--color-text);
    padding: 0.375rem 0.75rem;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: var(--radius-full);
    transition: all 0.3s ease;
  }

  .industry-item:hover {
    background: rgba(8, 145, 178, 0.2);
    border-color: rgba(8, 145, 178, 0.4);
  }

  .industry-icon {
    font-size: 1rem;
  }

  /* CTA */
  .hero-cta {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 3rem;
  }

  .btn-content {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .btn-arrow {
    width: 18px;
    height: 18px;
    transition: transform 0.3s ease;
  }

  :global(.hero-cta .button:hover) .btn-arrow {
    transform: translateX(4px);
  }

  /* Stats */
  .hero-stats {
    display: flex;
    gap: 3rem;
    flex-wrap: wrap;
  }

  .stat {
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .stat-value {
    font-size: 2.5rem;
    font-weight: 800;
    color: var(--color-text);
    display: flex;
    align-items: baseline;
  }

  .stat-number {
    background: linear-gradient(135deg, #fff, #ccc);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .stat-plus {
    color: var(--color-primary-light);
    font-size: 1.5rem;
    margin-left: 2px;
  }

  .stat-label {
    font-size: 0.875rem;
    color: var(--color-text-muted);
    margin-top: 0.25rem;
  }

  .stat-bar {
    position: absolute;
    bottom: -8px;
    left: 0;
    height: 2px;
    width: 100%;
    background: linear-gradient(90deg, var(--color-primary), transparent);
    border-radius: 1px;
  }

  /* === SCROLL INDICATOR === */
  .scroll-indicator {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    opacity: 0;
    transition: opacity 1s ease-out 2s;
  }

  .scroll-indicator.mounted {
    opacity: 1;
  }

  .scroll-indicator span {
    font-size: 0.7rem;
    color: var(--color-text-muted);
    text-transform: uppercase;
    letter-spacing: 0.2em;
  }

  .scroll-line {
    width: 1px;
    height: 60px;
    background: rgba(255, 255, 255, 0.2);
    position: relative;
    overflow: hidden;
  }

  .scroll-dot {
    position: absolute;
    top: 0;
    left: 50%;
    width: 3px;
    height: 10px;
    background: var(--color-primary);
    border-radius: 2px;
    transform: translateX(-50%);
    animation: scrollMove 2s ease-in-out infinite;
  }

  @keyframes scrollMove {
    0% { top: 0; opacity: 1; }
    100% { top: 100%; opacity: 0; }
  }

  /* === MOBILE === */
  @media (max-width: 767px) {
    .hero-stats {
      gap: 1.5rem;
    }

    .stat-value {
      font-size: 1.75rem;
    }

    .industry-badges {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.75rem;
    }

    .badges-list {
      gap: 0.5rem;
    }

    .industry-item {
      font-size: 0.75rem;
      padding: 0.25rem 0.5rem;
    }
  }

</style>
