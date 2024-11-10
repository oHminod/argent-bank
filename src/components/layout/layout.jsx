import { Outlet } from "react-router-dom";
import NavBar from "./navBar";
import Footer from "./footer";

/**
 * Renders the layout with a navigation bar, outlet for nested routes, and a footer.
 *
 * @function
 * @name Layout
 * @returns {JSX.Element} The rendered layout component.
 */
const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
