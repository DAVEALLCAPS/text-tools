import React from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '../components/ui/tooltip'; 
import Button from './Button'; 

const TooltipButton = ({ onClick, children, tooltipContent, className }) => {
  return (
    <Tooltip>
      <TooltipTrigger>
        <Button onClick={onClick} className={className}>
          {children}
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>{tooltipContent}</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default TooltipButton;
