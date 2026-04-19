<script lang="ts">
  import ScrollReveal from '$lib/components/ui/ScrollReveal.svelte';
  import Timeline from '$lib/components/ui/Timeline.svelte';
  import Button from '$lib/components/ui/Button.svelte';
</script>

<svelte:head>
  <title>About | Alexander Data Solutions Ltd</title>
  <meta name="description" content="James Alexander - Senior Data Scientist with a passion for computer vision, machine learning, and AI. From BAE Systems to McLaren Racing." />
</svelte:head>

<div class="about-page">
  <!-- Hero Section -->
  <section class="about-hero">
    <div class="hero-background">
      <div class="gradient-orb orb-1"></div>
      <div class="gradient-orb orb-2"></div>
    </div>

    <div class="container">
      <div class="hero-content">
        <ScrollReveal animation="slide-left">
          <div class="hero-text">
            <span class="hero-label">About Me</span>
            <h1 class="hero-title">James Alexander</h1>
            <p class="hero-subtitle">Senior Data Scientist & Patent Holder</p>

            <div class="hero-description">
              <p>
                I'm an experienced data scientist and engineer who thrives on developing
                new, innovative and intelligent solutions to complex problems. With a
                focus on computer vision, machine learning and deep learning, I bring
                a unique combination of theoretical knowledge and practical experience
                to every project.
              </p>
              <p>
                My journey began at BAE Systems, where I developed a modelling solution
                for naval vessel power consumption with unprecedented precision. Since then,
                I've worked across defense, financial services, construction technology,
                and now Formula 1 consulting.
              </p>
              <p>
                As a contractor outside IR35, I offer the flexibility and expertise that
                organizations need to tackle their most challenging data problems.
              </p>
            </div>

            <div class="hero-cta">
              <Button
                href="https://www.linkedin.com/in/jamesalexander-146239a4/"
                target="_blank"
                variant="primary"
              >
                Connect on LinkedIn
              </Button>
              <Button href="mailto:jkind9@gmail.com" variant="outline">
                Get in Touch
              </Button>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="slide-right" delay={200}>
          <div class="hero-image">
            <div class="image-frame">
              <img src="/images/me.png" alt="James Alexander" />
            </div>
            <div class="image-decoration"></div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>

  <!-- Stats Section -->
  <section class="stats-section">
    <div class="container">
      <ScrollReveal>
        <div class="stats-grid">
          <div class="stat-item">
            <span class="stat-value">8+</span>
            <span class="stat-label">Years Experience</span>
          </div>
          <div class="stat-item">
            <span class="stat-value">1</span>
            <span class="stat-label">Patent Held</span>
          </div>
          <div class="stat-item">
            <span class="stat-value">6+</span>
            <span class="stat-label">Companies</span>
          </div>
          <div class="stat-item">
            <span class="stat-value">BSc</span>
            <span class="stat-label">Physics, Exeter</span>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>

  <!-- Timeline Section -->
  <section class="timeline-section">
    <div class="container">
      <Timeline />
    </div>
  </section>

  <!-- Contact CTA -->
  <section class="contact-section">
    <div class="container">
      <ScrollReveal>
        <div class="contact-card">
          <h2 class="contact-title">Let's Work Together</h2>
          <p class="contact-description">
            Looking for expertise in AI, computer vision, or data science?
            I'm available for contract work outside IR35.
          </p>
          <div class="contact-details">
            <div class="contact-item">
              <span class="contact-label">Email</span>
              <a href="mailto:jkind9@gmail.com" class="contact-value">jkind9@gmail.com</a>
            </div>
            <div class="contact-item">
              <span class="contact-label">Location</span>
              <span class="contact-value">Chester, UK</span>
            </div>
            <div class="contact-item">
              <span class="contact-label">Status</span>
              <span class="contact-value status-available">Available for Contract Work</span>
            </div>
          </div>
          <Button
            href="https://www.linkedin.com/in/jamesalexander-146239a4/"
            target="_blank"
            variant="primary"
            size="lg"
          >
            Connect on LinkedIn
          </Button>
        </div>
      </ScrollReveal>
    </div>
  </section>
</div>

