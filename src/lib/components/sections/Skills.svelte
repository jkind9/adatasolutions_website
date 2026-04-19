<script lang="ts">
  import FadeIn from '$lib/components/animations/FadeIn.svelte';
  import NeuralNetwork from '$lib/components/ui/NeuralNetwork.svelte';

  // Ranked skills - most proficient first
  const topSkills = [
    {
      name: 'Computer Vision',
      icon: '👁️',
      description:
        'Patent holder. OpenCV, YOLO, RCNN, object detection, OCR, image processing, custom embeddings'
    },
    {
      name: 'NumPy',
      icon: '🔢',
      description: 'High-performance numerical computing, array operations, mathematical foundations'
    },
    {
      name: 'Numba',
      icon: '⚡',
      description: 'JIT compilation, GPU acceleration, optimized numerical code'
    },
    {
      name: 'PyTorch',
      icon: '🔥',
      description: 'Deep learning models, custom architectures, production deployment'
    },
    {
      name: 'Transformers',
      icon: '🤖',
      description: 'LLMs, attention mechanisms, fine-tuning, RAG pipelines'
    },
    {
      name: 'AWS & Cloud',
      icon: '☁️',
      description: 'Bedrock, Sagemaker, Lambda, infrastructure design, serverless architecture'
    }
  ];

  const additionalSkills = [
    'Python',
    'AWS',
    'Bedrock',
    'Sagemaker',
    'Docker',
    'TensorFlow',
    'Pandas',
    'Scikit-Learn',
    'SQL',
    'NLP',
    'Agentic AI',
    'Lambda'
  ];
</script>

