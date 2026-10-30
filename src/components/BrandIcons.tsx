import React from 'react';

interface IconProps {
  className?: string;
}

/** Official Microsoft Excel Brand Logo */
export const ExcelIcon: React.FC<IconProps> = ({ className = 'h-7 w-7' }) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Microsoft Excel">
    {/* Back sheet with corner fold */}
    <path d="M29 6H11C8.79086 6 7 7.79086 7 10V38C7 40.2091 8.79086 42 11 42H37C39.2091 42 41 40.2091 41 38V18L29 6Z" fill="#107C41" />
    <path d="M29 6L41 18H29V6Z" fill="#185C37" opacity="0.9" />
    {/* Spreadsheet grid lines */}
    <rect x="25" y="22" width="12" height="2.8" rx="0.6" fill="#33C481" />
    <rect x="25" y="28" width="12" height="2.8" rx="0.6" fill="#33C481" />
    <rect x="25" y="34" width="12" height="2.8" rx="0.6" fill="#33C481" />
    {/* Front elevated tile with white 'X' */}
    <g filter="drop-shadow(0 2px 5px rgba(0,0,0,0.25))">
      <rect x="5" y="13" width="22" height="22" rx="3.5" fill="#21A366" />
      <path d="M10.8 18.5H13.6L16 22.8L18.4 18.5H21.2L17.5 24L21.4 29.5H18.6L16 25.1L13.4 29.5H10.6L14.5 24L10.8 18.5Z" fill="#FFFFFF" />
    </g>
  </svg>
);

/** Official Intuit QuickBooks Brand Logo */
export const QuickBooksIcon: React.FC<IconProps> = ({ className = 'h-7 w-7' }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="QuickBooks">
    <path
      d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm.642 4.1335c.9554 0 1.7296.776 1.7296 1.7332v9.0667h1.6c1.614 0 2.9275-1.3156 2.9275-2.933 0-1.6173-1.3136-2.9333-2.9276-2.9333h-.6654V7.3334h.6654c2.5722 0 4.6577 2.0897 4.6577 4.667 0 2.5774-2.0855 4.6666-4.6577 4.6666H12.642zM7.9837 7.333h3.3291v12.533c-.9555 0-1.73-.7759-1.73-1.7332V9.0662H7.9837c-1.6146 0-2.9277 1.316-2.9277 2.9334 0 1.6175 1.3131 2.9333 2.9277 2.9333h.6654v1.7332h-.6654c-2.5725 0-4.6577-2.0892-4.6577-4.6665 0-2.5771 2.0852-4.6666 4.6577-4.6666Z"
      fill="#2CA01C"
    />
  </svg>
);

/** Official ClickUp Brand Logo */
export const ClickUpIcon: React.FC<IconProps> = ({ className = 'h-7 w-7' }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="ClickUp">
    <defs>
      <linearGradient id="cu-gradient-chevron" x1="2" y1="6" x2="22" y2="6" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#8930FD" />
        <stop offset="100%" stopColor="#FF005F" />
      </linearGradient>
      <linearGradient id="cu-gradient-smile" x1="2" y1="20" x2="22" y2="20" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FFB900" />
        <stop offset="50%" stopColor="#FF4B8B" />
        <stop offset="100%" stopColor="#7B16FF" />
      </linearGradient>
    </defs>
    {/* Upward Chevron */}
    <path d="M12.04 6.15l-6.568 5.66-3.036-3.52L12.055 0l9.543 8.296-3.05 3.509z" fill="url(#cu-gradient-chevron)" />
    {/* Bottom Smile Curve */}
    <path d="M2 18.439l3.69-2.828c1.961 2.56 4.044 3.739 6.363 3.739 2.307 0 4.33-1.166 6.203-3.704L22 18.405C19.298 22.065 15.941 24 12.053 24 8.178 24 4.788 22.078 2 18.439z" fill="url(#cu-gradient-smile)" />
  </svg>
);

/** Official Microsoft 365 / Office Suite Brand Logo */
export const MicrosoftOfficeIcon: React.FC<IconProps> = ({ className = 'h-7 w-7' }) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Microsoft Office">
    <defs>
      <linearGradient id="ms365-g1" x1="9" y1="7" x2="28" y2="41" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FF6A00" />
        <stop offset="50%" stopColor="#EE3500" />
        <stop offset="100%" stopColor="#C41C00" />
      </linearGradient>
      <linearGradient id="ms365-g2" x1="28" y1="7" x2="41" y2="39" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FF9B00" />
        <stop offset="100%" stopColor="#EB3C00" />
      </linearGradient>
      <linearGradient id="ms365-g3" x1="16" y1="16" x2="28" y2="32" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FFBA66" />
        <stop offset="100%" stopColor="#F25022" />
      </linearGradient>
    </defs>
    {/* Main loop ribbon */}
    <path d="M28 5L11 10.5C9.8 10.9 9 12 9 13.3V34.7C9 36 9.8 37.1 11 37.5L28 43V5Z" fill="url(#ms365-g1)" />
    <path d="M28 5L39.5 9.8C40.4 10.2 41 11.1 41 12.1V35.9C41 36.9 40.4 37.8 39.5 38.2L28 43V32.5L34 29.5V18.5L28 15.5V5Z" fill="url(#ms365-g2)" />
    <path d="M28 15.5L16 20.2V27.8L28 32.5V15.5Z" fill="url(#ms365-g3)" />
  </svg>
);
