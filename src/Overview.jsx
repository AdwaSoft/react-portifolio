import {
  Box,
  Card,
  CardContent,
  CssBaseline,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import { Tilt } from "react-tilt";
import React from "react";
import { overviewItem } from "./rawContent/index";
import { motion } from "framer-motion";

const Overview = () => {
  return (
    <Box id="overview">
      <CssBaseline />
      <Toolbar />
      <Box
        className="main"
        display="flex"
        justifyContent="flex-start"
        alignItems="start"
        height="auto"
        sx={{
          mt: { xs: 2, sm: 0 },
        }}
      >
        {/* Circular */}
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
          }}
          flexDirection="column"
          justifyContent="space-between"
          alignItems="center"
        >
          <div
            style={{
              width: "5px",
              height: "11vh",

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
          <div
            style={{
              width: "5px",
              height: "11vh",

              backgroundColor: "#FFD363",
            }}
          />
        </Box>

        {/* mani content */}
        <Box width="100%">
          {/* overview Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              type: "spring",
              duration: 0.5,
              delay: 0.5,
              ease: "easeOut",
            }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              sx={{
                pl: { xs: 5, sm: 20 },
                pr: { xs: 10, sm: 20 },
                pb: { xs: 5, sm: 10 },
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  pb: 5,
                  pl: 2,
                  textAlign: { xs: "left", sm: "center" },
                }}
              >
                Overview.
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "gray",
                }}
              >
                I'm a skilled software developer working in JavaScript, and
                expertise in frameworks like React, Node.js, and Material UI.
                I'm a quick learner and collaborate closely with clients to
                create efficient, scalable, and user-friendly solutions that
                solve real-world problems. Let's work together to bring your
                ideas to life!
              </Typography>
            </Box>
          </motion.div>
          {/* Overviw card */}
          <Box
            sx={{
              mb: 10,
            }}
          >
            <Grid
              container
              direction="row"
              sx={{
                spacing: { xs: 0, sm: 2 },
                pl: { xs: 1, sm: 15 },
                rowGap: 2,
              }}
            >
              {overviewItem.map((item, index) => (
                <Grid item sm={3} xs={6} key={item.name}>
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
                      hidden: { opacity: 0, y: 100 },
                      visible: { opacity: 1, x: 0, y: 0 },
                    }}
                  >
                    <Tilt>
                      <Card
                        sx={{
                          borderRadius: "20px",

                          border: "0.03rem solid #FFD363",
                          width: { xs: "180px", sm: "230px" },
                          height: { xs: "250px", sm: "300px" },
                          backgroundColor: "#3A4C6B",
                        }}
                      >
                        <Box
                          display="flex"
                          flexDirection="column"
                          alignItems="center"
                        >
                          <Box width="100px" height="40%" pt={5} pb={5}>
                            <img
                              style={{
                                borderRadius: "10%",
                                border: "4px solid  #3A4C6B",
                              }}
                              width="100%"
                              height="auto"
                              src={item.icon}
                            />
                          </Box>
                          <Typography
                            variant="h5"
                            sx={{
                              color: "white",
                              pl: { xs: 0, sm: 0 },
                            }}
                          >
                            {item.name}
                          </Typography>
                          <Typography
                            variant="h5"
                            sx={{
                              color: "white",
                              pl: { xs: 0, sm: 0 },
                            }}
                          >
                            Developer
                          </Typography>
                        </Box>
                      </Card>
                    </Tilt>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Overview;
