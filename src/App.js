import React, { Component } from "react";
import NavBar from "./NavBar";
import "./index.css";
import { Box, Container, CssBaseline, Divider, Toolbar } from "@mui/material";
import Home from "./Home";
import Overview from "./Overview";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Fotter from "./Fotter";
class App extends Component {
  render() {
    return (
      <Box className="app">
        <NavBar />
        <CssBaseline />
        <Box
          sx={{
            ml: { xs: 0, sm: 13 },
            mr: { xs: 0, sm: 13 },
            mb: { xs: 0, sm: 7 },
            mt: { xs: 0, sm: 6 },
          }}
        >
          <Home />
          <Overview />
          <Divider />
          <Skills />
          <Projects />
          <Contact />
        </Box>
        <Fotter />
      </Box>
    );
  }
}

export default App;
