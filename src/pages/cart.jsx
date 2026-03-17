import { useOutletContext } from "react-router-dom";
import { ProductCart } from "../components/cart/product_cart";
import { ShoppingCart } from "lucide-react";
export function Cart() {
  const {tocart}=useOutletContext();
  console.log(tocart);

  return (
    <div className="w-full bg-white h-[100dvh] text-black flex flex-col">
      <h1 className="text-3xl font-bold text-center lg:text-start lg:pt-20 lg:pl-20">Cart</h1>
      {tocart.length ===0 && <div className="w-full flex flex-col items-center text-center justify-center justify-center text-gray-500 text-lg">
        <ShoppingCart size={300} strokeWidth={0.1}/>
          <p>Cart is empty</p>
         </div> }
      <div className="w-full h-[70%] bg-white flex  ">

      <div className="cart-list w-[70%] flex-1 flex flex-col gap-5 items-center justify-start overflow-y-auto p-4 ">
        {tocart.map((item, idx) => (
            <ProductCart
            id={item.id}
            key={idx}          // always add a key when rendering lists
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