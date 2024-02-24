import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
// import SocialLinks2 from "./components/SocialLinks2";

function App() {
  return (
    <div >
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      {/* <SocialLinks2 /> */}
      <SocialLinks />
    </div>
  );
}

export default App;
