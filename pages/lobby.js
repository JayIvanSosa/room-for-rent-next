import { Typography } from "@mui/material";
import React from "react";

import Products from "../components/Products";
// import Products from "../component/Products";
import useStyles from "../utils/style";

import { Nav, Alert } from "components";

function Lobby() {
  const classes = useStyles();
  return (
    <div>
      <Nav />
      <Alert />
      <Typography variant="h4" className={classes.footer} marginTop={3}>
        Available Homes
      </Typography>
      <div className={classes.centerCards}>
        <Products />
      </div>
      <footer className={classes.footer} style={{ marginTop: "30vh" }}>
        <Typography>All rights reserved. Room For Rent 2021-2022</Typography>
      </footer>
    </div>
  );
}
export default Lobby;
