import React from "react";
import Button from "@material-ui/core/Button";

class PurchaseMenu extends React.Component {
  render() {
    return (
      <div>
        <Button
          onClick={() => this.props.purchase()}
          variant="contained"
          color="primary"
        >
          Make Purchase!
        </Button>

        <h1>Messages: {this.props.message}</h1>
        <h1>Change: {this.props.change}</h1>
      </div>
    );
  }
}

export default PurchaseMenu;
