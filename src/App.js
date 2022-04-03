import React from "react";
import "./App.css";
import restaurant from "./restaurant.jpg";

function SecreteComponent() {
  return <h1>Secret informaton for authorized users only</h1>
}
function Regularcomponent() {
  return <h1>Everyone can see this comment</h1>
}

function App(props) {
  // check props.authorized value
  return (
    <>
      {props.authorized ? <SecreteComponent/> : <Regularcomponent />  }
    </>
  )

  // if(props.authorized) {
  //   return <SecreteComponent/>;
  // } else {
  //   return <Regularcomponent />;
  // }
}

export default App;
