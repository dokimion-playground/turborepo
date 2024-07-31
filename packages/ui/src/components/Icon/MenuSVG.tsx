import React, { SVGProps } from 'react';

export const MenuSVG = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      cursor={'pointer'}
      {...props}
    >
      <path
        d="M3 12H21M3 6H21M3 18H21"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="square"
        fill={props.color || '#000'}
      />
    </svg>
  );
};
