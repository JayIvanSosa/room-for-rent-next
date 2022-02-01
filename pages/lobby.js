import React, { useState, useEffect, useContext } from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  Typography,
  CardActions,
} from "@mui/material";
import Box from "@mui/material/Box";
import FullWidthTabs from "./tabs";
import ButtonBases from "./imgbtn";
import useStyles from "../utils/style";
import Layout from "../components/Layout";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import NextLink from "next/link";

import "firebase/compat/firestore";
import firebase from "firebase/compat/app";
import { firestore, postToJSON } from "../lib/firebase";
import searchStyles from "./css/search.module.css";
import { UserContext } from "../lib/context";
import Cookies from "js-cookie";

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

export default Lobby;

function Lobby(props) {
  const classes = useStyles();
  const { user } = useContext(UserContext);
  Cookies.set(user);
  const router = useRouter();

  // useEffect(() => {
  //   if (!user) {
  //     alert("No user detected please login first");
  //     router.push("/");
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  const [posts, setPosts] = useState(props.posts);

  const host = posts.filter((tryHosting) => {
    return tryHosting;
  });
  const [filteredPosts] = useState(props.posts);

  const clientSearchHandler = (e) => {
    if (e.target.value.length >= 0 && e.target.value === "") {
      setPosts(filteredPosts);
    } else {
      const filter = host.filter((tryHosting) => {
        return tryHosting.location.toLowerCase().includes(e.target.value);
      });
      setPosts(filter);
    }
  };
  return (
    <Layout>
      <div className={searchStyles.searchContainer}>
        <input
          type="search"
          className={searchStyles.search}
          placeholder="Search your desired location here: ex bulacan"
          value={host.location}
          onChange={clientSearchHandler}
        />
      </div>
      <div style={{ marginTop: 30 }}>
        <Typography variant="h4" className={classes.footer} marginTop={20}>
          Available Homes
        </Typography>
      </div>
      <div className={classes.centerCards}>
        <Grid container spacing={5} margin={1}>
          {host.map((product) => (
            <Grid item md={3.5} key={product.title}>
              <Card>
                <NextLink href={`/product/${product.title}`} passHref>
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
    </Layout>
  );
}
