import React, { useEffect } from 'react'
import mustafa from '../../images/organizers/mustafa.jpeg'
import suriya from '../../images/organizers/suriya.jpg'
import subash from '../../images/organizers/subash.jpg'
import joshua from '../../images/organizers/joshua.jpg'
import rhikshitha from '../../images/organizers/rhikshitha.jpeg'
import manosanjay from '../../images/organizers/manosanjay.jpeg'
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa'
import VanillaTilt from 'vanilla-tilt'

const Teachers = () => {
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
    <div>
      <div className="organizers-main-wrapper">
                <div className="org-icon" id='left'><FaAngleLeft /></div>
                <div className="organizers-wrap">
                    <div className="organizer">
                        <img src={mustafa} alt="" />
                        <div className="organizer-info">
                            <h2>Mustafa</h2>
                            <p className="position">
                                Full Stack Developer
                            </p>
                        </div>
                    </div>
                    <div className="organizer">
                        <img src={suriya} alt="" />
                        <div className="organizer-info">
                            <h2>Suriya Prakash</h2>
                            <p className="position">
                                Android App Developer
                            </p>
                        </div>
                    </div>
                    <div className="organizer">
                        <img src={subash} alt="" />
                        <div className="organizer-info">
                            <h2>Subash B</h2>
                            <p className="position">
                                Ethical Hacker
                            </p>
                        </div>
                    </div>
                    <div className="organizer">
                        <img src={rhikshitha} alt="" />
                        <div className="organizer-info">
                            <h2>Rhikshitha</h2>
                            <p className="position">
                                AIML Enthusiast
                            </p>
                        </div>
                    </div>
                    <div className="organizer">
                        <img src={manosanjay} alt="" />
                        <div className="organizer-info">
                            <h2>Mano Sanjay</h2>
                            <p className="position">
                                Android App Developer
                            </p>
                        </div>
                    </div>
                    <div className="organizer">
                        <img src={joshua} alt="" />
                        <div className="organizer-info">
                            <h2>Joshua David</h2>
                            <p className="position">
                                Ethical Hacker
                            </p>
                        </div>
                    </div>
                    <div className="organizer">
                        <img src={mustafa} alt="" />
                        <div className="organizer-info">
                            <h2>Mustafa</h2>
                            <p className="position">
                                Full Stack Developer
                            </p>
                        </div>
                    </div>
                    <div className="organizer">
                        <img src={suriya} alt="" />
                        <div className="organizer-info">
                            <h2>Suriya Prakash</h2>
                            <p className="position">
                                Android App Developer
                            </p>
                        </div>
                    </div>
                    <div className="organizer">
                        <img src={subash} alt="" />
                        <div className="organizer-info">
                            <h2>Subash B</h2>
                            <p className="position">
                                Ethical Hacker
                            </p>
                        </div>
                    </div>
                    <div className="organizer">
                        <img src={rhikshitha} alt="" />
                        <div className="organizer-info">
                            <h2>Rhikshitha</h2>
                            <p className="position">
                                AIML Enthusiast
                            </p>
                        </div>
                    </div>
                    <div className="organizer">
                        <img src={manosanjay} alt="" />
                        <div className="organizer-info">
                            <h2>Mano Sanjay</h2>
                            <p className="position">
                                Android App Developer
                            </p>
                        </div>
                    </div>
                </div>
                <div className="org-icon" icon='right'><FaAngleRight /></div>
            </div> 
    </div>
  )
}

export default Teachers