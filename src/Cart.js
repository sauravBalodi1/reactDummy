import React, { useState } from "react";
import "./Cart.css";
import Details from "./Details";
import classnames from "classnames"
function Cart({
  first,
  SetFirst,
  c,
  Setc,
})
{
  const [State, setState] = useState(true)
  const [Sum, setSum] = useState(156);
  const [items, setItems] = useState(4);
  const trash=(id)=>{
   

  }
  return (
    <div className="cart">
      <div className="cart_back">
        <h2>Your Cart</h2>
      </div>
      <div className="cart_quantities">
       <table class="table">
          <thead>
            <tr>
              <th>Product Name & Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>

            {Details.map((Detail, id) => {

              return <>

                <tr  key={id}>
                  <td>
                    {Detail.name}
                    <p>${Detail.price}/mo</p>
                  </td>
                  <td>
                    {" "}
                    <button
                      type="button"
                      onClick={() => (
                        SetFirst(Detail.price + Detail.price),
                        setSum(Sum + Detail.price),
                        Detail.qty = Detail.qty + 1
                      )}
                      class="quantity-right-plus btn  btn-number"
                      data-type="plus"
                      data-field=""
                    >
                      <span class="glyphicon glyphicon-plus"></span>
                    </button>&#160; &#160;&#160;&#160;


                  <button>{Detail.qty < 0 ? 0 : Detail.qty}</button>&#160; &#160;&#160;&#160;

                    {Detail.qty == 0 ? (null) : (<button
                      type="button"
                      onClick={() => (
                        SetFirst(first - Detail.price),
                        setSum(Sum - Detail.price),
                        Detail.qty = Detail.qty - 1
                      )}
                      class="quantity-left-minus btn  btn-number"
                      data-type="minus"
                      data-field=""
                    >

                      <span class="glyphicon glyphicon-minus"></span>
                    </button>)}

                  </td>
                  <td>
                    <b>{Detail.price * Detail.qty < 0 ? 0 : Detail.price * Detail.qty}/mo </b>
                  </td>
                  <td>
                    <button

                      onClick={() => (
                        setSum(Sum - Detail.price),
                        SetFirst(0),
                        Setc(0),
                        setState(false),
                        setItems(items - 1),
                        
                        Detail.price=Detail.price.delete,
                        Detail.name=Detail.name.delete,
                        Detail.qty=Detail.qty.delete,
                        trash(id)
                       


                      )}
                      
                    >
                      <i class="glyphicon glyphicon-trash"></i>
                    </button>
                  </td>
                </tr>
              </>
            })
            }

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
  )
}
export default Cart;