import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCartTotal } from "../redux/cartSlice";
import CartComp from "../components/cart/CartComp";
import { useEffect } from "react";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cart, totalAmount, itemCount } = useSelector((state) => state.cart);

  console.log(cart, totalAmount, itemCount, "carts");

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch, cart]);

  return (
    <div>
      {cart?.length > 0 ? (
        <div>
          {cart?.map((cart, i) => (
            <CartComp key={i} cart={cart} />
          ))}
          <div className="flex items-center justify-end text-2xl">
            TOPLAM TUTAR:
            <span className="font-bold text-3xl ml-2">
              {totalAmount.toFixed(2)} TL
            </span>
          </div>
        </div>
      ) : (
        <div>Kartınız Boş...</div>
      )}
    </div>
  );
};

export default Cart;
