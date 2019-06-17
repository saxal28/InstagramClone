import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import ExploreIcon from "@material-ui/icons/Explore";
import PersonIcon from "@material-ui/icons/PersonOutline";
import FavoriteIcon from "@material-ui/icons/FavoriteBorderOutlined";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import CameraIcon from "@material-ui/icons/CameraAlt";
import { Container } from "@material-ui/core";
import logo from "../images/Instadumb.svg";
import {withRouter} from "react-router"

const styles = {
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  cameraIcon: {
    height: 30,
    width: "auto",
    marginRight: 10
  },
  icon: {
    height: 30,
    width: "auto",
    marginRight: 20
  },
  headerSection: {
    display: "flex",
    alignItems: "center"
  },
  inputWrapper: {
    padding: "1px 7px",
    display: "flex",
    alignItems: "center",
    width: 200,
    border: "1px solid rgba(0,0,0,0.0975)",
    borderRadius: 7
  }
};

export const Header = withRouter((props) => {
  console.log('props', props)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isOpen = anchorEl !== null;

  const handleAccountMenuClick = e => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleLogin = () => {
    props.history.push("/login")
    handleClose();
  };

  const handleRegister = () => {
    props.history.push("/register")
    handleClose();
  };

  return (
    <div>
      <AppBar position="fixed" color="default">
        <Container maxWidth="md">
          <Toolbar style={styles.toolbar}>
            <div style={styles.headerSection}>
              <CameraIcon style={styles.cameraIcon} />
              <img src={logo} height={30} />
            </div>

            <div style={styles.headerSection}>
              <div style={styles.inputWrapper}>
                <SearchIcon style={{ marginRight: 5 }} />
                <InputBase
                  styles={{ padding: 0 }}
                  placeholder="Search…"
                  inputProps={{ "aria-label": "Search" }}
                />
              </div>
            </div>

            <div style={styles.headerSection}>
              <ExploreIcon style={styles.icon} />
              <FavoriteIcon style={styles.icon} />
              <PersonIcon
                style={styles.icon}
                onClick={handleAccountMenuClick}
              />
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={isOpen}
                onClose={handleClose}
              >
                {/* <MenuItem onClick={handleClose}>Profile</MenuItem> */}
                {/* <MenuItem onClick={handleClose}>My account</MenuItem> */}
                <MenuItem onClick={handleLogin}>Login</MenuItem>
                <MenuItem onClick={handleRegister}>Register</MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
});
