'use client'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Firstsec from "./components/Firstsec"
import Secondsec from "./components/Secondsec"
import AboutUs from "./components/AboutUs"
import Thirdsec from "./components/Thirdsec"
import Fourthsec from "./components/Fourthsec"
import Footer from "./components/Footer"







export default function Home(): React.ReactNode {

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
    </main>
  )
}


