import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Card from "./componenets/Card";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    username: "Tanveer",
    age: 23,
  };

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind Test
      </h1>
      <Card channel="this is mycode" someObj={myObj} />
      <Card />
    </>
  );
}

export default App;
