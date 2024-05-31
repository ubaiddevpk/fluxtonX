import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home";
import AboutUs from './Pages/AboutUs';
import Services from './Pages/Services';
import Portfolio from './Pages/Portfolio';
import ContactUs from './Pages/ContactUs';

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Navbar />

          <Routes>

            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={AboutUs} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={ContactUs} />

          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
