import { Link } from "react-router-dom";
import NavMenu from "./navMenu";

/**
 * Renders the navigation bar with the logo and navigation menu.
 *
 * @function
 * @name NavBar
 * @returns {JSX.Element} The rendered navigation bar component.
 */
const NavBar = () => {
  return (
    <nav className="main-nav">
      <h1 className="sr-only">Argent Bank</h1>
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src="/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
      </Link>
      <NavMenu />
    </nav>
  );
};

export default NavBar;
