import * as React from "react";
import { IconButton } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { AuthContext } from "../context/AuthContext";

const AuthAvatar = () => {
  const { auth, setAuth } = React.useContext(AuthContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setAuth({ ...auth, isAuth: false });
  };
  return (
    <div>
      <IconButton
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{
          background: "#d8d8d8",
          border: "1px solid #1484cb",
          color: "#1484cb",
          width: "53px",
          height: "53px",
          fontSize: "20px",
        }}
      >
        {auth.avatar}
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            handleLogout();
          }}
        >
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
};

export default AuthAvatar;
