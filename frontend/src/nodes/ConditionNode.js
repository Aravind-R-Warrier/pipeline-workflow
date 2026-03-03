import { BaseNode } from "./BaseNode";

export const ConditionNode = ({ id }) => (
  <BaseNode
    title="Condition"
    inputs={[{ id: `${id}-input` }]}
    outputs={[
      { id: `${id}-true` },
      { id: `${id}-false` }
    ]}
  >
    <div>Condition Node</div>
  </BaseNode>
);