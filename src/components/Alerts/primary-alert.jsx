import { FaFacebook, FaPinterest, FaTwitter, FaInstagram } from "react-icons/fa";
export function PrimaryAlert(props){
    return <>

    <div className='hidden linker lg:flex items-center justify-evenly w-[100%] bg-white   text-black h-10 text-small font-thin  '>
           <div className="flex gap-4 text-2xl">

      <FaFacebook className="text-gray-500  hover:text-[#C4B583] cursor-pointer w-[20px] h-[20px]  " />
      <FaPinterest className="text-gray-500 hover:text-[#C4B583] cursor-pointer w-[20px] h-[20px]  " />
      <FaTwitter className="text-gray-500   hover:text-[#C4B583] cursor-pointer w-[20px] h-[20px]  " />
      <FaInstagram className="text-gray-500 hover:text-[#C4B583] cursor-pointer w-[20px] h-[20px]  " />

    </div>
        <div className="">
{props.deal_text}

</div>
        <div className="flex gap-4">
          <div className="currency">$</div>
          <div className="language">en</div>
        </div>
      </div>
      </>
}