import './Home.css'
import Timer from '../Timer/Timer';
import logo from '../../images/glow_title.png'
import ParticleBackground from '../Particles/ParticlesBackground';
import rec from '../../images/rec_logo.png'

function Home(){
    return (
        <div className="home-container">
            <div className="home-particles">
                <ParticleBackground />
            </div>
            <div className="home-content">
                <img src={rec} alt="" className='rec-logo'/>
                <h1>Department of CSE</h1>
                <p>proudly presents</p>
                <img src={logo} alt="" className='hackoverflow-logo'/>
                <Timer />
            </div>
        </div>
    )
}

export default Home