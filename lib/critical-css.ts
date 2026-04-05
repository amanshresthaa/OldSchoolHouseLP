export const criticalAboveTheFoldCss = `
  body {
    margin: 0;
    background: #f9f6f1;
    color: #1b1c1c;
    font-family: var(--font-manrope), sans-serif;
  }

  [data-critical-header] {
    position: sticky;
    top: 0;
    z-index: 40;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    background: rgba(249, 246, 241, 0.85);
    backdrop-filter: blur(18px);
  }

  [data-critical-home-hero],
  [data-critical-page-hero] {
    position: relative;
    overflow: hidden;
    background: #061b0e;
    color: #ffffff;
  }

  [data-critical-home-hero] {
    height: 33rem;
  }

  @media (min-width: 640px) {
    [data-critical-home-hero] {
      height: 35rem;
    }
  }

  @media (min-width: 768px) {
    [data-critical-home-hero] {
      height: 39rem;
    }
  }

  @media (min-width: 1024px) {
    [data-critical-home-hero] {
      height: 43rem;
    }
  }

  @media (min-width: 1280px) {
    [data-critical-home-hero] {
      height: 45rem;
    }
  }

  [data-critical-page-hero] {
    min-height: 20rem;
  }

  [data-critical-hero-panel] {
    border: 0;
    background: transparent;
    box-shadow: none;
  }

  [data-critical-hero-title] {
    margin: 0;
    color: #ffffff;
    font-family: var(--font-newsreader), serif;
    font-weight: 400;
    letter-spacing: -0.03em;
  }
`
