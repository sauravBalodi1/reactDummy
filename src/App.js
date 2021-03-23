import react, { useState } from "react";
import logo from "./logo.svg";
//import './App.css';
import { Button } from "react-bootstrap";
import Cart from "./Cart";
import Table from "./Table"
import Map from "./Map";
function App() {
  const [first, SetFirst] = useState(0);
  const [second, setsecond] = useState(37);
  const [third, setthird] = useState(12);
  const [fourth, setfourth] = useState(48);
  const [c, Setc] = useState(0);
  const [c2, setc2] = useState(1);
  const [c3, setc3] = useState(1);
  const [c4, setc4] = useState(1);
  return (
    <div >
   <Cart
        first={first}
        SetFirst={SetFirst}
        
        c={c}
        Setc={Setc}
        
      />
     {/* <Table/>      */}
    </div>
  );
}

export default App;
