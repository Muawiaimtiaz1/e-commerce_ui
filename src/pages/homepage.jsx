import { Carousel } from "../components/homepage/carousel";
import {Carousel_text} from "../components/homepage/carousel-text";
import { Section_2 } from "../components/homepage/section_2";

import { Items_gallery } from "../components/homepage/items_gallery";
import {Section_3} from "../components/homepage/section_3";
import { Section_4  } from "../components/homepage/section_4";
import {products} from '../mock_data/products'

export  function Homepage(props){

    // console.log(props.content)
  return <div >
     <Carousel carousel_images={props.content.carousel_images}/>
    <Carousel_text/>
    <Section_2 section2_content={props.content.section_2}/>
    <Items_gallery gallery_content={props.content.products[0]} />
    <Section_3 section3_content={props.content.section_3}/> 
    <Items_gallery gallery_content={props.content.products[1]}/>
    <Section_4 section4_content={props.content.section_4}/>
    

    </div>
  
}