import react, { useState } from "react";
import logo from "./logo.svg";


import Cart from "./Cart";


function App() {
  const [first, SetFirst] = useState(0);


  return (
    <div >
      <Cart
        first={first}
        SetFirst={SetFirst}
      />

    </div>
  );
}

export default App;
