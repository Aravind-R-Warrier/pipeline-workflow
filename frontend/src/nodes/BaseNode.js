import { Handle, Position } from "reactflow";

export const BaseNode = ({
  title,
  inputs = [],
  outputs = [],
  children,
  className = "",
}) => {
  return (
    <div className={`bg-white shadow-lg rounded-2xl border border-gray-200 min-w-[220px] p-3 ${className}`}>
      
      {/* Header */}
      <div className="font-semibold text-gray-700 mb-2 border-b pb-1">
        {title}
      </div>

      {/* Dynamic Input Handles */}
      {inputs.map((input, index) => (
        <Handle
          key={input.id}
          type="target"
          position={Position.Left}
          id={input.id}
          style={{ top: `${(index + 1) * (100 / (inputs.length + 1))}%` }}
          className="!bg-blue-500"
        />
      ))}

      {/* Body */}
      <div className="text-sm text-gray-600 space-y-2">
        {children}
      </div>

      {/* Dynamic Output Handles */}
      {outputs.map((output, index) => (
        <Handle
          key={output.id}
          type="source"
          position={Position.Right}
          id={output.id}
          style={{ top: `${(index + 1) * (100 / (outputs.length + 1))}%` }}
          className="!bg-green-500"
        />
      ))}
    </div>
  );
};