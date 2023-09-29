import Particles from "react-tsparticles";
import particlesConfig from './particlesConfig';
import { loadFull } from "tsparticles";
import '../Home/Home.css'

export default function ParticleBackground() {
	const particlesInit = async (main) => {
		console.log(main);
		await loadFull(main);
	};
	const particlesLoaded = (container) => {
		console.log(container);
	};
	return (
		<Particles
			style={{width:"300px", minHeight:"100vh"}}
			options={particlesConfig} 
			id="tsparticles"
			init={particlesInit}
			loaded={particlesLoaded}
		/>
	);
}
