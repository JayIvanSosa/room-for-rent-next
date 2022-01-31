import React, { useState } from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  Typography,
  CardActions,
} from "@mui/material";
import Products from "../components/Products";
// import Products from "../component/Products";
import useStyles from "../utils/style";
import NextLink from "next/link";
import { Nav, Alert } from "components";

import "firebase/compat/firestore";
import firebase from "firebase/compat/app";
import { firestore, postToJSON } from "../lib/firebase";

export async function getServerSideProps() {
  const postsQuery = firestore.collectionGroup("tryHosting");
  // .where('published', '==', true)
  // .orderBy('createdAt', 'desc')
  // .limit(LIMIT);
  console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
  console.log(postsQuery);
  console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
  const posts = (await postsQuery.get()).docs.map(postToJSON);

  console.log("zzzzzzzzzzzzzzzzzzzzzzzzzzzz");
  console.log(posts);
  console.log("zzzzzzzzzzzzzzzzzzzzzzzzzzzz");

  return {
    props: { posts }, // will be passed to the page component as props
  };
}

function Lobby(props) {
  const classes = useStyles();
  const [posts, setPosts] = useState(props.posts);

  const host = posts.filter((tryHosting) => {
    return tryHosting;
  });
  return (
    <div>
      <Nav />
      <Alert />
      <Typography variant="h4" className={classes.footer} marginTop={3}>
        Available Homes
      </Typography>
      <div className={classes.centerCards}>
        <Products />
        <Grid container spacing={5} margin={1}>
          {host.map((product) => (
            <Grid item md={3.5} key={product.name}>
              <Card>
                <NextLink href={`/product/${product.slug}`} passHref>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image={product.image}
                      title={product.title}
                      height={300}
                      width={300}
                    ></CardMedia>
                  </CardActionArea>
                </NextLink>
                <CardActionArea>
                  <CardContent>
                    <Typography>{product.title}</Typography>
                  </CardContent>
                </CardActionArea>
                <CardContent>
                  <Typography>{product.description}</Typography>
                </CardContent>
                <CardContent>
                  <Typography>No rating available</Typography>
                </CardContent>
                <CardActions>
                  <Typography>
                    <strong>₱{product.price}</strong>
                  </Typography>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>

      <footer className={classes.footer} style={{ marginTop: "30vh" }}>
        <Typography>All rights reserved. Room For Rent 2021-2022</Typography>
      </footer>
    </div>
  );
}
export default Lobby;
