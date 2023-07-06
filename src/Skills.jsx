import { Box, Divider, Toolbar, Typography } from "@mui/material";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { allSkills } from "./rawContent/index";

const Skills = () => {
  return (
    <Box id="skills" sx={{}}>
      <Divider />
      <Toolbar />
      <Typography
        variant="h3"
        sx={{
          pl: 2,
          pb: 5,
          textAlign: { xs: "", sm: "center" },
        }}
      >
        Skills.
      </Typography>

      <VerticalTimeline>
        {allSkills.map((eachskill, index) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#3A4C6B",
              color: "white",
              border: "1px solid #FFD363",
            }}
            contentArrowStyle={{
              borderRight: "8px solid #FFD363 ",
            }}
            iconStyle={{
              background: "white",
              border: "2px solid #FFD363",
            }}
            icon={
              <div
                style={{
                  padding: "7px",
                }}
              >
                <img
                  alt={eachskill.title}
                  src={eachskill.icon}
                  width="100%"
                  height="60%"
                />
              </div>
            }
            key={index}
          >
            <Box>
              <Typography
                variant="h4"
                sx={{
                  color: " #FFD363",
                }}
              >
                {eachskill.title}
              </Typography>
              <ul>
                {eachskill.skillSet.map((skillitem, index) => (
                  <li key={index}>
                    <Typography>{skillitem}</Typography>
                  </li>
                ))}
              </ul>
            </Box>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </Box>
  );
};

export default Skills;
