import { Box, Grid, Toolbar, Typography } from "@mui/material";

import React from "react";
import { myProjects } from "./rawContent/index";

import ProjectCard from "./components/ProjectCard";
const Projects = () => {
  return (
    <Box
      id="projects"
      justifyContent="space-between"
      gap={4}
      sx={{
        mt: { xs: 5, sm: 10 },
        ml: { xs: 2, sm: 5 },
        mr: { xs: 2, sm: 5 },
      }}
      height="auto"
    >
      <Toolbar />
      {/* title box */}
      <Box
        sx={{
          display: { xs: "none", sm: "flex" },
        }}
        justifyContent="space-between"
        alignItems="center"
      >
        <div
          style={{
            width: "30%",
            height: "3px",

            backgroundColor: "#FFD363",
          }}
        />
        <div
          style={{
            width: "30px",
            height: "30px",
            borderRadius: "100%",
            backgroundColor: "#FFD363",
          }}
        />

        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
          }}
        >
          Projects.
        </Typography>

        <div
          style={{
            width: "30px",
            height: "30px",
            borderRadius: "100%",
            backgroundColor: "#FFD363",
          }}
        />

        <div
          style={{
            width: "30%",
            height: "3px",

            backgroundColor: "#FFD363",
          }}
        />
      </Box>
      <Typography
        variant="h3"
        sx={{
          display: { xs: "block", sm: "none" },
        }}
      >
        Projects.
      </Typography>
      {/* text description about project */}
      <Box m={6}>
        <Typography
          variant="h6"
          sx={{
            color: "gray",
          }}
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </Typography>
      </Box>
      {/* project list grid card */}

      <Grid
        container
        spacing={2}
        rowGap={1}
        sx={{
          ml: { xs: 1 },
          mt: { xs: "", sm: 3 },
        }}
      >
        {myProjects.map((project, index) => (
          <ProjectCard project={project} index={index} key={project.id} />
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
