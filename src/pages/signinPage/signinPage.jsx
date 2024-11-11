import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/actions/authActions";
import { signinUser } from "../../utils/data-access-layer";
import ErrorPage from "../errorPage";

/**
 * Renders the sign-in page with a form for user authentication.
 *
 * @function
 * @name SigninPage
 * @returns {JSX.Element} The rendered sign-in page component.
 */
const SigninPage = () => {
  const navigate = useNavigate();
  const rememberCheckboxref = useRef(null);
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [badRequest, setBadRequest] = useState(false);

  /**
   * Handles the sign-in form submission.
   *
   * @async
   * @function
   * @name handleSignin
   * @param {Event} e - The form submission event.
   * @returns {Promise<void>}
   */
  const handleSignin = async (e) => {
    e.preventDefault();
    const username =
      e.currentTarget.elements.namedItem("username").value || null;
    const password =
      e.currentTarget.elements.namedItem("password").value || null;

    const signinResponse = await signinUser(username, password);

    if (!signinResponse.ok) {
      if (signinResponse.status === 400) return setBadRequest(true);
      return setError(signinResponse);
    }

    const token = signinResponse.token;
    const rememberMe = rememberCheckboxref.current?.checked || false;
    dispatch(login(token, rememberMe));
    navigate("/profile");
  };

  /**
   * Handles the input change event.
   *
   * @function
   * @name handleInputChange
   * @returns {void}
   */
  const handleInputChange = () => {
    if (badRequest) setBadRequest(false);
  };

  if (error) return <ErrorPage error={error} />;
  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSignin}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              autoComplete="username"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleInputChange}
              required
            />
          </div>
          {badRequest && (
            <p className="error-message">
              Invalid username or password. Please try again.
            </p>
          )}
          <div className="input-remember">
            <input type="checkbox" id="remember-me" ref={rememberCheckboxref} />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button" type="submit">
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
};

export default SigninPage;
