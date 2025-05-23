import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AddToCat";

function Naver() {

   const { data } = useContext(AuthContext);
   console.log(data);
   
   return (
      <div className="py-6 container mx-auto">
         <div className="flex justify-between items-center">
            <div className="text-xl font-bold">MyLogo</div>
            <nav className="space-x-4">
               <Link to={"/"}  className="hover:text-blue-600">Home</Link>
               <Link to={"/add"} className="hover:text-blue-600">Add</Link>
               <Link to={"/data"} className="hover:text-blue-600">Item</Link>
               <a href="#" className="hover:text-blue-600">Contact</a>
            </nav>

            <div className="">
               <Link to={"/add-to-cart"}>
                   
                  <button className="text-xl"> <FaShoppingCart /> </button>
               </Link>

               <button className="w-6 h-6 rounded-full bg-amber-900 text-white">{data.length}</button>
            </div>
         </div>
      </div>
   );
}

export default Naver;
 