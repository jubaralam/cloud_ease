import React from "react";
import { Box, Button } from "@mui/material";

const BottomNavigation = ({ onBack, onNext }) => {
  return (
    <Box display="flex" justifyContent="space-between" mt={3}>
      <Button variant="contained" color="secondary" onClick={onBack}>
        Back
      </Button>
      <Button variant="contained" color="primary" onClick={onNext}>
        Next
      </Button>
    </Box>
  );
};

export default BottomNavigation;
