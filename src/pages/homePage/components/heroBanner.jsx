import PropTypes from "prop-types";

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
  heroData: PropTypes.object.isRequired,
};

export default HeroBanner;
