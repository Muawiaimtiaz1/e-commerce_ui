import { Outlet } from "react-router-dom";
import { PrimaryAlert } from "../components/Alerts/primary-alert";
import { MenuBar } from "../components/homepage/menu-bar";
import { Footer } from "../components/homepage/footer";

export function RootLayout({ deal_text, wishlist,tocart, addToWishlist , addToCart,remove_wishlist,remove_cart }) {
  
  return (
    <div className="bg-black w-full min-h-[100dvh] flex flex-col">
      
      {/* Navbar / Menu */}
      <PrimaryAlert deal_text={deal_text} />
      <MenuBar deal_text={deal_text} wishlist={wishlist} tocart={tocart}/>

      {/* Page content will render here */}
      <main className="flex-1">
        <Outlet context={{ wishlist,tocart, addToWishlist,addToCart,remove_wishlist,remove_cart }}/>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}