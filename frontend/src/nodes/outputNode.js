import { useState } from "react";
import { BaseNode } from "./BaseNode";
import { useStore } from "../store";

export const OutputNode = ({ id, data }) => {
  const updateNodeField = useStore((s) => s.updateNodeField);

  const [name, setName] = useState(data?.outputName || "");
  const [type, setType] = useState(data?.outputType || "Text");

  return (
    <BaseNode
      title="Output"
      inputs={[{ id: `${id}-value` }]}
    >
      <input
        className="w-full border rounded px-2 py-1"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          updateNodeField(id, "outputName", e.target.value);
        }}
        placeholder="Name"
      />

      <select
        className="w-full border rounded px-2 py-1"
        value={type}
        onChange={(e) => {
          setType(e.target.value);
          updateNodeField(id, "outputType", e.target.value);
        }}
      >
        <option value="Text">Text</option>
        <option value="File">Image</option>
      </select>
    </BaseNode>
  );
};