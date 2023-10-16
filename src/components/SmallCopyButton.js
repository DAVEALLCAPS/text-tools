import React from "react";
import TooltipButton from "./TooltipButton";
import { HiOutlineClipboardDocumentCheck } from "react-icons/hi2";

function SmallCopyButton({ textToCopy, onCopy = () => {} }) {
  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy);
    onCopy();
  };

  return (
    <TooltipButton
      onClick={handleCopy}
      tooltipContent="Click to copy text"
      className="p-1"
    >
      <HiOutlineClipboardDocumentCheck />
    </TooltipButton>
  );
}

export default SmallCopyButton;
