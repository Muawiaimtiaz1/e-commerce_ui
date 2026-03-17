import { X, HeartOff, Handbag,CreditCard } from "lucide-react";
import { useOutletContext } from "react-router-dom";
export function ProductCart(props) {
  const {addToCart,remove_cart}=useOutletContext()
  return (
    <div className="w-full md:w-[70%] bg-white border-b border-gray-300 p-4 flex flex-col lg:flex-row items-center justify-between gap-4">

      <div className="flex flex-col lg:flex-row items-center gap-4 w-full">

        <X strokeWidth={0.4} size={30} className="shrink-0" 
        onClick={() => remove_cart(props.id)} />

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
<div className="flex hover:bg-[#C4B583] bg-black text-white  shrink-0 items-center justify-center gap-4   rounded-md cursor:pointer p-1"onClick={()=>addToCart(props)}>

      <CreditCard
        size={40}
        strokeWidth={1}
        className=""
        />
        Buy Now
        </div>

    </div>
  );
}