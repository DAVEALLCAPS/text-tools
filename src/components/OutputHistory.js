import React from "react";
import SmallCopyButton from "./SmallCopyButton";

function OutputHistory({ history, setShowAlert }) {
  return (
    <div className="history-container max-h-64 overflow-auto border border-white p-4 rounded-md">
      <h3 className="text-xl mb-2">Output History:</h3>
      <ul>
        {history.map((item, index) => (
          <li key={index} className="mb-2 flex items-center">
            <SmallCopyButton
              textToCopy={item}
              onCopy={() => setShowAlert(true)}
            />
            <span className="ml-2">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OutputHistory;
