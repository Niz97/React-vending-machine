import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

class MoneyMenu extends React.Component {
  render() {
    return (
      <div>
        <Button
          onClick={() => this.props.onDollar()}
          variant="contained"
          color="primary"
        >
          Add Dollar
        </Button>
        <Button
          onClick={() => this.props.onQuarter()}
          variant="contained"
          color="secondary"
        >
          Add Quarter
        </Button>
        <Button
          onClick={() => this.props.onDime()}
          variant="contained"
          color="primary"
        >
          Add Dime
        </Button>
        <Button
          onClick={() => this.props.onNickel()}
          variant="contained"
          color="secondary"
        >
          Add Nickel
        </Button>

        <div>
          <h1>Total: {this.props.total}</h1>
        </div>
      </div>
    );
  }
}

export default MoneyMenu;
