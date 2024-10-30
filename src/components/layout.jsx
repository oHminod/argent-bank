import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { logout } from "../redux/actions/authActions";

const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const { firstName } = useSelector((state) => state.auth.userData);

  const handleSignout = () => {
    dispatch(logout());
    navigate("/");
  };

  const handleOnSignInPage = () => {
    if (location.pathname === "/sign-in") navigate(0);
  };

  return (
    <>
      <nav className="main-nav">
        <h1 className="sr-only">Argent Bank</h1>
        <Link className="main-nav-logo" to="/">
          <img
            className="main-nav-logo-image"
            src="/argentBankLogo.png"
            alt="Argent Bank Logo"
          />
        </Link>
        {token ? (
          <div>
            <Link className="main-nav-item" to="/profile">
              <i className="fa fa-user-circle"></i>
              {" " + firstName || "Profile"}
            </Link>
            <button className="main-nav-item" onClick={handleSignout}>
              <i className="fa fa-sign-out"></i> Sign Out
            </button>
          </div>
        ) : (
          <div>
            <Link
              className="main-nav-item"
              to="/sign-in"
              onClick={handleOnSignInPage}
            >
              <i className="fa fa-user-circle"></i> Sign In
            </Link>
          </div>
        )}
      </nav>
      <Outlet />
      <footer className="footer">
        <p className="footer-text">Copyright 2020 Argent Bank</p>
      </footer>
    </>
  );
};

export default Layout;
