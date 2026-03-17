import { TextAlignStart, Search, UserRound, Heart, Handbag, X,Star,BadgePercent,DollarSign} from "lucide-react";
import { FaFacebook, FaPinterest, FaTwitter, FaInstagram } from "react-icons/fa";
import { useState } from "react";


import {Link, redirect} from "react-router-dom"
export function MenuBar(props) {
  
  const [Menuopen, setMenuOpen] = useState(false);
  const [clicklink,setclicklink] =useState(false);

  function toggleMenu() {
    setMenuOpen(!Menuopen);
  }

  return <>
      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center justify-center gap-20 w-full bg-white text-black  h-20">
        {/* logo */}
        <div className="logo">
          <img src="the-hanger.png" alt="" />
        </div>
        {/* search bar */}
        <div className="searchbar w-[33%] h-[70%] border-b border-gray-800">
          <form className="w-full h-full flex flex-row gap-20 justify-around">
            <input
              type="text"
              placeholder="Products Search"
              className="w-[90%] bg-none text-2xl font-md outline-none"
            />
            <button className="h-full text-center">
              <Search size={35} />
            </button>
          </form>
        </div>
        {/* icons */}
        <div className="menu-list w-[10%]">
          <ul className="w-full flex flex-row gap-10">
            <li className="relative">
              <Link to="/">
              <UserRound size={30} className="hover:text-[#C4B583]" />
              </Link>
              
            </li>
            <li className="relative">
              <Link to="wishlist">
              <Heart size={30} className="hover:text-[#C4B583]" />
              {props.wishlist.length>0 &&
              <div className="notification-trigger h-[20px] w-[20px] bg-[#C4B583] rounded-full text-center absolute -top-2 -right-2 text-white">
              {props.wishlist.length}  
              </div>}
              </Link>
            </li>
            <li className="relative">
              <Link to="cart">
              <Handbag size={30} className="hover:text-[#C4B583]" />
              {props.tocart.length>=1 &&
              <div className="notification-trigger h-[20px] w-[20px] bg-[#C4B583] rounded-full text-center absolute -top-2 -right-2 text-white">
              {props.tocart.length}  
              </div>}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Menu Bar */}
      <div className="lg:hidden flex flex-row  justify-between items-center w-full bg-white text-black h-20 p-2 ">
        <div className="menu w-[20%]" onClick={toggleMenu}>
          {Menuopen ? <X size={30} strokeWidth={0.4} /> : <TextAlignStart strokeWidth={0.4} size={30} />}
        </div>
        <div className="logo">
          <img src="mobile_hanger_logo.png" alt="" className="w-[50px]" />
        </div>
        <div className="menu-list">
          <ul className="w-full flex flex-row gap-5">
            <Link to="/wishlist" >
            <li className="relative">
              <Heart size={30} strokeWidth={0.4} className="hover:text-[#C4B583]" />
              {props.wishlist.length>0 &&
              <div className="notification-trigger h-[20px] w-[20px] bg-[#C4B583] rounded-full text-center absolute -top-2 -right-2 text-white">
              {props.wishlist.length}  
              </div>}
            </li>
            </Link>
            <li className="relative mr-[10px]">
              <Handbag size={30} className="hover:text-[#C4B583]" />
             {props.tocart.length>=1 &&
              <div className="notification-trigger h-[20px] w-[20px] bg-[#C4B583] rounded-full text-center absolute -top-2 -right-2 text-white">
              {props.tocart.length}  
              </div>}
            </li>
          </ul>
        </div>
      </div>

      {/* Fullscreen Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white text-black bg-opacity-95 z-50 flex flex-col items-center pt-20  transition-opacity duration-500 ${
          Menuopen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* narbar fixed on top */}
       <div className=" fixed z-50 top-0 lg:hidden flex flex-row items-center justify-between w-full bg-white text-black h-20 p-2">
        <div className="menu w-[20%]" onClick={toggleMenu}>
          {Menuopen ? <X size={30}  strokeWidth={0.5}  /> : <TextAlignStart size={30}  strokeWidth={0.4}  />}
        </div>
        <div className="logo">
          <img src="mobile_hanger_logo.png" alt="" className="w-[50px]" />
        </div>
        <div className="menu-list">
          <ul className="w-full flex flex-row gap-5">
            
            <li className="relative">
              <Link to="/wishlist" onClick={toggleMenu}>
              <Heart size={30}  strokeWidth={0.4}  className="hover:text-[#C4B583]" />
              {props.wishlist.length>=1 &&
              <div className="notification-trigger h-[20px] w-[20px] bg-[#C4B583] rounded-full text-center absolute -top-2 -right-2 text-white">
              {props.wishlist.length}  
              </div>}
              </Link>
            </li>
            <li className="relative mr-[10px]">
              <Handbag size={30}  strokeWidth={0.4}  className="hover:text-[#C4B583]" />
             {props.tocart.length >= 1 &&
              <div className="notification-trigger h-[20px] w-[20px] bg-[#C4B583] rounded-full text-center absolute -top-2 -right-2 text-white">
              {props.tocart.length}  
              </div>}
            </li>
          </ul>
        </div>
      </div>

        {/* Menu Items */}
       <div className="text-black  w-full border-b-1 border-t-1 border-gray-300">
           <p className="w-full text-black text-sm text-center">{props.deal_text}</p>
       </div>
       <div className="text-black h-[214px] w-full  border-b-1 border-gray-300 flex justify-center items-center gap-10">
        <button className="flex  flex-col justify-center font-medium items-center gap-2 ">

        <Star size={40}strokeWidth={0.8} />
        <p>New Arrivals</p>
        </button>
        <button className="flex flex-col justify-center font-medium items-center gap-2 ">

        <BadgePercent size={40}strokeWidth={0.8} />
        <p>Deals & Discounts</p>
        </button>

       </div>
       <div className="w-full  flex flex-col gap-2 justify-start items-center">

       <Link to="/" onClick={()=>setMenuOpen(!Menuopen)}  className="w-full  flex flex-row   border-gray-300 gap-5 justify-start items-center px-10 py-2">
        <UserRound size={30} strokeWidth={0.8}/>
        My Profile
       </Link>
      

      

       <Link to="/wishlist"  onClick={()=>setMenuOpen(!Menuopen)} className="w-full  flex flex-row border-b   border-gray-300 gap-5 justify-start items-center px-10 py-2"  >
       
        <Heart size={30}  strokeWidth={0.8}/>
        My Wishlist
       </Link>
         
       
       </div>
        <div className="w-full  flex flex-col gap-2 justify-start items-center">

       <div className="w-full  flex flex-row  border-gray-300 gap-5 justify-start items-center px-10 py-2">
        <DollarSign size={30} strokeWidth={0.8}/>
        US
       </div>
       <div className="w-full  flex flex-row  border-b  border-gray-300 gap-5 justify-start items-center px-12 py-2">
         
         English
        
       </div>
                   <div className="flex gap-6 text-2xl w-full flex flex-row justify-center items-center">
            
                  <FaFacebook  className="text-gray-500  hover:text-[#C4B583] cursor-pointer w-[20px] h-[20px]  " />
                  <FaPinterest  className="text-gray-500 hover:text-[#C4B583] cursor-pointer w-[20px] h-[20px]  " />
                  <FaTwitter   className="text-gray-500   hover:text-[#C4B583] cursor-pointer w-[20px] h-[20px]  " />
                  <FaInstagram className="text-gray-500 hover:text-[#C4B583] cursor-pointer w-[20px] h-[20px]  " />
            
                </div>
                <div className="contact fixed bottom-0 font-medium ">Call +92-3226155209</div>
       </div>
      </div>
    </>
  
}