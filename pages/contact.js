import { Container, Typography } from "@mui/material";
import React from "react";
import useStyles from "../utils/style";
import Layout from "../components/Layout";

function Contact() {
  const classes = useStyles();
  return (
    <Layout>
      <div>
        <Container>
          <Typography
            variant="h2"
            component="h2"
            className={classes.textCenter}
          >
            Contact Us
          </Typography>
          <hr />
          <Typography
            variant="h4"
            component="h4"
            className={classes.textCenter}
          >
            Mikeangelo Cruz
          </Typography>
          <Typography
            variant="h4"
            component="h4"
            className={classes.textCenter}
          >
            Carla Cabintoy
          </Typography>
          <Typography
            variant="h4"
            component="h4"
            className={classes.textCenter}
          >
            Joshua Cayanan
          </Typography>
          <Typography
            variant="h4"
            component="h4"
            className={classes.textCenter}
          >
            Lawrence Felicianos
          </Typography>
        </Container>
        <footer className={classes.footer} style={{ marginTop: "30vh" }}>
          <Typography>All rights reserved. Room For Rent 2021-2022</Typography>
        </footer>
      </div>
    </Layout>
  );
}

export default Contact;
