import axios from "axios";
import { useEffect, useState } from "react";

function AddToCart() {
   const [data, setData] = useState([]);

   useEffect(() => {
      axios.get("http://localhost:4000/addToCart")
         .then(res => setData(res.data))
         .catch(err => console.error("Error fetching cart data:", err));
   }, []);

   return (
      <div className="container mx-auto py-5">
         <h2>Your Cart Items</h2>
         {data.length === 0 ? (
            <p>Your cart is empty.</p>
         ) : (
            <ul>
               {data.map((item) => (
                  <li key={item._id}>
                     {item.name} - ${item.price}
                  </li>
               ))}
            </ul>
         )}
      </div>
   );
}

export default AddToCart;
