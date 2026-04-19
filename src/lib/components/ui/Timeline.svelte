<script lang="ts">
  import { experiences, education } from '$lib/data/experience';
  import ScrollReveal from '$lib/components/ui/ScrollReveal.svelte';
  import Badge from '$lib/components/ui/Badge.svelte';
</script>

<div class="timeline">
  <h3 class="timeline-section-title">Career Journey</h3>

  <div class="timeline-container">
    {#each experiences as exp, index}
      <ScrollReveal delay={index * 100}>
        <div class="timeline-item" class:right={index % 2 !== 0}>
          <div class="timeline-marker">
            <div class="marker-dot"></div>
          </div>

          <div class="timeline-card">
            <div class="card-header">
              <div class="card-date">
                {exp.startDate} — {exp.endDate}
              </div>
              {#if exp.type === 'contractor'}
                <Badge variant="primary" size="sm">Contractor</Badge>
              {/if}
            </div>

            <h4 class="card-title">{exp.title}</h4>
            <p class="card-company">{exp.company}</p>
            <p class="card-description">{exp.description}</p>

            <ul class="card-achievements">
              {#each exp.achievements.slice(0, 3) as achievement}
                <li>{achievement}</li>
              {/each}
            </ul>

            <div class="card-technologies">
              {#each exp.technologies.slice(0, 4) as tech}
                <span class="tech-tag">{tech}</span>
              {/each}
            </div>
          </div>
        </div>
      </ScrollReveal>
    {/each}
  </div>

  <h3 class="timeline-section-title education-title">Education</h3>

  <div class="education-grid">
    {#each education as edu, index}
      <ScrollReveal delay={index * 150}>
        <div class="education-card">
          <div class="edu-degree">{edu.degree}</div>
          <div class="edu-institution">{edu.institution}</div>
          <div class="edu-years">{edu.years}</div>
          {#if 'grade' in edu && edu.grade}
            <div class="edu-grade">{edu.grade}</div>
          {/if}
          {#if 'grades' in edu && edu.grades}
            <div class="edu-grades">
              {#each edu.grades as grade}
                <span class="grade-item">{grade.subject}: {grade.grade}</span>
              {/each}
            </div>
          {/if}
          {#if 'notes' in edu && edu.notes}
            <div class="edu-notes">{edu.notes}</div>
          {/if}
        </div>
      </ScrollReveal>
    {/each}
  </div>
</div>

<style>
  .timeline {
    max-width: 1000px;
    margin: 0 auto;
  }

  .timeline-section-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--color-primary-light);
    margin-bottom: 2rem;
    text-align: center;
  }

  .education-title {
    margin-top: 4rem;
  }

  .timeline-container {
    position: relative;
    padding: 2rem 0;
  }

  .timeline-container::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(180deg, var(--color-primary) 0%, var(--color-accent) 100%);
    transform: translateX(-50%);
  }

  @media (max-width: 768px) {
    .timeline-container::before {
      left: 20px;
    }
  }

  .timeline-item {
    display: flex;
    align-items: flex-start;
    margin-bottom: 3rem;
    position: relative;
  }

  .timeline-item.right {
    flex-direction: row-reverse;
  }

  @media (max-width: 768px) {
    .timeline-item,
    .timeline-item.right {
      flex-direction: row;
      padding-left: 50px;
    }
  }

  .timeline-marker {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
  }

  @media (max-width: 768px) {
    .timeline-marker {
      left: 20px;
    }
  }

  .marker-dot {
    width: 16px;
    height: 16px;
    background: var(--color-primary);
    border-radius: 50%;
    border: 3px solid var(--color-surface);
    box-shadow: 0 0 0 3px var(--color-primary);
  }

  .timeline-card {
    width: calc(50% - 40px);
    background: var(--color-surface-card);
    border-radius: var(--radius-lg);
    padding: 1.5rem;
    border: 1px solid rgba(255, 255, 255, 0.05);
    transition: all var(--transition-normal);
  }

  .timeline-card:hover {
    transform: translateY(-4px);
    border-color: rgba(8, 145, 178, 0.4);
    box-shadow: var(--shadow-lg);
  }

  @media (max-width: 768px) {
    .timeline-card {
      width: 100%;
    }
  }

  .card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    margin-bottom: 0.75rem;
    flex-wrap: wrap;
  }

  .card-date {
    font-size: 0.8125rem;
    color: var(--color-text-muted);
    font-weight: 500;
  }

  .card-title {
    font-size: 1.125rem;
    font-weight: 700;
    color: var(--color-text);
    margin-bottom: 0.25rem;
  }

  .card-company {
    font-size: 0.9375rem;
    color: var(--color-primary-light);
    font-weight: 500;
    margin-bottom: 0.75rem;
  }

  .card-description {
    font-size: 0.875rem;
    color: var(--color-text-muted);
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  .card-achievements {
    list-style: none;
    margin-bottom: 1rem;
  }

  .card-achievements li {
    font-size: 0.8125rem;
    color: var(--color-text);
    padding-left: 1rem;
    position: relative;
    margin-bottom: 0.375rem;
    line-height: 1.5;
  }

  .card-achievements li::before {
    content: '•';
    position: absolute;
    left: 0;
    color: var(--color-primary);
  }

  .card-technologies {
    display: flex;
    flex-wrap: wrap;
    gap: 0.375rem;
  }

  .tech-tag {
    font-size: 0.6875rem;
    padding: 0.25rem 0.5rem;
    background: rgba(255, 255, 255, 0.05);
    border-radius: var(--radius-sm);
    color: var(--color-text-muted);
  }

  .education-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
  }

  .education-card {
    background: var(--color-surface-card);
    border-radius: var(--radius-lg);
    padding: 1.5rem;
    border: 1px solid rgba(255, 255, 255, 0.05);
    text-align: center;
    transition: all var(--transition-normal);
  }

  .education-card:hover {
    transform: translateY(-4px);
    border-color: rgba(0, 64, 128, 0.3);
  }

  .edu-degree {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--color-text);
    margin-bottom: 0.5rem;
  }

  .edu-institution {
    font-size: 1rem;
    color: var(--color-accent-light);
    font-weight: 500;
    margin-bottom: 0.25rem;
  }

  .edu-years {
    font-size: 0.875rem;
    color: var(--color-text-muted);
    margin-bottom: 0.75rem;
  }

  .edu-grade {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--color-primary-light);
    margin-bottom: 0.5rem;
  }

  .edu-grades {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    justify-content: center;
  }

  .grade-item {
    font-size: 0.75rem;
    padding: 0.25rem 0.75rem;
    background: rgba(255, 255, 255, 0.05);
    border-radius: var(--radius-full);
    color: var(--color-text);
  }

  .edu-notes {
    font-size: 0.8125rem;
    color: var(--color-text-muted);
    font-style: italic;
    margin-top: 0.5rem;
  }

  /* === LIGHT THEME OVERRIDES === */
  :global([data-theme="light"]) .timeline-card {
    background: rgba(255, 255, 255, 0.95);
    border: 1px solid rgba(26, 54, 93, 0.12);
    box-shadow: 0 2px 8px rgba(26, 54, 93, 0.08);
  }

  :global([data-theme="light"]) .timeline-card:hover {
    border-color: rgba(8, 145, 178, 0.4);
    box-shadow: 0 8px 24px rgba(26, 54, 93, 0.12);
  }

  :global([data-theme="light"]) .education-card {
    background: rgba(255, 255, 255, 0.95);
    border: 1px solid rgba(26, 54, 93, 0.12);
    box-shadow: 0 2px 8px rgba(26, 54, 93, 0.08);
  }

  :global([data-theme="light"]) .education-card:hover {
    border-color: rgba(8, 145, 178, 0.4);
    box-shadow: 0 8px 24px rgba(26, 54, 93, 0.12);
  }

  :global([data-theme="light"]) .tech-tag {
    background: rgba(26, 54, 93, 0.08);
    color: #1e3a5f;
  }

  :global([data-theme="light"]) .grade-item {
    background: rgba(26, 54, 93, 0.08);
    color: #0a1628;
  }

  :global([data-theme="light"]) .marker-dot {
    border: 3px solid var(--color-surface);
  }
</style>
