import { Link } from "react-router-dom";
import PropTypes from "prop-types";

/**
 * Renders an error page with a message and a link to go back to the home page.
 *
 * @function
 * @name ErrorPage
 * @param {Object} props - The component props.
 * @param {Object|string} props.error - The error object or message.
 * @returns {JSX.Element} The rendered error page component.
 */
const ErrorPage = ({ error }) => {
  if (typeof error === "string") {
    return (
      <main className="center-wrapper">
        <h1>500</h1>
        <p className="error-message">{error}</p>
        <Link to="/">Back to Home</Link>
      </main>
    );
  }
  return (
    <main className="center-wrapper">
      <h1>{error?.status || "520"}</h1>
      <p className="error-message">
        {error?.statusText || error?.message || "Unknown error..."}
      </p>
      <Link to="/">Back to Home</Link>
    </main>
  );
};

ErrorPage.propTypes = {
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

export default ErrorPage;
