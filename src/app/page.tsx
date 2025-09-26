// commponents
import About from "./sections/About";
import FQA from "./sections/FQA";
import GoUp from "./sections/GoUp";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import States from "./sections/States";
import Testmonials from "./sections/Testmonials";
import Work from "./sections/Work";

const Home = () => {
  return (
    <div>
      <GoUp />
      <Header />
      <Hero />
      <About />
      <States />
      <Services />
      <Work />
      <Testmonials />
      <FQA />
    </div>
  );
};

export default Home;
