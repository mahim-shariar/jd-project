import { Grid } from "@mui/material";
import AboutMeCard from "./AboutMeCard";
import Main from "./Main";

const Home = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} lg={3}>
          <div style={{ position: "sticky", top: 20 }}>
            <AboutMeCard />
          </div>
        </Grid>
        <Grid item xs={12} md={12} lg={9}>
          <Main />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
