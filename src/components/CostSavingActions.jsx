import React from "react";
import { FormGroup, FormControlLabel, Checkbox, Paper, Typography } from "@mui/material";

const categories = {
  "Start-Stop Resources": ["EC2", "RDS", "Light Sail", "Amazon Neptune"],
  "Pause-Resume Resources": ["Redshift Clusters", "Aurora Serverless V2"],
  "Resource Cleanup": [
    "Terminate EC2",
    "Delete EBS Volumes",
    "Delete EBS Snapshot",
    "Delete RDS",
    "Delete RDS Snapshot",
  ],
  "Optimize Storage": [
    "Compress S3 Objects",
    "Move Data to Glacier",
    "Optimize RDS Storage",
    "Resize EBS Volumes"
  ],
  "Network Cost Reduction": [
    "Reduce Data Transfer Costs",
    "Optimize Load Balancer Usage",
    "Use CloudFront for Caching"
  ],
  "Rightsizing Resources": [
    "Resize EC2 Instances",
    "Downgrade RDS Instances",
    "Optimize Lambda Memory Allocation"
  ]
};

const CostSavingActions = ({ selectedActions, setSelectedActions }) => {
  const handleToggle = (action) => {
    setSelectedActions((prev) =>
      prev.includes(action) ? prev.filter((item) => item !== action) : [...prev, action]
    );
  };

  return (
    <Paper elevation={3} sx={{ p: 3, backgroundColor: "#070f2b", color: "#9290c3", borderRadius: 2, border: "1px solid #9290c3", width: "100%",margin: "auto" }}>
      <Typography variant="h6" gutterBottom sx={{ color: "#9290c3" }}>
        Cost-Saving Actions
      </Typography>
      {Object.entries(categories).map(([category, actions]) => (
        <div key={category} style={{ backgroundColor: "#1b1a55", padding: "10px", borderRadius: "5px", marginBottom: "10px" }}>
          <Typography variant="subtitle1" sx={{ color: "#535c91", fontWeight: "bold" }}>
            {category}
          </Typography>
          <FormGroup>
            {actions.map((action) => (
              <FormControlLabel
                key={action}
                control={
                  <Checkbox
                    checked={selectedActions.includes(action)}
                    onChange={() => handleToggle(action)}
                    sx={{ color: "#9290c3", '&.Mui-checked': { color: "#535c91" } }}
                  />
                }
                label={<span style={{ color: "#9290c3" }}>{action}</span>}
                sx={{ '&:hover': { backgroundColor: "#1b1a55", borderRadius: "5px" } }}
              />
            ))}
          </FormGroup>
        </div>
      ))}
    </Paper>
  );
};

export default CostSavingActions;
