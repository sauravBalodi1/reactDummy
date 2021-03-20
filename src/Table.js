import React,{useState} from 'react'
import Details from "./Details";

function Table({props})
   {
    const [Sum, setSum] = useState(59 + 37 + 12 + 48);
    const [state, setState] = useState(true);
    let [stat, setStat] = useState(true);
    let [sta, setSta] = useState(true);
    let [st, setSt] = useState(true);
    const [items, setItems] = useState(Details.length);
    let [but, setbut] = useState(true);
    return (
        <div>
           <tr>
                    <td>
                      {Details[0].name}
                      <p>${Details[0].price}/mo</p>
                    </td>
                    <td>
                      {" "}
                      <button
                        type="button"
                        onClick={() => (
                          props.SetFirst(props.first + Details[0].price),
                          props.setSum(Sum + 59),
                          props.Setc(props.c + 1)
                        )}
                        class="quantity-right-plus btn  btn-number"
                        data-type="plus"
                        data-field=""
                      >
                        <span class="glyphicon glyphicon-plus"></span>
                      </button>
                      &#160; &#160;&#160;&#160;
                      <button>0</button>&#160; &#160;&#160;&#160;
                      <button
                        type="button"
                        onClick={() => (
                          props.SetFirst(props.first() - Details[0].price),
                          props.setSum(Sum - Details[0].price),
                          props.Setc(props.c() - 1)
                        )}
                        class="quantity-left-minus btn  btn-number"
                        data-type="minus"
                        data-field=""
                      >
                        <span class="glyphicon glyphicon-minus"></span>
                      </button>
                    </td>
                    <td>
                      <b>0/mo </b>
                    </td>
                    <td>
                      <button
                        onClick={(value) => (
                          props.setSum(Sum - props.first),
                          props.SetFirst(0),
                          props.Setc(0),
                          props.setState(false),
                          props.setItems(items - 1)
                        )}
                      >
                        <i class="glyphicon glyphicon-trash"></i>
                      </button>
                    </td>
                  </tr>
        </div>
    )
}

export default Table
