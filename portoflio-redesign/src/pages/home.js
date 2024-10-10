import Education from "../components/education";
import Experience from "../components/experience";
import Header from "../components/header";
import Projects from "../components/projects";
import { Grid, Box } from "@mui/material";

export default function Home() {
  return (
    <Box sx={{ padding: "16px" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Header />
        </Grid>

        <Grid item xs={12} md={8}>
          <Projects />
          <Experience />
          <Education />
        </Grid>
      </Grid>
    </Box>
  );
}
