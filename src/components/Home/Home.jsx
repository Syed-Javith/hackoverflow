import './Home.css'
// import hackoverflow from '../../images/logo.png'
import Navbar from '../Navbar/Navbar';
import Timer from '../Timer/Timer';

function Home(){
    return (<div className='home'>
        <Navbar />
        <div>
            <h1>Department of CSE proudly presents</h1>
            <img src="" alt='logo' height={300} width={300}/>
            <Timer />
        </div>
        </div>
    );
}

export default Home