import React from 'react';

export default function AcadiaLogo({ className = "h-12" }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 1000 200" 
      fill="currentColor"
      className={className}
    >
      <g>
        {/* "a" */}
        <path d="M45 155 Q45 75 95 75 Q145 75 145 125 Q145 155 125 155 H45 M55 145 H115 Q135 145 135 125 Q135 85 95 85 Q55 85 55 125 V145 Z M45 155 V125"/>
        
        {/* "c" */}
        <path d="M170 130 Q170 85 205 85 Q240 85 240 110 L230 110 Q230 95 205 95 Q180 95 180 130 Q180 165 205 165 Q230 165 230 150 L240 150 Q240 175 205 175 Q170 175 170 130 Z"/>
        
        {/* Lighthouse */}
        <g transform="translate(290, 20)">
          {/* Light beams */}
          <path d="M 25 55 L -10 35" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
          <path d="M 20 70 L -15 65" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
          <path d="M 25 85 L -5 95" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
          
          {/* Tower body */}
          <path d="M 30 155 L 22 70 Q 22 65 25 60 L 35 60 Q 38 65 38 70 L 30 155 Z"/>
          
          {/* Light house top */}
          <path d="M 15 60 L 30 25 L 45 60 Z"/>
          
          {/* Top ball */}
          <circle cx="30" cy="18" r="8"/>
          
          {/* Window */}
          <rect x="20" y="75" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="3"/>
          <line x1="30" y1="75" x2="30" y2="95" stroke="currentColor" strokeWidth="2"/>
          
          {/* Base */}
          <path d="M 15 155 L 10 170 L 50 170 L 45 155 Z"/>
        </g>
        
        {/* "a" (second) */}
        <path d="M385 155 Q385 75 435 75 Q485 75 485 125 Q485 155 465 155 H385 M395 145 H455 Q475 145 475 125 Q475 85 435 85 Q395 85 395 125 V145 Z M385 155 V125"/>
        
        {/* "d" */}
        <path d="M510 155 Q510 75 560 75 Q610 75 610 115 Q610 155 590 155 H510 M520 145 H580 Q600 145 600 115 Q600 85 560 85 Q520 85 520 115 V145 Z M610 45 V175"/>
        
        {/* "i" */}
        <path d="M635 75 V175 M635 45 V60"/>
        
        {/* "a" (third) */}
        <path d="M660 155 Q660 75 710 75 Q760 75 760 125 Q760 155 740 155 H660 M670 145 H730 Q750 145 750 125 Q750 85 710 85 Q670 85 670 125 V145 Z M660 155 V125"/>
      </g>
    </svg>
  );
}
