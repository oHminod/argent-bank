import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/actions/authActions";
import { signinUser } from "../../utils/data-access-layer";
import ErrorPage from "../errorPage";

const SigninPage = () => {
  const navigate = useNavigate();
  const rememberCheckboxref = useRef(null);
  const dispatch = useDispatch();
  const [error, setError] = useState(null);

  const handleSignin = async (e) => {
    e.preventDefault();
    const username =
      e.currentTarget.elements.namedItem("username").value || null;
    const password =
      e.currentTarget.elements.namedItem("password").value || null;

    const signinResponse = await signinUser(username, password);

    if (!signinResponse.ok) return setError(signinResponse);

    const token = signinResponse.token;
    const rememberMe = rememberCheckboxref.current?.checked || false;
    dispatch(login(token, rememberMe));
    navigate("/profile");
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
            <input type="text" id="username" autoComplete="username" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              autoComplete="current-password"
            />
          </div>
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
