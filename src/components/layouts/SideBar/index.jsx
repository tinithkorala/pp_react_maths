import * as React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import classes from "./index.module.css";
import LogoImage from "./../../../assets/logotransparent.png";
import { Link } from "react-router-dom";
import { Avatar, Menu, MenuItem, Stack, Typography } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { selectUser } from "./../../../features/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { persistor } from "../../../app/store";
import { logout } from "../../../features/thunks/authThunk";
import { capitalizeFirstLetter } from "./../../../utils/TextFormat";

const SideBar = ({ sidebarMenuList, selectedItemId }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    console.log("handleLogout");
    dispatch(logout());
    await persistor.purge(["auth"]);
    setAnchorEl(null);
  };

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes["drawer-paper"],
      }}
    >
      <div className={classes["toolbar"]}>
        <Link to="/">
          <img src={LogoImage} alt="Logo" className={classes["logo"]} />
        </Link>
      </div>
      <List>
        {sidebarMenuList?.map((item) => (
          <Link to={item?.path} key={item?.id}>
            <ListItem
              className={`${selectedItemId === item?.id && "selected"}`}
            >
              {React.cloneElement(item?.icon, {
                className: `${selectedItemId === item?.id && "selected"}`,
              })}
            </ListItem>
          </Link>
        ))}
      </List>
      <Avatar
        src={user.photo}
        sx={{ width: "70px", height: "70px", m: "auto", mb: "20px" }}
        aria-controls={open ? "user-action-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      ></Avatar>

      <Menu
        id="user-action-menu"
        aria-labelledby="user-action-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        className={classes["user-action-menu"]}
      >
        <MenuItem onClick={handleLogout}>
          <LogoutIcon sx={{ width: "25px", height: "25px" }} /> Logout
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <AccountCircleOutlinedIcon sx={{ width: " 25px", height: "25px" }} />{" "}
          Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar
            src={user.photo}
            sx={{ border: "3px red white", width: " 40px", height: "40px" }}
          />
          <Stack>
            <Typography
              sx={{
                // color: "#fff",
                fontWeight: "var(--font-weight-bolder)",
              }}
            >
              {user?.first_name} {user?.last_name}
            </Typography>
            <Typography
              sx={
                {
                  // color: "#fff",
                }
              }
            >
              {capitalizeFirstLetter(user?.role)}
            </Typography>
          </Stack>
        </MenuItem>
      </Menu>
    </Drawer>
  );
};

export default SideBar;
