import react, { useState } from "react";
import logo from "./logo.svg";
//import './App.css';
import { Button } from "react-bootstrap";
import Cart from "./Cart";
import Table from "./Table"
function App() {
  const [first, SetFirst] = useState(59);
  const [second, setsecond] = useState(37);
  const [third, setthird] = useState(12);
  const [fourth, setfourth] = useState(48);
  const [c, Setc] = useState(1);
  const [c2, setc2] = useState(1);
  const [c3, setc3] = useState(1);
  const [c4, setc4] = useState(1);
  return (
    <div className="App">
      <Cart
        first={first}
        SetFirst={SetFirst}
        second={second}
        setsecond={setsecond}
        third={third}
        setthird={setthird}
        fourth={fourth}
        setfourth={setfourth}
        c={c}
        Setc={Setc}
        c2={c2}
        setc2={setc2}
        c3={c3}
        setc3={setc3}
        c4={c4}
        setc4={setc2}
      />
    </div>
  );
}

export default App;
