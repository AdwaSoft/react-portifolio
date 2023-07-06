import React, { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import logo from "./assets/logo-no-background.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Home from "./Home";
import NavAnchorLink from "./components/NavAnchorLink";
const drawerWidth = 240;
const navItems = ["home", "overview", "skills", "projects", "contact"];

function NavBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [selectedPage, setSelectedPage] = useState("home");
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box display="flex" justifyContent="flex-end">
        <IconButton
          color="inherit"
          onClick={() => setMobileOpen(false)}
          sx={{ display: { sm: "none" }, alignContent: "flex-end" }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />
      <Box display="flex" flexDirection="column" alignItems="center" pt={4}>
        {/* <NavAnchorLink navType={sidebarDrawer}/> */}
        <AnchorLink href="#home" onClick={() => setSelectedPage("home")}>
          {selectedPage === "home" && (
            <Button
              sx={{
                textdDecoration: "none",
                paddingRight: "15px",
                fontSize: "15px",
                color: "red",
                fontWeight: "bold",
                textTransform: "capitalize",
              }}
            >
              Home
            </Button>
          )}
          {selectedPage !== "home" && (
            <Button
              sx={{
                textdDecoration: "none",
                paddingRight: "15px",
                fontSize: "15px",

                fontWeight: "bold",
                textTransform: "capitalize",
              }}
            >
              Home
            </Button>
          )}
        </AnchorLink>
        <AnchorLink
          href="#overview"
          onClick={() => setSelectedPage("overview")}
        >
          {selectedPage === "overview" && (
            <Button
              sx={{
                textdDecoration: "none",
                paddingRight: "15px",
                fontSize: "15px",
                color: "red",
                fontWeight: "bold",
                textTransform: "capitalize",
              }}
            >
              overview
            </Button>
          )}
          {selectedPage !== "overview" && (
            <Button
              sx={{
                textdDecoration: "none",
                paddingRight: "15px",
                fontSize: "15px",

                fontWeight: "bold",
                textTransform: "capitalize",
              }}
            >
              overview
            </Button>
          )}
        </AnchorLink>

        <AnchorLink href="#skills" onClick={() => setSelectedPage("skills")}>
          {selectedPage === "skills" && (
            <Button
              sx={{
                textdDecoration: "none",
                paddingRight: "15px",
                fontSize: "15px",
                color: "red",
                fontWeight: "bold",
                textTransform: "capitalize",
              }}
            >
              skills
            </Button>
          )}
          {selectedPage !== "skills" && (
            <Button
              sx={{
                textdDecoration: "none",
                paddingRight: "15px",
                fontSize: "15px",

                fontWeight: "bold",
                textTransform: "capitalize",
              }}
            >
              skills
            </Button>
          )}
        </AnchorLink>
        <AnchorLink
          href="#projects"
          onClick={() => setSelectedPage("projects")}
        >
          {selectedPage === "projects" && (
            <Button
              sx={{
                textdDecoration: "none",
                paddingRight: "15px",
                fontSize: "15px",
                color: "red",
                fontWeight: "bold",
                textTransform: "capitalize",
              }}
            >
              projects
            </Button>
          )}
          {selectedPage !== "projects" && (
            <Button
              sx={{
                textdDecoration: "none",
                paddingRight: "15px",
                fontSize: "15px",

                fontWeight: "bold",
                textTransform: "capitalize",
              }}
            >
              projects
            </Button>
          )}
        </AnchorLink>

        <AnchorLink href="#contact" onClick={() => setSelectedPage("contact")}>
          {selectedPage === "contact" && (
            <Button
              sx={{
                textdDecoration: "none",
                paddingRight: "15px",
                fontSize: "15px",
                color: "red",
                fontWeight: "bold",
                textTransform: "capitalize",
              }}
            >
              contact
            </Button>
          )}
          {selectedPage !== "contact" && (
            <Button
              sx={{
                textdDecoration: "none",
                paddingRight: "15px",
                fontSize: "15px",

                fontWeight: "bold",
                textTransform: "capitalize",
              }}
            >
              contact
            </Button>
          )}
        </AnchorLink>
      </Box>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  const handleClick = () => {
    setIsActive(true);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar
          sx={{
            backgroundColor: "#FFD363",
            color: "#1B3764",
          }}
        >
          <Box display="flex" alignItems="center" gap={2} flexGrow={1}>
            <NavAnchorLink />
            <AnchorLink href="#home">
              <img width="50px" height="auto" src={logo} />
            </AnchorLink>
            <AnchorLink href="#home">
              <Button
                sx={{
                  fontSize: "18px",
                  textDecoration: "none",
                  textTransform: "capitalize !important",
                  pointerEvents: "none",
                }}
                variant="h6"
              >
                Melketsedek Cheru
              </Button>
            </AnchorLink>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "flex" }, mr: 20 }}>
            <AnchorLink href="#home" onClick={() => setSelectedPage("home")}>
              {selectedPage === "home" && (
                <Button
                  sx={{
                    textdDecoration: "none",
                    paddingRight: "15px",
                    fontSize: "15px",
                    color: "red",
                    fontWeight: "bold",
                    textTransform: "capitalize",
                  }}
                >
                  Home
                </Button>
              )}
              {selectedPage !== "home" && (
                <Button
                  sx={{
                    textdDecoration: "none",
                    paddingRight: "15px",
                    fontSize: "15px",

                    fontWeight: "bold",
                    textTransform: "capitalize",
                  }}
                >
                  Home
                </Button>
              )}
            </AnchorLink>
            <AnchorLink
              href="#overview"
              onClick={() => setSelectedPage("overview")}
            >
              {selectedPage === "overview" && (
                <Button
                  sx={{
                    textdDecoration: "none",
                    paddingRight: "15px",
                    fontSize: "15px",
                    color: "red",
                    fontWeight: "bold",
                    textTransform: "capitalize",
                  }}
                >
                  overview
                </Button>
              )}
              {selectedPage !== "overview" && (
                <Button
                  sx={{
                    textdDecoration: "none",
                    paddingRight: "15px",
                    fontSize: "15px",

                    fontWeight: "bold",
                    textTransform: "capitalize",
                  }}
                >
                  overview
                </Button>
              )}
            </AnchorLink>

            <AnchorLink
              href="#skills"
              onClick={() => setSelectedPage("skills")}
            >
              {selectedPage === "skills" && (
                <Button
                  sx={{
                    textdDecoration: "none",
                    paddingRight: "15px",
                    fontSize: "15px",
                    color: "red",
                    fontWeight: "bold",
                    textTransform: "capitalize",
                  }}
                >
                  skills
                </Button>
              )}
              {selectedPage !== "skills" && (
                <Button
                  sx={{
                    textdDecoration: "none",
                    paddingRight: "15px",
                    fontSize: "15px",

                    fontWeight: "bold",
                    textTransform: "capitalize",
                  }}
                >
                  skills
                </Button>
              )}
            </AnchorLink>
            <AnchorLink
              href="#projects"
              onClick={() => setSelectedPage("projects")}
            >
              {selectedPage === "projects" && (
                <Button
                  sx={{
                    textdDecoration: "none",
                    paddingRight: "15px",
                    fontSize: "15px",
                    color: "red",
                    fontWeight: "bold",
                    textTransform: "capitalize",
                  }}
                >
                  projects
                </Button>
              )}
              {selectedPage !== "projects" && (
                <Button
                  sx={{
                    textdDecoration: "none",
                    paddingRight: "15px",
                    fontSize: "15px",

                    fontWeight: "bold",
                    textTransform: "capitalize",
                  }}
                >
                  projects
                </Button>
              )}
            </AnchorLink>

            <AnchorLink
              href="#contact"
              onClick={() => setSelectedPage("contact")}
            >
              {selectedPage === "contact" && (
                <Button
                  sx={{
                    textdDecoration: "none",
                    paddingRight: "15px",
                    fontSize: "15px",
                    color: "red",
                    fontWeight: "bold",
                    textTransform: "capitalize",
                  }}
                >
                  contact
                </Button>
              )}
              {selectedPage !== "contact" && (
                <Button
                  sx={{
                    textdDecoration: "none",
                    paddingRight: "15px",
                    fontSize: "15px",

                    fontWeight: "bold",
                    textTransform: "capitalize",
                  }}
                >
                  contact
                </Button>
              )}
            </AnchorLink>
          </Box>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          anchor="right"
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              height: "400px",
              backgroundColor: "#FFD363",
              color: "#1B3764",
              fontSize: "16px",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

NavBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default NavBar;
