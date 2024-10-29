import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/actions/authActions";

const SigninPage = () => {
  const navigate = useNavigate();
  const rememberCheckboxref = useRef(null);
  const dispatch = useDispatch();

  const handleSignin = async (e) => {
    e.preventDefault();
    const username = e.currentTarget.elements.namedItem("username").value;
    const password = e.currentTarget.elements.namedItem("password").value;

    const data = await fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: username,
        password: password,
      }),
    });

    if (!data.ok) {
      console.log("login error");
      return;
    }

    const response = await data.json();
    const token = response.body.token;

    const userResponse = await fetch(
      "http://localhost:3001/api/v1/user/profile",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!userResponse.ok) {
      console.log("user error");
      return;
    }

    const userData = await userResponse.json();

    const rememberMe = rememberCheckboxref.current.checked;

    dispatch(
      login(
        token,
        {
          firstName: userData.body.firstName,
          lastName: userData.body.lastName,
        },
        rememberMe
      )
    );

    navigate("/profile");
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSignin}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
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
