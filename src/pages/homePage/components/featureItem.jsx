import PropTypes from "prop-types";

const FeatureItem = ({ featureData }) => {
  const { image, title, description } = featureData;
  return (
    <div className="feature-item">
      <img src={image} alt="Chat Icon" className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

FeatureItem.propTypes = {
  featureData: PropTypes.object.isRequired,
};

export default FeatureItem;
