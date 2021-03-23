import React, { useState } from "react";
import "./Cart.css";
import Details from "./Details";
function Cart({ first, SetFirst }) {

  const [Sum, setSum] = useState(156);
  const [items, setItems] = useState(4);
  const [detail, setDetail] = useState(Details);
  const trash = (id) => {

    setSum(Sum - detail[id].price * detail[id].qty);

    setDetail(detail.filter((ele, idx) => idx !== id));
    setItems(items - 1);
  };



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
            {detail.map((Detail, id) => {
              return (
                <>
                  {/* {console.log(id)} */}
                  <tr key={id}>
                    <td>
                      {Detail.name}
                      <p>${Detail.price}/mo</p>
                    </td>
                    <td>

                      <button
                        type="button"
                        onClick={() => (
                          SetFirst(Detail.price + Detail.price),
                          setSum(Sum + Detail.price),
                          (Detail.qty = Detail.qty + 1)
                        )}
                        class="quantity-right-plus btn  btn-number"
                        data-type="plus"
                        data-field=""
                      >
                        <span class="glyphicon glyphicon-plus"></span>
                      </button>
                      &#160; &#160;&#160;&#160;
                      <button>{Detail.qty < 0 ? 0 : Detail.qty}</button>&#160;
                      &#160;&#160;&#160;
                      {Detail.qty == 0 ? null : (
                        <button
                          type="button"
                          onClick={() => (
                            SetFirst(first - Detail.price),
                            setSum(Sum - Detail.price),
                            (Detail.qty = Detail.qty - 1)
                          )}
                          class="quantity-left-minus btn  btn-number"
                          data-type="minus"
                          data-field=""
                        >
                          <span class="glyphicon glyphicon-minus"></span>
                        </button>
                      )}
                    </td>
                    <td>
                      <b>
                        {Detail.price * Detail.qty < 0
                          ? 0
                          : Detail.price * Detail.qty}
                        /mo{" "}
                      </b>
                    </td>
                    <td>
                      <button onClick={() => trash(id)}>
                        <i class="glyphicon glyphicon-trash"></i>
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
            <tr>
              <td>
                <th>Numbe of Items:{items}</th>
              </td>
              <td>
                <th>Total</th>
              </td>

              <th>${Sum}/mo</th>
            </tr>

          </tbody>
        </table>
        <button class="button" onClick={() => console.log(Sum)}>Save</button>
      </div>
    </div>
  );
}
export default Cart;