<style>
  .about-page {
    min-height: 100vh;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }

  /* Hero Section */
  .about-hero {
    position: relative;
    padding: 4rem 0 6rem;
    overflow: hidden;
  }

  .hero-background {
    position: absolute;
    inset: 0;
    z-index: 0;
  }

  .gradient-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(100px);
    opacity: 0.2;
  }

  .orb-1 {
    width: 500px;
    height: 500px;
    background: var(--color-primary);
    top: -200px;
    left: -200px;
  }

  .orb-2 {
    width: 400px;
    height: 400px;
    background: var(--color-accent);
    bottom: -100px;
    right: -100px;
  }

  .hero-content {
    position: relative;
    z-index: 1;
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
    align-items: center;
  }

  @media (min-width: 1024px) {
    .hero-content {
      grid-template-columns: 1.2fr 1fr;
    }
  }

  .hero-label {
    display: inline-block;
    font-size: 0.875rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--color-primary-light);
    margin-bottom: 1rem;
  }

  .hero-title {
    font-size: clamp(2.5rem, 6vw, 4rem);
    font-weight: 800;
    margin-bottom: 0.5rem;
    background: linear-gradient(135deg, #ffffff 0%, #a0a0a0 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .hero-subtitle {
    font-size: 1.25rem;
    color: var(--color-accent-light);
    font-weight: 500;
    margin-bottom: 2rem;
  }

  .hero-description {
    margin-bottom: 2rem;
  }

  .hero-description p {
    font-size: 1rem;
    color: var(--color-text-muted);
    line-height: 1.7;
    margin-bottom: 1rem;
  }

  .hero-cta {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .hero-image {
    display: flex;
    justify-content: center;
    position: relative;
  }

  .image-frame {
    width: 280px;
    height: 280px;
    border-radius: 50%;
    overflow: hidden;
    border: 3px solid rgba(255, 255, 255, 0.1);
    position: relative;
    z-index: 1;
  }

  .image-frame img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .image-decoration {
    position: absolute;
    inset: -20px;
    border: 2px dashed rgba(8, 145, 178, 0.4);
    border-radius: 50%;
    animation: rotate 30s linear infinite;
  }

  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  /* Stats Section */
  .stats-section {
    padding: 3rem 0;
    background: linear-gradient(180deg, transparent 0%, rgba(20, 20, 30, 0.5) 100%);
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    text-align: center;
  }

  @media (min-width: 768px) {
    .stats-grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  .stat-item {
    padding: 1.5rem;
    background: var(--color-surface-card);
    border-radius: var(--radius-lg);
    border: 1px solid rgba(255, 255, 255, 0.05);
  }

  .stat-value {
    display: block;
    font-size: 2.5rem;
    font-weight: 800;
    color: var(--color-primary-light);
    margin-bottom: 0.5rem;
  }

  .stat-label {
    font-size: 0.875rem;
    color: var(--color-text-muted);
  }

  /* Timeline Section */
  .timeline-section {
    padding: 4rem 0;
  }

  /* Contact Section */
  .contact-section {
    padding: 4rem 0 6rem;
  }

  .contact-card {
    background: linear-gradient(135deg, rgba(26, 54, 93, 0.15) 0%, rgba(8, 145, 178, 0.1) 100%);
    border: 1px solid rgba(8, 145, 178, 0.25);
    border-radius: var(--radius-xl);
    padding: 3rem;
    text-align: center;
  }

  .contact-title {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  .contact-description {
    font-size: 1.125rem;
    color: var(--color-text-muted);
    margin-bottom: 2rem;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
  }

  .contact-details {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 2rem;
  }

  .contact-item {
    text-align: center;
  }

  .contact-label {
    display: block;
    font-size: 0.75rem;
    color: var(--color-text-muted);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 0.25rem;
  }

  .contact-value {
    font-size: 1rem;
    color: var(--color-text);
    font-weight: 500;
    text-decoration: none;
  }

  a.contact-value:hover {
    color: var(--color-primary-light);
  }

  .status-available {
    color: #4ade80;
  }

  @media (max-width: 768px) {
    .hero-image {
      order: -1;
    }

    .image-frame {
      width: 200px;
      height: 200px;
    }
  }

  /* === LIGHT THEME OVERRIDES === */
  :global([data-theme="light"]) .hero-title {
    background: none;
    -webkit-background-clip: unset;
    background-clip: unset;
    -webkit-text-fill-color: #0a1628;
    color: #0a1628;
  }

  :global([data-theme="light"]) .hero-subtitle {
    color: #0891b2;
  }

  :global([data-theme="light"]) .stat-value {
    color: #1a365d;
  }

  :global([data-theme="light"]) .status-available {
    color: #15803d;
  }

  :global([data-theme="light"]) .contact-card {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(240, 249, 255, 0.95) 100%);
    border: 1px solid rgba(26, 54, 93, 0.15);
  }

  :global([data-theme="light"]) .contact-label {
    color: #1e3a5f;
  }

  :global([data-theme="light"]) .contact-value {
    color: #0a1628;
  }

  :global([data-theme="light"]) .about-hero {
    background: var(--color-surface);
  }

  :global([data-theme="light"]) .stats-section {
    background: linear-gradient(180deg, transparent 0%, rgba(240, 249, 255, 0.5) 100%);
  }

  :global([data-theme="light"]) .stat-item {
    background: rgba(255, 255, 255, 0.95);
    border: 1px solid rgba(26, 54, 93, 0.1);
  }
</style>
