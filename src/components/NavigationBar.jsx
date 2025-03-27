import React from "react";
import { Stepper, Step, StepLabel, Box } from "@mui/material";

const steps = ["Start", "Select Actions", "Link AWS AZ/Key", "Fetch"];

const NavigationBar = ({ activeStep }) => {
  return (
    <Box
      sx={{
        width: "100%",
        mb: 3,
        bgcolor: "#1b1a55",
        py: 2,
        borderRadius: 1,
      }}
    >
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel
              sx={{
                "& .MuiStepLabel-label": { color: activeStep >= index ? "#9290c3" : "#ffffff99" },
                "& .Mui-active .MuiStepIcon-root, & .Mui-completed .MuiStepIcon-root": {
                  color: "#9290c3",
                },
              }}
            >
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default NavigationBar;
