import React, { useState } from "react";
import Head from "next/head";
import { Link } from "@mui/material";
import NextLink from "next/Link";
import useStyles from "../utils/style";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";

import TextField from "@mui/material/TextField";

import { LOCATION_HOST_INPUT } from "../redux/actionTypes";
import { useSelector, useDispatch } from "react-redux";

function HostFourth() {
  const classes = useStyles();

  const [locationInput, setLocationInput] = useState("");
  const { locationValue } = useSelector((state) => state.fourthpage);
  const dispatch = useDispatch();

  return (
    <div>
      <Head>
        <title>4th Hosting</title>
      </Head>
      <div className={classes.splitScreen}>
        <Grid
          item
          style={{
            position: "absolute",
            marginLeft: 50,
          }}
        >
          <h1 style={{ color: "white" }}> Room For Rent </h1>
        </Grid>
        <Box
          sx={{
            width: "100%",
            background: "linear-gradient(#01c9f0, #1b4688)",
          }}
        >
          <Grid
            container
            rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Box
              style={{ background: "transparent", marginTop: 200 }}
              sx={{
                display: "flex",
                justifyContent: "center",
                p: 20,
                m: 8,
                bgcolor: "transparent",
              }}
            >
              <Grid
                item
                style={{ color: "White", fontSize: 50, fontWeight: 600 }}
              >
                Where is your place located
              </Grid>
            </Box>
          </Grid>
        </Box>

        <div className={classes.rightSide}>
          <Box sx={{ width: "100%", background: "#f7f7f7" }}>
            <Grid
              container
              rowSpacing={3}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Box
                style={{ background: "white" }}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  p: 1,
                  m: 1,
                  bgcolor: "transparent",
                }}
              >
                <Grid
                  item
                  style={{
                    marginTop: 400,
                    position: "absolute",
                    marginLeft: 1100,
                  }}
                >
                  <TextField
                    style={{ width: 500 }}
                    id="outlined-basic"
                    label="Enter Location"
                    variant="outlined"
                    value={locationInput}
                    onChange={(event) => setLocationInput(event.target.value)}
                  />
                </Grid>
                <NextLink href="/5thHost" passHref>
                  <Button
                    variant="contained"
                    style={{
                      marginTop: 500,
                      position: "absolute",
                      marginLeft: 1100,
                    }}
                    onClick={() =>
                      dispatch({
                        type: LOCATION_HOST_INPUT,
                        payload: { locationValue: locationInput },
                      })
                    }
                  >
                    Submit location
                  </Button>
                </NextLink>

                <Grid
                  item
                  style={{
                    marginTop: 800,
                    position: "absolute",
                    marginLeft: 400,
                  }}
                >
                  <NextLink href="/3rdHost" passHref>
                    <Link>
                      <Button
                        variant="contained"
                        style={{
                          fontSize: 17,
                          maxWidth: "150px",
                          maxHeight: "80px",
                          minWidth: "90px",
                          minHeight: "65px",
                        }}
                      >
                        Back
                      </Button>
                    </Link>
                  </NextLink>
                </Grid>
              </Box>
            </Grid>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default HostFourth;
