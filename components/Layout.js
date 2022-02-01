import React, { useContext, useEffect, useState } from "react";
import Head from "next/head";
import {
  AppBar,
  Container,
  Link,
  Toolbar,
  Typography,
  Button,
  CssBaseline,
  Menu,
  MenuItem,
} from "@material-ui/core";
import useStyles from "../utils/style";
import NextLink from "next/link";
import { useRouter } from "next/router";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Image from "next/image";
import { getAuth, signOut } from "firebase/auth";
import { UserContext } from "../lib/context";
import Cookies from "js-cookie";
import displayPic from "../public/images/acc_icon.png";

//

export default function Layout({ title, children }) {
  const classes = useStyles();
  const router = useRouter();
  const { user } = useContext(UserContext);

  Cookies.set("user", user);

  const [anchorEl, setAnchorEl] = useState(null);
  const loginClickHandler = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const loginMenuCloseHandler = (e, redirect) => {
    setAnchorEl(null);
    if (redirect) {
      router.push("/lobby");
    }
  };
  const auth = getAuth();
  const logoutClickHandler = () => {
    setAnchorEl(null);

    signOut(auth).then(() => {
      //Sign out
    });
    Cookies.remove(user);
    router.push("/");
  };

  return (
    <div>
      <Head>{title ? `${title} -Room For Rent` : "Room For Rent"}</Head>
      <CssBaseline />
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <NextLink href="/lobby" passHref>
            <Link>
              <Typography style={{ fontWeight: "bold", fontSize: "2rem" }}>
                Room For Rent
              </Typography>
            </Link>
          </NextLink>
          <div className={classes.grow}></div>

          <NextLink href="/lobby" passHref>
            <Link>
              <Typography style={{ fontWeight: "bold", fontSize: "1.25rem" }}>
                Home
              </Typography>
            </Link>
          </NextLink>
          <div style={{ marginLeft: 10, marginRight: 10, fontSize: 20 }}>/</div>
          <NextLink href="/about" passHref>
            <Link>
              <Typography style={{ fontWeight: "bold", fontSize: "1.25rem" }}>
                About
              </Typography>
            </Link>
          </NextLink>
          <div style={{ marginLeft: 10, marginRight: 10, fontSize: 20 }}>/</div>
          <NextLink href="/contact" passHref>
            <Link>
              <Typography style={{ fontWeight: "bold", fontSize: "1.25rem" }}>
                Contact Us
              </Typography>
            </Link>
          </NextLink>
          <div style={{ marginLeft: 10, marginRight: 10, fontSize: 20 }}>/</div>
          <NextLink href="/host" passHref>
            <Link>
              <Typography style={{ fontWeight: "bold", fontSize: "1.25rem" }}>
                Try Hosting
              </Typography>
            </Link>
          </NextLink>
          <div style={{ marginLeft: 10, marginRight: 10, fontSize: 20 }}>/</div>
          <div>
            {user != null ? (
              <>
                <Button
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={loginClickHandler}
                  className={classes.navbarButton}
                >
                  <Image
                    src={displayPic}
                    alt={user.displayName}
                    width={30}
                    height={30}
                  />
                  {/*if a user is logged in the login button will change into their name*/}
                </Button>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={loginMenuCloseHandler}
                >
                  <MenuItem
                  // onClick={(e) =>
                  //   loginMenuCloseHandler(e, "/order-history")
                  // }
                  >
                    <li>
                      <NextLink href={"/rentalplace"} passHref>
                        Rental Place
                      </NextLink>
                    </li>
                  </MenuItem>

                  <MenuItem>
                    <NextLink href={"/rental"} passHref>
                      Rental History
                    </NextLink>
                  </MenuItem>
                  <li>
                    <MenuItem onClick={logoutClickHandler}>Logout</MenuItem>
                  </li>
                </Menu>
              </>
            ) : (
              <NextLink href="/login" passHref>
                <Typography style={{ fontWeight: "bold", fontSize: "1.25rem" }}>
                  Login
                </Typography>
              </NextLink>
            )}
          </div>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
    </div>
  );
}
