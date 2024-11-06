import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { logout } from "../../redux/actions/authActions";
import { getToken, getUserData } from "../../redux/store/selectors";

const NavMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const token = useSelector(getToken);
  const { firstName } = useSelector(getUserData);

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
