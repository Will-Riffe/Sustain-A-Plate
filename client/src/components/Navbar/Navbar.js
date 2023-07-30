import * as React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from '@mui/material/Divider';
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import QuizIcon from '@mui/icons-material/Quiz';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LockIcon from "@mui/icons-material/Lock";
import ListIcon from '@mui/icons-material/List'; 
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ReorderIcon from "@mui/icons-material/Reorder";

function Navbar() {
  const [state, setState] = React.useState({
    navToggle: false,
  });

  /*
    Add sign-in logic here, between the comments
  */
  const signInState = true;
  /*
    Add sign-in logic here, between the comments
  */

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, navToggle: open });
  };

  const list = (
    <Box
      sx={{ width: 250, 
            backgroundColor: "var(--colorOne)", 
            color: "var(--textColor)",
            height: "100%"
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      component="div"
    >
      <List>
        {[
          { path: '/', text: 'Home', icon: <HomeIcon className="icon-color"/> },
          { path: '/login', text: 'Login || Sign-up', icon: <LockOpenIcon className="icon-color" /> },
          { path: '/logout', text: 'Logout', icon: <LockIcon className="icon-color" /> },
        ].map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton component={Link} to={item.path}>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      {/* Additional items shown when the user is signed in */}
      {signInState && (
        <List>
          {[
            { path: '/profile', text: 'Profile', icon: <AccountCircleIcon className="icon-color" /> },
            { path: '/food', text: 'Food Recovery', icon: <AddShoppingCartIcon className="icon-color" /> },
            { path: '/list', text: 'Recovery History', icon: <MenuBookIcon className="icon-color"/> },
          ].map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton component={Link} to={item.path}>
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );

  
  return (
   <div className="navbar-container">

      {/* Centered Logo */}
      <div className="logo-container">
        <h3>Sustain-A-Plate</h3>
      </div>

    <div className="drawer-button-container">
      <Button onClick={toggleDrawer(true)}>
        <Link to="/">
          <ReorderIcon className="icon-color"/>
        </Link>
      </Button>
      <Drawer
        anchor="left"
        open={state.navToggle}
        onClose={toggleDrawer(false)}
      >
        {list}
      </Drawer>
    </div>
  </div> 
  );
}

export default Navbar;
