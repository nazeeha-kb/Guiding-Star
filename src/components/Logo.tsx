import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

export const Logo: React.FC<LogoProps> = ({ className = 'w-9 h-9', size = 36 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Guiding Star Logo"
    >
      <defs>
        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0B3442" />
          <stop offset="45%" stopColor="#15586D" />
          <stop offset="100%" stopColor="#2E869E" />
        </linearGradient>
        <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0E3D4E" />
          <stop offset="100%" stopColor="#328FA8" />
        </linearGradient>
      </defs>

      {/* Dynamic Guiding Star (top-right) */}
      <path
        d="M75 14L81.2 32.5L98 34L85 45.2L89 61.5L73.5 52.8L59 62.5L62.8 45.8L49 35.2L66.5 33L75 14Z"
        fill="url(#starGradient)"
      />
      <path
        d="M74.8 28.5L78.2 39.5L88 40.5L80.5 47L82.8 56.5L74 51.5L65.5 57L67.8 47.5L60 41L69.8 39.8L74.8 28.5Z"
        fill="#FAF7F2"
      />

      {/* Main Left Cresting Wave */}
      <path
        d="M14 55C12 40 22 28 36 29C46 30 52 38 49 48C46 56 36 60 27 57C20 54 18 47 21 41C24 37 31 35 34 38C37 41 35 46 32 47C29 48 26 46 27 43C28 41 31 40 32 42C26 44 26 53 34 54C43 55 50 47 48 37C46 27 34 22 22 26C11 30 6 45 10 59C12 67 19 74 29 78C37 81 48 80 58 74C68 68 76 66 84 68C76 63 67 63 58 68C48 74 38 75 30 73C21 70 15 64 14 55Z"
        fill="url(#waveGradient)"
      />

      {/* Upper Wave Ribbon */}
      <path
        d="M20 66C32 64 45 61 58 61C70 61 80 65 90 71C80 63 68 57 55 57C42 57 30 60 18 64C16 64 18 65 20 66Z"
        fill="url(#waveGradient)"
      />

      {/* Middle Wave Ribbon */}
      <path
        d="M17 73C30 72 44 69 57 69C70 69 82 74 94 82C82 72 68 65 54 65C40 65 27 68 15 71C14 71 15 72 17 73Z"
        fill="url(#waveGradient)"
      />

      {/* Lower Wave Ribbon */}
      <path
        d="M26 81C38 80 50 78 63 78C74 78 84 83 93 91C83 81 71 74 58 74C46 74 34 76 22 79C22 80 24 80 26 81Z"
        fill="url(#waveGradient)"
      />
    </svg>
  );
};
