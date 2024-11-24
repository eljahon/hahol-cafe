import React from "react";

export const DetailStarIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={31}
      height={29}
      viewBox="0 0 31 29"
      fill="none"
    >
      <g filter="url(#filter0_d_1_1196)">
        <path
          d="M15.5 3L18.0819 10.9463H26.4371L19.6776 15.8574L22.2595 23.8037L15.5 18.8926L8.74047 23.8037L11.3224 15.8574L4.56285 10.9463H12.9181L15.5 3Z"
          fill="#FFC24A"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_1_1196"
          x="0.562866"
          y={0}
          width="29.8743"
          height="28.8037"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={1} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.333333 0 0 0 0 0.333333 0 0 0 0 0.333333 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_1196"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1_1196"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
