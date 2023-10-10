import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Record from "./components/Record";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
// import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Hero />
      {/* <Navbar /> */}
      <Gallery />
      <Record />
      <Menu />
      <About />
      <Footer />
    </>
  );
}

export default App;
