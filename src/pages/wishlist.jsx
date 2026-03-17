import { useOutletContext } from "react-router-dom";
import { Productwish } from "../components/wishlist/product_wish";
import { HeartOff } from "lucide-react";
export function Wishlist() {
  const {wishlist}=useOutletContext();
  console.log(wishlist);

  return (
    <div className="w-full bg-white h-[100dvh] text-black flex flex-col">
      <h1 className="text-3xl font-bold text-center lg:text-start  lg:pt-20 lg:pl-20">Wishlist</h1>
      <div className="w-full h-[70%] bg-white flex ">
       {wishlist.length === 0 && (
         <div className="w-full flex flex-col items-center text-center justify-center justify-center text-gray-500 text-lg">
        <HeartOff size={300} strokeWidth={0.1}/>
          <p>Wishlist is empty</p>
         </div>
       )}
      
      <div className="wishlist w-[70%] flex-1 flex flex-col gap-5 items-center justify-start overflow-y-auto p-4 ">
        {wishlist.map((item, idx) => (
            <Productwish
            key={idx}  
            id={item.id}
                    // always add a key when rendering lists
            image={item.image} // pass the data to the component
            name={item.name}
            description={item.description}
            price={item.price}
            />
        ))}
      </div>
    
        </div>
    </div>
  );
}