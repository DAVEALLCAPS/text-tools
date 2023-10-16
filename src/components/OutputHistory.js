import React from "react";

function OutputHistory({ history }) {
  return (
    <div className="history-container max-h-64 overflow-auto border border-white p-4 rounded-md">
      <h3 className="text-xl mb-2">Output History:</h3>
      <ul>
        {history.map((item, index) => (
          <li key={index} className="mb-2">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OutputHistory;
