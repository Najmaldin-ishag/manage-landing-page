import Cta from "./Sections/Cta";
import Features from "./Sections/Features";
import Hero from "./Sections/Hero";
import NavBar from "./Sections/NavBar";
import Testimonials from "./Sections/Testimonials";

const App = () => {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <Cta />
      </main>
    </>
  );
};

export default App;
