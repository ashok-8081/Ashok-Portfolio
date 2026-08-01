import { useEffect, useState } from "react";
import Loader from "./components/common/Loader";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/navbar/Navbar";
import About from "./components/About/About";
import TechStack from "./components/TechStack/TechStack";
import FeaturedProject from "./components/FeaturedProject/FeaturedProject";
import Projects from "./components/Projects/Projects";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ScrollProgress from "./components/ScrollProgress/ScrollProgres";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

const Section = ({ id, title }) => (
  <section
    id={id}
    className="min-h-screen flex items-center justify-center border-b"
  >
    <h2 className="text-5xl font-bold">{title}</h2>
  </section>
);

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);
  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <FeaturedProject />
      <Projects />
      <Education />
      <Contact />
      <ScrollToTop />
      <Footer />
    </>
  );
}

export default App;
