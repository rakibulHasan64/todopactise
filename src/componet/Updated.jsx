// Updated.jsx

import axios from "axios";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

function Updated() {
   const data = useLoaderData();
   const { _id, gender, mobile, email, rating, price, image } = data;

   const [formData, setFormData] = useState({
      image,
      price,
      rating,
      email,
      mobile,
      gender,
   });

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      axios
         .put(`http://localhost:4000/updated/${_id}`, formData)
         .then((response) => {
            console.log(response.data);
            alert("Product updated successfully!");
         })
         .catch((error) => {
            console.error("Error updating product:", error);
            alert("Something went wrong while updating the product.");
         });
   };

   return (
      <div className="max-w-md mx-auto p-4 border rounded shadow">
         <h2 className="text-xl font-bold mb-4">Edit Product</h2>
         <form onSubmit={handleSubmit} className="space-y-4">
            {/* Image URL */}
            <div>
               <label htmlFor="image" className="block mb-1 font-semibold">
                  Image URL
               </label>
               <input
                  type="text"
                  id="image"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded"
                  placeholder="Enter image URL"
               />
            </div>

            {/* Price */}
            <div>
               <label htmlFor="price" className="block mb-1 font-semibold">
                  Price
               </label>
               <input
                  type="number"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded"
                  placeholder="Enter price"
               />
            </div>

            {/* Rating */}
            <div>
               <label htmlFor="rating" className="block mb-1 font-semibold">
                  Rating
               </label>
               <input
                  type="number"
                  id="rating"
                  name="rating"
                  value={formData.rating}
                  onChange={handleChange}
                  min="1"
                  max="5"
                  step="0.1"
                  className="w-full border px-3 py-2 rounded"
                  placeholder="Enter rating"
               />
            </div>

            {/* Email */}
            <div>
               <label htmlFor="email" className="block mb-1 font-semibold">
                  Email
               </label>
               <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded"
                  placeholder="Enter email"
               />
            </div>

            {/* Mobile */}
            <div>
               <label htmlFor="mobile" className="block mb-1 font-semibold">
                  Mobile
               </label>
               <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded"
                  placeholder="Enter mobile number"
               />
            </div>

            {/* Gender */}
            <div>
               <label className="block mb-1 font-semibold">Gender</label>
               <div className="flex gap-4">
                  {["male", "female", "other"].map((g) => (
                     <label key={g} className="inline-flex items-center">
                        <input
                           type="radio"
                           name="gender"
                           value={g}
                           checked={formData.gender === g}
                           onChange={handleChange}
                        />
                        <span className="ml-2 capitalize">{g}</span>
                     </label>
                  ))}
               </div>
            </div>

            <button
               type="submit"
               className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
               Update Product
            </button>
         </form>
      </div>
   );
}

export default Updated;
