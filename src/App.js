import Navbar from "./components/Navbar/Navbar";
import Domain from "./components/Domain/Domain";
import Organizer from "./components/Organizer/Organizer";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import logo from './images/logo.png'
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Domain />
      <Organizer />
      <Footer />
    </>
  );
}

export default App;
