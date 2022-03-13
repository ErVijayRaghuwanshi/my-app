import React from "react";
// import ReactDOM from 'react-dom';
import logo from './logo.png'
import './App.css'

const Header = () => (
    <header>
        <nav className="nav">
            <img className="nav-logo" src={logo} alt="" />
            <ul className="nav-items">
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    </header>
)

const MainContent = () => (
    <div>
        <h1>Reason I'm excited to learn React</h1>
        <ol>
            <li>It's a popular library, so I'll be able to fit in with the cool kids!</li>
            <li>I'm more like to get a job as a developer if I know React</li>
        </ol>
    </div>
)

const Footer = () => (
    <footer className="footer">
        <small>@ 2022 Raghuwanshi developer. All right reserved.</small>
    </footer>
)

const Page = () => (
    <>
    <Header />
    <MainContent />
    <Footer />
    </>
)

export default Page;