import { useState } from 'react';
import './Domain.css'

function DomainCard({image,title}){
    const [isFlipped, setIsFlipped] = useState(false)

    const toggleFlip = () => {
        setIsFlipped(!isFlipped)
    }

    const handleMouseLeave = () => {
        setIsFlipped(false)
    }

    const handleFlip = () => {
        setIsFlipped(false)
    }

    return (
        <div className="wrapper">
            <div className={`domain ${isFlipped ? 'flipped' : ''} `}  onMouseLeave={handleMouseLeave}>
                <div className={`domain-front ${image}`}>
                    <h2>{title}</h2>
                    <button onClick={toggleFlip}>Know More</button>
                </div>
                <div className="domain-back" onClick={handleFlip}>
                    <h2>{title}</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis possimus minima recusandae culpa, animi modi fuga asperiores cupiditate eos sint dolorum quo consectetur qui soluta laborum et odit nesciunt delectus neque rerum</p>
                </div>
            </div>
        </div>
    )
}

export default DomainCard