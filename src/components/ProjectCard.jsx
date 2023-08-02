import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Typography,
} from "@mui/material";

import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import React, { useState } from "react";

import github from "../assets/github.png";
import { Link } from "react-router-dom";

const ProjectCard = ({ project, index }) => {
  const [open, setOpen] = useState(false);
  const [projectHover, setProjectHover] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Grid
      item
      xs={12}
      sm={4}
      sx={{
        mt: { xs: "50px", sm: "20px" },
      }}
    >
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
        {/* <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
        > */}
        <Card
          sx={{
            width: { xs: "80%", sm: "500px" },
            height: "auto",
            borderRadius: "20px",
            border: "0.01rem solid #FFD363",
            bgcolor: "#3A4C6B",
            pr: "10px",
          }}
        >
          <Box
            width="90%"
            display="flex"
            justifyContent="space-around"
            alignItems="center"
            pb={1}
            pt={2}
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
              <a href={project.github_link} target="_blank">
                <img
                  src={github}
                  width="20px"
                  height="auto"
                  borderradius="100%"
                  cursor="pointer"
                />
              </a>
            </Button>
            <Typography
              sx={{
                p: "10px",
              }}
              variant="h5"
            >
              {" "}
              {project.type}
            </Typography>

            <Button
              href={project.demo_link}
              size="medium"
              sx={{
                borderColor: "white",

                borderRadius: "5px",
                textTransform: "capitalize",
                fontSize: "12px",
                "&:hover": {
                  borderColor: "#FFD363",
                  color: "#FFD363",
                  fontSize: "15px",
                },
              }}
              variant="outlined"
            >
              <a
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "14px",
                  textDecoration: "none",
                }}
                href={project.demo_link}
                target="_blank"
              >
                Demo
              </a>
            </Button>
          </Box>
          <div
            style={{
              padding: "10px",
            }}
            onMouseOut={() => setProjectHover(false)}
            onMouseOver={() => setProjectHover(true)}
          >
            {!projectHover && (
              <CardMedia
                component="img"
                height="300px"
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
                height="300px"
                image={project.image2}
                alt={project.name}
                sx={{
                  borderRadius: "15px",
                  border: "0.01rem solid #FFD363",
                  ml: "5px",
                }}
              />
            )}
          </div>
          <CardContent>
            <Typography
              variant="h5"
              sx={{
                color: "#FFD363",
                textAlign: "center",
              }}
            >
              {project.user}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                p: "15px",
                color: "white",
                fontSize: "15px",
              }}
            >
              {project.description}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                p: "10px",
                fontWeight: "bold",
                color: "#FFD363",
              }}
            >
              {project.detail}
            </Typography>
          </CardContent>
          <CardActions disableSpacing onClick={handleClickOpen}>
            <Button
              sx={{
                width: { xs: "100%" },
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                border: "1px solid yellow",
                borderRadius: "20px",
                textTransform: "capitalize",
                "&:hover": {
                  border: "3px solid #FFD363",
                },
              }}
            >
              {project.technologies.map((tech) => (
                <Typography
                  variant="h6"
                  key={tech.id}
                  sx={{
                    display: { xs: "none", sm: "flex" },
                    color: `${tech.color}`,
                    pr: "6px",
                    p: "10px",
                  }}
                >{`@${tech.name}`}</Typography>
              ))}
              <Typography
                sx={{
                  display: { xs: "block", sm: "none" },
                  color: "white",
                  p: 1,
                  pl: 7,
                }}
              >
                Technology Used
              </Typography>
            </Button>
          </CardActions>
        </Card>
        {/* </Tilt> */}
      </motion.div>
      <Box>
        <Dialog
          sx={{
            "& .MuiPaper-root": {
              borderRadius: "16px",
              minHeight: "70vh",
              minWidth: "40vw",
              p: "10px",
            },
          }}
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle
            sx={{
              fontWeight: "bold",
              fontSize: "29px",
            }}
            id="alert-dialog-title"
          >
            Technologies used for the Project
          </DialogTitle>
          <DialogContent>
            <Typography variant="h5" p={3} color="red">
              Front End
            </Typography>
            <ol>
              <li>
                <Typography
                  variant="h6"
                  sx={{
                    p: "10px",
                  }}
                >
                  React{" "}
                </Typography>
              </li>
              <li>
                <Typography
                  variant="h6"
                  sx={{
                    p: "10px",
                  }}
                >
                  Redux Toolkit and RTKQuery{" "}
                </Typography>
              </li>
              <li>
                <Typography
                  variant="h6"
                  sx={{
                    p: "10px",
                  }}
                >
                  Matterial Ui.MUI{" "}
                </Typography>
              </li>
              <li>
                <Typography
                  variant="h6"
                  sx={{
                    p: "10px",
                  }}
                >
                  react-draft-wysiwyg - rich text editor library
                </Typography>
              </li>
              <li>
                <Typography
                  variant="h6"
                  sx={{
                    p: "10px",
                  }}
                >
                  react-pro-sidebar{" "}
                </Typography>
              </li>
              <li>
                <Typography
                  variant="h6"
                  sx={{
                    p: "10px",
                  }}
                >
                  quill - rich text editor{" "}
                </Typography>
              </li>
              <li>
                <Typography
                  variant="h6"
                  sx={{
                    p: "10px",
                  }}
                >
                  Cloudinary for Image Upload to Server- image upload using
                  Upload widget in React{" "}
                </Typography>
              </li>
              <li>
                <Typography
                  variant="h6"
                  sx={{
                    p: "10px",
                  }}
                >
                  react-dropzone - for browsing and load image from loacl
                  storage{" "}
                </Typography>
              </li>
            </ol>
            <Typography variant="h5" p={3} color="red">
              {" "}
              Backend
            </Typography>
            <ol>
              <li>
                <Typography
                  variant="h6"
                  sx={{
                    p: "10px",
                  }}
                >
                  Node js
                </Typography>
              </li>
              <li>
                <Typography
                  variant="h6"
                  sx={{
                    p: "10px",
                  }}
                >
                  Express Framework
                </Typography>
              </li>
              <li>
                <Typography
                  variant="h6"
                  sx={{
                    p: "10px",
                  }}
                >
                  Moongose - mongo db connection and validation
                </Typography>
              </li>
              <li>
                <Typography
                  variant="h6"
                  sx={{
                    p: "10px",
                  }}
                >
                  Express Framework
                </Typography>
              </li>
              <li>
                <Typography
                  variant="h6"
                  sx={{
                    p: "10px",
                  }}
                >
                  MONGODb - no sql database for data storage - here Mongodb
                  atlas used so if you clone project repository you have to set
                  up your mongo db Atlas dtatabase or you can set up Locally
                </Typography>
              </li>
            </ol>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleClose}
              autoFocus
              variant="contained"
              size="large"
              sx={{
                backgroundColor: "success",
                borderRadius: "7px",
                textTransform: "capitalize",
                fontWeight: 700,
                fontSize: "14px",
                "&:hover": {
                  backgroundColor: "info",
                },
              }}
            >
              OK Good
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Grid>
  );
};

export default ProjectCard;
