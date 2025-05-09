import { ReactElement } from 'react';

export const CloseIcon = ({
  className,
}: {
  className?: string;
}): ReactElement => (
  <svg
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <mask
      id="mask0_335_376"
      style={{ maskType: 'alpha' }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="16"
      height="16"
    >
      <rect width="16" height="16" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_335_376)">
      <path d="M4.26665 12.4358L3.56415 11.7333L7.29748 8.00001L3.56415 4.26668L4.26665 3.56418L7.99998 7.29751L11.7333 3.56418L12.4358 4.26668L8.70248 8.00001L12.4358 11.7333L11.7333 12.4358L7.99998 8.70251L4.26665 12.4358Z" />
    </g>
  </svg>
);
