import {
  Grid,
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  Typography,
  CardActions,
} from "@mui/material";
import React from "react";
import data from "./data";
import NextLink from "next/link";

function Products() {
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

export default Products;
