import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import Head from "next/head";
import { Link, Container, Typography } from "@mui/material";
import NextLink from "next/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";

import { useRouter } from "next/router";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Layout } from "components/account";
import { userService, alertService } from "services";

export default function App() {
  const { firstpageValue } = useSelector((state) => state.firstpage);
  const { secondpageValue } = useSelector((state) => state.secondpage);
  const { thirdpageValue } = useSelector((state) => state.thirdpage);
  const { locationValue } = useSelector((state) => state.fourthpage);
  const { guestValue } = useSelector((state) => state.fifthpage);
  const { bedsValue } = useSelector((state) => state.fifthpage);
  const { bedroomsValue } = useSelector((state) => state.fifthpage);
  const { bathroomsValue } = useSelector((state) => state.fifthpage);
  const { amenitiesValue } = useSelector((state) => state.sixthpage);
  const { favoritesValue } = useSelector((state) => state.sixthpage);
  const { safetyitemsValue } = useSelector((state) => state.sixthpage);
  const { imageValue } = useSelector((state) => state.seventhpage);
  const { latitudeValue, longitudeValue } = useSelector(
    (state) => state.eightpage
  );
  const { titleValue, descriptionValue } = useSelector(
    (state) => state.ninthpage
  );
  const { priceValue } = useSelector((state) => state.tenthpage);

  const router = useRouter();
  const formOptions = { resolver: yupResolver(validationSchema) };
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;
  console.log(watch("example")); // watch input value by passing the name of it

  function onSubmit(user) {
    return userService
      .register(user)
      .then(() => {
        alertService.success("Registration successful", {
          keepAfterRouteChange: true,
        });
        router.push("login");
        console.log(data);
      })
      .catch(alertService.error);
  }

  return (
    <div>
      <h1>Room For Rent</h1>
      <Grid container spacing={3} align="center">
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          Check Out your Listing!
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <input
              style={{
                display: "block",
                boxSizing: "border-box",
                width: "100%",
                borderRadius: "4px",
                border: "1px solid white",
                padding: " 10px 15px",
                marginBottom: "10p",
                fontSize: "14px",
              }}
              defaultValue={firstpageValue}
              {...register("1stPageValue")}
            />
          </Grid>
          <Grid item xs={4}>
            <input
              style={{
                display: "block",
                boxSizing: "border-box",
                width: "100%",
                borderRadius: "4px",
                border: "1px solid white",
                padding: " 10px 15px",
                marginBottom: "10p",
                fontSize: "14px",
              }}
              defaultValue={secondpageValue}
              {...register("2ndPageValue")}
            />
          </Grid>
          <Grid item xs={4}>
            <input
              style={{
                display: "block",
                boxSizing: "border-box",
                width: "100%",
                borderRadius: "4px",
                border: "1px solid white",
                padding: " 10px 15px",
                marginBottom: "10p",
                fontSize: "14px",
              }}
              defaultValue={thirdpageValue}
              {...register("3rdPageValue")}
            />
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={6} style={{ marginTop: 15 }}>
            <input
              style={{
                display: "block",
                boxSizing: "border-box",
                width: "100%",
                borderRadius: "4px",
                border: "1px solid white",
                padding: " 10px 15px",
                marginBottom: "10p",
                fontSize: "14px",
              }}
              defaultValue={locationValue}
              {...register("4thPageValue")}
            />
          </Grid>
          <Grid item xs={6}>
            <Grid container spacing={3}>
              <Grid item xs={3}>
                <div>
                  <label>Guests:</label>
                  <input
                    style={{
                      display: "block",
                      boxSizing: "border-box",
                      width: "100%",
                      borderRadius: "4px",
                      border: "1px solid white",
                      padding: " 10px 15px",
                      marginBottom: "10p",
                      fontSize: "14px",
                    }}
                    defaultValue={guestValue}
                    {...register("5thPage1stBtnValue")}
                  />
                </div>
              </Grid>

              <Grid item xs={3}>
                <div>
                  <label>Beds:</label>
                  <input
                    style={{
                      display: "block",
                      boxSizing: "border-box",
                      width: "100%",
                      borderRadius: "4px",
                      border: "1px solid white",
                      padding: " 10px 15px",
                      marginBottom: "10p",
                      fontSize: "14px",
                    }}
                    defaultValue={bedsValue}
                    {...register("5thPage2ndBtnValue")}
                  />
                </div>
              </Grid>
              <Grid item xs={3}>
                <div>
                  <label>Bedrooms:</label>
                  <input
                    style={{
                      display: "block",
                      boxSizing: "border-box",
                      width: "100%",
                      borderRadius: "4px",
                      border: "1px solid white",
                      padding: " 10px 15px",
                      marginBottom: "10p",
                      fontSize: "14px",
                    }}
                    defaultValue={bedroomsValue}
                    {...register("5thPage3rdBtnValue")}
                  />
                </div>
              </Grid>
              <Grid item xs={3}>
                <div>
                  <label>Bathrooms:</label>
                  <input
                    style={{
                      display: "block",
                      boxSizing: "border-box",
                      width: "100%",
                      borderRadius: "4px",
                      border: "1px solid white",
                      padding: " 10px 15px",
                      marginBottom: "10p",
                      fontSize: "14px",
                    }}
                    defaultValue={bathroomsValue}
                    {...register("5thPage4thBtnValue")}
                  />
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={4}>
            <input
              style={{
                display: "block",
                boxSizing: "border-box",
                width: "100%",
                borderRadius: "4px",
                border: "1px solid white",
                padding: " 10px 15px",
                marginBottom: "10p",
                fontSize: "14px",
              }}
              defaultValue={amenitiesValue}
              {...register("6thPage1stValue")}
            />
          </Grid>
          <Grid item xs={4}>
            <input
              style={{
                display: "block",
                boxSizing: "border-box",
                width: "100%",
                borderRadius: "4px",
                border: "1px solid white",
                padding: " 10px 15px",
                marginBottom: "10p",
                fontSize: "14px",
              }}
              defaultValue={favoritesValue}
              {...register("6thPage2ndValue")}
            />
          </Grid>
          <Grid item xs={4}>
            <input
              style={{
                display: "block",
                boxSizing: "border-box",
                width: "100%",
                borderRadius: "4px",
                border: "1px solid white",
                padding: " 10px 15px",
                marginBottom: "10p",
                fontSize: "14px",
              }}
              defaultValue={safetyitemsValue}
              {...register("6thPage3rdValue")}
            />
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={6}>
            <input
              style={{
                display: "block",
                boxSizing: "border-box",
                width: "100%",
                borderRadius: "4px",
                border: "1px solid white",
                padding: " 10px 15px",
                marginBottom: "10p",
                fontSize: "14px",
              }}
              defaultValue={imageValue}
              {...register("7thPageValue")}
            />
          </Grid>
          <Grid item xs={6}>
            <input
              style={{
                display: "block",
                boxSizing: "border-box",
                width: "100%",
                borderRadius: "4px",
                border: "1px solid white",
                padding: " 10px 15px",
                marginBottom: "10p",
                fontSize: "14px",
              }}
              defaultValue={latitudeValue}
              {...register("8thPageLatValue")}
            />
            <input
              style={{
                display: "block",
                boxSizing: "border-box",
                width: "100%",
                borderRadius: "4px",
                border: "1px solid white",
                padding: " 10px 15px",
                marginBottom: "10p",
                fontSize: "14px",
              }}
              defaultValue={longitudeValue}
              {...register("8thPageLongValue")}
            />
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={4}>
            <input
              style={{
                display: "block",
                boxSizing: "border-box",
                width: "100%",
                borderRadius: "4px",
                border: "1px solid white",
                padding: " 10px 15px",
                marginBottom: "10p",
                fontSize: "14px",
              }}
              defaultValue={titleValue}
              {...register("9thPage1stValue")}
            />
          </Grid>
          <Grid item xs={4}>
            <input
              style={{
                display: "block",
                boxSizing: "border-box",
                width: "100%",
                borderRadius: "4px",
                border: "1px solid white",
                padding: " 10px 15px",
                marginBottom: "10p",
                fontSize: "14px",
              }}
              defaultValue={descriptionValue}
              {...register("9thPage2ndValue")}
            />
          </Grid>
          <Grid item xs={4}>
            <input
              style={{
                display: "block",
                boxSizing: "border-box",
                width: "100%",
                borderRadius: "4px",
                border: "1px solid white",
                padding: " 10px 15px",
                marginBottom: "10p",
                fontSize: "14px",
              }}
              defaultValue={priceValue}
              {...register("10thPageValue")}
            />
          </Grid>
        </Grid>

        <NextLink href="/11thHost" passHref>
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
        <input type="submit" />
      </form>
    </div>
  );
}
