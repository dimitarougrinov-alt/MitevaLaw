interface LogoProps {
  color?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ color = '#1B3050', size = 'md' }: LogoProps) {
  const heights = { sm: 36, md: 44, lg: 56 };
  const h = heights[size];

  return (
    <svg
      viewBox="0 0 220 48"
      height={h}
      width="auto"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Ani Miteva – Attorney at Law"
    >
      {/* Mountain peaks */}
      <g transform="translate(0, 4)">
        {/* Back peak */}
        <path
          d="M 22 36 L 34 10 L 46 36"
          fill="none"
          stroke={color}
          strokeWidth="1.2"
          strokeLinejoin="round"
          opacity="0.35"
        />
        {/* Front main peak */}
        <path
          d="M 4 36 L 20 6 L 36 36"
          fill="none"
          stroke={color}
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        {/* Snow cap fill */}
        <path
          d="M 14 22 L 20 10 L 26 22 Z"
          fill={color}
          opacity="0.12"
        />
        {/* Golden accent line — summit */}
        <path
          d="M 18 16 L 20 10 L 22 16"
          fill="none"
          stroke="#5299C8"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </g>

      {/* Vertical divider */}
      <line x1="56" y1="6" x2="56" y2="42" stroke={color} strokeWidth="0.8" opacity="0.25" />

      {/* Name text */}
      <text
        x="66"
        y="24"
        fontFamily="var(--font-cormorant), Georgia, serif"
        fontSize="19"
        fontWeight="500"
        fill={color}
        letterSpacing="0.04em"
      >
        ANI MITEVA
      </text>

      {/* Subtitle */}
      <text
        x="66"
        y="38"
        fontFamily="var(--font-dm-sans), Arial, sans-serif"
        fontSize="7.5"
        fontWeight="400"
        fill={color}
        letterSpacing="0.2em"
        opacity="0.65"
      >
        ATTORNEY AT LAW
      </text>
    </svg>
  );
}
