import PropTypes from "prop-types";

/**
 * Renders the hero banner with title, subtitles, and text.
 *
 * @function
 * @name HeroBanner
 * @param {Object} props - The component props.
 * @param {Object} props.heroData - The hero data.
 * @param {string} props.heroData.title - The title of the hero banner.
 * @param {string[]} props.heroData.subtitles - The subtitles of the hero banner.
 * @param {string} props.heroData.text - The text of the hero banner.
 * @returns {JSX.Element} The rendered hero banner component.
 */
const HeroBanner = ({ heroData }) => {
  const { title, subtitles, text } = heroData;
  return (
    <div className="hero">
      <section className="hero-content">
        <h2 className="sr-only">{title}</h2>
        {subtitles.map((subtitle, index) => (
          <p key={"sub" + index} className="subtitle">
            {subtitle}
          </p>
        ))}
        <p className="text">{text}</p>
      </section>
    </div>
  );
};

HeroBanner.propTypes = {
  heroData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitles: PropTypes.arrayOf(PropTypes.string).isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

export default HeroBanner;
