import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

import { useSelector, useDispatch } from "react-redux";
import {
  ADDGUEST_HOST_BTN,
  SUBTRACTGUEST_HOST_BTN,
  ADDBEDS_HOST_BTN,
  SUBTRACTBEDS_HOST_BTN,
  ADDBEDSROOMS_HOST_BTN,
  SUBTRACTBEDSROOMS_HOST_BTN,
  ADDBATHROOMS_HOST_BTN,
  SUBTRACTBATHROOMS_HOST_BTN,
} from "../redux/actionTypes.js";

export default function FifthButton() {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  const { guestValue } = useSelector((state) => state.fifthpage);
  const { bedsValue } = useSelector((state) => state.fifthpage);
  const { bedroomsValue } = useSelector((state) => state.fifthpage);
  const { bathroomsValue } = useSelector((state) => state.fifthpage);
  const dispatch = useDispatch();
  return (
    <div>
      <Box sx={{ display: "flex", p: 1, bgcolor: "background.paper" }}>
        <Item sx={{ order: 1 }} style={{ width: 400 }}>
          <h1 style={{ color: "black", fontSize: 30 }}>Guest</h1>
        </Item>
        <Item sx={{ order: 2 }} style={{ width: 90 }}>
          <button
            onClick={() => dispatch({ type: SUBTRACTGUEST_HOST_BTN })}
            style={{ width: 30, height: 30, marginTop: 20 }}
          >
            -
          </button>
        </Item>
        <Item sx={{ order: 3 }} style={{ width: 90 }}>
          <h2 style={{ color: "black", fontSize: 30, marginTop: 15 }}>
            {guestValue}
          </h2>
        </Item>
        <Item sx={{ order: 4 }} style={{ width: 90 }}>
          <button
            onClick={() => dispatch({ type: ADDGUEST_HOST_BTN })}
            style={{ width: 30, height: 30, marginTop: 20 }}
          >
            +
          </button>
        </Item>
      </Box>
      <Box sx={{ display: "flex", p: 1, bgcolor: "background.paper" }}>
        <Item sx={{ order: 1 }} style={{ width: 400 }}>
          <h1 style={{ color: "black", fontSize: 30 }}>Beds</h1>
        </Item>
        <Item sx={{ order: 2 }} style={{ width: 90 }}>
          <button
            onClick={() => dispatch({ type: SUBTRACTBEDS_HOST_BTN })}
            style={{ width: 30, height: 30, marginTop: 20 }}
          >
            -
          </button>
        </Item>
        <Item sx={{ order: 3 }} style={{ width: 90 }}>
          <h2 style={{ color: "black", fontSize: 30, marginTop: 15 }}>
            {bedsValue}
          </h2>
        </Item>
        <Item sx={{ order: 4 }} style={{ width: 90 }}>
          <button
            onClick={() => dispatch({ type: ADDBEDS_HOST_BTN })}
            style={{ width: 30, height: 30, marginTop: 20 }}
          >
            +
          </button>
        </Item>
      </Box>
      <Box sx={{ display: "flex", p: 1, bgcolor: "background.paper" }}>
        <Item sx={{ order: 1 }} style={{ width: 400 }}>
          <h1 style={{ color: "black", fontSize: 30 }}>Bedrooms</h1>
        </Item>
        <Item sx={{ order: 2 }} style={{ width: 90 }}>
          <button
            onClick={() => dispatch({ type: SUBTRACTBEDSROOMS_HOST_BTN })}
            style={{ width: 30, height: 30, marginTop: 20 }}
          >
            -
          </button>
        </Item>
        <Item sx={{ order: 3 }} style={{ width: 90 }}>
          <h2 style={{ color: "black", fontSize: 30, marginTop: 15 }}>
            {bedroomsValue}
          </h2>
        </Item>
        <Item sx={{ order: 4 }} style={{ width: 90 }}>
          <button
            onClick={() => dispatch({ type: ADDBEDSROOMS_HOST_BTN })}
            style={{ width: 30, height: 30, marginTop: 20 }}
          >
            +
          </button>
        </Item>
      </Box>
      <Box sx={{ display: "flex", p: 1, bgcolor: "background.paper" }}>
        <Item sx={{ order: 1 }} style={{ width: 400 }}>
          <h1 style={{ color: "black", fontSize: 30 }}>Bathrooms</h1>
        </Item>
        <Item sx={{ order: 2 }} style={{ width: 90 }}>
          <button
            onClick={() => dispatch({ type: SUBTRACTBATHROOMS_HOST_BTN })}
            style={{ width: 30, height: 30, marginTop: 20 }}
          >
            -
          </button>
        </Item>
        <Item sx={{ order: 3 }} style={{ width: 90 }}>
          <h2 style={{ color: "black", fontSize: 30, marginTop: 15 }}>
            {bathroomsValue}
          </h2>
        </Item>
        <Item sx={{ order: 4 }} style={{ width: 90 }}>
          <button
            onClick={() => dispatch({ type: ADDBATHROOMS_HOST_BTN })}
            style={{ width: 30, height: 30, marginTop: 20 }}
          >
            +
          </button>
        </Item>
      </Box>
    </div>
  );
}
