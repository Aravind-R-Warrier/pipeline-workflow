import { useState, useEffect, useRef } from "react";
import { BaseNode } from "./BaseNode";
import { useStore } from "../store";

export const TextNode = ({ id, data }) => {
  const updateNodeField = useStore((s) => s.updateNodeField);
  const [text, setText] = useState(data?.text || "{{input}}");
  const textareaRef = useRef(null);

  const variableRegex = /{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g;

const variables = [...new Set(
  [...text.matchAll(variableRegex)].map((m) => m[1])
)];

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  }, [text]);

  const handleChange = (e) => {
    setText(e.target.value);
    updateNodeField(id, "text", e.target.value);
  };

  return (
    <BaseNode
      title="Text"
      inputs={variables.map((v) => ({ id: `${id}-${v}` }))}
      outputs={[{ id: `${id}-output` }]}
    >
      <textarea
        ref={textareaRef}
        className="w-full border rounded px-2 py-1 resize-none"
        value={text}
        onChange={handleChange}
      />
    </BaseNode>
  );
};