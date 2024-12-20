import { features, heroData } from "../../utils/data";
import FeatureItem from "./components/featureItem";
import HeroBanner from "./components/heroBanner";

/**
 * Renders the home page with a hero banner and feature items.
 *
 * @function
 * @name HomePage
 * @returns {JSX.Element} The rendered home page component.
 */
const HomePage = () => {
  return (
    <main>
      <HeroBanner heroData={heroData} />
      <section className="features">
        <h2 className="sr-only">Features</h2>
        {features.map((feature, index) => (
          <FeatureItem key={index} featureData={feature} />
        ))}
      </section>
    </main>
  );
};

export default HomePage;
