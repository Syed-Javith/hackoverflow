import React from 'react'
import './Register.css'
import ParticleBackground from '../Particles/ParticlesBackground'
const Register = () => {
  return (
    <>
    <ParticleBackground/>
    <div id='text'><h1>Register</h1></div>
    <div className='register-page flick'>
      <h3>About Hackoverflow:</h3>
      <p>Get ready to dive into the world of innovation and creativity at Hackoverflow 3.0. Since its inception in 2020, this event has been the platform for creativity, and now it's back for the third time, bigger and better than ever. This is a 24-hour intense development and innovation contest where participants are challenged with real-world problem statements on the spot. The event encourages participants to form teams and collaboratively brainstorm, design, develop, and present a solution from start to finish within the 24-hour timeframe, all for a chance to win exciting prizes. So bring your A-game, build a dream team, and prepare to hack, hustle, and innovate your way.</p>
      <h3>Guidelines Of HackOverflow : </h3>
     
      <ol>
        <li>Individuals or Teams: You can participate as an individual or as part of a team, with a maximum of 4 members.</li>
        <li>The team can consists of students and working professionals across the Globe.</li>
        <li>Team Integrity: Team members must remain the same throughout the event. No switching teams or joining multiple teams</li>
        <li>Code Originality: All code must be original work created during the hackathon. Avoid using pre-existing codebases.</li>
        <li>Problem Statement: Participants necessarily need not choose a problem statement provided by Hack with GDSC '23, Innovative ideas are welcomed.</li>
        <li>Abstract Submission Deadline: Projects must be submitted by 2-10-2023 - 11:59 PM. Late submissions won't be considered.</li>
        <li>Respect: Treat all participants, mentors, and organizers with respect and professionalism. Harassment of any kind will not be tolerated.</li>
        <li>Fair Play: Avoid unethical practices, cheating, or hacking beyond the scope of the event. Respect intellectual property rights.</li>
      </ol>
      <p><strong>Register for HackOverFlow</strong> <button>Here</button> </p>
    </div>
    </>
  )
}

export default Register
