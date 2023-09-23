import './Home.css'
// import hackoverflow from '../../images/logo.png'
import Navbar from '../Navbar/Navbar';
import Timer from '../Timer/Timer';
import logo from '../../images/logo.png'

function Home(){
    return (<div className='home'>
        <Navbar />
        <div>
            <h1>Department of CSE proudly presents</h1>
            {/* <img src={logo} alt='logo' width={100}/> */}
            <Timer />
        </div>
        </div>
    );
}

export default Home