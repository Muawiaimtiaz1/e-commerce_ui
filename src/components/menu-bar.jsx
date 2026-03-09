import {TextAlignStart,Search,UserRound,Heart,Handbag} from "lucide-react"
export function MenuBar(){
    return <>

    <div className=" hidden menu-bar lg:flex items-center justify-center gap-20 w-[100%] bg-white   text-black h-10 h-20 ">
          
         <div className="logo"><img src="the-hanger.png" alt="" /></div>
         <div className="searchbar w-[33%] h-[70%] border-b border-gray-800 ">
            <form action=""className="w-full h-full flex flex-row gap-20 justify-around">

            <input type="text" placeholder="Products Search" className="w-[90%] bg-none text-2xl font-md outline-none"/>
           <button className="h-full text-center"><Search size={35}/></button>
            </form>
         </div>


         <div className="menu-list w-[10%]">
            <ul className="w-full flex flex-row gap-10">
                <li className="relative"><UserRound size={30} className="hover:text-[#C4B583]" /> <div className="notification-trigger h-[20px] w-[20px] bg-[#C4B583] rounded-full text-center absolute -top-2 -right-2 text-white ">1</div></li>
                <li className="relative"><Heart size={30}     className="hover:text-[#C4B583]" /> <div className="notification-trigger h-[20px] w-[20px] bg-[#C4B583] rounded-full text-center absolute -top-2 -right-2 text-white ">1</div></li>
                <li className="relative"><Handbag size={30}   className="hover:text-[#C4B583]" /> <div className="notification-trigger h-[20px] w-[20px] bg-[#C4B583] rounded-full text-center absolute -top-2 -right-2 text-white ">1</div></li>
            </ul>
         </div>
  
        
        
      </div>

    <div className="lg:hidden flex flex-row items-center justify-between w-full  bg-white text-black h-20 p-2">
    <div className="menu w-[20%]" onClick={()=>{
        
    }
    } ><TextAlignStart size={40}/></div>
    <div className="logo "><img src="mobile_hanger_logo.png" alt="" className="w-[50px]"/></div>
        <div className="menu-list ">
            <ul className="w-full flex flex-row gap-5">
                <li className="relative "><UserRound size={30} className="hover:text-[#C4B583]" /> <div className="notification-trigger h-[20px] w-[20px] bg-[#C4B583] rounded-full text-center absolute -top-2 -right-2 text-white items-center ">1</div></li>
                <li className="relative mr-[10px]"><Handbag size={30}   className="hover:text-[#C4B583]" /> <div className="notification-trigger h-[20px] w-[20px] bg-[#C4B583] rounded-full text-center absolute -top-2 -right-2 text-white items-center">1</div></li>
            </ul>
         </div>
         </div>

    
      </>
}
