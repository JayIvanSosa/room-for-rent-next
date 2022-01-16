import React from "react";
import { userService } from "services";
import { Link } from "components";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import FullWidthTabs from "./tabs";
import ButtonBases from "./imgbtn";

export default Home;

function Home() {
  return (
    <div className="p-4">
      <div className="container">
        <h1>Hi {userService.userValue?.firstName}!</h1>
        <p>You&apos;re logged in Room For Rent!!</p>
        <p>
          <Link href="/users">Manage Users</Link>
        </p>
      </div>
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={100}>
            <Box
              style={{
                background: "transparent",
                width: "100%",
                marginTop: 200,
              }}
              sx={{
                display: "flex",
                justifyContent: "center",
                p: 1,
                m: 1,
                bgcolor: "transparent",
              }}
            >
              <Paper
                sx={{ height: 100, width: 800 }}
                style={{
                  borderRadius: 20,
                  border: "transparent",
                  padding: 3,
                  textAlign: "center",
                  backgroundColor: "transparent",
                  color: "transparent",
                }}
              >
                <Grid
                  sx={{
                    display: "flex",
                    justifyContent: "center",

                    m: 1,
                  }}
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                  <Grid item>
                    <FullWidthTabs />
                  </Grid>
                </Grid>
              </Paper>
            </Box>
          </Grid>
          <Grid
            style={{ marginTop: 200, marginLeft: 400 }}
            sx={{
              display: "flex",
              justifyContent: "center",
              p: 5,
              m: 1,
            }}
            container
            rowSpacing={2}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <ButtonBases />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
