import './Home.css'
import Timer from '../Timer/Timer';
import logo from '../../images/glow_title.png'
import ParticleBackground from '../Particles/ParticlesBackground';

function Home(){
    return (<div className='home'>
        <div>
            <h1>Department of CSE proudly presents</h1>
            <img src={logo}  className='home-logo'/>
            <Timer />
            <div className='particles'>
            <ParticleBackground />
            </div>
        </div>
        </div>
    );
}

export default Home