import { useState } from "react";
import NavigationBar from "../components/NavigationBar";
import CostSavingActions from "../components/CostSavingActions";
import JamPolicyPanel from "../components/JamPolicyPanel";
import BottomNavigation from "../components/BottomNavigation";
import { Container, Grid, Paper } from "@mui/material";

function AddAccount() {
  const [selectedActions, setSelectedActions] = useState([]);

  const handleBack = () => {
    alert("Going back to the previous step...");
  };

  const handleNext = () => {
    alert("Proceeding to the next step...");
  };

  return (
    <Container
      sx={{
        mt: 4,
        color: "#9290c3",
        backgroundColor: "#070f2b",
        p: 4,
        borderRadius: 2,
      }}
    >
      <Paper
        elevation={4}
        sx={{ p: 4, backgroundColor: "#1b1a55", borderRadius: 2 }}
      >
        <NavigationBar activeStep={1} />
        <Grid container spacing={4} alignItems="stretch">
          <Grid
            item
            xs={12}
            md={8}
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <CostSavingActions
              selectedActions={selectedActions}
              setSelectedActions={setSelectedActions}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <JamPolicyPanel />
          </Grid>
        </Grid>
        <BottomNavigation onBack={handleBack} onNext={handleNext} />
      </Paper>
    </Container>
  );
}
export default AddAccount;
