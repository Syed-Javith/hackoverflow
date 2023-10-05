import React from 'react'
import './TeamsPage.css'
import TeamsCard from './TeamsCard/TeamsCard'
import { members } from '../../data/Teams'
const TeamsPage = () => {
  return (
    <div>
      <div className="background"></div>
    <div className="background-texture"></div>

    <section className="carousel">
      <h2 className="title">Members</h2>
      <div className="carousel__container">
      {
        members.map((member)=> {
          return <TeamsCard index={member.index} name={member.name} year={member.year}/>
        })
      }
      </div>
    </section>
    </div>
  )
}

export default TeamsPage
