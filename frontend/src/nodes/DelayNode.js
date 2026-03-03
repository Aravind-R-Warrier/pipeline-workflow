import { BaseNode } from "./BaseNode";

export const DelayNode = ({ id }) => (
  <BaseNode
    title="Delay"
    inputs={[{ id: `${id}-input` }]}
    outputs={[{ id: `${id}-output` }]}
  >
    <div>Delay Node</div>
  </BaseNode>
);