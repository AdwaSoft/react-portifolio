import {
  Box,
  Button,
  FormControl,
  OutlinedInput,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState, useRef } from "react";
import mern from "./assets/mernstack.jpg";
import emailjs from "@emailjs/browser";
import { styled } from "@mui/material/styles";

const StyledTextField = styled(TextField)({
  padding: "10px",
});
const Contact = () => {
  // template Id: template_o7q5vcj
  // service id :service_m7kmz2b
  // public key :A5pVtftG0XP-7JY0c
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSend, setIsSend] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSend(true);

    emailjs
      .send(
        "service_m7kmz2b",
        "template_o7q5vcj",
        {
          from_name: form.name,
          to_name: "Melketsedek Cheru",
          from_email: form.email,
          to_email: "cherumelketsedek@gmail.com",
          message: form.message,
        },
        "A5pVtftG0XP-7JY0c"
      )
      .then(
        () => {
          setIsSend(false);
          alert("Thank you. I have Received Your Message.I will Contact You");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setIsSend(false);
          console.error(error);

          alert("Your Message Not Sent");
        }
      );
  };
  return (
    <Box
      id="contact"
      mt={10}
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Toolbar />
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          pb: 6,
        }}
      >
        Contact{" "}
        <span
          style={{
            color: "#FFD363",
          }}
        >
          Me
        </span>
      </Typography>

      {/* main content */}

      <Box
        height="70vh"
        backgroundColor="#E6EEFE"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        mb={10}
        sx={{
          width: { xs: "80vw", sm: "50vw" },
          borderRadius: "20px",
          border: "1px solid #FFD363",
          pb: "20px",
        }}
      >
        <form onSubmit={handleSubmit} ref={formRef}>
          <StyledTextField
            fullWidth
            label="Name"
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            margin="normal"
          />
          <StyledTextField
            fullWidth
            label="Email"
            type="email"
            name="email"
            placeholder="Enter your Email"
            value={form.email}
            onChange={handleChange}
            margin="normal"
          />
          <StyledTextField
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="What you want to say?"
            multiline
            minRows={5}
            fullWidth
            label="Message Here"
            margin="normal"
          />
          <Button
            type="submit"
            size="large"
            sx={{
              width: "190px",
              textAlign: "center",
              textTransform: "capitalize",
              color: "black",
              backgroundColor: "#FFD363",
              m: 5,
              ml: 2,
              "&:hover": {
                color: "white",
                backgroundColor: "#1B3764",
              },
            }}
            variant="contained"
          >
            {!isSend ? "Send" : "Sending ..."}
          </Button>
        </form>
      </Box>
      {/* <Box pr={7} mb={10}>
          <img
            width="700px"
            height="500px"
            src={mern}
            alt="Men Stack Developer"
          />
        </Box> */}
    </Box>
  );
};

export default Contact;
