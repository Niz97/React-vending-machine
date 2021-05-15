import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import ProductCard from "./ProductCard";
import Grid from "@material-ui/core/Grid";

class GridCards extends React.Component {
  render() {
    const { onSelection, products } = this.props;

    // return <ProductCard onSelection={onSelection} products={products} />;
    return (
      <Grid container>
        {products.map((prod) => (
          <Grid item xs={4}>
            <ProductCard onSelection={onSelection} product={prod} />
          </Grid>
        ))}
      </Grid>
    );
  }
}

export default GridCards;
