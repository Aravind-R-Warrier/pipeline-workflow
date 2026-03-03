 export const navStyles = `

  @keyframes navSlideDown {
    from { opacity: 0; transform: translateY(-100%); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes logoGlow {
    0%, 100% { opacity: 0.6; }
    50% { opacity: 1; }
  }

  @keyframes orbitSpin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @keyframes nodeFloat {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-3px); }
  }

  @keyframes scanLine {
    0% { top: 0%; opacity: 0; }
    10% { opacity: 1; }
    90% { opacity: 1; }
    100% { top: 100%; opacity: 0; }
  }

  @keyframes badgePulse {
    0%, 100% { box-shadow: 0 0 0 0 rgba(99, 245, 190, 0.4); }
    50% { box-shadow: 0 0 0 6px rgba(99, 245, 190, 0); }
  }

  @keyframes textShimmer {
    0% { background-position: -200% center; }
    100% { background-position: 200% center; }
  }

  .vs-navbar {
    animation: navSlideDown 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    font-family: 'Outfit', sans-serif;
  }

  .vs-logo-icon {
    animation: nodeFloat 3s ease-in-out infinite;
  }

  .vs-logo-ring {
    animation: orbitSpin 8s linear infinite;
    transform-origin: center;
  }

  .vs-scan {
    animation: scanLine 4s ease-in-out infinite 2s;
  }

  .vs-title-shimmer {
    background: linear-gradient(
      105deg,
      #e2e8ff 0%,
      #ffffff 30%,
      #a5b4ff 50%,
      #ffffff 70%,
      #e2e8ff 100%
    );
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: textShimmer 4s linear infinite;
  }

  .vs-status-badge {
    animation: badgePulse 2.5s ease-in-out infinite;
  }

  .vs-nav-btn {
    position: relative;
    transition: color 0.2s ease, background 0.2s ease;
    font-family: 'Outfit', sans-serif;
  }

  .vs-nav-btn::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 50%;
    width: 0;
    height: 1.5px;
    background: linear-gradient(90deg, #818cf8, #c084fc);
    transition: width 0.25s ease, left 0.25s ease;
    border-radius: 4px;
  }

  .vs-nav-btn:hover::after {
    width: 100%;
    left: 0;
  }

  .vs-nav-btn:hover {
    color: #e0e7ff;
  }

  .vs-run-btn {
    font-family: 'Outfit', sans-serif;
    transition: transform 0.15s ease, box-shadow 0.15s ease;
  }

  .vs-run-btn:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 24px rgba(99, 102, 241, 0.5);
  }

  .vs-run-btn:active {
    transform: translateY(0);
  }

  .vs-grid-dot {
    opacity: 0.15;
  }
`;
