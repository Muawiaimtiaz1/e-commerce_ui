
import { PrimaryAlert } from "./components/primary-alert";
import { MenuBar } from "./components/menu-bar";
import { Carousel } from "./components/carousel";
import {Carousel_text} from "./components/carousel-text";
import { Section_2 } from "./components/section_2";

import { Items_gallery } from "./components/items_gallery";
import {Section_3} from "./components/section_3";
import { Section_4  } from "./components/section_4";
import {Footer} from "./components/footer";
export default function App(){
  return <div className="bg-black w-full min-h-[100dvh] ">
    <PrimaryAlert/>
    <MenuBar/>
    <Carousel/>
    <Carousel_text/>
    <Section_2/>
    <Items_gallery/>
    <Section_3/>
    <Items_gallery/>
    <Section_4/>
    <Footer/>

  </div>
}