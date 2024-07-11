import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

import { NavLink } from "react-router-dom";


const Navbar = () => {
  const {cart} = useSelector((state)=>state);
  return (
      <div className="flex justify-around bg-gray-900 text-white p-2 items-center">
        <NavLink to="/">
          <div>
            <img src="../logo.png" className="h-11" alt="shoping app" />
          </div>
        </NavLink>

        <div className="flex w-[100px] justify-around items-center font-medium text-slate-100">
          <NavLink to="/">
            <p>Home</p>
          </NavLink>

          <NavLink to="/cart">
            <div className="relative">
              <FaShoppingCart  className="text-2xl"/>
              {
                cart.length>0 &&
                <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex 
                justify-center items-center animate-bounce rounded-full text-white" 
                >{cart.length}</span>
              }
            </div>
          </NavLink>
        </div>
      </div>
  );
};

export default Navbar;
