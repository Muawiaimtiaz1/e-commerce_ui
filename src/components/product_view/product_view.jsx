import React, { useState,useEffect } from "react";
import { Handbag, Heart, Star,ChevronLeft } from "lucide-react";
import { useLocation,useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
export function Productview() {
    
  const location=useLocation()
  const {addToWishlist,addToCart}=useOutletContext()
  const navigate=useNavigate()
  const product = location.state?.product;
  


  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white px-20 ">

      {/* Left: Product Image */}
      <div className="md:w-1/2 w-full h-[50vh] md:h-screen">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right: Product Info */}
      <div className="md:w-1/2 w-full flex flex-col justify-center p-12 space-y-6">
      <Link to="/"  className="bg-white w-fit p-2 text-black border-none outline-none flex flex-row text-center items-center "> <ChevronLeft size={20} className="text-black"/> <p>back</p></Link>
        <h1 className="text-5xl font-extrabold text-gray-900">{product.name}</h1>
        <p className="text-3xl font-semibold text-gray-800">${product.price}</p>

        {/* Rating */}
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }, (_, i) => (
            <Star
              key={i}
              size={20}
              strokeWidth={1.5}
              fill={i < Math.floor(product.rating) ? "#C4B583" : "none"}
              className="text-[#C4B583]"
            />
          ))}
          <span className="ml-2 text-gray-600">{product.rating} / 5</span>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-lg leading-relaxed">{product.description}</p>

        {/* Color selection */}
        <div className="flex items-center gap-4 mt-4">
          <span className="text-gray-700 font-medium">Colors:</span>
          <div className="flex gap-2">
            {product.colors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`w-8 h-8 rounded-full border-2 ${selectedColor === color ? "border-gray-900" : "border-gray-300"}`}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>

        {/* Availability */}
        <p className={`mt-2 font-medium ${product.available ? "text-green-600" : "text-red-600"}`}>
          {product.available ? "In Stock" : "Out of Stock"}
        </p>

        {/* Quantity selector */}
        <div className="flex items-center gap-4 mt-4">
          <span className="text-gray-700 font-medium">Quantity:</span>
          <button
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="px-3 py-1 border rounded"
          >
            -
          </button>
          <span className="px-3">{quantity}</span>
          <button
            onClick={() => setQuantity((q) => q + 1)}
            className="px-3 py-1 border rounded"
          >
            +
          </button>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 mt-6 w-full">
          <button className="flex-1 px-8 py-4 bg-black text-white hover:bg-[#C4B583] flex items-center justify-center gap-4 rounded-lg shadow-lg transition-transform duration-300" onClick={()=>addToCart(product)}>
            <Handbag size={28} strokeWidth={1} />
            <span className="text-xl font-medium" >Add to Cart</span>
          </button>

          <button className="flex-1 px-8 py-4 text-black bg-white hover:text-[#C4B583] border border-gray-300 text-gray-900 flex items-center justify-center gap-4 rounded-lg shadow  transition-transform duration-300"onClick={()=>addToWishlist(product)}>
            <Heart size={28} strokeWidth={1} className=" hover:text-[#C4B583]" />
            <span className="text-xl font-medium">Add to Wishlist</span>
          </button>
        </div>
      </div>
    </div>
  );
}