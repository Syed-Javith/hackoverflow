import React from 'react'
import './Circle.css'
const Circle = (props) => {
  return (
    <div>
      <svg viewBox="0 0 36 36"> 
 <path 
  className="circle" d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
    fill="none"
    stroke="#444"
    strokeWidth={props.strokeWidth}
    strokeDasharray= {props.strokeDashoffset+", 100"
 } 
  />
  <text x="50%" y="50%" textAnchor="middle" dy=".3em" fill='white' fontSize="5">
    {props.text}
  </text>
</svg>
    </div>
  )
}

export default Circle
