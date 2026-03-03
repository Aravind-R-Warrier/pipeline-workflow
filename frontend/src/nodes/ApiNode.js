import { BaseNode } from "./BaseNode";

export const ApiNode = ({ id }) => (
  <BaseNode
    title="API"
    inputs={[{ id: `${id}-input` }]}
    outputs={[{ id: `${id}-response` }]}
  >
    <div>API Node</div>
  </BaseNode>
);