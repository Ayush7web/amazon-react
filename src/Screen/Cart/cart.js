import React, { useState, useEffect } from "react";
import "./cart.css";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/actions/actions";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {

  const [cartItem, setCartItem] = useState([]);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  let a = 0;
  let cost = cartItems.map((item) => {
    return (a = a + item.price);
  });

  useEffect(() => {
    setCartItem(cartItems);
  }, [cartItems]);

  const handleRemoveFromcart = (id) => {
    toast.error("Item Removed From Cart", {
      position: "bottom-right",
    });
    dispatch(removeFromCart(id));
  };



  return (
    <div className="cart">
      <div className="topLeftCart">
        <div className="topLeftCartTitle">Shopping Cart</div>
        <div className="desellectAllCart">Deselect all items</div>
        <div className="cartPriceTextDivider">Price</div>

        <div className="cartItemsDiv">
          {
            cartItem.map((item,index)=>{
              return (
                <div className="cartItemBlock">
                  <div className="cartItemLeftBlock">
                    <div className="cartItemLeftBlockImage">
                      <img
                        className="cartItemLeftBlockImg"
                        src={item.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="cartItemLeftBlockDetails">
                      <div className="cartItemProductName">
                        {item.name}
                      </div>
                      <div className="inStockCart">in stock</div>
                      <div className="elgFreeShp">
                        Elligible For Free Shopping
                      </div>
                      <div className="amazonFullFilledImage">
                        <img
                          className="fullfillImg"
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoOO77h33-J_CtOzEyl2w_O6-DuREaOIEivQ&s"
                          alt=""
                        />
                      </div>
                      <div className="removeFromCart" onClick={()=>{handleRemoveFromcart(item.id)}}>Remove from Cart</div>
                      <div className="cartItemRightBlock">Rs {item.price}</div>
                    </div>
                  </div>
                </div>
              );
            })
          }
         
          
        </div>
      </div>

      <div className="topRightCart">
        <div className="subTotalTitle">
          subtotal ({cartItem.length} items) :{" "}
          <span className="subTotalTitleSpan">Rs{a}</span>{" "}
        </div>
        <div className="giftAddto">
          <input type="checkbox" />
          <div>This order contains a gift</div>
        </div>
        <div className="proceedToBuy">Proceed to Buy</div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Cart;
