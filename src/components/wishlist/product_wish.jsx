import { X, HeartOff, Handbag } from "lucide-react";
import { useOutletContext } from "react-router-dom";
export function Productwish(props) {
  const {setwishlist,addToCart,remove_wishlist,remove_cart}=useOutletContext()
 

  return  <div className="w-full md:w-[70%] bg-white border-b border-gray-300 p-4 flex flex-col lg:flex-row items-center justify-between gap-4">
        
      <div className="flex flex-col lg:flex-row items-center gap-4 w-full">

        <X strokeWidth={0.4} size={30} className="shrink-0" 
         onClick={() => remove_wishlist(props.id)}
         />

        <div className="w-full lg:w-[200px]">
          <img
            className="object-cover w-full max-w-[200px]"
            src={props.image}
            alt=""
          />
        </div>

        <div className="text flex flex-col gap-2 w-full overflow-hidden">

          <div className="name text-xl font-bold capitalize break-words">
            {props.name}
          </div>

          <div className="description text-gray-500 break-words">
            {props.description}
          </div>

          <div className="price text-lg font-semibold">
            {props.price}
          </div>

        </div>
      </div>
<div className=""onClick={()=>addToCart(props)}>

      <Handbag
        size={40}
        strokeWidth={1}
        className="hover:text-[#C4B583] shrink-0"
        />
        </div>

    </div>
  
}