// commponents
import About from "./sections/About";
import GoUp from "./sections/GoUp";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import States from "./sections/States";

const Home = () => {
  return (
    <div>
      <GoUp />
      <Header />
      <Hero />
      <About />
      <States />
      <Services />
    </div>
  );
};

export default Home;