<section id="skills" class="skills-section">
  <!-- Neural Network Background -->
  <div class="neural-bg">
    <NeuralNetwork
      density={50}
      color="#004080"
      accentColor="#60a5fa"
      speed={0.25}
      connectionDistance={120}
      firingRate={0.012}
    />
  </div>

  <div class="container">
    <div class="section-header">
      <FadeIn y={30} duration={700}>
        <span class="section-label">Technical Expertise</span>
      </FadeIn>
      <FadeIn y={40} duration={800} delay={100}>
        <h2 class="section-title">Core Proficiencies</h2>
      </FadeIn>
      <FadeIn y={25} duration={700} delay={200}>
        <p class="section-description">
          My most battle-tested skills, ranked by depth of expertise.
        </p>
      </FadeIn>
    </div>

    <div class="skills-ranked">
      {#each topSkills as skill, index}
        <FadeIn y={40} x={-30} duration={700} delay={300 + index * 80}>
          <div class="skill-card" style="--rank: {index + 1}">
            <div class="rank-badge">#{index + 1}</div>
            <div class="skill-icon">{skill.icon}</div>
            <div class="skill-info">
              <h3 class="skill-name">{skill.name}</h3>
              <p class="skill-description">{skill.description}</p>
            </div>
            <div class="skill-bar-visual">
              <div class="bar-fill" style="--width: {100 - index * 8}%"></div>
            </div>
          </div>
        </FadeIn>
      {/each}
    </div>

    <FadeIn y={30} duration={700} delay={700}>
      <div class="additional-skills">
        <h3 class="additional-title">Also Proficient In</h3>
        <div class="skill-tags">
          {#each additionalSkills as skill, i}
            <span class="skill-tag" style="transition-delay: {i * 30}ms">{skill}</span>
          {/each}
        </div>
      </div>
    </FadeIn>

    <FadeIn y={40} duration={800} delay={900}>
      <div class="highlight-box">
        <div class="highlight-icon">🏆</div>
        <div class="highlight-content">
          <h3 class="highlight-title">Patent Holder</h3>
          <p class="highlight-text">
            First inventor of <strong>Patent GB2631290</strong> - Computer Vision for automated symbol
            extraction in construction schematics, described as "revolutionary" by customers.
          </p>
        </div>
      </div>
    </FadeIn>
  </div>
</section>

<style>
  .skills-section {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 6rem 0;
    background: var(--color-surface);
    position: relative;
    overflow: hidden;
  }

  .neural-bg {
    position: absolute;
    inset: 0;
    opacity: 0.4;
    z-index: 0;
  }

  .container {
    max-width: 900px;
    margin: 0 auto;
    padding: 0 1.5rem;
    position: relative;
    z-index: 1;
  }

  .section-header {
    text-align: center;
    margin-bottom: 3rem;
  }

  .section-label {
    display: inline-block;
    font-size: 0.875rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--color-primary-light);
    margin-bottom: 1rem;
  }

  .section-title {
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 800;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, #ffffff 0%, #a0a0a0 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .section-description {
    font-size: 1.125rem;
    color: var(--color-text-muted);
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.7;
  }

  .skills-ranked {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 3rem;
  }

  .skill-card {
    display: grid;
    grid-template-columns: auto auto 1fr auto;
    align-items: center;
    gap: 1.25rem;
    padding: 1.25rem 1.5rem;
    background: rgba(20, 20, 25, 0.8);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: var(--radius-lg);
    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  }

  .skill-card:hover {
    background: rgba(30, 30, 35, 0.9);
    border-color: rgba(8, 145, 178, 0.4);
    transform: translateX(12px) scale(1.01);
  }

  .rank-badge {
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
    border-radius: 50%;
    font-size: 0.875rem;
    font-weight: 700;
    color: white;
  }

  .skill-card:nth-child(1) .rank-badge {
    background: linear-gradient(135deg, #ffd700 0%, #b8860b 100%);
    box-shadow: 0 0 20px rgba(255, 215, 0, 0.5);
  }

  .skill-card:nth-child(2) .rank-badge {
    background: linear-gradient(135deg, #c0c0c0 0%, #808080 100%);
    box-shadow: 0 0 15px rgba(192, 192, 192, 0.4);
  }

  .skill-card:nth-child(3) .rank-badge {
    background: linear-gradient(135deg, #cd7f32 0%, #8b4513 100%);
    box-shadow: 0 0 15px rgba(205, 127, 50, 0.4);
  }

  .skill-icon {
    font-size: 1.75rem;
  }

  .skill-info {
    flex: 1;
  }

  .skill-name {
    font-size: 1.125rem;
    font-weight: 700;
    color: var(--color-text);
    margin-bottom: 0.25rem;
  }

  .skill-description {
    font-size: 0.8125rem;
    color: var(--color-text-muted);
    line-height: 1.4;
  }

  .skill-bar-visual {
    width: 100px;
    height: 6px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
    overflow: hidden;
  }

  .bar-fill {
    height: 100%;
    width: var(--width);
    background: linear-gradient(90deg, var(--color-primary), var(--color-primary-light));
    border-radius: 3px;
    transition: width 1s ease-out 0.5s;
  }

  .additional-skills {
    text-align: center;
    margin-bottom: 3rem;
    padding: 2rem;
    background: rgba(255, 255, 255, 0.02);
    border-radius: var(--radius-xl);
    border: 1px solid rgba(255, 255, 255, 0.05);
  }

  .additional-title {
    font-size: 1rem;
    font-weight: 600;
    color: var(--color-text-muted);
    margin-bottom: 1.25rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  .skill-tags {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.75rem;
  }

  .skill-tag {
    padding: 0.5rem 1rem;
    background: rgba(8, 145, 178, 0.1);
    border: 1px solid rgba(8, 145, 178, 0.2);
    border-radius: var(--radius-full);
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--color-text);
    transition: all 0.3s ease;
  }

  .skill-tag:hover {
    background: rgba(8, 145, 178, 0.2);
    border-color: rgba(8, 145, 178, 0.4);
    transform: translateY(-3px) scale(1.05);
  }

  .highlight-box {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    padding: 2rem;
    background: linear-gradient(135deg, rgba(26, 54, 93, 0.15) 0%, rgba(8, 145, 178, 0.1) 100%);
    border: 1px solid rgba(8, 145, 178, 0.25);
    border-radius: var(--radius-xl);
  }

  .highlight-icon {
    font-size: 3rem;
    flex-shrink: 0;
  }

  .highlight-content {
    flex: 1;
  }

  .highlight-title {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--color-primary-light);
    margin-bottom: 0.5rem;
  }

  .highlight-text {
    font-size: 0.9375rem;
    color: var(--color-text-muted);
    line-height: 1.6;
  }

  .highlight-text strong {
    color: var(--color-text);
  }

  @media (max-width: 768px) {
    .skill-card {
      grid-template-columns: auto auto 1fr;
      gap: 1rem;
    }

    .skill-bar-visual {
      display: none;
    }

    .highlight-box {
      flex-direction: column;
      text-align: center;
    }
  }

  /* === LIGHT THEME OVERRIDES === */
  :global([data-theme="light"]) .skill-card {
    background: rgba(255, 255, 255, 0.95);
    border: 1px solid rgba(26, 54, 93, 0.15);
    box-shadow: 0 2px 8px rgba(26, 54, 93, 0.08);
  }

  :global([data-theme="light"]) .skill-card:hover {
    background: rgba(255, 255, 255, 1);
    border-color: rgba(8, 145, 178, 0.4);
    box-shadow: 0 8px 24px rgba(26, 54, 93, 0.12);
  }

  :global([data-theme="light"]) .skill-bar-visual {
    background: rgba(26, 54, 93, 0.1);
  }

  :global([data-theme="light"]) .additional-skills {
    background: rgba(255, 255, 255, 0.8);
    border: 1px solid rgba(26, 54, 93, 0.1);
  }

  :global([data-theme="light"]) .skill-tag {
    background: rgba(8, 145, 178, 0.08);
    border: 1px solid rgba(8, 145, 178, 0.2);
  }

  :global([data-theme="light"]) .skill-tag:hover {
    background: rgba(8, 145, 178, 0.15);
    border-color: rgba(8, 145, 178, 0.4);
  }

  :global([data-theme="light"]) .highlight-box {
    background: linear-gradient(135deg, rgba(26, 54, 93, 0.08) 0%, rgba(8, 145, 178, 0.06) 100%);
    border: 1px solid rgba(26, 54, 93, 0.15);
  }

  :global([data-theme="light"]) .section-title {
    background: linear-gradient(135deg, #0a1628 0%, #1a365d 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  :global([data-theme="light"]) .neural-bg {
    opacity: 0.2;
  }
</style>
