import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Record from "./components/Record";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import { ThemeProvider, createTheme } from "@mui/material";
// import Navbar from "./components/Navbar";

function App() {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        fold: 300,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Hero />
      {/* <Navbar /> */}
      <Gallery />
      <Record />
      <Menu />
      <About />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
