import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ErrorPage = ({ error }) => {
  return (
    <main className="center-wrapper">
      <h1>{error?.status || "404"}</h1>
      <p>
        {error?.statusText || error?.message || "That page doesn't exist..."}
      </p>
      <Link to="/">Back to Home</Link>
    </main>
  );
};

ErrorPage.propTypes = {
  error: PropTypes.object,
};

export default ErrorPage;
