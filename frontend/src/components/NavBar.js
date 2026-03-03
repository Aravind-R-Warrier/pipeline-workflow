import { navStyles } from "../utils/NavStyles";


const HexLogo = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="vs-logo-icon">
    {/* Outer hexagon ring */}
    <g className="vs-logo-ring" style={{ transformOrigin: "18px 18px" }}>
      <circle cx="18" cy="4" r="2" fill="rgba(129,140,248,0.5)" />
      <circle cx="30.5" cy="11" r="1.5" fill="rgba(192,132,252,0.4)" />
      <circle cx="30.5" cy="25" r="1.5" fill="rgba(129,140,248,0.3)" />
    </g>

    {/* Center nodes */}
    <circle cx="18" cy="18" r="5" fill="url(#logoGrad)" />
    <circle cx="9" cy="13" r="3" fill="rgba(129,140,248,0.7)" />
    <circle cx="27" cy="13" r="3" fill="rgba(192,132,252,0.7)" />
    <circle cx="9" cy="23" r="2.5" fill="rgba(99,245,190,0.6)" />
    <circle cx="27" cy="23" r="2.5" fill="rgba(244,114,182,0.5)" />

    {/* Edges */}
    <line x1="12" y1="14.5" x2="15" y2="16.5" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
    <line x1="24" y1="14.5" x2="21" y2="16.5" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
    <line x1="11" y1="21.5" x2="15" y2="19.5" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
    <line x1="25" y1="21.5" x2="21" y2="19.5" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />

    <defs>
      <radialGradient id="logoGrad" cx="35%" cy="35%">
        <stop offset="0%" stopColor="#a5b4ff" />
        <stop offset="100%" stopColor="#7c3aed" />
      </radialGradient>
    </defs>
  </svg>
);

 const NavBar = ({ onRunPipeline, onClear, onSave, nodeCount = 0, edgeCount = 0 }) => {
  return (
    <>
      <style>{navStyles}</style>
      <header
        className="vs-navbar"
        style={{
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(180deg, #0d0e1a 0%, #111228 100%)",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
          boxShadow: "0 4px 40px rgba(0,0,0,0.5), 0 1px 0 rgba(255,255,255,0.06) inset",
        }}
      >
        {/* Animated scan line */}
        <div
          className="vs-scan"
          style={{
            position: "absolute",
            left: 0, right: 0, height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(129,140,248,0.4), transparent)",
            pointerEvents: "none",
            zIndex: 1,
          }}
        />

        {/* Grid dots background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            opacity: 0.18,
            pointerEvents: "none",
          }}
        />

        {/* Left edge glow */}
        <div style={{
          position: "absolute", left: 0, top: 0, bottom: 0, width: "200px",
          background: "radial-gradient(ellipse at left center, rgba(99,102,241,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        {/* Right edge glow */}
        <div style={{
          position: "absolute", right: 0, top: 0, bottom: 0, width: "200px",
          background: "radial-gradient(ellipse at right center, rgba(192,132,252,0.1) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <div style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 28px",
          height: "100px",
          maxWidth: "1400px",
          margin: "0 auto",
        }}>

          {/* LEFT — Logo + Title */}
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <div style={{
              width: "42px", height: "42px",
              borderRadius: "12px",
              background: "linear-gradient(135deg, rgba(99,102,241,0.2) 0%, rgba(139,92,246,0.2) 100%)",
              border: "1px solid rgba(129,140,248,0.25)",
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 0 20px rgba(99,102,241,0.2), inset 0 1px 0 rgba(255,255,255,0.1)",
            }}>
              <HexLogo />
            </div>

            <div>
              <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
                <h1
                  className="vs-title-shimmer"
                  style={{
                    fontSize: "18px",
                    fontWeight: 700,
                    letterSpacing: "-0.03em",
                    lineHeight: 1.1,
                    margin: 0,
                  }}
                >
                  VectorShift
                </h1>
                <span style={{
                  fontSize: "10px",
                  fontWeight: 500,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.3)",
                  fontFamily: "'JetBrains Mono', monospace",
                }}>
                  Pipeline
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "2px" }}>
                <span
                  className="vs-status-badge"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "4px",
                    fontSize: "10px", fontWeight: 500,
                    color: "#63f5be",
                    letterSpacing: "0.05em",
                  }}
                >
                  <span style={{
                    width: "5px", height: "5px", borderRadius: "50%",
                    background: "#63f5be",
                    boxShadow: "0 0 6px #63f5be",
                    display: "inline-block",
                  }} />
                  Builder Active
                </span>
                <span style={{ color: "rgba(255,255,255,0.1)", fontSize: "10px" }}>·</span>
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "10px",
                  color: "rgba(255,255,255,0.25)",
                }}>
                  {nodeCount}n / {edgeCount}e
                </span>
              </div>
            </div>
          </div>

          {/* CENTER — Nav links */}
          <nav style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            {["Canvas"].map((item, i) => (
              <button
                key={item}
                className="vs-nav-btn"
                style={{
                  background: i === 0 ? "rgba(99,102,241,0.12)" : "transparent",
                  border: i === 0 ? "1px solid rgba(99,102,241,0.2)" : "1px solid transparent",
                  borderRadius: "8px",
                  padding: "8px 14px",
                  fontSize: "16px",
                  fontWeight: i === 0 ? 600 : 400,
                  color: i === 0 ? "#c7d2fe" : "rgba(255,255,255,0.45)",
                  cursor: "pointer",
                  letterSpacing: "0.01em",
                }}
              >
                {item}
              </button>
            ))}
          </nav>

        
        </div>

        {/* Bottom accent line */}
        <div style={{
          position: "absolute",
          bottom: 0, left: "5%", right: "5%",
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.4), rgba(192,132,252,0.3), transparent)",
          pointerEvents: "none",
        }} />
      </header>
    </>
  );
};

export default NavBar;