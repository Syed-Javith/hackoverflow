import './About.css'
import gif1 from '../../images/gif4.gif'
import Animate from '../Animate/Animate';
function About(){
    return (
        <section id='about-section'>
            {/* <img className='abt-gif' src={gif1} alt='about-us-img'/> */}
            <div className='container-abt'>
                <div className="center-box">
                    <Animate title="rec-info" id="not-top" />
                    <Animate title="hackoverflow-info" id="top" />
                </div>
            </div>
        </section>
    );
}

export default About