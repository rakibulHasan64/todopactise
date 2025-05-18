import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AddToCat";



function ItemCard({ item }) {

   const navigate = useNavigate();

   const { handleAddTo } = useContext(AuthContext)


   const handleClick = (id) => {
      axios.delete("http://localhost:4000/addDelete", { data: { id } })
         .then(res => console.log(res.data))
         .catch(err => console.error(err));

   };

   // const handleAddTo = (item) => {
   //    axios.post("http://localhost:4000/addtocart", item)
   //       .then(() => {
   //          console.log("Item added to cart successfully");
   //       })
   //       .catch((err) => {
   //          console.error("Error adding to cart:", err);
   //       });
   // };
    

   return (
      <>

         <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 border my-4">
            {/* Image */}
            <img
               className="w-full h-48 object-cover"
               src={item.image}
               alt="item Image"

            />

            {/* Details */}
            <div className="px-2 py-4">
               <div className="font-bold text-xl mb-2">Price: ${item.price}</div>
               <p className="text-gray-700 text-base">Rating: {item.rating} / 5</p>
               <p className="text-gray-700 text-base">Email: {item.email}</p>
               <p className="text-gray-700 text-base">Mobile: {item.mobile}</p>
               <p className="text-gray-700 text-base capitalize">Gender: {item.gender}</p>


               <div className="space-x-2">
                  <button onClick={() => navigate(`/da/${item._id}`)} className="py-2 px-4 bg-blue-700 rounded text-white mt-4">Detlis</button>


                  <button onClick={() => handleClick(item._id)} className="py-2 px-4 bg-blue-700 rounded text-white mt-4">Delet</button>

                  <button className="py-2 px-4 bg-blue-700 rounded text-white mt-4">Edite</button>


                  <button onClick={()=> handleAddTo(item)} className="py-2 px-4 bg-blue-700 rounded text-white mt-4">Add to cart</button>
               </div>
            </div>
         </div>

      </>
   );
}

export default ItemCard;