import './App.css';
import {Route, Routes, useLocation} from "react-router";
import Splashscreen from "./pages/splashscreen/Splashscreen";
import Story from "./pages/story/Story";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Navigation from "./components/navigation/Navigation";

function App() {
    const location = useLocation();
    const hideNavigation = location.pathname === "/";

  return (
      <>
          <header>
              { hideNavigation ? null : <Navigation/> }
          </header>
          <main>
              <Routes>
                  <Route path="/" element={<Splashscreen/>}/>
                  <Route path="/story" element={<Story/>}/>
                  <Route path="/about" element={<About/>}/>
                  <Route path="/contact" element={<Contact/>}/>
              </Routes>
          </main>
      </>
  );
}

export default App;
