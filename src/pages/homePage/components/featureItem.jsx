import PropTypes from "prop-types";

/**
 * Renders a feature item with an image, title, and description.
 *
 * @function
 * @name FeatureItem
 * @param {Object} props - The component props.
 * @param {Object} props.featureData - The feature data.
 * @param {string} props.featureData.image - The image URL of the feature.
 * @param {string} props.featureData.title - The title of the feature.
 * @param {string} props.featureData.description - The description of the feature.
 * @returns {JSX.Element} The rendered feature item component.
 */
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
  featureData: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default FeatureItem;
