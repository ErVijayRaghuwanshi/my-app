import logo from './logo.png'
import React from "react"
import './App.css';

function App() {
    return (
        <div>
            <header>
                <nav>
                    <img src={logo} width="40px" alt=""></img>
                </nav>
            </header>
            <h1>I'm excited to learn React</h1>
            <ol>
                <li>It's a popular library, so I'll be 
                able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer
                if I know React</li>
            </ol>
            <footer>
                © 2022 Vijay development. All rights reserved.
            </footer>
        </div>
    )
}

// export default App;
export default App;
