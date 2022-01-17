import React from "react";
import { userService } from "services";
import { Link } from "components";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import FullWidthTabs from "./tabs";
import ButtonBases from "./imgbtn";
import useStyles from "../utils/style";
import { Nav, Alert } from "components";

export default Home;

function Home() {
  const classes = useStyles();
  return (
    <div>
      <Nav />
      <Alert />
      <div className="p-4">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3}>
            <Grid item xs={2}>
              <div className="container" style={{ position: "absolute" }}>
                <h1>Hi {userService.userValue?.firstName}!</h1>
                <p>You&apos;re logged in Room For Rent!!</p>
                <p>
                  <Link href="/users">Manage Users</Link>
                </p>
              </div>
            </Grid>
            <Grid item xs={8}>
              <div style={{ marginLeft: 100 }}>
                <FullWidthTabs />
                <div style={{ marginTop: 20, marginLeft: 100 }}>
                  {" "}
                  <ButtonBases />
                </div>
              </div>
            </Grid>
            <Grid item xs={2}></Grid>
          </Grid>
        </Box>
      </div>
      <footer className={classes.footer} style={{ marginTop: "30vh" }}>
        <Typography>All rights reserved. Room For Rent 2021-2022</Typography>
      </footer>
    </div>
  );
}
