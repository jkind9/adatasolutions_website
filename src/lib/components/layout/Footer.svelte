<footer class="footer">
  <div class="footer-content">
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
    padding: 2rem 0;
    margin-top: auto;
  }

  .footer-content {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }

  .footer-bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
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
