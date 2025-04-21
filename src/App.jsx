import Features from "./Sections/Features";
import Hero from "./Sections/Hero";
import NavBar from "./Sections/NavBar";

const App = () => {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Features />
      </main>
    </>
  );
};

export default App;
