import React from 'react'
import game from '../../images/domains/GAME.png'
import block from '../../images/domains/block chain.png'
import ai from '../../images/domains/AI.png'
import ar from '../../images/domains/AR VR.png'
import web from '../../images/domains/Asset 1.png'
import surprise from '../../images/domains/surprise domain.png'



import './Domain.css'
// import { Button } from 'react-bootstrap/Button'
const Domain = () => {
  return (
    <>
        <div class="wrapper">
        <div class="card-container">
            <img src={ai}/>
            <h2>AI</h2>
            <button type="button">Know more</button>
            <div class="descriptions">
                <p>
                Unlock boundless potential with AI! Harness AI's power to decipher complex puzzles, predict outcomes and revolutionize industries. AI's ability to process vast amounts of data, recognize patterns and make predictions empowers industries to optimize operations, enhance decision-making and create innovative solutions.
                </p>
                
            </div>
        </div>
        <div class="card-container">
            <img src={ar} />
            <h2>AR/VR</h2>
            <button type="button">Know more</button>
            <div class="descriptions">
                
                <p>
                Step into a new dimension with AR and VR! This cutting edge technology is used to blend the physical and digital world. AR enhances your reality while VR immerses you in entirely new worlds. They revolutionize education, healthcare, and entertainment, transforming problems into immersive, engaging experiences.                
                </p>
                <p style={{color:"#fff600"}}>*Requested to bring your own equipments</p>
                
            </div>
        </div>
        <div class="card-container">
            <img src={block} />
            <h2>Blockchain</h2>
            <button type="button">Know more</button>
            <div class="descriptions">
                <p>
                Utilize blockchain's secure, transparent, and decentralized features to convert problems into solutions. Eliminate the need for intermediaries, instill trust, and redefine across various domains. Beyond cryptocurrencies, blockchain is used in supply chains, identity verification, smart contracts, and more.       
                 </p>
                
            </div>
        </div>
        
        <div class="card-container">
            <img src={game} />
            <h2>Game Development</h2>
            <button type="button">Know more</button>
            <div class="descriptions">
                <p>
                Game On! Join the ultimate game development showdown. Unleash your creativity, build breathtaking worlds, and fortify against digital threats. In this epic competition, your imagination is your greatest asset, and security is your winning strategy. Let the games begin!                
                </p>
            </div>
        </div>
        <div class="card-container">
            <img src={web} />
            <h2>Web Development with security</h2>
            <button type="button">Know more</button>
            <div class="descriptions">
                <p>
                Web development: where creativity meets cybersecurity. Building stunning websites demands more than just code – it demands an ironclad shield against cyber threats. Secure coding, encryption, and updates are our tools to protect your data and keep the website safe.      
                </p>
                
            </div>
        </div>
    
        <div class="card-container">
            <img src={surprise} />
            <h2>UiPath</h2>
            <button type="button">Know more</button>
            <div class="descriptions">
                <p>

                </p>
                
            </div>
        </div>
        <div class="card-container">
            <img src={surprise} />
            <h2>Surprise</h2>
            <button type="button">Know more</button>
            <div class="descriptions">
                <p>

                </p>
                
            </div>
        </div>
        
    </div>


    </>
  )
}

export default Domain