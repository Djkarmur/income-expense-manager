import React from "react";
import Header from "./Header";
import History from "./History";
import Newadd from "./Newadd";
import Inexpense from "./Inexpense";
import Balance from "./Balance";
import './App.css';
import { Globalprovider } from "./context/Globalstate";

const App = () => {
  return (
    <>
    <Globalprovider>
      <div className="expense">
      <Header />
      <div className="container">
        <Balance />
        <Inexpense />
        <History />
        <Newadd />
      </div>
      </div>
      </Globalprovider>
    </>
  );
};

export default App;
