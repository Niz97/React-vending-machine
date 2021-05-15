import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

class ProductCard extends React.Component {
  render() {
    const { product } = this.props;

    return (
      <div onClick={() => this.props.onSelection(product)}>
        <p>
          Name: {product.name}
          Price: {product.price}
          Quantity: {product.quantity}
        </p>
      </div>
    );
  }
}

export default ProductCard;
