import React from "react";
import Logo from "../../images/cobshoplogo.png";
import SortIcon from "@material-ui/icons/Sort";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <SortIcon className="sortIcon" style={{ color: "grey" }} />
      <a className="navbar-brand" href="/#">
        <img src={Logo} alt="logo" />
      </a>

      <ul className="nav nav-pills justify-content-end ml-auto">
        <li className="nav-item">
          <a className="nav-link" href="/#">
            <NotificationsNoneIcon style={{ color: "grey" }} />
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">
            <PersonOutlineIcon style={{ color: "grey" }} />
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">
            <ShoppingCartOutlinedIcon style={{ color: "grey" }} />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
