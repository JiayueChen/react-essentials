import React from "react";
import "./App.css";
import restaurant from "./restaurant.jpg"

function Header(props) {
  return (
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  );
}

function Main(props) {
  return (
    <section>
      <p>We serve the most {props.adjective} food around.</p>
      {/* adding image */}
      <img src={restaurant} height={200} alt="napkin and table" />
      {/* use JS camelcase for css style  */}
      <ul style={{textAlign: "left"}}>
        {props.dishes.map((dish)=> (
          <li key={dish.id}>{dish.title}</li>
        ))}
      </ul>
    </section>
  );
}

function Footer(props) {
  return (
    <footer>
      <p>Copyright {props.year}</p>
    </footer>
  );
}

const dishes = [
  "macaroni and cheese",
  "salmon",
  "tofu",
  "minestrone"
];

const dishObjects = dishes.map((dish, i) => ({id: i, title: dish}))

function App() {
  return (
    <div className="App">
      <Header name="Cindy"/>
      {/* pass dishobject with key as id */}
      <Main adjective="amazing" dishes={dishObjects}/>
      <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

export default App;
