import React from "react";
import { Paper, Typography, IconButton } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const samplePolicy = `
{
  "Effect": "Allow",
  "Action": "ec2:StopInstances",
  "Resource": "*"
  "Resource": "*"
  "Resource": "*"
}`;

const JamPolicyPanel = () => {
  const copyToClipboard = () => {
    console.log("working");
    try {
      navigator.clipboard.writeText(samplePolicy);
      alert("Policy copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };
  

  return (
    <Paper 
      elevation={3} 
      sx={{ 
        p: 3, 
        // maxHeight: 200, 
        overflowY: "auto", 
        position: "relative", 
        backgroundColor: "#070f2b", 
        color: "#9290c3", 
        border: "1px solid #9290c3", 
        borderRadius: 2, 
        width: "60%", 
        margin: "auto" 
      }}
    >
      <Typography variant="h6" gutterBottom sx={{ color: "#9290c3" }}>
        JAM Policy
      </Typography>
      <Typography 
        variant="body2" 
        component="pre" 
        sx={{ 
          backgroundColor: "#1b1a55", 
          p: 2, 
          borderRadius: 1, 
          color: "#9290c3", 
          fontFamily: "monospace",
          whiteSpace: "pre-wrap"
        }}
      >
        {samplePolicy}
      </Typography>
      <IconButton
        sx={{ 
          position: "absolute", 
          top: 10, 
          right: 10, 
          color: "#9290c3", 
          '&:hover': { color: "#535c91" }
        }}
        onClick={copyToClipboard}
      >
        <ContentCopyIcon />
      </IconButton>
    </Paper>
  );
};

export default JamPolicyPanel;
