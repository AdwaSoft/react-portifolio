import { Box, Toolbar, Typography } from "@mui/material";
import React from "react";
import myPhoto from "./assets/myPhoto.jpg";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Box id="home" height="100vh">
      <Toolbar />
      <Toolbar />
      <Box
        sx={{
          display: { xs: "none", sm: "flex" },
        }}
        alignItems="center"
      >
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
            width: "80%",
            height: "5px",
            flexGrow: 1,
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
      </Box>
      {/* /////////////////////////Middle */}

      <Box
        sx={{
          display: { xs: "block", sm: "flex" },
        }}
        justifyContent="start"
        alignItems="start"
      >
        {/* Text */}

        <Box
          sx={{
            flexGrow: { sm: 1 },
            pl: { xs: 2, sm: 20 },
            pt: { xs: 2, sm: 20 },
            order: { xs: 2, sm: 1 },
          }}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <Typography variant="h5">
              Hi i' am{" "}
              <span
                style={{
                  padding: "30px",
                  fontSize: "60px",
                  fontWeight: "bold",
                  color: "#FFD363",
                }}
              >
                Melketsedek
              </span>
            </Typography>
            <Typography variant="h5"> Fullstack developer</Typography>

            <Typography variant="h5">
              I Develop{" "}
              <span
                style={{
                  color: "#FFD363",
                  fontSize: "30px",
                }}
              >
                <Typewriter
                  words={["Front End", "Back End", "Web Application"]}
                  cursor
                  loop={0}
                  typeSpeed={50}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </Typography>
          </motion.div>
        </Box>

        {/* Image */}
        <Box
          sx={{
            pl: { xs: 1, sm: 2 },
            pr: { xs: 1, sm: 2 },
            pb: 0,
            mr: { xs: 0, sm: 20 },

            order: { xs: 0, sm: 2 },
          }}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <img
              style={{
                width: "420px",
                height: "auto",
                borderRadius: "100%",
                border: "1px solid #FFD363",
              }}
              src={myPhoto}
              alt="Photo"
            />
          </motion.div>
        </Box>
      </Box>

      {/* Bottom Rounded */}
      <Box
        sx={{
          display: { xs: "none", sm: "flex" },
        }}
        alignItems="center"
      >
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
            width: "80%",
            height: "5px",
            flexGrow: 1,
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
      </Box>
    </Box>
  );
};

export default Home;
