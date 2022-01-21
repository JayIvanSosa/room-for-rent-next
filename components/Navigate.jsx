import { useState, useEffect } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { NavLink } from ".";
import { userService } from "services";

export { Navigate };

function Navigate() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const subscription = userService.user.subscribe((x) => setUser(x));
    return () => subscription.unsubscribe();
  }, []);

  function logout() {
    userService.logout();
  }

  // only show nav when logged in
  if (!user) return null;

  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div className="navbar-nav">
        <h2 style={{ color: "White", marginRight: 1100 }}> Room For Rent </h2>
        <Breadcrumbs aria-label="breadcrumb">
          <NavLink href="/" exact className="nav-item nav-link">
            Home
          </NavLink>
          <NavLink href="/about" exact className="nav-item nav-link">
            About
          </NavLink>
          <NavLink href="/contact" exact className="nav-item nav-link">
            Contact
          </NavLink>
          <NavLink href="/host" exact className="nav-item nav-link">
            Become A Host
          </NavLink>
          <a onClick={logout} className="nav-item nav-link">
            Logout
          </a>
        </Breadcrumbs>
      </div>
    </nav>
  );
}
