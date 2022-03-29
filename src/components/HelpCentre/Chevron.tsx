import React from 'react';

function Chevron({className, height, width, fill}: any) {
  return (
    <svg
      className={className}
      height={height}
      width={width}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={fill}
        d="M19.2188 9.21875H10.7812V0.78125C10.7812 0.349766 10.4315 0 10 0C9.56852 0 9.21875 0.349766 9.21875 0.78125V9.21875H0.78125C0.349766 9.21875 0 9.56852 0 10C0 10.4315 0.349766 10.7812 0.78125 10.7812H9.21875V19.2188C9.21875 19.6502 9.56852 20 10 20C10.4315 20 10.7812 19.6502 10.7812 19.2188V10.7812H19.2188C19.6502 10.7812 20 10.4315 20 10C20 9.56852 19.6502 9.21875 19.2188 9.21875Z"
        stroke="black" stroke-width="1"
      
      />
    </svg>
  );
}

export default Chevron;

