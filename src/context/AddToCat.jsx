import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

function AddToCat({ children }) {
   const [data, setData] = useState([]);


   

   useEffect(() => {
      axios.get("http://localhost:4000/addtocart")
         .then(res => setData(res.data))
         .catch(err => console.error("Error fetching cart data:", err));
   }, []);

   const handleAddTo = (item) => {
      axios.post("http://localhost:4000/addtocart", item)
         .then(() => {
            axios.get("http://localhost:4000/addtocart")
               .then(res => setData(res.data))
               .catch(err => console.error("Error fetching updated cart:", err));
         })
         .catch((err) => {
            console.error("Error adding to cart:", err);
         });
   };

   const userInfo = {
      data,
      setData,
      handleAddTo, // 👈 Add this
   };

   return (
      <AuthContext.Provider value={userInfo}>
         {children}
      </AuthContext.Provider>
   );
}

export default AddToCat;

