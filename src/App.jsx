import { Component } from "react";
import { Route, Routes } from "react-router-dom";
import DashBoard from "./DashBoard/DashBoard";
// import Home from "./Home/Home";

export default class App extends Component {
  render() {
    return <>
      <Routes>
        <Route path="/" element={<DashBoard/>}/>
      </Routes>
    </>;
}
}

