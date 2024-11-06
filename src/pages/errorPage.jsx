import { Link } from "react-router-dom";
import PropTypes from "prop-types";

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
  error: PropTypes.object,
};

export default ErrorPage;
