import { LONGLONG } from "mysql/lib/protocol/constants/types";
import React from "react";
import ReactDOM from "react";
import './App.css';
import logo from './logo.png'
import Vijay from './Vijay.gif'
import VijayPNG from './Vijay.png'

const App = () => (
    <div className="">
        <h2>Hello World this is working</h2>
        <img className='App-logo rotate' src={Vijay} alt="" />
        <img className="App-logo two" src={VijayPNG} />

    </div>
)
const Header = () => (
    <header>
        <nav>
            <img className="App-logo" src={logo.png} />
        </nav>
    </header>
)

function Page() {
    return (
        <div>
            <App />
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>It's a popular library, so I'll be 
                able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer
                if I know React</li>
            </ol>
            <footer>
                <small>© 2021 Ziroll development. All rights reserved.</small>
            </footer>
        </div>
    )
}

export default Page;