'use client'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Firstsec from "./components/Firstsec"
import Secondsec from "./components/Secondsec"
import AboutUs from "./components/AboutUs"
import Thirdsec from "./components/Thirdsec"
import Fourthsec from "./components/Fourthsec"
import Footer from "./components/Footer"
import Image, { StaticImageData } from "next/image"
import ScrollIcon from '../app/assets/up-arrow.png'
import { useEffect, useState } from "react"





export default function Home(): JSX.Element {
  const [scrollIcon, showScrollIcon] = useState<boolean>(false)




  return (
    <main className="relative">
      <Navbar></Navbar>
      <Hero></Hero>
      <Firstsec></Firstsec>
      <Secondsec></Secondsec>
      <AboutUs></AboutUs>
      <Thirdsec></Thirdsec>
      <Fourthsec></Fourthsec>
      <Footer></Footer>
      {/* {scrollIcon ? <a>
        <button className="fixed bottom-0 right-0 m-4 w-[70px] h-[70px] bg-white border-black rounded-full border-[1px]">
          <Image src={ScrollIcon} alt="Scroll Up The Page Button"></Image>
        </button></a> : false} */}
      { }
    </main>
  )
}


