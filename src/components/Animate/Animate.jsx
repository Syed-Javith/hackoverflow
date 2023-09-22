import React from 'react'
import './Animate.css'
const Animate = (props) => {
  return (
    <div id={props?.id}>
        <div className={`animated-border-box-glow ${props?.title}`}></div>
        <div className={`animated-border-box ${props?.title}`}>
        <h1 className='abt-header'>About College</h1>
        <p className='abt-content'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia voluptatem eligendi, eaque tempora asperiores est error sint omnis unde eveniet expedita quasi ullam eum modi perferendis ut eius laboriosam assumenda.
        </p>
        </div>    
    </div>
     
  )
}

export default Animate