import * as React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import LockIcon from "@mui/icons-material/Lock";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ReorderIcon from "@mui/icons-material/Reorder";
import AuthService from "../../utils/auth";
import Logo from "../../assets/Sustain-A-Plate.png"

function Navbar() {
  const [state, setState] = React.useState({
    navToggle: false,
  });

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, navToggle: open });
  };

  function showItems() {
    if (!AuthService.loggedIn()) {
      const loggedInItems = [
        {
          path: "/",
          text: "Home",
          icon: <HomeIcon className="icon-color" />,
        },
        {
          path: "/logout",
          text: "Logout",
          icon: <LockIcon className="icon-color" />,
        },
        {
          path: "/profile",
          text: "Profile",
          icon: <AccountCircleIcon className="icon-color" />,
        },
        {
          path: "/food",
          text: "Food Recovery",
          icon: <AddShoppingCartIcon className="icon-color" />,
        },
        {
          path: "/list",
          text: "Recovery History",
          icon: <MenuBookIcon className="icon-color" />,
        },
        {
          path: "/sustainability",
          text: "Sustainability",
          icon: <MenuBookIcon className="icon-color" />,
        },
      ];
      return (
        <List>
          {loggedInItems.map((logItems) => (
            <ListItem key={logItems.text} disablePadding>
              <ListItemButton component={Link} to={logItems.path}>
                <ListItemIcon>{logItems.icon}</ListItemIcon>
                <ListItemText primary={logItems.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      );

      // Additional items shown when the user is signed in
    } else {
      const items = [
        {
          path: "/",
          text: "Home",
          icon: <HomeIcon className="icon-color" />,
        },
        {
          path: "/login",
          text: "Login || Sign-up",
          icon: <LockOpenIcon className="icon-color" />,
        },
        {
          path: "/sustainability",
          text: "Sustainability",
          icon: <MenuBookIcon className="icon-color" />,
        },
      ];
      return (
        <List>
          {items.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton component={Link} to={item.path}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      );
    }
  }

return (
  <div className="navbar-container">
    {/* Centered Logo */}
    <div className="logo-container">
      <a href="/">
        <img src={Logo} alt="Sustain-A-Plate Logo" />
      </a>
    </div>

    <div className="drawer-button-container">
      <Button onClick={toggleDrawer(true)}>
        <ReorderIcon className="icon-color" />
      </Button>
      <Drawer
        anchor="left"
        open={state.navToggle}
        onClose={toggleDrawer(false)}
      >
        {showItems()}
      </Drawer>
    </div>
  </div>
);
}

export default Navbar;