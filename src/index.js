import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

function AppTwo() {
    return <h1>this is the second app</h1>;
}
ReactDOM.render(
    // we can't render two sibling component unless they're wrapped in another tag like <div>
    // <div>
    //     <App />
    //     <AppTwo/>
    // </div>,

    // <React.Fragment></React.Fragment> or <></> can be used to wrap content without adding extra div
    // <React.Fragment>
    //     <App />
    //     <AppTwo/>
    // </React.Fragment>,

    <>
        <App />
        <AppTwo/>
    </>,
    document.getElementById("root")
);
