import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { Container, Typography } from "@material-ui/core";
import Stack from "@mui/material/Stack";

class GuestButton extends React.Component {
  state = { adult: 0, child: 0, infant: 0 };

  handleIncrementAdult = () => {
    this.setState((state) => ({ adult: state.adult + 1 }));
  };

  handleDecrementAdult = () => {
    this.setState((state) => ({ adult: state.adult - 1 }));
  };

  handleIncrementChildren = () => {
    this.setState((state) => ({ child: state.child + 1 }));
  };

  handleDecrementChildren = () => {
    this.setState((state) => ({ child: state.child - 1 }));
  };

  handleIncrementInfant = () => {
    this.setState((state) => ({ infant: state.infant + 1 }));
  };

  handleDecrementInfant = () => {
    this.setState((state) => ({ infant: state.infant - 1 }));
  };
  render() {
    const displayCounterA = this.state.adult > 0;
    const displayCounterC = this.state.child > 0;
    const displayCounterI = this.state.infant > 0;

    return (
      <div>
        <ButtonGroup
          size="medium"
          aria-label="small outlined button group"
          style={{ color: "black", fontWeight: 700 }}
        >
          <Container>
            <Stack spacing={2}>
              <Stack direction="row" spacing={2}>
                <Typography variant="h5" style={{ marginRight: 10 }}>
                  Adults
                </Typography>
                <Button onClick={this.handleIncrementAdult}>+</Button>
                {displayCounterA && (
                  <Button disabled>{this.state.adult}</Button>
                )}
                {displayCounterA && (
                  <Button onClick={this.handleDecrementAdult}>-</Button>
                )}
              </Stack>

              <Stack direction="row" spacing={2}>
                <Typography variant="h5" style={{ marginRight: 10 }}>
                  Children
                </Typography>
                <Button onClick={this.handleIncrementChildren}>+</Button>
                {displayCounterC && (
                  <Button disabled>{this.state.child}</Button>
                )}
                {displayCounterC && (
                  <Button onClick={this.handleDecrementChildren}>-</Button>
                )}
              </Stack>

              <Stack direction="row" spacing={2}>
                <Typography variant="h5" style={{ marginRight: 10 }}>
                  Infant
                </Typography>
                <Button onClick={this.handleIncrementInfant}>+</Button>
                {displayCounterI && (
                  <Button disabled>{this.state.infant}</Button>
                )}
                {displayCounterI && (
                  <Button onClick={this.handleDecrementInfant}>-</Button>
                )}
              </Stack>
            </Stack>
          </Container>
        </ButtonGroup>
      </div>
    );
  }
}

export default GuestButton;
