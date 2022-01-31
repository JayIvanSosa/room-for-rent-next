import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
// import data from "/components/data";
import data from "../../components/data";
import { Nav, Alert, Navigate } from "components";
import useStyles from "../../utils/style";
import NextLink from "next/link";
import {
  Button,
  Divider,
  Grid,
  Link,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import Image from "next/image";
import "react-date-range/dist/styles.css"; //main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { Box } from "@mui/system";
import { PayPalButton } from "react-paypal-button-v2";
import "firebase/compat/firestore";
import firebase from "firebase/compat/app";
import { firestore, postToJSON } from "../../lib/firebase";
import { v4 as uuidv4, v4 } from "uuid";

//
export async function getServerSideProps() {
  const postsQuery = firestore.collectionGroup("tryHosting");
  // .where('published', '==', true)
  // .orderBy('createdAt', 'desc')
  // .limit(LIMIT);

  const posts = (await postsQuery.get()).docs.map(postToJSON);

  return {
    props: { posts }, // will be passed to the page component as props
  };
}

function ProductScreen(props) {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  //   const [{ isPending }, paypalDispatch] = usePayPalScriptReducer();
  const addPaypalScript = () => {
    if (window.paypal) {
      setScriptLoaded(true);
      return;
    }
    const script = document.createElement("script");
    script.src =
      "https://www.paypal.com/sdk/js?client-id=AbwjXfD9ajWGges6cS5I8l6VQigkaad9neJdRScRIInTfXptWqRW_Z7P570NlgSuOMDkHb7r17T9P2kb";
    script.type = "text/javascript";

    script.async = true;
    script.onload = () => setScriptLoaded(true);
    document.body.appendChild(script);
  };
  useEffect(() => {
    addPaypalScript();
  }, []);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuest, setNoOfGuest] = useState(1);
  const [noOfDays, setNoOfDays] = useState(1);

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const classes = useStyles();
  const router = useRouter();

  const [posts, setPosts] = useState(props.posts);

  const host = posts.filter((tryHosting) => {
    return tryHosting;
  });

  const { title } = router.query;
  const product = host.find((a) => a.title === title);

  if (!product) {
    return <div> This Place is no Longer Available</div>;
  }
  const round2 = (num) => Math.round(num * 100 + Number.EPSILON) / 100; //123.456 -> 123.46
  const rentalCost = round2(product.price * noOfDays);
  const cleaningCost = round2(rentalCost * 0.05);
  const serviceFee = round2(rentalCost * 0.08);
  const totalPrice = round2(rentalCost + serviceFee + cleaningCost);
  // eslint-disable-next-line @next/next/no-sync-scripts

  // const generateReport = () => {
  //   // var reportId = v4();
  //   try {
  //     firestore
  //       .collection("reports")
  //       .doc("reportId")
  //       .set({
  //         place: product.title,
  //         location: product.location,
  //         rentalCost: rentalCost,
  //         cleaningCost: cleaningCost,
  //         serviceFee: serviceFee,
  //         totalPrice: totalPrice,
  //       })
  //       .then(alert("Your reciept has been generated."));
  //   } catch (error) {
  //     console.log(error);
  //     alert("Failed to rent this place.");
  //   }
  // };
  // console.log(generateReport);

  return (
    <div>
      <Nav title={product.title} />
      <div className={classes.section}>
        <NextLink href="/lobby" passHref>
          <Link>Back To Lobby</Link>
        </NextLink>
      </div>
      <Typography variant="h4" textAlign={"center"} marginBottom={3}>
        {product.title}
      </Typography>
      <Grid container spacing={1} marginLeft={3}>
        <Grid item md={4} xs={12}>
          <Image
            src={product.image}
            alt={product.title}
            width={640}
            height={640}
            Layout="responsive"
          />
          {/* Activate this for multiple images  
          you may use the Box from Material UI core
          * /}
          {/* For CSS 
          .image width: 25% 
          .image img width: 100% 
          .sub-images-section width: 50% display flex flex-warp: hidden overflow hidden */}
          {/* <div className="sub-images-section">
              {ImageList.map(({_key, asset}, image) => <Image key={_key} identifier="image" image={assets}/>)}
          </div> */}
        </Grid>
        <Grid item md={2.5} xs={10}>
          <List>
            <ListItem>
              <Typography>Type: {product.type}</Typography>
            </ListItem>
            <ListItem>
              <Typography>Unit: {product.unit}</Typography>
            </ListItem>
            <ListItem>
              <Typography>Location: {product.location}</Typography>
            </ListItem>
            <ListItem>
              <Typography>Bedrooms: {product.bedrooms} </Typography>
            </ListItem>
            <ListItem>
              <Typography>Bathrooms: {product.bathrooms} </Typography>
            </ListItem>
            <ListItem>
              <Typography>Amenities: {product.amenities} </Typography>
            </ListItem>
            <ListItem>
              <Typography>Space: {product.space} </Typography>
            </ListItem>
            <ListItem>
              <Typography>Safety Items: {product.safetyItems} </Typography>
            </ListItem>
            <ListItem>
              <Typography>Favorites: {product.favorites}</Typography>
            </ListItem>
            <ListItem>
              <Typography>Description:{product.description}</Typography>
            </ListItem>
          </List>
        </Grid>
        <Grid xs={7} md={4}>
          <Box mt={3}>
            <List>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography>
                      <strong>Price</strong>
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>
                      <strong>₱{product.price}</strong> /night
                    </Typography>
                  </Grid>
                  <Grid>
                    <DateRangePicker
                      ranges={[selectionRange]}
                      minDate={new Date()}
                      rangeColors={"#fd5b61"} //color of Airbnb but it is not activating
                      onChange={handleSelect}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Typography component="h5">Number of Guest:</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <input
                      type="number"
                      value={noOfGuest}
                      min={1}
                      onChange={(e) => setNoOfGuest(e.target.value)}
                      className={classes.guestInput}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Typography component="h5">Number of Days:</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <input
                      type="number"
                      value={noOfDays}
                      min={1}
                      onChange={(e) => setNoOfDays(e.target.value)}
                      className={classes.guestInput}
                    />
                  </Grid>
                  <Divider />
                  <Grid item xs={6}>
                    <Typography component="h3" variant="h5">
                      <strong>Rental Cost: </strong>
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>₱{rentalCost} /night</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography component="h3" variant="h5">
                      <strong>Cleaning Cost: </strong>
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>₱{product.price * noOfDays * 0.05}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography component="h3" variant="h5">
                      <strong>Service Fee: </strong>
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>₱{serviceFee}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography component="h3" variant="h5">
                      <strong>Total Cost: </strong>
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>₱{totalPrice}</Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                {/* <NextLink href={"/payment"}>
                  <Button fullWidth variant="contained" color="primary">
                    Reserve Now
                  </Button>
                </NextLink> */}
              </ListItem>
              {/* <ListItem>
                <Button onclick={generateReport}>Generate Report</Button>
              </ListItem> */}
              <ListItem>
                <div className={classes.fullWidth}>
                  {scriptLoaded ? (
                    <PayPalButton
                      amount={totalPrice * 0.01}
                      onSuccess={(details, data) => console.log(details)}
                    />
                  ) : (
                    <span>loading...</span>
                  )}
                </div>
              </ListItem>
            </List>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default ProductScreen;
