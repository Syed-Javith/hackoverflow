import React, { useEffect } from 'react'
import mustafa from '../../images/organizers/mustafa.jpeg'
import suriya from '../../images/organizers/suriya.jpg'
import subash from '../../images/organizers/subash.jpg'
import joshua from '../../images/organizers/joshua.jpg'
import keerthana from '../../images/organizers/keerthana.jpg'
import manosanjay from '../../images/organizers/manosanjay.jpeg'
import {FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import VanillaTilt from 'vanilla-tilt'
const Students = () => {
    useEffect(()=>{
        
        const organizers = document.querySelector('.organizers-wrap-student')
        const arrowIcons = document.querySelectorAll('.org-icon-student')
        const orgwidth = document.querySelector('.organizer-student').clientWidth + 30
        arrowIcons.forEach(icon => {
            icon.addEventListener("click",()=>{
                organizers.scrollLeft += icon.id === 'left' ? -orgwidth : orgwidth 
            })
        })

        VanillaTilt.init(document.querySelectorAll(".organizer-student"), {
            max: 15,
            speed: 300,
            glare:1,
            "max-glare":.4
        })
   },[])

  return (
    <div>
      <div className="organizers-main-wrapper">
                <div className="org-icon-student" id='left'><FaAngleLeft /></div>
                <div className="organizers-wrap-student">
                <div className="organizer-student">
                        <img src={keerthana} alt="" />
                        <div className="organizer-info">
                            <h2>Keerthana</h2>
                            <p className="position">
                                AIML Enthusiast
                            </p>
                        </div>
                    </div>
                    <div className="organizer-student">
                        <img src={mustafa} alt="" />
                        <div className="organizer-info">
                            <h2>Mustafa</h2>
                            <p className="position">
                                Full Stack Developer
                            </p>
                        </div>
                    </div>
                    
                    <div className="organizer-student">
                        <img src={subash} alt="" />
                        <div className="organizer-info">
                            <h2>Subash B</h2>
                            <p className="position">
                                Ethical Hacker
                            </p>
                        </div>
                    </div>

                    <div className="organizer-student">
                        <img src={suriya} alt="" />
                        <div className="organizer-info">
                            <h2>Suriya Prakash</h2>
                            <p className="position">
                                Android App Developer
                            </p>
                        </div>
                    </div>
                    
                    <div className="organizer-student">
                        <img src={joshua} alt="" />
                        <div className="organizer-info">
                            <h2>Joshua David</h2>
                            <p className="position">
                                Ethical Hacker
                            </p>
                        </div>
                    </div>
                    <div className="organizer-student">
                        <img src={keerthana} alt="" />
                        <div className="organizer-info">
                            <h2>Keerthana</h2>
                            <p className="position">
                                AIML Enthusiast
                            </p>
                        </div>
                    </div>
                    <div className="organizer-student">
                        <img src={mustafa} alt="" />
                        <div className="organizer-info">
                            <h2>Mustafa</h2>
                            <p className="position">
                                Full Stack Developer
                            </p>
                        </div>
                    </div>
                    
                    <div className="organizer-student">
                        <img src={subash} alt="" />
                        <div className="organizer-info">
                            <h2>Subash B</h2>
                            <p className="position">
                                Ethical Hacker
                            </p>
                        </div>
                    </div>

                    <div className="organizer-student">
                        <img src={suriya} alt="" />
                        <div className="organizer-info">
                            <h2>Suriya Prakash</h2>
                            <p className="position">
                                Android App Developer
                            </p>
                        </div>
                    </div>
                    
                    <div className="organizer-student">
                        <img src={joshua} alt="" />
                        <div className="organizer-info">
                            <h2>Joshua David</h2>
                            <p className="position">
                                Ethical Hacker
                            </p>
                        </div>
                    </div>
                </div>
                <div className="org-icon-student" icon='right'><FaAngleRight /></div>
            </div> 
    </div>
  )
}

export default Students
