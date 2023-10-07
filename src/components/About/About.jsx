import './About.css'
import recLogo from '../../images/rec-circle.png'
import hackLogo from '../../images/hack-circle.png'
import TypeWriter from './TypeWriter';

function About(){
    return (
        <div className='section-wrapper'>
            <h2 className='section-title'>About Us</h2>
            <section id='about-section'>
                <div className="center-box">
                    <div className={`animated-border-box-glow `}></div>
                    <div className={`animated-border-box about-container`}>
                        <div className='abt-header'>
                            <img src={recLogo} alt='clg-logo' height={75} width={75} />
                            <h1 className='abt-title'>About College</h1>
                        </div>
                        <TypeWriter
                        text="Coontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage."
                        />
                        
                        <hr className='abt-hr' />
                        <div className='abt-header hack-header'>
                            <img src={hackLogo} alt='clg-logo' height={75} width={75} />
                            <h1 className='abt-title'>About Hackoverflow</h1>
                        </div>
                        
                        <TypeWriter
                        text="Coontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage."
                        />  
                    </div>    
                </div>
            </section>
        </div>
    );
}

export default About