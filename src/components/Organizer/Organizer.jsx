import './Organizer.css'
import VanillaTilt from 'vanilla-tilt'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {FaChevronRight} from 'react-icons/fa'
import Teachers from './Teachers'
import Students from './Students'

function Organizer(){

    useEffect(()=>{
        
        const organizers = document.querySelector('.organizers-wrap')
        const arrowIcons = document.querySelectorAll('.org-icon')
        const orgwidth = document.querySelector('.organizer').clientWidth + 30
        arrowIcons.forEach(icon => {
            icon.addEventListener("click",()=>{
                organizers.scrollLeft += icon.id === 'left' ? -orgwidth : orgwidth 
            })
        })

        VanillaTilt.init(document.querySelectorAll(".organizer"), {
            max: 15,
            speed: 300,
            glare:1,
            "max-glare":.4
        })
   },[])

    return (
        <div className="organizers-container" id="organisers">
            <h2 className='section-title'>Organizers</h2>
            <Teachers />
            <br />
            <Students />
            <Link to='/teams#members'><button className='btn btn-outline-light organizer-button'>Team Members <FaChevronRight/></button></Link>
        </div>
        
    )
}

export default Organizer