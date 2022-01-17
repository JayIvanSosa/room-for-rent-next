import React from "react";
import Head from "next/head";
import { Link, AppBar, Container, Toolbar, Typography } from "@mui/material";
import NextLink from "next/Link";
import useStyles from "../utils/style";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import sideImage from "../public/images/image3.jpg";
import { userService } from "services";

function Host() {
  const classes = useStyles();

  return (
    <div>
      <Head>
        <title>Try Hosting</title>
      </Head>
      <AppBar position="absolute" className={classes.nav}>
        <Toolbar className={classes.grow}>
          <NextLink href="/" passHref>
            <Link>
              <Typography className={classes.title}>Room For Rent</Typography>
            </Link>
          </NextLink>
          <div className={classes.grow}></div>
        </Toolbar>
      </AppBar>

      <div className={classes.splitScreen}>
        <Box sx={{ width: "100%", background: "Black" }}>
          <Grid
            container
            rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Box
              style={{ background: "transparent" }}
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
                <h1>Hi {userService.userValue?.firstName}!</h1>
                Hosting makes RoomforRent, RoomforRent
              </Grid>
            </Box>
          </Grid>
        </Box>

        <div className={classes.rightPane}>
          <Box sx={{ width: "100%", background: "Black" }}>
            <Grid
              container
              rowSpacing={3}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Box
                style={{ background: "transparent" }}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  p: 1,
                  m: 1,
                  bgcolor: "transparent",
                }}
              >
                <Grid item>
                  <Container style={{ marginTop: 10 }}>
                    <Image src={sideImage} alt="sideImage" layout="fixed" />
                  </Container>
                </Grid>
                <Grid
                  item
                  style={{
                    marginTop: 700,
                    position: "absolute",
                    marginLeft: 500,
                  }}
                >
                  <NextLink href="/1stHost" passHref>
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
                        Try Hosting
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

export default Host;
