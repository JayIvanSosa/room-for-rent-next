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
import { TITLE_DECRIPTION_HOST_INPUT } from "../redux/actionTypes";

function HostNinth() {
  const classes = useStyles();

  const [titleInput, settitleInput] = useState("");
  const [descriptionInput, setdescriptionInput] = useState("");
  const dispatch = useDispatch();
  const { titleValue, descriptionValue } = useSelector(
    (state) => state.ninthpage
  );

  return (
    <div>
      <Head>
        <title>9th Hosting</title>
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
                Let&apos;s give your place a name and let&apos;s describe your
                place
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
                    marginTop: 270,
                    position: "absolute",
                    marginLeft: 720,
                  }}
                >
                  Create your title
                </Grid>
                <Grid
                  item
                  style={{
                    marginTop: 310,
                    position: "absolute",
                    marginLeft: 1100,
                  }}
                >
                  <TextField
                    style={{ width: 500 }}
                    id="outlined-basic"
                    label="Enter your Title"
                    variant="outlined"
                    value={titleInput}
                    onChange={(event) => settitleInput(event.target.value)}
                  />
                </Grid>
                <Grid
                  item
                  style={{
                    marginTop: 400,
                    position: "absolute",
                    marginLeft: 770,
                  }}
                >
                  Create your description
                </Grid>
                <Grid
                  item
                  style={{
                    marginTop: 440,
                    position: "absolute",
                    marginLeft: 1100,
                  }}
                >
                  <TextField
                    style={{ width: 500 }}
                    id="outlined-basic"
                    label="Enter your Description"
                    variant="outlined"
                    value={descriptionInput}
                    onChange={(event) =>
                      setdescriptionInput(event.target.value)
                    }
                  />
                </Grid>
                <NextLink href="/10thHost" passHref>
                  <Button
                    variant="contained"
                    style={{
                      marginTop: 600,
                      position: "absolute",
                      marginLeft: 1100,
                    }}
                    onClick={() =>
                      dispatch({
                        type: TITLE_DECRIPTION_HOST_INPUT,
                        payload: {
                          titleValue: titleInput,
                          descriptionValue: descriptionInput,
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
                  <NextLink href="/8thHost" passHref>
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

export default HostNinth;
