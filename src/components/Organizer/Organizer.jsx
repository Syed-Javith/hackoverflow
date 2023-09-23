import './Organizer.css'
import mustafa from '../../images/organizers/mustafa.jpeg'
import suriya from '../../images/organizers/suriya.jpg'
import subash from '../../images/organizers/subash.jpg'

function Organizer(){
    return (
        <div className="organizer-container">
            <div className="organizer">
                <div className="organizer-pic">
                    <img src={mustafa} alt="" />
                </div>
                <div className="organizer-info">
                    <h2>Mustafa</h2>
                    <p className="org-year">Final Year</p>
                    <p className="org-dept">CSE Department, REC</p>
                </div>
            </div>
            <div className="organizer">
                <div className="organizer-pic">
                    <img src={suriya} alt="" />
                </div>
                <div className="organizer-info">
                    <h2>Mustafa</h2>
                    <p className="org-year">Final Year</p>
                    <p className="org-dept">CSE Department, REC</p>
                </div>
            </div>
            <div className="organizer">
                <div className="organizer-pic">
                    <img src={subash} alt="" />
                </div>
                <div className="organizer-info">
                    <h2>Mustafa</h2>
                    <p className="org-year">Final Year</p>
                    <p className="org-dept">CSE Department, REC</p>
                </div>
            </div>
        </div>
    )
}

export default Organizer