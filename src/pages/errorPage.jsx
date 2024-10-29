import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <main className="center-wrapper">
      <h1>404</h1>
      <p>That page doesn&apos;t exist...</p>
      <Link to="/">Back to Home</Link>
    </main>
  );
};

export default ErrorPage;
