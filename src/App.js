import React from "react";
import Navbar from "./componets/Navbar";
import Main from "./componets/Main";
import "./styles.css";

export default function App(){
    return(
        <div className="container">
            <Navbar />
            <Main />
        </div>
    );
}