import React, { Component } from "react";


class APP 



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
