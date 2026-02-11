import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductViewr from "./components/ProductViewr";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Showcase from "./components/Showcase";
import Performance from "./components/Performance";
import Features from "./components/Features.jsx";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProductViewr />
      <Showcase />
      <Performance />
      <Features />
    </main>
  );
};

export default App;
