import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detlis() {
   const { id } = useParams();
   const [product, setProduct] = useState(null);

   console.log(product);
   

   useEffect(() => {
      axios.get(`http://localhost:4000/addDatas/${id}`)
         .then(res => {
            setProduct(res.data);
         })
         .catch(err => {
            console.error("Error fetching product:", err);
         });
   }, [id]);

   return (
      <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow">
         <h2 className="text-xl font-bold mb-4">Product Details</h2>
         {
            product ? (
               <div className="space-y-2">
                  <img src={product.image} alt="Product" className="w-full rounded" />
                  <p><strong>Price:</strong> ${product.price}</p>
                  <p><strong>Rating:</strong> {product.rating}</p>
                  <p><strong>Email:</strong> {product.email}</p>
                  <p><strong>Mobile:</strong> {product.mobile}</p>
                  <p><strong>Gender:</strong> {product.gender}</p>
               </div>
            ) : (
               <p>Loading...</p>
            )
         }
      </div>
   );
}

export default Detlis;
