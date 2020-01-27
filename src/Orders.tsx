import React, { useState } from "react";
import { Table, Order, Address } from "./Table";
// import "./css/view1.css";

let testAddress: Address = {
  address: "Blomstervænget 14",
  areaCode: "Rødovre",
  zipCode: 2610
};

let test: Order[] = [
  {
    id: "5",
    status: "driving",
    eta: "tomorrow",
    pickAddress: testAddress,
    delAddress: testAddress,
    load: 10,
    special: "false"
  },
  {
    id: "5",
    status: "driving",
    eta: "tomorrow",
    pickAddress: testAddress,
    delAddress: testAddress,
    load: 10,
    special: "false"
  },
  {
    id: "5",
    status: "driving",
    eta: "tomorrow",
    pickAddress: testAddress,
    delAddress: testAddress,
    load: 10,
    special: "false"
  }
];

interface Appstate {
  orders: Order[];
}

function initialState(): Appstate {
  return { orders: [] };
}

const App: React.FC = () => {
  const [curState, setState] = useState(initialState());
  return (
    <div className="App">
      <div className="navBar">
        <div id="navLeft" className="navLeft">
          <a id="logo" className="logo" href="#Logo">
            Logo
          </a>
          <a id="Ture" className="Ture" href="#Ture">
            Udbudte ture
          </a>
          <a id="Vognmand" className="Vognmand" href="#Vognmand">
            Vognmand
          </a>
        </div>
        <div id="navRight" className="navRight">
          <a href="#profile">Profile</a>
          <a href="#alert">Alert</a>
        </div>
      </div>
      <div>
        <button onClick={() => setState(prevState => ({... prevState, orders: test}))} >Add order</button>
        <Table orders={curState.orders} />
      </div>
    </div>
  );
};

export default App;
