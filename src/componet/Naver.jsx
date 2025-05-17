import { Link } from "react-router-dom";

function Naver() {
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

            <div className=""></div>
         </div>
      </div>
   );
}

export default Naver;
 