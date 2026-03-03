import { PipelineToolbar } from "./toolbar";
import { PipelineUI } from "./ui";
import { SubmitButton } from "./submit";
import { useState } from "react";
import { ResultModal } from "./components/ResultModal";
import Navbar from "./components/NavBar";

function App() {
  const [result, setResult] = useState(null);

  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-slate-100 via-gray-100 to-slate-200">
      {/* Header */}
        <Navbar/>

      {/* Toolbar + Submit */}
      <div className="bg-white/80 backdrop-blur border-b border-gray-200 px-4 py-3 shadow-sm flex items-center justify-between">
        {/* Left: Nodes */}
        <div className="flex-1">
          <PipelineToolbar />
        </div>

        {/* Right: Submit Button */}
        <div className="ml-6">
          <SubmitButton onResult={setResult}/>
        </div>
      </div>

      {/* Canvas */}
      <div className="flex-1 p-2 overflow-hidden">
        <div className="bg-white rounded-2xl shadow-xl h-full border border-gray-200 overflow-hidden">
          <PipelineUI />
        </div>
      </div>
      {/* Modal */}
      <ResultModal result={result} onClose={() => setResult(null)} />
    </div>
  );
}

export default App;
