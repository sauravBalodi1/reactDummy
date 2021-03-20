import React, { useState, useEffect } from "react";
import "./Cart.css";
import Details from "./Details";
import classnames from "classnames";
import { getBasketTotal } from "./Reducer";
import Table from "./Table"
function Cart({
  first,
  SetFirst,
  second,
  third,
  setthird,
  setsecond,
  fourth,
  setfourth,
  c,
  Setc,
  c2,
  setc2,
  c3,
  setc3,
  c4,
  setc4,
}) {
  // useEffect(()=>{
  //   Details.map((i,j)=>{
  //     j
  // //   })
  // })
  const [Sum, setSum] = useState(59 + 37 + 12 + 48);
  const [state, setState] = useState(true);
  let [stat, setStat] = useState(true);
  let [sta, setSta] = useState(true);
  let [st, setSt] = useState(true);
  const [items, setItems] = useState(Details.length);
  let [but, setbut] = useState(true);
  return (
    <div className="cart">
      <div className="cart_back">
        <h2>Your Cart</h2>
      </div>
      <div className="cart_quantities">
        {/* <p className="cart_p">Product Name & price</p>
            <p className="cart_q">Qutanity</p>
            <p className="cart_total">Total</p> */}

        <table class="table">
          <thead>
            <tr>
              <th>Product Name & Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {state ? (
              <>
                {c > 0 ? (
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
                          SetFirst(first + Details[0].price),
                          setSum(Sum + 59),
                          Setc(c + 1)
                        )}
                        class="quantity-right-plus btn  btn-number"
                        data-type="plus"
                        data-field=""
                      >
                        <span class="glyphicon glyphicon-plus"></span>
                      </button>
                      &#160; &#160;&#160;&#160;
                      <button>{c < 0 ? 0 : c}</button>&#160; &#160;&#160;&#160;
                      <button
                        type="button"
                        onClick={() => (
                          SetFirst(first - Details[0].price),
                          setSum(Sum - Details[0].price),
                          Setc(c - 1)
                        )}
                        class="quantity-left-minus btn  btn-number"
                        data-type="minus"
                        data-field=""
                      >
                        <span class="glyphicon glyphicon-minus"></span>
                      </button>
                    </td>
                    <td>
                      <b>{first < 0 ? 0 : first}/mo </b>
                    </td>
                    <td>
                      <button
                        onClick={(value) => (
                          setSum(Sum - first),
                          SetFirst(0),
                          Setc(0),
                          setState(false),
                          setItems(items - 1)
                        )}
                      >
                        <i class="glyphicon glyphicon-trash"></i>
                      </button>
                    </td>
                  </tr>
                ) : (
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
                          SetFirst(first + Details[0].price),
                          setSum(Sum + 59),
                          Setc(c + 1)
                        )}
                        class="quantity-right-plus btn  btn-number"
                        data-type="plus"
                        data-field=""
                      >
                        <span class="glyphicon glyphicon-plus"></span>
                      </button>
                      &#160; &#160;&#160;&#160;
                      <button>{c < 0 ? 0 : c}</button>&#160; &#160;&#160;&#160;
                    </td>
                    <td>
                      <b>{first < 0 ? 0 : first}/mo </b>
                    </td>
                    <td>
                      <button
                        onClick={(value) => (
                          setSum(Sum - first),
                          SetFirst(0),
                          Setc(0),
                          setState(false),
                          setItems(items - 1)
                        )}
                      >
                        <i class="glyphicon glyphicon-trash"></i>
                      </button>
                    </td>
                  </tr>
                )}
              </>
            ) : null}

            {stat ? (
              <>
                {c2 > 0 ? (
                  <tr>
                    <td>
                      {Details[1].name}
                      <p>${Details[1].price}/mo</p>
                    </td>
                    <td>
                      {" "}
                      <button
                        type="button"
                        onClick={() => (
                          setsecond(second + Details[1].price),
                          setSum(Sum + Details[1].price),
                          setc2(c2 + 1)
                        )}
                        class="quantity-right-plus btn  btn-number"
                        data-type="plus"
                        data-field=""
                      >
                        <span class="glyphicon glyphicon-plus"></span>
                      </button>
                      &#160; &#160;&#160;&#160;
                      <button>{c2 < 0 ? 0 : c2}</button>&#160;
                      &#160;&#160;&#160;
                      <button
                        type="button"
                        onClick={() => (
                          setsecond(second - Details[1].price),
                          setSum(Sum - Details[1].price),
                          setc2(c2 - 1)
                        )}
                        class="quantity-left-minus btn  btn-number"
                        data-type="minus"
                        data-field=""
                      >
                        <span class="glyphicon glyphicon-minus"></span>
                      </button>
                    </td>
                    <td>
                      <b>${second < 0 ? 0 : second}/mo</b>
                    </td>
                    <td>
                      <button
                        onClick={() => (
                          setSum(Sum - second),
                          setsecond(0),
                          setc2(0),
                          setItems(items - 1),
                          setStat(false)
                        )}
                      >
                        <i class="glyphicon glyphicon-trash"></i>
                      </button>
                    </td>
                  </tr>
                ) : (
                  <tr>
                    <td>
                      {Details[1].name}
                      <p>${Details[1].price}/mo</p>
                    </td>
                    <td>
                      {" "}
                      <button
                        type="button"
                        onClick={() => (
                          setsecond(second + Details[1].price),
                          setSum(Sum + Details[1].price),
                          setc2(c2 + 1)
                        )}
                        class="quantity-right-plus btn  btn-number"
                        data-type="plus"
                        data-field=""
                      >
                        <span class="glyphicon glyphicon-plus"></span>
                      </button>
                      &#160; &#160;&#160;&#160;
                      <button>{c2 < 0 ? 0 : c2}</button>&#160;
                      &#160;&#160;&#160;
                    </td>
                    <td>
                      <b>${second < 0 ? 0 : second}/mo</b>
                    </td>
                    <td>
                      <button
                        onClick={() => (
                          setSum(Sum - second),
                          setsecond(0),
                          setc2(0),
                          setItems(items - 1),
                          setStat(false)
                        )}
                      >
                        <i class="glyphicon glyphicon-trash"></i>
                      </button>
                    </td>
                  </tr>
                )}
              </>
            ) : null}
            {sta ? (
              <>
                {c3 > 0 ? (
                  <tr>
                    <td>
                      {Details[2].name}
                      <p>${Details[2].price}/mo</p>
                    </td>
                    <td>
                      {" "}
                      <button
                        type="button"
                        onClick={() => (
                          setthird(third + Details[2].price),
                          setSum(Sum + Details[2].price),
                          setc3(c3 + 1)
                        )}
                        class="quantity-right-plus btn  btn-number"
                        data-type="plus"
                        data-field=""
                      >
                        <span class="glyphicon glyphicon-plus"></span>
                      </button>
                      &#160; &#160;&#160;&#160;
                      <button>{c3 < 0 ? 0 : c3}</button>&#160;
                      &#160;&#160;&#160;
                      <button
                        type="button"
                        onClick={() => (
                          setthird(third - Details[2].price),
                          setSum(Sum - Details[2].price),
                          setc3(c3 - 1)
                        )}
                        class="quantity-left-minus btn  btn-number"
                        data-type="minus"
                        data-field=""
                      >
                        <span class="glyphicon glyphicon-minus"></span>
                      </button>
                    </td>
                    <td>
                      <b>${third < 0 ? 0 : third}/mo</b>
                    </td>
                    <td>
                      <button
                        onClick={() => (
                          setSum(Sum - third),
                          setthird(0),
                          setc3(0),
                          setSta(false),
                          setItems(items - 1)
                        )}
                      >
                        <i class="glyphicon glyphicon-trash"></i>
                      </button>
                    </td>
                  </tr>
                ) : (
                  <tr>
                    <td>
                      {Details[2].name}
                      <p>${Details[2].price}/mo</p>
                    </td>
                    <td>
                      {" "}
                      <button
                        type="button"
                        onClick={() => (
                          setthird(third + Details[2].price),
                          setSum(Sum + Details[2].price),
                          setc3(c3 + 1)
                        )}
                        class="quantity-right-plus btn  btn-number"
                        data-type="plus"
                        data-field=""
                      >
                        <span class="glyphicon glyphicon-plus"></span>
                      </button>
                      &#160; &#160;&#160;&#160;
                      <button>{c3 < 0 ? 0 : c3}</button>&#160;
                      &#160;&#160;&#160;
                    </td>
                    <td>
                      <b>${third < 0 ? 0 : third}/mo</b>
                    </td>
                    <td>
                      <button
                        onClick={() => (
                          setSum(Sum - third),
                          setthird(0),
                          setc3(0),
                          setSta(false),
                          setItems(items - 1)
                        )}
                      >
                        <i class="glyphicon glyphicon-trash"></i>
                      </button>
                    </td>
                  </tr>
                )}
              </>
            ) : null}

            {st ? (
              <>
                {c4 > 0 ? (
                  <tr>
                    <td>
                      {Details[3].name}
                      <p>${Details[3].price}/mo</p>
                    </td>
                    <td>
                      {" "}
                      <button
                        type="button"
                        onClick={() => (
                          setfourth(fourth + Details[3].price),
                          setSum(Sum + Details[3].price),
                          setc4(c4 + 1)
                        )}
                        class="quantity-right-plus btn  btn-number"
                        data-type="plus"
                        data-field=""
                      >
                        <span class="glyphicon glyphicon-plus"></span>
                      </button>
                      &#160; &#160;&#160;&#160;
                      <button>{c4 < 0 ? 0 : c4}</button>&#160;
                      &#160;&#160;&#160;
                      <button
                        type="button"
                        onClick={() => (
                          setfourth(fourth - Details[3].price),
                          setSum(Sum - Details[3].price),
                          setc4(c4 - 1)
                        )}
                        class="quantity-left-minus btn  btn-number"
                        data-type="minus"
                        data-field=""
                      >
                        <span class="glyphicon glyphicon-minus"></span>
                      </button>
                    </td>
                    <td>
                      <b>${fourth < 0 ? 0 : fourth}/mo</b>
                    </td>
                    <td>
                      <button
                        onClick={() => (
                          setSum(Sum - fourth),
                          setfourth(0),
                          setc4(0),
                          setSt(false),
                          setItems(items - 1)
                        )}
                      >
                        <i class="glyphicon glyphicon-trash"></i>
                      </button>
                    </td>
                  </tr>
                ) : (
                  <tr>
                    <td>
                      {Details[3].name}
                      <p>${Details[3].price}/mo</p>
                    </td>
                    <td>
                      {" "}
                      <button
                        type="button"
                        onClick={() => (
                          setfourth(fourth + Details[3].price),
                          setSum(Sum + Details[3].price),
                          setc4(c4 + 1)
                        )}
                        class="quantity-right-plus btn  btn-number"
                        data-type="plus"
                        data-field=""
                      >
                        <span class="glyphicon glyphicon-plus"></span>
                      </button>
                      &#160; &#160;&#160;&#160;
                      <button>{c4 < 0 ? 0 : c4}</button>&#160;
                      &#160;&#160;&#160;
                    </td>
                    <td>
                      <b>${fourth < 0 ? 0 : fourth}/mo</b>
                    </td>
                    <td>
                      <button
                        onClick={() => (
                          setSum(Sum - fourth),
                          setfourth(0),
                          setc4(0),
                          setSt(false),
                          setItems(items - 1)
                        )}
                      >
                        <i class="glyphicon glyphicon-trash"></i>
                      </button>
                    </td>
                  </tr>
                )}
              </>
            ) : null}

            <tr>
              <th>Numbe of Items:{items}</th>
              <td>
                <th>Total</th>
              </td>
              <th>${Sum}/mo</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Cart;
