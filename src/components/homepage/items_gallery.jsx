import { Handbag, Heart, Eye } from "lucide-react";
import { useOutletContext } from "react-router-dom";
import {Link} from "react-router-dom"
export function Items_gallery(props) {
  const {addToWishlist,addToCart }=useOutletContext();
  let products=props.gallery_content
  
 

  return (
    <div className="w-full h-max bg-white flex flex-wrap justify-between px-10 py-20">
       
{products.map((elem,index)=>{
        return (
          <div key={index} className="item bg-white p-2 relative group w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/7 h-[270px] overflow-hidden">
           <div  className="bg-cover w-full h-full bg-center overflow-hidden"
           style={{backgroundImage:`url(${elem.image})`}}>

        {/* overlay */}
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300">

          {/* top right icons */}
          <div className="absolute top-4 right-4 flex flex-col gap-3">

            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer  " 
          
          onClick={()=>addToWishlist(elem)}
            >
              <Heart size={18} className="hover:text-[#C4B583] transition" />
            </div>

            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:text-[#C4B583] transition">
              <Link to={`productview/product/${elem.id}`} state={{product:elem}}>
              <Eye size={18} className="hover:text-[#C4B583] transition"
              // onClick={()=>movetoproductviewwithproductdetails}
              />
              </Link>
            
            </div>

          </div>

          {/* bottom right icon */}
          <div className="absolute bottom-4 right-4">

            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center cursor-pointer hover:text-[#C4B583] transition"
            onClick={()=>addToCart(elem)}>
              <Handbag size={20} className="hover:text-[#C4B583] transition"/>
            </div>

          </div>

        </div>

      </div>
      </div>
        )
       })}
      
    

    </div>
  );
}
