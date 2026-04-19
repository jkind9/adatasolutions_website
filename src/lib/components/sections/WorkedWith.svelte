<script lang="ts">
  import FadeIn from '$lib/components/animations/FadeIn.svelte';

  const companies = [
    { name: 'Danone', logo: '/images/danone.png', hasBackground: false },
    { name: 'Diageo', logo: '/images/diageo.webp', hasBackground: false },
    { name: 'Nestlé Purina', logo: '/images/nestle-purina.png', hasBackground: false },
    { name: 'Sanofi', logo: '/images/sanofi.png', hasBackground: true }
  ];
</script>

<section class="worked-with-section">
  <div class="container">
    <div class="section-header">
      <FadeIn y={30} duration={600}>
        <span class="section-label">Trusted By Industry Leaders</span>
      </FadeIn>
      <FadeIn y={40} duration={700} delay={100}>
        <h2 class="section-title">Worked With</h2>
      </FadeIn>
      <FadeIn y={20} duration={500} delay={200}>
        <div class="decor-line"></div>
      </FadeIn>
    </div>

    <div class="logos-container">
      {#each companies as company, i}
        <FadeIn
          y={40}
          x={i % 2 === 0 ? -15 : 15}
          duration={600}
          delay={250 + i * 80}
        >
          <div class="logo-item">
            <div class="logo-glow"></div>
            <img
              src={company.logo}
              alt="{company.name} logo"
              class:has-background={company.hasBackground}
              loading="lazy"
            />
            <span class="company-name">{company.name}</span>
          </div>
        </FadeIn>
      {/each}
    </div>
  </div>
</section>

<style>
  .worked-with-section {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 5rem 0;
    background: linear-gradient(180deg, var(--color-surface) 0%, rgba(20, 20, 25, 1) 100%);
    position: relative;
    overflow-x: hidden;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }

  .section-header {
    text-align: center;
    margin-bottom: 4rem;
  }

  .section-label {
    display: inline-block;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: var(--color-text-muted);
    margin-bottom: 0.75rem;
  }

  .section-title {
    font-size: clamp(2.5rem, 6vw, 4rem);
    font-weight: 800;
    background: linear-gradient(135deg, #ffffff 0%, #a0a0a0 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .decor-line {
    width: 120px;
    height: 3px;
    background: linear-gradient(90deg, transparent, var(--color-primary), transparent);
    margin: 1.5rem auto 0;
  }

  .logos-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 3rem;
  }

  .logo-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 2rem 2.5rem;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: var(--radius-xl);
    transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
    position: relative;
  }

  .logo-glow {
    position: absolute;
    inset: -3px;
    border-radius: var(--radius-xl);
    background: linear-gradient(135deg, rgba(8, 145, 178, 0.4), transparent 50%, rgba(26, 54, 93, 0.4));
    opacity: 0;
    transition: opacity 0.5s ease;
    z-index: -1;
    filter: blur(12px);
  }

  .logo-item:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-15px) scale(1.05);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);
  }

  .logo-item:hover .logo-glow {
    opacity: 1;
  }

  .logo-item img {
    height: 60px;
    width: auto;
    object-fit: contain;
    filter: grayscale(100%) brightness(2);
    transition: all 0.5s ease;
  }

  .logo-item img.has-background {
    mix-blend-mode: screen;
    filter: grayscale(100%) brightness(1) invert(1);
  }

  .logo-item:hover img {
    filter: grayscale(0%) brightness(1);
    transform: scale(1.1);
  }

  .logo-item:hover img.has-background {
    mix-blend-mode: normal;
    filter: none;
    background: white;
    border-radius: 4px;
    padding: 4px 8px;
  }

  .company-name {
    font-size: 1rem;
    font-weight: 600;
    color: var(--color-text-muted);
    transition: all 0.4s ease;
  }

  .logo-item:hover .company-name {
    color: var(--color-text);
    transform: translateY(-3px);
  }

  @media (max-width: 768px) {
    .logos-container {
      gap: 1.5rem;
    }

    .logo-item {
      padding: 1.5rem 2rem;
    }

    .logo-item img {
      height: 45px;
    }
  }

  /* === LIGHT THEME OVERRIDES === */
  :global([data-theme="light"]) .section-title {
    background: none;
    -webkit-background-clip: unset;
    background-clip: unset;
    -webkit-text-fill-color: #0a1628;
    color: #0a1628;
  }

  :global([data-theme="light"]) .section-label {
    color: #1e3a5f;
  }

  :global([data-theme="light"]) .company-name {
    color: #1e3a5f;
  }

  :global([data-theme="light"]) .logo-item {
    background: rgba(255, 255, 255, 0.9);
    border: 1px solid rgba(26, 54, 93, 0.15);
  }

  :global([data-theme="light"]) .logo-item:hover {
    background: rgba(255, 255, 255, 1);
    border-color: rgba(26, 54, 93, 0.3);
  }

  :global([data-theme="light"]) .worked-with-section {
    background: linear-gradient(180deg, var(--color-surface) 0%, rgba(232, 244, 252, 1) 100%);
  }
</style>
