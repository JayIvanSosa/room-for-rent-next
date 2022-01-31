import {
  Grid,
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  Typography,
  CardActions,
} from "@mui/material";
import React, { useState } from "react";
import data from "./data";
import NextLink from "next/link";

import "firebase/compat/firestore";
import firebase from "firebase/compat/app";
import { firestore, postToJSON } from "../lib/firebase";

// export async function getServerSideProps() {
//   const postsQuery = firestore.collectionGroup("tryHosting");
//   // .where('published', '==', true)
//   // .orderBy('createdAt', 'desc')
//   // .limit(LIMIT);
//   console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
//   console.log(postsQuery);
//   console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
//   const posts = (await postsQuery.get()).docs.map(postToJSON);

//   console.log("zzzzzzzzzzzzzzzzzzzzzzzzzzzz");
//   console.log(posts);
//   console.log("zzzzzzzzzzzzzzzzzzzzzzzzzzzz");

//   return {
//     props: { posts }, // will be passed to the page component as props
//   };
// }

export default function Products(props) {
  // const [posts, setPosts] = useState(props.posts);

  // const email = posts.filter((orders) => {
  //   return orders.id.includes(auth.currentUser.uid);
  // });

  return (
    <Grid container spacing={5} margin={1}>
      {data.eHomes.map((product) => (
        <Grid item md={3.5} key={product.name}>
          <Card>
            <NextLink href={`/product/${product.slug}`} passHref>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={product.image}
                  title={product.name}
                  height={300}
                  width={300}
                ></CardMedia>
              </CardActionArea>
            </NextLink>
            <CardActionArea>
              <CardContent>
                <Typography>{product.name}</Typography>
              </CardContent>
            </CardActionArea>
            <CardContent>
              <Typography>{product.description}</Typography>
            </CardContent>
            <CardContent>
              <Typography>{product.pets}</Typography>
            </CardContent>
            <CardContent>
              <Typography>{product.rating}</Typography>
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
  );
}
