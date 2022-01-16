import React, { useState } from "react";
import Head from "next/head";
import { Link } from "@mui/material";
import NextLink from "next/Link";
import useStyles from "../utils/style";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";

import { useSelector, useDispatch } from "react-redux";
import { AMENITIES_FAVORITES_SAFETYITEMS_HOST_INPUT } from "../redux/actionTypes.js";

function HostSixth() {
  const classes = useStyles();
  const [amenitiesInput, setAmenitiesInput] = useState("");
  const [favoritesInput, setFavoritesInput] = useState("");
  const [safetyitemsInput, setSafetyItemsInput] = useState("");
  const { amenitiesValue, favoritesValue, safetyitemsValue } = useSelector(
    (state) => state.sixthpage
  );
  const dispatch = useDispatch();

  return (
    <div>
      <Head>
        <title>6th Hosting</title>
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
                Where is your place located?
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
                    marginTop: 200,
                    position: "absolute",
                    marginLeft: 865,
                  }}
                >
                  Do you have any standout amenities
                </Grid>
                <Grid
                  item
                  style={{
                    marginTop: 230,
                    position: "absolute",
                    marginLeft: 1100,
                  }}
                >
                  <TextField
                    style={{ width: 500 }}
                    id="outlined-basic"
                    label="pool, hot tub, exercise equipment"
                    variant="outlined"
                    value={amenitiesInput}
                    onChange={(event) => setAmenitiesInput(event.target.value)}
                  />
                </Grid>
                <Grid
                  item
                  style={{
                    marginTop: 330,
                    position: "absolute",
                    marginLeft: 840,
                  }}
                >
                  What about these guest favorites
                </Grid>
                <Grid
                  item
                  style={{
                    marginTop: 360,
                    position: "absolute",
                    marginLeft: 1100,
                  }}
                >
                  <TextField
                    style={{ width: 500 }}
                    id="outlined-basic"
                    label="wifi, tv, aircondition, free parking"
                    variant="outlined"
                    value={favoritesInput}
                    onChange={(event) => setFavoritesInput(event.target.value)}
                  />
                </Grid>
                <Grid
                  item
                  style={{
                    marginTop: 470,
                    position: "absolute",
                    marginLeft: 820,
                  }}
                >
                  Have any of these safety items
                </Grid>
                <Grid
                  item
                  style={{
                    marginTop: 505,
                    position: "absolute",
                    marginLeft: 1100,
                  }}
                >
                  <TextField
                    style={{ width: 500 }}
                    id="outlined-basic"
                    label="first aid kit, fire extinguisher, smoke alarm"
                    variant="outlined"
                    value={safetyitemsInput}
                    onChange={(event) =>
                      setSafetyItemsInput(event.target.value)
                    }
                  />
                </Grid>
                <NextLink href="/7thHost" passHref>
                  <Button
                    variant="contained"
                    style={{
                      marginTop: 600,
                      position: "absolute",
                      marginLeft: 1100,
                    }}
                    onClick={() =>
                      dispatch({
                        type: AMENITIES_FAVORITES_SAFETYITEMS_HOST_INPUT,
                        payload: {
                          amenitiesValue: amenitiesInput,
                          favoritesValue: favoritesInput,
                          safetyitemsValue: safetyitemsInput,
                        },
                      })
                    }
                  >
                    Submit items
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
                  <NextLink href="/5thHost" passHref>
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

export default HostSixth;
