import { useState } from "react";
import { BaseNode } from "./BaseNode";
import { useStore } from "../store";

export const InputNode = ({ id, data }) => {
  const updateNodeField = useStore((s) => s.updateNodeField);

  const [name, setName] = useState(data?.inputName || "");
  const [type, setType] = useState(data?.inputType || "Text");

  const handleNameChange = (e) => {
    setName(e.target.value);
    updateNodeField(id, "inputName", e.target.value);
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
    updateNodeField(id, "inputType", e.target.value);
  };

  return (
    <BaseNode
      title="Input"
      outputs={[{ id: `${id}-value` }]}
    >
      <input
        className="w-full border rounded px-2 py-1"
        value={name}
        onChange={handleNameChange}
        placeholder="Name"
      />

      <select
        className="w-full border rounded px-2 py-1"
        value={type}
        onChange={handleTypeChange}
      >
        <option value="Text">Text</option>
        <option value="File">File</option>
      </select>
    </BaseNode>
  );
};