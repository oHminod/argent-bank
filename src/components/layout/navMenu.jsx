import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { logout } from "../../redux/actions/authActions";

const NavMenu = () => {
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

  if (token)
    return (
      <div>
        <Link className="main-nav-item" to="/profile">
          <i className="fa fa-user-circle"></i>
          {" " + firstName || "Profile"}
        </Link>
        <button className="main-nav-item" onClick={handleSignout}>
          <i className="fa fa-sign-out"></i> Sign Out
        </button>
      </div>
    );

  return (
    <div>
      <Link
        className="main-nav-item"
        to="/sign-in"
        onClick={handleOnSignInPage}
      >
        <i className="fa fa-user-circle"></i> Sign In
      </Link>
    </div>
  );
};

export default NavMenu;
