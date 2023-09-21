import {Route, BrowserRouter as Router} from "react-router-dom"
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Domain from "./components/Domain/Domain";

function App() {
  return (
    <Router>
      <Navbar />
      <Home />
      <About />
      <Domain />
    </Router>
  );
}

export default App;
