import { BaseNode } from "./BaseNode";

export const TransformNode = ({ id }) => (
  <BaseNode
    title="Transform"
    inputs={[{ id: `${id}-input` }]}
    outputs={[{ id: `${id}-output` }]}
  >
    <div>Transform Node</div>
  </BaseNode>
);