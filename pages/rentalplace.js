import React, { useState, useContext } from "react";
import Layout from "../components/Layout";
import {
  Button,
  Paper,
  Tab,
  Table,
  TableCell,
  TableRow,
  Typography,
} from "@material-ui/core";
import "firebase/compat/firestore";
import { auth, firestore, postToJSON } from "../lib/firebase";
import { UserContext } from "../lib/context";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

//

export async function getServerSideProps() {
  const postsQuery = firestore.collectionGroup("tryHosting");

  const posts = (await postsQuery.get()).docs.map(postToJSON);
  //   console.log("AAAAAAAAAAAAAAAAAAAa");
  //   console.log(posts);
  //   console.log("AAAAAAAAAAAAAAAAAAAa");

  return {
    props: { posts }, // will be passed to the page component as props
  };
}

export default function RentalPlace(props) {
  const [posts, setPosts] = useState(props.posts);
  const { user } = useContext(UserContext);
  const router = useRouter();
  Cookies.set("user", user);

  const owner = posts.filter((tryHosting) => {
    return tryHosting.user_Id;
  });

  return (
    <Layout>
      <div style={{ marginTop: 60 }}>
        <Paper style={{ maxHeight: 600, overflow: "auto" }}>
          <Table>
            <TableRow>
              <TableCell>
                <Typography>Image</Typography>
              </TableCell>
              <TableCell>
                <Typography>Type </Typography>
              </TableCell>
              <TableCell>
                <Typography>Unit</Typography>
              </TableCell>
              <TableCell>
                <Typography>Price/Night</Typography>
              </TableCell>
              <TableCell>
                <Typography>Location</Typography>
              </TableCell>
              <TableCell align="right">
                <Typography>Ratingts</Typography>
              </TableCell>
            </TableRow>
            {owner.map((place) => (
              <TableRow key={place.user_Id}>
                <TableCell>
                  <img
                    src={place.image}
                    width={50}
                    height={50}
                    alt={place.title}
                  />
                </TableCell>
                <TableCell>
                  <Typography>{place.type}</Typography>
                </TableCell>
                <TableCell>
                  <Typography>{place.unit}</Typography>
                </TableCell>
                <TableCell>
                  <Typography>₱{place.price}</Typography>
                </TableCell>
                <TableCell>
                  <Typography>{place.location}</Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography>No Ratings</Typography>
                </TableCell>
              </TableRow>
            ))}
          </Table>
        </Paper>
      </div>
    </Layout>
  );
}
