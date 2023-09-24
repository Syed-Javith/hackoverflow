import React from 'react';
import './Circle.css';

const Circle = (props) => {
  const radius = 15.9155; // Radius of the main circle

  // Calculate the coordinates of the dot at the end of the path
  const dotX = 18 + radius; // X-coordinate
  const dotY = 18; // Y-coordinate

  return (
    <div>
      <svg viewBox="0 0 36 36">
        {/* Define the orbit path */}
        <path
          id='orbitPath'
          className="circle"
          d={`M18 2.0845
              a ${radius} ${radius} 0 0 1 0 ${2 * radius}
              a ${radius} ${radius} 0 0 1 0 ${-2 * radius}`}
          fill="none"
          stroke="#444"
          strokeWidth={props.strokeWidth}
          strokeDasharray={`${props.strokeDashoffset}, 100`}
        />

        {/* Main circle */}
        <circle id="movingDot" r="2" fill="#70079b">
          <animateMotion repeatCount="indefinite" dur="60s">
            <mpath href="#orbitPath" />
          </animateMotion>
        </circle>

        {/* Small dot at the end of the path */}
        <circle cx={dotX} cy={dotY} r="2" fill="#444" />

        <text x="50%" y="50%" textAnchor="middle" dy=".3em" fill='white' fontSize="5">
          {props.text}
        </text>
      </svg>
    </div>
  );
}

export default Circle;
