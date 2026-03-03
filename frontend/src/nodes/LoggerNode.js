import { BaseNode } from "./BaseNode";

export const LoggerNode = ({ id }) => (
  <BaseNode
    title="Logger"
    inputs={[{ id: `${id}-input` }]}
    outputs={[{ id: `${id}-output` }]}
  >
    <div>Logger Node</div>
  </BaseNode>
);