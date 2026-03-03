export const styles = `

  @keyframes backdropIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes modalIn {
    from {
      opacity: 0;
      transform: translateY(24px) scale(0.96);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  @keyframes shimmer {
    0% { background-position: -200% center; }
    100% { background-position: 200% center; }
  }

  @keyframes pulseRing {
    0% { transform: scale(0.9); opacity: 1; }
    100% { transform: scale(1.6); opacity: 0; }
  }

  @keyframes countUp {
    from { opacity: 0; transform: translateY(8px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes lineGrow {
    from { width: 0; }
    to { width: 100%; }
  }

  .modal-backdrop {
    animation: backdropIn 0.25s ease forwards;
  }

  .modal-card {
    animation: modalIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    font-family: 'DM Sans', sans-serif;
  }

  .modal-title {
    font-family: 'Syne', sans-serif;
  }

  .stat-value {
    animation: countUp 0.5s ease forwards;
    font-family: 'Syne', sans-serif;
  }

  .shimmer-btn {
    background: linear-gradient(
      105deg,
      #6366f1 0%,
      #818cf8 40%,
      #c084fc 60%,
      #6366f1 100%
    );
    background-size: 200% auto;
    transition: background-position 0.4s ease, transform 0.15s ease, box-shadow 0.15s ease;
  }

  .shimmer-btn:hover {
    background-position: right center;
    transform: translateY(-1px);
    box-shadow: 0 8px 30px rgba(99, 102, 241, 0.45);
  }

  .shimmer-btn:active {
    transform: translateY(0);
  }

  .pulse-ring::after {
    content: '';
    position: absolute;
    inset: -4px;
    border-radius: 50%;
    border: 2px solid currentColor;
    animation: pulseRing 1.6s ease-out infinite;
  }

  .divider-line {
    animation: lineGrow 0.6s ease 0.3s both;
  }

  .stat-card {
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .stat-card:hover {
    transform: translateY(-2px);
  }
`;
