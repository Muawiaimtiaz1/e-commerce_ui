import { Search} from "lucide-react";
export function Footer() {
  return (
    <footer className="w-full bg-white py-10 px-4 lg:px-20 flex flex-col lg:flex-row gap-10 border-t-1 border-b-1 border-gray-300">
      
      {/* 1. Search Bar */}
      <div className="flex-1 flex flex-col mb-6 lg:mb-0">

        <h3 className="text-lg font-semibold mb-3">Search Products</h3>
        <div className="bar w-full flex flex-row  justify-between items-center  border-b-2 border-gray-400">

        <input
          type="text"
          placeholder="Search products"
          className=" outline-none bg-transparent py-2 px-1 placeholder-gray-400"
          />
       <Search size={20}/>
          </div>
      </div>

      {/* 2. Shop */}
      <div className="flex-1 flex flex-col">
        <h3 className="text-lg font-semibold mb-3"> Highlights</h3>
        <ul className="flex flex-col gap-2 text-gray-500 text-sm">
          <li>New Arrivals</li>
          <li>Best Sellers</li>
          <li>Collections</li>
          <li>Offers</li>
        </ul>
      </div>

      {/* 3. Our Company */}
      <div className="flex-1 flex flex-col">
        <h3 className="text-lg font-semibold mb-3">Our Company</h3>
        <ul className="flex flex-col gap-2 text-gray-500 text-sm">
          <li>About Us</li>
          <li>Careers</li>
          <li>Blog</li>
          <li>Press</li>
        </ul>
      </div>

      {/* 4. Customer Support */}
      <div className="flex-1 flex flex-col">
        <h3 className="text-lg font-semibold mb-3">Customer Support</h3>
        <ul className="flex flex-col gap-2 text-gray-500 text-sm">
          <li>Help Center</li>
          <li>Contact Us</li>
          <li>Shipping</li>
          <li>Returns</li>
          <li>FAQs</li>
        </ul>
      </div>

    </footer>
  );
}