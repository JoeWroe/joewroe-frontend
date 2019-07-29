import React from "react"

import "./RainbowHeader.scss"

const RainbowHeader = (HeaderComponent: any) => {
    const colors = ["blue", "green", "grey", "orange", "pink", "teal"];
    const randomColor = colors[Math.floor(Math.random() * 5)];
    const className = randomColor + "-background";

    return () => {
        return (
            <div className = { className }>
                <HeaderComponent />
            </div>
        )
    }
}

export default RainbowHeader;
