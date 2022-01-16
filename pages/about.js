import { Container, Typography } from "@mui/material";
import React from "react";
import useStyles from "../utils/style";

function About() {
  const classes = useStyles();
  return (
    <Container>
      <Typography variant="h2" component="h2" className={classes.textCenter}>
        About Us
      </Typography>
      <hr />
      <Typography variant="h4" component="h4" className={classes.textCenter}>
        Room For Rent web application was built to help the citizens of Bustos
        Bulacan to find easy and affordable renting place. Also, it provides
        services to help the host, host their place without problems and earn
        money in return.
      </Typography>
    </Container>
  );
}

export default About;
