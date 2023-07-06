import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
const NavAnchorLink = () => {
  const [selectedPage, setSelectedPage] = useState("home");
  return;
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
    <AnchorLink href="#overview" onClick={() => setSelectedPage("overview")}>
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
    <AnchorLink href="#projects" onClick={() => setSelectedPage("projects")}>
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
  </Box>;
};

export default NavAnchorLink;
