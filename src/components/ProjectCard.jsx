import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import React, { useState } from "react";

import github from "../assets/github.png";

const ProjectCard = ({ project, index }) => {
  const [projectHover, setProjectHover] = useState(false);
  return (
    <Grid item xs={12} sm={4}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{
          type: "spring",
          duration: 0.75,
          delay: index * 0.5,
          ease: "easeOut",
        }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
        >
          <div
            onMouseOut={() => setProjectHover(false)}
            onMouseOver={() => setProjectHover(true)}
          >
            <Card
              sx={{
                width: 360,
                height: "440px",
                borderRadius: "20px",
                border: "0.01rem solid #FFD363",
                bgcolor: "#3A4C6B",
                pr: "10px",
              }}
            >
              <Box
                display="flex"
                justifyContent="space-around"
                alignItems="center"
                pb={1}
                pt={1}
                sx={{
                  color: "white",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                <Button
                  variant="outlined"
                  size="small"
                  sx={{
                    borderColor: "#3A4C6B",
                    width: "15px",

                    borderRadius: "20px",
                    color: "#FFD363",
                    "&:hover": {
                      borderColor: "#FFD363",
                    },
                  }}
                >
                  <img
                    src={github}
                    width="20px"
                    height="auto"
                    borderradius="100%"
                    cursor="pointer"
                  />
                </Button>
                <Typography variant="h5" sx={{}}>
                  {" "}
                  {project.type}
                </Typography>
                <Button
                  size="small"
                  sx={{
                    borderColor: "white",
                    color: "white",
                    borderRadius: "5px",
                    textTransform: "capitalize",
                    fontSize: "12px",
                    "&:hover": {
                      borderColor: "#FFD363",
                      color: "#FFD363",
                      fontSize: "14px",
                    },
                  }}
                  variant="outlined"
                >
                  Demo
                </Button>
              </Box>
              {!projectHover && (
                <CardMedia
                  component="img"
                  height="210"
                  image={project.image}
                  alt={project.name}
                  sx={{
                    borderRadius: "15px",
                    border: "0.01rem solid #FFD363",
                    ml: "5px",
                  }}
                />
              )}
              {projectHover && (
                <CardMedia
                  component="img"
                  height="210"
                  image={project.image2}
                  alt={project.name}
                  sx={{
                    borderRadius: "15px",
                    border: "0.01rem solid #FFD363",
                    ml: "5px",
                  }}
                />
              )}
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#FFD363",
                    textAlign: "center",
                  }}
                >
                  {project.user}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "white",
                    fontSize: "14px",
                  }}
                >
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="start"
                  alignItems="center"
                  pb={2}
                >
                  {project.technologies.map((tech) => (
                    <Typography
                      key={tech.id}
                      sx={{
                        color: `${tech.color}`,
                        pr: "6px",
                      }}
                    >{`@${tech.name}`}</Typography>
                  ))}
                </Box>
              </CardActions>
            </Card>
          </div>
        </Tilt>
      </motion.div>
    </Grid>
  );
};

export default ProjectCard;
