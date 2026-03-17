import { Carousel_text }from "./carousel-text"
export function Section_4(props){
    return  <div className="w-full flex flex-col bg-white items-center gap-20 pb-20   ">
        <img src={props.section4_content.image} className="w-[50%] scale-x-[-1] object-cover object-center filter backdrop-contrast-125 brightness-110" alt="" />
        <Carousel_text/>

    </div>
}