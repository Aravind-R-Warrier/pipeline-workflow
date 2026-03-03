// nodeThemes.js

import {
  ArrowRightToLine,
  ArrowLeftToLine,
  Sparkles,
  FileText,
  Globe,
  CompassIcon,
  Clock,
  FileCode,
  Shuffle
} from "lucide-react";

export const NODE_THEMES = {
  customInput: {
    color: "#34d399",
    bg: "rgba(52,211,153,0.08)",
    border: "rgba(52,211,153,0.2)",
    glow: "rgba(52,211,153,0.3)",
    icon: ArrowRightToLine,
  },

  customOutput: {
    color: "#f472b6",
    bg: "rgba(244,114,182,0.08)",
    border: "rgba(244,114,182,0.2)",
    glow: "rgba(244,114,182,0.3)",
    icon: ArrowLeftToLine,
  },

  llm: {
    color: "#818cf8",
    bg: "rgba(129,140,248,0.08)",
    border: "rgba(129,140,248,0.2)",
    glow: "rgba(129,140,248,0.35)",
    icon: Sparkles,
  },

  text: {
    color: "#60a5fa",
    bg: "rgba(96,165,250,0.08)",
    border: "rgba(96,165,250,0.2)",
    glow: "rgba(96,165,250,0.3)",
    icon: FileText,
  },

  api: {
    color: "#2dd4bf",
    bg: "rgba(45,212,191,0.08)",
    border: "rgba(45,212,191,0.2)",
    glow: "rgba(45,212,191,0.3)",
    icon: Globe,
  },

  condition: {
    color: "#fbbf24",
    bg: "rgba(251,191,36,0.08)",
    border: "rgba(251,191,36,0.2)",
    glow: "rgba(251,191,36,0.3)",
    icon: CompassIcon,
  },

  delay: {
    color: "#fb923c",
    bg: "rgba(251,146,60,0.08)",
    border: "rgba(251,146,60,0.2)",
    glow: "rgba(251,146,60,0.3)",
    icon: Clock,
  },

  logger: {
    color: "#a3e635",
    bg: "rgba(163,230,53,0.08)",
    border: "rgba(163,230,53,0.2)",
    glow: "rgba(163,230,53,0.3)",
    icon: FileCode,
  },

  transform: {
    color: "#c084fc",
    bg: "rgba(192,132,252,0.08)",
    border: "rgba(192,132,252,0.2)",
    glow: "rgba(192,132,252,0.3)",
    icon: Shuffle,
  },
};

export const DEFAULT_THEME = {
  color: "#94a3b8",
  bg: "rgba(148,163,184,0.08)",
  border: "rgba(148,163,184,0.2)",
  glow: "rgba(148,163,184,0.25)",
  icon: FileText,
};