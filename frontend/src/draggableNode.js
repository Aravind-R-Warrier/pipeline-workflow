import { NODE_THEMES, DEFAULT_THEME } from "./utils/nodeThemes";

export const DraggableNode = ({ type, label }) => {
  const theme = NODE_THEMES[type] || DEFAULT_THEME;
  const Icon = theme.icon;

  const onDragStart = (event) => {
    const appData = { nodeType: type };
    event.dataTransfer.setData("application/reactflow", JSON.stringify(appData));
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      className="vs-draggable"
      draggable
      onDragStart={onDragStart}
      title={`Drag to add ${label} node`}
      style={{
        cursor: "grab",
        width: "80px",
        borderRadius: "14px",
        background: theme.bg,
        border: `1px solid ${theme.border}`,
        boxShadow: `0 2px 14px ${theme.glow}, inset 0 1px 0 rgba(255,255,255,0.06)`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "7px",
        padding: "14px 10px",
        position: "relative",
        overflow: "hidden",
        userSelect: "none",
      }}
    >
      {/* Icon */}
      <div
        className="vs-draggable-icon"
        style={{
          width: "30px",
          height: "30px",
          borderRadius: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: theme.color,
          background: `linear-gradient(135deg, ${theme.bg}, rgba(0,0,0,0.2))`,
          border: `1px solid ${theme.border}`,
          boxShadow: `0 0 12px ${theme.glow}`,
        }}
      >
        <Icon size={18} strokeWidth={1.7} />
      </div>

      {/* Label */}
      <span
        className="vs-draggable-label"
        style={{
          fontSize: "10px",
          fontWeight: 600,
          color: theme.color,
          letterSpacing: "0.05em",
          textAlign: "center",
        }}
      >
        {label}
      </span>

      {/* Drag hint */}
      <span
        className="vs-drag-hint"
        style={{
          position: "absolute",
          bottom: "3px",
          fontSize: "7px",
          fontFamily: "'JetBrains Mono', monospace",
          color: "rgba(255,255,255,0.2)",
        }}
      >
        drag
      </span>
    </div>
  );
};

export default DraggableNode;