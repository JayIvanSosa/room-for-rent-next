import React, { useState } from "react";
import Head from "next/head";
import { Link } from "@mui/material";
import NextLink from "next/Link";
import useStyles from "../utils/style";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";

import ReactMapGL from "react-map-gl";

import { useSelector, useDispatch } from "react-redux";

import { LATITUDE_LONGITUDE_HOST_INPUT } from "../redux/actionTypes";

function HostEighth() {
  const classes = useStyles();
  const [latitudeInput, setlatitudeInput] = useState("");
  const [longitudeInput, setlongitudeInput] = useState("");
  const dispatch = useDispatch();
  const { latitudeValue, longitudeValue } = useSelector(
    (state) => state.eightpage
  );
  const [viewport, setViewport] = useState({
    latitude: latitudeValue,
    longitude: longitudeValue,
    zoom: 13.5,
    width: 900,
    height: 900,
    pitch: 70,
  });

  return (
    <div>
      <Head>
        <title>8th Hosting</title>
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
                p: 15,
                m: 8,
                bgcolor: "transparent",
              }}
            >
              <Grid
                item
                style={{ color: "White", fontSize: 50, fontWeight: 600 }}
              >
                Map
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
                    marginTop: 20,
                    position: "absolute",
                    marginLeft: 1100,
                    boxShadow: "2px 2px 5px 2px",
                  }}
                >
                  <ReactMapGL
                    mapStyle={
                      "mapbox://styles/roomforrent/ckxskj6cb84ct15o4dh7qyr44"
                    }
                    mapboxApiAccessToken={
                      "pk.eyJ1Ijoicm9vbWZvcnJlbnQiLCJhIjoiY2t3a2JueTF1MHh0aTJ3cXY0bjNocmZsZCJ9.jXzlIrtHZT-hz7KYydJixw"
                    }
                    {...viewport}
                    onViewportChange={(newView) => setViewport(newView)}
                  ></ReactMapGL>
                </Grid>

                <Grid
                  item
                  style={{
                    marginTop: 760,
                    position: "absolute",
                    marginLeft: 1800,
                  }}
                >
                  <NextLink href="/9thHost" passHref>
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
                        Next
                      </Button>
                    </Link>
                  </NextLink>
                </Grid>
                <Grid
                  item
                  style={{
                    marginTop: 760,
                    position: "absolute",
                    marginLeft: 400,
                  }}
                >
                  <NextLink href="/7thHost" passHref>
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

export default HostEighth;
