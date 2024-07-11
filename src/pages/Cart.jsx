import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";

const Cart = () => {

  const { cart } = useSelector((state) => state);
  const [totalAmount,setTotalAmount] = useState(0);

  useEffect(()=>{
    setTotalAmount(cart.reduce((acc,curr)=> acc + curr.price,0));
  },[cart])

  return (
    <div>
      {
        cart.length > 0 ?
          (
            <div className="flex justify-center m-3 cart-box ">

              <div>
                {
                  cart.map((item, index) => {
                    return <CartItem key={item.id} item={item} itemIndex={index} />
                  })
                }
              </div>

              <div className=" flex flex-col justify-between m-3 my-20 ml-10 p-4 w-[30%] summary-box ">
                <div>
                  <div className="text-green-700 mb-2">
                    <p className="font-semibold">Your Cart</p>
                    <h1 className="text-3xl font-bold">SUMMARY</h1>
                  </div>
                  <p className="text-gray-700 font-semibold">Total items: {cart.length}</p>
                </div>
                <div>
                  <p className="text-gray-700 font-semibold mb-3">Total Amount: <span className="font-bold text-black">${totalAmount.toFixed(2)}</span> </p>
                  <button className="bg-[#299a52] text-white px-7 py-2 rounded-lg text-md font-bold w-full">Check Out</button>
                </div>
              </div>

            </div>

          ) :
          (
            <div className="flex flex-col justify-center h-[85vh] items-center">
              <h1 className="font-semibold text-gray-700 m-4">Your cart is empty</h1>
              <Link to="/">
                <button className="bg-[#299a52] text-white px-7 py-2 rounded-lg text-md font-bold">Shop Now</button>
              </Link>
            </div>
          )
      }
    </div>
  )
};

export default Cart;
