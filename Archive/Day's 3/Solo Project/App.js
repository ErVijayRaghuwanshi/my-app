import React from "react";
import './App.css';
import Info from "./component/Info";
import About from "./component/About";
import Interests from "./component/Interests";
const App = () => (
    <div className="card">
        <Info />
        <About />
        <Interests />
    </div>
)
export default App;