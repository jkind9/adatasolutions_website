<script lang="ts">
  import { projects } from '$lib/data/projects';
  import FadeIn from '$lib/components/animations/FadeIn.svelte';
  import Badge from '$lib/components/ui/Badge.svelte';
  import ProjectBackground from '$lib/components/ui/ProjectBackground.svelte';

  const colorClasses: Record<string, string> = {
    red: 'project-red',
    blue: 'project-blue',
    green: 'project-green',
    orange: 'project-orange'
  };

  const industryIcons: Record<string, string> = {
    'McLaren Racing': '🏎️',
    'Intrum Call Analytics': '🏦',
    'Ensign Patent': '🏗️',
    'Excelitas/Qioptiq': '🛡️'
  };
</script>

<section id="projects" class="projects-section">
  <div class="container">
    <div class="section-header">
      <FadeIn y={30} duration={600}>
        <span class="section-label">
          <span class="label-line"></span>
          Proven Results
          <span class="label-line"></span>
        </span>
      </FadeIn>
      <FadeIn y={40} duration={700} delay={100}>
        <h2 class="section-title">
          Ideas That <span class="title-accent">Transformed</span> Industries
        </h2>
      </FadeIn>
      <FadeIn y={30} duration={600} delay={200}>
        <p class="section-description">
          Every project starts with a problem. I deliver solutions that make headlines.
          Here's proof that thinking differently works.
        </p>
      </FadeIn>
    </div>

    <div class="projects-grid">
      {#each projects as project, index}
        <FadeIn
          y={50}
          x={index % 2 === 0 ? -20 : 20}
          duration={700}
          delay={150 + index * 100}
        >
          <article class="project-card {colorClasses[project.color]}">
            <!-- Glowing border effect -->
            <div class="project-glow"></div>

            <!-- Industry badge -->
            <div class="industry-badge">
              <span class="industry-icon">{industryIcons[project.title] || '💡'}</span>
            </div>

            <div class="project-image-wrapper">
              <!-- SVG Collage Background -->
              <ProjectBackground projectId={project.id} color={project.color} />

              <div class="project-overlay"></div>
              <div class="project-number">0{index + 1}</div>
            </div>

            <div class="project-content">
              <div class="project-header">
                <h3 class="project-title">{project.title}</h3>
                <span class="project-subtitle">{project.subtitle}</span>
              </div>

              <p class="project-description">{project.description}</p>

              <ul class="project-highlights">
                {#each project.highlights.slice(0, 3) as highlight}
                  <li class="highlight-item">
                    <span class="highlight-bullet"></span>
                    {highlight}
                  </li>
                {/each}
              </ul>

              <div class="project-technologies">
                {#each project.technologies.slice(0, 5) as tech}
                  <Badge
                    variant={project.color === 'red'
                      ? 'primary'
                      : project.color === 'blue'
                        ? 'secondary'
                        : 'default'}
                    size="sm"
                  >
                    {tech}
                  </Badge>
                {/each}
              </div>

              <!-- Impact indicator -->
              <div class="impact-bar">
                <span class="impact-label">Impact</span>
                <div class="impact-track">
                  <div class="impact-fill"></div>
                </div>
              </div>
            </div>
          </article>
        </FadeIn>
      {/each}
    </div>

    <!-- Bottom CTA -->
    <FadeIn y={30} duration={600} delay={400}>
      <div class="projects-cta">
        <p class="cta-text">These are just highlights. Every project has a story of innovation.</p>
      </div>
    </FadeIn>
  </div>
</section>

<style>
  .projects-section {
    min-height: 100vh;
    padding: 8rem 0;
    background: linear-gradient(
      180deg,
      var(--color-surface) 0%,
      rgba(15, 15, 20, 1) 50%,
      var(--color-surface) 100%
    );
    position: relative;
    overflow-x: hidden;
  }

  .projects-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 1px;
    height: 100%;
    background: linear-gradient(180deg, transparent, rgba(8, 145, 178, 0.3), transparent);
  }

  .container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 1.5rem;
    position: relative;
  }

  .section-header {
    text-align: center;
    margin-bottom: 5rem;
  }

  .section-label {
    display: inline-flex;
    align-items: center;
    gap: 1rem;
    font-size: 0.875rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: var(--color-primary-light);
    margin-bottom: 1.5rem;
  }

  .label-line {
    width: 40px;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--color-primary));
  }

  .label-line:last-child {
    background: linear-gradient(90deg, var(--color-primary), transparent);
  }

  .section-title {
    font-size: clamp(2.5rem, 6vw, 4rem);
    font-weight: 900;
    margin-bottom: 1.5rem;
    line-height: 1.1;
  }

  .title-accent {
    background: linear-gradient(135deg, #0891b2, #22d3ee);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
  }

  .section-description {
    font-size: 1.25rem;
    color: var(--color-text-muted);
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.7;
  }

  .projects-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  @media (min-width: 768px) {
    .projects-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  /* === PROJECT CARD === */
  .project-card {
    position: relative;
    background: rgba(20, 20, 25, 0.8);
    border-radius: var(--radius-xl);
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.05);
    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
    backdrop-filter: blur(10px);
  }

  .project-card:hover {
    transform: translateY(-12px) scale(1.02);
    border-color: rgba(255, 255, 255, 0.15);
  }

  .project-card:hover .project-glow {
    opacity: 1;
  }

  /* Glowing effect */
  .project-glow {
    position: absolute;
    inset: -2px;
    border-radius: var(--radius-xl);
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: -1;
  }

  .project-red .project-glow {
    background: linear-gradient(135deg, rgba(249, 115, 22, 0.4), transparent, rgba(249, 115, 22, 0.4));
    box-shadow: 0 0 60px rgba(249, 115, 22, 0.3);
  }

  .project-blue .project-glow {
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.4), transparent, rgba(59, 130, 246, 0.4));
    box-shadow: 0 0 60px rgba(59, 130, 246, 0.3);
  }

  .project-green .project-glow {
    background: linear-gradient(135deg, rgba(34, 197, 94, 0.4), transparent, rgba(34, 197, 94, 0.4));
    box-shadow: 0 0 60px rgba(34, 197, 94, 0.3);
  }

  .project-orange .project-glow {
    background: linear-gradient(
      135deg,
      rgba(234, 88, 12, 0.4),
      transparent,
      rgba(234, 88, 12, 0.4)
    );
    box-shadow: 0 0 60px rgba(234, 88, 12, 0.3);
  }

  /* Industry badge */
  .industry-badge {
    position: absolute;
    top: 1rem;
    right: 1rem;
    z-index: 10;
    width: 48px;
    height: 48px;
    background: rgba(0, 0, 0, 0.8);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(10px);
    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  }

  .project-card:hover .industry-badge {
    transform: scale(1.15) rotate(15deg);
  }

  .industry-icon {
    font-size: 1.5rem;
  }

  /* Image section */
  .project-image-wrapper {
    position: relative;
    height: 240px;
    overflow: hidden;
  }

  .project-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.85) 100%);
    pointer-events: none;
  }

  .project-number {
    position: absolute;
    bottom: 1rem;
    left: 1.5rem;
    font-size: 4rem;
    font-weight: 900;
    opacity: 0.15;
    line-height: 1;
    font-family: 'JetBrains Mono', monospace;
    z-index: 2;
  }

  .project-red .project-number {
    color: #f97316;
  }
  .project-blue .project-number {
    color: #3b82f6;
  }
  .project-green .project-number {
    color: #22c55e;
  }
  .project-orange .project-number {
    color: #f97316;
  }

  /* Content section */
  .project-content {
    padding: 1.75rem;
    transition: transform 0.4s ease;
  }

  .project-card:hover .project-content {
    transform: translateY(-5px);
  }

  .project-header {
    margin-bottom: 1rem;
  }

  .project-title {
    font-size: 1.5rem;
    font-weight: 800;
    margin-bottom: 0.375rem;
    transition: color 0.3s ease;
  }

  .project-red .project-title {
    color: #fb923c;
  }
  .project-blue .project-title {
    color: #60a5fa;
  }
  .project-green .project-title {
    color: #4ade80;
  }
  .project-orange .project-title {
    color: #fb923c;
  }

  .project-subtitle {
    font-size: 0.875rem;
    color: var(--color-text-muted);
    font-weight: 500;
    letter-spacing: 0.02em;
  }

  .project-description {
    font-size: 0.9375rem;
    color: var(--color-text-muted);
    line-height: 1.7;
    margin-bottom: 1.25rem;
  }

  /* Highlights */
  .project-highlights {
    list-style: none;
    margin-bottom: 1.5rem;
  }

  .highlight-item {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    font-size: 0.875rem;
    color: var(--color-text);
    margin-bottom: 0.625rem;
    line-height: 1.5;
  }

  .highlight-bullet {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    flex-shrink: 0;
    margin-top: 6px;
  }

  .project-red .highlight-bullet {
    background: #f97316;
    box-shadow: 0 0 8px #f97316;
  }
  .project-blue .highlight-bullet {
    background: #3b82f6;
    box-shadow: 0 0 8px #3b82f6;
  }
  .project-green .highlight-bullet {
    background: #22c55e;
    box-shadow: 0 0 8px #22c55e;
  }
  .project-orange .highlight-bullet {
    background: #f97316;
    box-shadow: 0 0 8px #f97316;
  }

  /* Technologies */
  .project-technologies {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }

  /* Impact bar */
  .impact-bar {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .impact-label {
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--color-text-muted);
  }

  .impact-track {
    flex: 1;
    height: 3px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 2px;
    overflow: hidden;
  }

  .impact-fill {
    height: 100%;
    width: 0;
    border-radius: 2px;
    animation: impactGrow 1.5s ease-out forwards;
    animation-delay: 0.5s;
  }

  .project-red .impact-fill {
    background: linear-gradient(90deg, #f97316, #ea580c);
    width: 95%;
  }
  .project-blue .impact-fill {
    background: linear-gradient(90deg, #3b82f6, #2563eb);
    width: 90%;
  }
  .project-green .impact-fill {
    background: linear-gradient(90deg, #22c55e, #16a34a);
    width: 100%;
  }
  .project-orange .impact-fill {
    background: linear-gradient(90deg, #f97316, #ea580c);
    width: 85%;
  }

  @keyframes impactGrow {
    from {
      width: 0;
    }
  }

  /* CTA Section */
  .projects-cta {
    text-align: center;
    margin-top: 4rem;
    padding: 2rem;
    border: 1px dashed rgba(255, 255, 255, 0.1);
    border-radius: var(--radius-lg);
  }

  .cta-text {
    font-size: 1.125rem;
    color: var(--color-text-muted);
    font-style: italic;
  }

  /* === LIGHT THEME OVERRIDES === */
  :global([data-theme="light"]) .projects-section::before {
    background: linear-gradient(180deg, transparent, rgba(8, 145, 178, 0.2), transparent);
  }

  :global([data-theme="light"]) .project-card {
    background: rgba(255, 255, 255, 0.95);
    border: 1px solid rgba(26, 54, 93, 0.12);
    box-shadow: 0 4px 20px rgba(26, 54, 93, 0.08);
  }

  :global([data-theme="light"]) .project-card:hover {
    border-color: rgba(26, 54, 93, 0.2);
    box-shadow: 0 12px 40px rgba(26, 54, 93, 0.15);
  }

  :global([data-theme="light"]) .industry-badge {
    background: rgba(255, 255, 255, 0.95);
    border: 1px solid rgba(26, 54, 93, 0.15);
    box-shadow: 0 2px 8px rgba(26, 54, 93, 0.1);
  }

  :global([data-theme="light"]) .project-overlay {
    background: linear-gradient(180deg, transparent 0%, rgba(255, 255, 255, 0.9) 100%);
  }

  :global([data-theme="light"]) .impact-track {
    background: rgba(26, 54, 93, 0.1);
  }

  :global([data-theme="light"]) .projects-cta {
    border: 1px dashed rgba(26, 54, 93, 0.2);
    background: rgba(255, 255, 255, 0.5);
  }

  :global([data-theme="light"]) .title-accent {
    background: linear-gradient(135deg, #1a365d, #0891b2);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  :global([data-theme="light"]) .section-title {
    color: #0a1628;
  }

  :global([data-theme="light"]) .projects-section {
    background: linear-gradient(
      180deg,
      var(--color-surface) 0%,
      rgba(232, 244, 252, 1) 50%,
      var(--color-surface) 100%
    );
  }
</style>
