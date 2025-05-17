import { useState } from "react";

function AddFrome() {
   const [formData, setFormData] = useState({
      image: "",
      price: "",
      rating: "",
      email: "",
      mobile: "",
      gender: "",
   });

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Submitted Data:", formData);
   };

   return (
      <div className="max-w-md mx-auto p-4 border rounded shadow">
         <h2 className="text-xl font-bold mb-4">Add Product</h2>
         <form onSubmit={handleSubmit} className="space-y-4">

            {/* Image URL */}
            <div>
               <label className="block mb-1 font-semibold" htmlFor="image">Image URL</label>
               <input
                  type="text"
                  id="image"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  placeholder="Enter image URL"
                  className="w-full border px-3 py-2 rounded"
               />
            </div>

            {/* Price */}
            <div>
               <label className="block mb-1 font-semibold" htmlFor="price">Price</label>
               <input
                  type="number"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  placeholder="Enter price"
                  className="w-full border px-3 py-2 rounded"
               />
            </div>

            {/* Rating */}
            <div>
               <label className="block mb-1 font-semibold" htmlFor="rating">Rating (1 to 5)</label>
               <input
                  type="number"
                  id="rating"
                  name="rating"
                  value={formData.rating}
                  onChange={handleChange}
                  min="1"
                  max="5"
                  step="0.1"
                  placeholder="Enter rating"
                  className="w-full border px-3 py-2 rounded"
               />
            </div>

            {/* Email */}
            <div>
               <label className="block mb-1 font-semibold" htmlFor="email">Email</label>
               <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                  className="w-full border px-3 py-2 rounded"
               />
            </div>

            {/* Mobile */}
            <div>
               <label className="block mb-1 font-semibold" htmlFor="mobile">Mobile</label>
               <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Enter mobile number"
                  className="w-full border px-3 py-2 rounded"
               />
            </div>

            {/* Gender as radio buttons */}
            <div>
               <label className="block mb-1 font-semibold">Gender</label>
               <div className="flex space-x-4">
                  <label className="inline-flex items-center">
                     <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={formData.gender === "male"}
                        onChange={handleChange}
                        className="form-radio"
                     />
                     <span className="ml-2">Male</span>
                  </label>
                  <label className="inline-flex items-center">
                     <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={formData.gender === "female"}
                        onChange={handleChange}
                        className="form-radio"
                     />
                     <span className="ml-2">Female</span>
                  </label>
                  <label className="inline-flex items-center">
                     <input
                        type="radio"
                        name="gender"
                        value="other"
                        checked={formData.gender === "other"}
                        onChange={handleChange}
                        className="form-radio"
                     />
                     <span className="ml-2">Other</span>
                  </label>
               </div>
            </div>

            <button
               type="submit"
               className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
               Add Product
            </button>
         </form>
      </div>
   );
}

export default AddFrome;
