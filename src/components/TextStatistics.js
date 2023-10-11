import React, { useEffect, useState } from 'react';

const TextStatistics = ({ inputText, compareText }) => {
  const [statistics, setStatistics] = useState({
    characterCount: 0,
    wordCount: 0,
    lineCount: 0,
    byteSize: 0,
    characterDiff: 0,
    wordDiff: 0,
    lineDiff: 0,
    byteDiff: 0,
  });

  const getDiffColor = (diff) => {
    if (diff > 0) return 'green';
    if (diff < 0) return 'red';
    return 'gray';
  };

  useEffect(() => {
    const getStats = (text) => ({
      characterCount: text.length,
      wordCount: text.split(/\s+/).filter(Boolean).length,
      lineCount: text.split(/\r\n|\r|\n/).length,
      byteSize: new Blob([text]).size,
    });

    const inputStats = getStats(inputText);
    const compareStats = compareText ? getStats(compareText) : inputStats;

    setStatistics({
      ...inputStats,
      characterDiff: inputStats.characterCount - compareStats.characterCount,
      wordDiff: inputStats.wordCount - compareStats.wordCount,
      lineDiff: inputStats.lineCount - compareStats.lineCount,
      byteDiff: inputStats.byteSize - compareStats.byteSize,
    });
  }, [inputText, compareText]);

  return (
    <div className="font-bold">
      <p>
        Character Count: {statistics.characterCount} {" "}
        <span style={{ color: getDiffColor(statistics.characterDiff) }}>
          ({statistics.characterDiff >= 0 ? "+" : ""}{statistics.characterDiff})
        </span>
      </p>
      <p>
        Word Count: {statistics.wordCount} {" "}
        <span style={{ color: getDiffColor(statistics.wordDiff) }}>
          ({statistics.wordDiff >= 0 ? "+" : ""}{statistics.wordDiff})
        </span>
      </p>
      <p>
        Line Count: {statistics.lineCount} {" "}
        <span style={{ color: getDiffColor(statistics.lineDiff) }}>
          ({statistics.lineDiff >= 0 ? "+" : ""}{statistics.lineDiff})
        </span>
      </p>
      <p>
        Byte Size: {statistics.byteSize} {" "}
        <span style={{ color: getDiffColor(statistics.byteDiff) }}>
          ({statistics.byteDiff >= 0 ? "+" : ""}{statistics.byteDiff})
        </span>
      </p>
    </div>
  );
};

export default TextStatistics;
