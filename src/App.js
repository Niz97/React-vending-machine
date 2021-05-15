import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ProductCard from "./components/ProductCard";
import MyGrid from "./components/MyGrid";
import MyContainer from "./components/MyContainer";
import GridCards from "./components/GridCards";
import MoneyMenu from "./components/MoneyMenu";
import PurchaseMenu from "./PurchaseMenu";

class App extends React.Component {
  state = {
    products: [
      {
        id: 0,
        name: "Elephant",
        price: 0.99,
        quantity: 1,
      },
    ],

    selectedProduct: [
      {
        id: 0,
        name: "Elephant",
        price: 0.99,
        quantity: 1,
      },
    ],

    total: 0,
    purchaseMessage: "",
    change: [
      {
        quarters: 0,
        dimes: 0,
        nickels: 0,
        pennies: 0,
      },
    ],
    displayMessage: "...",
    userChange: 0,
  };

  componentDidMount() {
    console.log("component mounted");
    this.loadAllItems();
  }

  loadAllItems() {
    console.log("loaded");
    const URL = "http://tsg-vending.herokuapp.com/items";

    fetch(URL)
      .then((data) => data.json())
      .then((d) => this.setState({ products: d }));
  }

  handlePurchase = () => {
    let URL = "http://tsg-vending.herokuapp.com/money/";
    URL = URL + this.state.total + "/item/" + this.state.selectedProduct.id;

    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if (response.status === 200) {
        response
          .json()
          .then(
            (data) =>
              this.setState({ change: data, displayMessage: "Thank You!" }),
            this.calculateChange()
          );
      } else {
        response.json().then((data) =>
          this.setState({
            purchaseMessage: data.message,
            displayMessage: data.message,
          })
        );
      }
    });
  };

  calculateChange = () => {
    let newChange = {
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0,
    };
    console.log(this.state.change);
    let change = 0;

    this.setState({ userChange: change });

    console.log(this.state.userChange);
  };

  handleSelection = (product) => {
    console.log(product.name + " selected");
    this.setState({ selectedProduct: product });
  };

  handleDollarIncrement = () => {
    this.setState({ total: this.state.total + 1 });
    console.log(this.state.total);
  };

  handleQuarterIncrement = () => {
    this.setState({ total: this.state.total + 0.25 });
  };
  handleDimeIncrement = () => {
    this.setState({ total: this.state.total + 0.1 });
  };
  handleNickelIncrement = () => {
    this.setState({ total: this.state.total + 0.05 });
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <h2>Selected Product: {this.state.selectedProduct.name}</h2>
        </div>
        <GridCards
          onSelection={this.handleSelection}
          products={this.state.products}
        />
        <MoneyMenu
          total={this.state.total}
          onDollar={this.handleDollarIncrement}
          onQuarter={this.handleQuarterIncrement}
          onDime={this.handleDimeIncrement}
          onNickel={this.handleNickelIncrement}
        />
        <PurchaseMenu
          purchase={this.handlePurchase}
          message={this.state.displayMessage}
          change={this.state.userChange}
        />
      </React.Fragment>
    );
  }
}

export default App;
