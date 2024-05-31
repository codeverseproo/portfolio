import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MainComp from "./components/MainComp";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { ThemeContextProvider } from "./contextProviders/themeContext";

function App() {



  return (
    <ThemeContextProvider>
      <MainComp>
        <Nav />
        <Hero />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </MainComp>

    </ThemeContextProvider >
  );
}

export default App;
