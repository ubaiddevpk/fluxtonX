import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home";
import AboutUs from './Pages/AboutUs';
import Services from './Pages/Services';
import Portfolio from './Pages/Portfolio';
import ContactUs from './Pages/ContactUs';
import Footer from "./Components/Footer";
import ReadMore from "./Pages/ReadMore";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Navbar />

          <Routes>

            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<AboutUs />} />
            <Route exact path="/services" element={<Services />} />
            <Route exact path="/portfolio" element={<Portfolio />} />
            <Route exact path="/contact" element={<ContactUs />} />
            <Route exact path="/readmore" element={<ReadMore/>}/>

          </Routes>
          <Footer/>
        </div>
      </Router>
    </>
  );
}

export default App;
