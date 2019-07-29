import React from "react";

import RainbowHeader from "../higher-order-components/RainbowHeader"

import "./Header.scss"

const Header = () => {
    return (
        <div className="header">
            <h1 className="headerText">Joe Wroe's Blog</h1>
        </div>
    )
}

export default RainbowHeader(Header)
