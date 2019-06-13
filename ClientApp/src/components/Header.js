import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import ExploreIcon from "@material-ui/icons/Explore";
import PersonIcon from "@material-ui/icons/PersonOutline";
import FavoriteIcon from "@material-ui/icons/FavoriteBorderOutlined";

import CameraIcon from "@material-ui/icons/CameraAlt";
import { Container } from "@material-ui/core";
import logo from "../images/Instadumb.svg";

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1
//   },
//   menuButton: {
//     marginRight: theme.spacing(2)
//   },
//   title: {
//     flexGrow: 1,
//     display: "none",
//     [theme.breakpoints.up("sm")]: {
//       display: "block"
//     }
//   },
//   search: {
//     position: "relative",
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: fade(theme.palette.common.white, 0.15),
//     "&:hover": {
//       backgroundColor: fade(theme.palette.common.white, 0.25)
//     },
//     marginLeft: 0,
//     width: "100%",
//     [theme.breakpoints.up("sm")]: {
//       marginLeft: theme.spacing(1),
//       width: "auto"
//     }
//   },
//   searchIcon: {
//     width: theme.spacing(7),
//     height: "100%",
//     position: "absolute",
//     pointerEvents: "none",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center"
//   },
//   inputRoot: {
//     color: "inherit"
//   },
//   inputInput: {
//     padding: theme.spacing(1, 1, 1, 7),
//     transition: theme.transitions.create("width"),
//     width: "100%",
//     [theme.breakpoints.up("sm")]: {
//       width: 120,
//       "&:focus": {
//         width: 200
//       }
//     }
//   }
// }));

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

export const Header = () => {
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
              <PersonIcon style={styles.icon} />
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};
