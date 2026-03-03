import { useEffect, useState } from "react";
import { CheckCircle2, XCircle, AlertTriangle } from "lucide-react";
import { styles } from "../utils/ModalStyles";

export const ResultModal = ({ result, onClose }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setVisible(true));

    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!result) return null;

  const isEmpty = result.num_nodes === 0;
  const isValid = result.is_dag && !isEmpty;

  const STATUS_CONFIG = {
    empty: {
      title: "Empty Pipeline",
      color: "#94a3b8",
      bg: "rgba(148,163,184,0.07)",
      border: "rgba(148,163,184,0.18)",
      glow: "rgba(148,163,184,0.15)",
      message: "Add nodes to the canvas before running analysis.",
      icon: AlertTriangle,
    },
    valid: {
      title: "Graph is acyclic",
      color: "#34d399",
      bg: "rgba(52,211,153,0.07)",
      border: "rgba(52,211,153,0.18)",
      glow: "rgba(52,211,153,0.15)",
      message: "All dependencies resolve without circular references.",
      icon: CheckCircle2,
    },
    cycle: {
      title: "Cycle detected",
      color: "#f87171",
      bg: "rgba(248,113,113,0.07)",
      border: "rgba(248,113,113,0.18)",
      glow: "rgba(248,113,113,0.15)",
      message:
        "The pipeline has circular dependencies that must be resolved.",
      icon: XCircle,
    },
  };

  const status = isEmpty
    ? STATUS_CONFIG.empty
    : isValid
    ? STATUS_CONFIG.valid
    : STATUS_CONFIG.cycle;

  const Icon = status.icon;

  return (
    <>
      <style>{styles}</style>

      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
        {/* Backdrop */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 40%, rgba(99,102,241,0.18) 0%, rgba(0,0,0,0.72) 100%)",
            backdropFilter: "blur(12px)",
          }}
          onClick={onClose}
        />

        {/* Modal Card */}
        <div
          className="relative w-full overflow-hidden"
          style={{
            maxWidth: "440px",
            background:
              "linear-gradient(145deg, #1a1b2e 0%, #16172a 60%, #0f1020 100%)",
            borderRadius: "24px",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow:
              "0 32px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.1)",
            transform: visible ? "translateY(0)" : "translateY(20px)",
            opacity: visible ? 1 : 0,
            transition: "all 0.3s ease",
          }}
        >
          {/* Top Accent Line */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: "10%",
              right: "10%",
              height: "1px",
              background: `linear-gradient(90deg, transparent, ${status.color}, transparent)`,
            }}
          />

          {/* Glow */}
          <div
            style={{
              position: "absolute",
              top: "-60px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "280px",
              height: "160px",
              borderRadius: "50%",
              background: `radial-gradient(ellipse, ${status.glow} 0%, transparent 70%)`,
              pointerEvents: "none",
            }}
          />

          <div style={{ padding: "32px" }}>
            {/* Header */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "28px",
              }}
            >
              <div>
                <p
                  style={{
                    fontSize: "11px",
                    letterSpacing: "0.12em",
                    color: "rgba(255,255,255,0.35)",
                    textTransform: "uppercase",
                    marginBottom: "6px",
                  }}
                >
                  Analysis Report
                </p>
                <h2
                  style={{
                    fontSize: "22px",
                    fontWeight: 800,
                    color: "#fff",
                  }}
                >
                  Pipeline Inspection
                </h2>
              </div>

              {/* Badge */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "7px 14px",
                  borderRadius: "100px",
                  fontSize: "12px",
                  fontWeight: 600,
                  color: status.color,
                  background: status.bg,
                  border: `1px solid ${status.border}`,
                }}
              >
                <Icon size={14} strokeWidth={2} />
                {isEmpty
                  ? "Empty Pipeline"
                  : isValid
                  ? "Valid DAG"
                  : "Cycle Detected"}
              </div>
            </div>

            {/* Stats */}
            {!isEmpty && (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "12px",
                  marginBottom: "24px",
                }}
              >
                {[
                  { label: "Nodes", value: result.num_nodes },
                  { label: "Edges", value: result.num_edges },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    style={{
                      background: "rgba(99,102,241,0.08)",
                      border: "1px solid rgba(99,102,241,0.15)",
                      borderRadius: "16px",
                      padding: "20px 16px",
                      textAlign: "center",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "11px",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,0.4)",
                        marginBottom: "10px",
                      }}
                    >
                      {label}
                    </p>
                    <p
                      style={{
                        fontSize: "40px",
                        fontWeight: 800,
                        color: "#818cf8",
                      }}
                    >
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Status Message */}
            <div
              style={{
                borderRadius: "14px",
                padding: "16px 20px",
                marginBottom: "24px",
                display: "flex",
                gap: "12px",
                background: status.bg,
                border: `1px solid ${status.border}`,
              }}
            >
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: status.glow,
                  color: status.color,
                }}
              >
                <Icon size={18} strokeWidth={2.2} />
              </div>

              <div>
                <p
                  style={{
                    fontSize: "13px",
                    fontWeight: 600,
                    color: status.color,
                    marginBottom: "4px",
                  }}
                >
                  {status.title}
                </p>

                <p
                  style={{
                    fontSize: "12px",
                    color: "rgba(255,255,255,0.4)",
                  }}
                >
                  {status.message}
                </p>
              </div>
            </div>

            {/* Close */}
            <button
              onClick={onClose}
              style={{
                width: "100%",
                padding: "14px",
                borderRadius: "14px",
                border: "none",
                fontWeight: 600,
                cursor: "pointer",
                background: "linear-gradient(90deg,#6366f1,#8b5cf6)",
                color: "#fff",
              }}
            >
              Close Report
            </button>

            <p
              style={{
                textAlign: "center",
                marginTop: "12px",
                fontSize: "11px",
                color: "rgba(255,255,255,0.2)",
              }}
            >
              Press ESC to dismiss
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResultModal;