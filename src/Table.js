import React,{useState} from 'react'
import Details from "./Details";
import Map from './Map';

function Table()
   {
    const [Sum, setSum] = useState(59 + 37 + 12 + 48);
    const [state, setState] = useState(true);
    let [stat, setStat] = useState(true);
    let [sta, setSta] = useState(true);
    let [st, setSt] = useState(true);
    const [items, setItems] = useState(Details.length);
    let [but, setbut] = useState(true);
    return (
        <div >
          <Map/>
        </div>
    )
}

export default Table
