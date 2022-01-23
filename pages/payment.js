import Cookies from "js-cookie";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import Store from "../utils/Store";
import { Nav, Alert, Navigate } from "components";
import useStyles from "../utils/style";
import NextLink from "next/link";
import {
  Button,
  FormControl,
  FormControlLabel,
  List,
  ListItem,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";

function Payment() {
  const { router } = useRouter();
  const classes = useStyles();
  const [paymentMethod, setPaymentMethod] = useState();
  // const { state, dispatch } = useContext(Store);
  // useEffect(() => {
  //   if (!userInfo) {
  //     router.push("/login");
  //   } else {
  //     setPaymentMethod(Cookies.get("paymentMethod") || "");
  //   }
  // }, []);
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <Nav title="Payment Method" />
      <form className={classes.form} onSubmit={submitHandler}>
        <Typography component="h2" variant="h2">
          Payment Method
        </Typography>
        <List>
          <ListItem>
            <FormControl compnent="fieldset">
              <RadioGroup
                aria-label="Payment  Method"
                name="paymentMethod"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
              >
                <FormControlLabel
                  label="PayPal"
                  value="PayPal"
                  control={<Radio />}
                ></FormControlLabel>
                <FormControlLabel
                  label="Cash"
                  value="Cash"
                  control={<Radio />}
                ></FormControlLabel>
              </RadioGroup>
            </FormControl>
          </ListItem>
          <ListItem>
            <Button fullWidth type="submit" variant="outlined" color="primary">
              Continue
            </Button>
          </ListItem>
          <ListItem>
            <NextLink href={"/lobby"} passHref>
              <Button
                fullWidth
                type="button"
                variant="contained"
                // onClick={() => router.push("/lobby")}
              >
                Back
              </Button>
            </NextLink>
          </ListItem>
        </List>
      </form>
    </div>
  );
}

export default Payment;
