import React from "react"
import logo from "../images/logo192.png"

class Navbar extends React.Component{
    render(){
        return (
            <nav>
                <img src={logo} />
                <h1 className="header">ReactFacts</h1>
                <h2>React Course #1</h2>
            </nav>
        );
    }
}

export default Navbar;
