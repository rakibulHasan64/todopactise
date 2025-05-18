import { useContext } from "react";
import { AuthContext } from "../context/AddToCat";


function AddToCart() {
   const { data } = useContext(AuthContext)

   return (
      <div className="container mx-auto py-5">
         <h2>Your Cart Items</h2>
         {data.length === 0 ? (
            <p>Your cart is empty.</p>
         ) : (
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
               {data.map((item) => (
                  <li key={item._id} className="border p-4 rounded shadow">
                     <img src={item.image} alt="Product" className="w-full h-40 object-cover mb-2" />
                     <p><strong>Email:</strong> {item.email}</p>
                     <p><strong>Mobile:</strong> {item.mobile}</p>
                     <p><strong>Price:</strong> ${item.price}</p>
                     <p><strong>Rating:</strong> {item.rating}⭐</p>
                  </li>
               ))}
            </ul>

         )}
      </div>
   );
}

export default AddToCart;
