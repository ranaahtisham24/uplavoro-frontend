import React from "react";

const Payroll = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <g id="group" transform="translate(-556 -316)">
        <path
          id="Vector"
          d="M0,0H10"
          transform="translate(568 321.56)"
          fill="none"
          stroke={props?.color ? props?.color : '#696969'}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        />
        <path
          id="Vector-2"
          data-name="Vector"
          d="M2.22,0H7.78C9.56,0,10,.44,10,2.2V6.31c0,1.76-.44,2.2-2.22,2.2H2.22C.44,8.51,0,8.07,0,6.31V2.2C0,.44.44,0,2.22,0Z"
          transform="translate(568 318)"
          fill="none"
          stroke={props?.color ? props?.color : '#696969'}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        />
        <path
          id="Vector-3"
          data-name="Vector"
          d="M0,0H10"
          transform="translate(558 333.06)"
          fill="none"
          stroke={props?.color ? props?.color : '#696969'}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        />
        <path
          id="Vector-4"
          data-name="Vector"
          d="M2.22,0H7.78C9.56,0,10,.44,10,2.2V6.31c0,1.76-.44,2.2-2.22,2.2H2.22C.44,8.51,0,8.07,0,6.31V2.2C0,.44.44,0,2.22,0Z"
          transform="translate(558 329.5)"
          fill="none"
          stroke={props?.color ? props?.color : '#696969'}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        />
        <g id="Group-2" data-name="Group">
          <path
            id="Vector-5"
            data-name="Vector"
            d="M7,0A7,7,0,0,1,0,7L1.05,5.25"
            transform="translate(571 331)"
            fill="none"
            stroke={props?.color ? props?.color : '#696969'}
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
          />
          <path
            id="Vector-6"
            data-name="Vector"
            d="M0,7A7,7,0,0,1,7,0L5.95,1.75"
            transform="translate(558 318)"
            fill="none"
            stroke={props?.color ? props?.color : '#696969'}
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
          />
        </g>
        <path
          id="Vector-7"
          data-name="Vector"
          d="M0,0H24V24H0Z"
          transform="translate(556 316)"
          fill="none"
          opacity="0"
        />
      </g>
    </svg>
  );
};

export default Payroll;
