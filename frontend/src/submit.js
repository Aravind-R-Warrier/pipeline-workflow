import { useStore } from "./store";
import { useState } from "react";

export const SubmitButton = ({ onResult }) => {
  const { nodes, edges } = useStore((state) => ({
    nodes: state.nodes,
    edges: state.edges,
  }));

  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);

      const response = await fetch("http://127.0.0.1:8000/pipelines/parse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nodes: nodes.map((n) => ({ id: n.id })),
          edges: edges.map((e) => ({
            source: e.source,
            target: e.target,
          })),
        }),
      });

      const data = await response.json();
      onResult(data); // 🔥 send to parent

    } catch (error) {
      console.error("Submission failed:", error);
      alert("Something went wrong. Check backend.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleSubmit}
      disabled={loading}
      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow transition disabled:opacity-50"
    >
      {loading ? "Processing..." : "Submit Pipeline"}
    </button>
  );
};