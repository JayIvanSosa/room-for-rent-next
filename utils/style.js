import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  navbar: {
    backgroundColor: "#0f7db0",
    "& a": {
      color: "#ffffff",
      marginLeft: 80,
    },
  },
  nav: {
    backgroundColor: "Black",
    "& a": {
      color: "#ffffff",
      marginLeft: 80,
    },
  },
  splitScreen: {
    height: "98vh",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "1fr",
  },
  leftPane: {
    color: "White",
    backgroundColor: "Black",
    gridColumn: 1,
    gridRow: 1,
  },
  rightPane: {
    backgroundColor: "Black",
    gridColumn: 2,
    gridRow: 1,
  },
  rightSide: {
    backgroundColor: "#f7f7f7",
    gridColumn: 2,
    gridRow: 1,
  },
  title: {
    fontWeight: "bold",
    fontSize: " 1.5rem",
    color: "#ffffff",
  },
  grow: {
    flexGrow: 1,
  },
  sizePlus: {
    fontSize: "20px",
  },
  square: {
    borderRadius: 20,
  },
  main: {
    minHeight: "85vh", //updated this so that the footer stays at the lowest middle part
    minWidth: "80vw",
    maxWidth: "100%",
  },
  footer: {
    textAlign: "center",
  },
  secondtext: {
    fontSize: "23px",
  },
  section: {
    marginTop: 10,
    marginBottom: 10,
  },
  addButton: {
    primary: {
      main: "#2596be", //changed color to lighter blue
    },
    secondary: {
      main: "#2596be",
    },
  },
  form: {
    width: "100%",
    maxWidth: 600,
    margin: "0 auto",
  },
  navbarButton: {
    color: "#ffffff",
    textTransform: "initial",
  },
  transparentBackground: {
    backgroundColor: "transparent",
  },
  error: {
    color: "#f04040",
  },
  fullWidth: {
    width: "100%",
  },
  textCenter: {
    textAlign: "center",
  },
  centerCards: {
    marginLeft: "7%",
  },
  guestInput: {
    width: 50,
    padding: 5,
    text: "large",
    outline: "none",
    textColor: "red",
  },
});
export default useStyles;
