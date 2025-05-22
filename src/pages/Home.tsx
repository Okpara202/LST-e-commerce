import BestSeller from "../components/bestSeller/BestSeller";
import Feature from "../components/featuredProducts/Feature";
import Hero from "../components/hero/Hero";
import Testimonial from "../components/testimonial/Testimonial";

function Home() {
  return (
    <>
      <Hero />
      <BestSeller />
      <Feature />
      <Testimonial />
    </>
  );
}

export default Home;
