<script lang="ts">
  import { onMount } from 'svelte';

  const testimonials = [
    {
      quote: "An asset to any business especially in the AI space",
      author: "John White",
      role: "Ex-CTO @ Chetwood Financial Limited"
    },
    {
      quote: "An absolute nerd, but in the best way possible",
      author: "Rakeem Morgan-Cornibert",
      role: "Head of Systems Analytics @ Intrum"
    },
    {
      quote: "Excellent contractor/consultant - genuinely loves his projects",
      author: "Jonathan Goulstine",
      role: "CEO @ Ensign Advanced Systems Ltd"
    }
  ];

  let currentIndex = $state(0);
  let isAnimating = $state(false);

  onMount(() => {
    const interval = setInterval(() => {
      isAnimating = true;
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % testimonials.length;
        isAnimating = false;
      }, 500);
    }, 8000);

    return () => clearInterval(interval);
  });

  function goToSlide(index: number) {
    if (index !== currentIndex) {
      isAnimating = true;
      setTimeout(() => {
        currentIndex = index;
        isAnimating = false;
      }, 300);
    }
  }
</script>

<footer class="footer">
  <div class="footer-content">
    <div class="testimonial-section">
      <div class="testimonial" class:animating={isAnimating}>
        <blockquote class="quote">
          "{testimonials[currentIndex].quote}"
        </blockquote>
        <cite class="attribution">
          <span class="author">{testimonials[currentIndex].author}</span>
          <span class="role">{testimonials[currentIndex].role}</span>
        </cite>
      </div>

      <div class="dots">
        {#each testimonials as _, index}
          <button
            class="dot"
            class:active={index === currentIndex}
            onclick={() => goToSlide(index)}
            aria-label="Go to testimonial {index + 1}"
          ></button>
        {/each}
      </div>
    </div>

    <div class="footer-bottom">
      <div class="footer-info">
        <span class="copyright">© {new Date().getFullYear()} Alexander Data Solutions Ltd</span>
        <span class="separator">•</span>
        <span class="status">Contractor Outside IR35</span>
      </div>
      <div class="footer-links">
        <a
          href="https://www.linkedin.com/in/james-alexander-146239a4/"
          target="_blank"
          rel="noopener noreferrer"
          class="footer-link"
        >
          LinkedIn
        </a>
        <span class="separator">•</span>
        <a href="mailto:jkind9@gmail.com" class="footer-link">Contact</a>
      </div>
    </div>
  </div>
</footer>

<style>
  .footer {
    background: linear-gradient(180deg, var(--color-surface) 0%, var(--color-accent-dark, #002050) 100%);
    padding: 4rem 0 2rem;
    margin-top: auto;
  }

  .footer-content {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }

  .testimonial-section {
    text-align: center;
    margin-bottom: 3rem;
  }

  .testimonial {
    max-width: 700px;
    margin: 0 auto;
    transition: opacity 0.3s ease-out;
  }

  .testimonial.animating {
    opacity: 0;
  }

  .quote {
    font-size: clamp(1.25rem, 3vw, 1.75rem);
    font-weight: 500;
    color: var(--color-text);
    line-height: 1.5;
    margin-bottom: 1.5rem;
    font-style: italic;
  }

  .attribution {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    font-style: normal;
  }

  .author {
    font-size: 1rem;
    font-weight: 600;
    color: var(--color-primary-light);
  }

  .role {
    font-size: 0.875rem;
    color: var(--color-text-muted);
  }

  .dots {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    margin-top: 2rem;
  }

  .dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    border: none;
    cursor: pointer;
    transition: all var(--transition-fast);
    padding: 0;
  }

  .dot:hover {
    background: rgba(255, 255, 255, 0.5);
  }

  .dot.active {
    background: var(--color-primary);
    transform: scale(1.2);
  }

  .footer-bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  @media (min-width: 768px) {
    .footer-bottom {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  .footer-info,
  .footer-links {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  .copyright,
  .status {
    font-size: 0.875rem;
    color: var(--color-text-muted);
  }

  .separator {
    color: rgba(255, 255, 255, 0.3);
    font-size: 0.75rem;
  }

  .footer-link {
    font-size: 0.875rem;
    color: var(--color-text-muted);
    text-decoration: none;
    transition: color var(--transition-fast);
  }

  .footer-link:hover {
    color: var(--color-primary-light);
  }
</style>
