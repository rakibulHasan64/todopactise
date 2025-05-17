import axios from "axios";
import { useEffect, useState } from "react";
import ItemCard from "./ItemCard";

function Items() {


   const [data, setData] = useState([]);
   console.log();
   


   useEffect(() => {
      axios.get("http://localhost:4000/addData")
         .then((res) => {
         setData(res.data)
         
      }).catch((erro) => {
         console.error("Error fetching data:", erro);
      })
   }, []);
   return (
      <>
         
         <div className="container mx-auto py-12 grid-cols-4">


            {data.map((item) => <ItemCard key={item._id} item={item} />)}
         </div>
         
         
      </>
   );
}

export default Items;