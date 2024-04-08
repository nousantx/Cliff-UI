import { NavLink } from "react-router-dom";
import useStyles from "../utils/useStyles";

export const Navbar = () => {
  useStyles();
  return (
    <nav className="fixed top-0 l-0 r-0 z-999 p-1rem ph-10vw bg-neutral-100 flex space-between ai-center">
      <header className="center gap-4px">
        <span className="ms-line text-primary-500 fs-24px">ssid_chart</span>
        <h1 className="fs-1em">
          Creative std<span className="text-primary-500">.</span>
        </h1>
      </header>
      <div className="center gap-1rem">
        <NavLink to="/" className="nav-link">
          Overview
        </NavLink>
        <NavLink to="/component" className="nav-link">
          Component
        </NavLink>
      </div>
    </nav>
  );
};
