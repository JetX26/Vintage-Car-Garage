'use client'
import Image, { StaticImageData } from "next/image"
import Tools from '../assets/tools.png'
import FbLogo from '../assets/facebook-logo.png'
import PinterestLogo from '../assets/pinterest-logo.png'
import InstaLogo from '../assets/insta-logo.png'
import VintageCar from '../assets/vintage-car4k.jpeg'
import React from 'react'
import Logo from '../components/Logo'


interface logos {
    description: string,
    image: StaticImageData,
    duration: number
}

const Hero = (): React.ReactNode => {


    const logos: logos[] = [
        {
            description: 'Facebook Icon',
            image: FbLogo,
            duration: 500
        },
        {
            description: 'Pinterest Icon',
            image: PinterestLogo,
            duration: 1000
        },
        {
            description: 'Instagram Icon',
            image: InstaLogo,
            duration: 1500
        }
    ]



    return (
        <div className=" h-[1400px] relative flex xs:object-center xs:h-auto sm:h-auto md:h-auto lg:h-auto xl:h-auto">
            <Image className="w-full h-auto object-cover" src={VintageCar} alt="Vintage Car"></Image>
            <div className="text-white w-full ml-[-100%] flex flex-col items-center justify-evenly p-8 xs:p-12 xs:gap-12 sm:p-24">
                <div className=" text-center flex flex-col items-center gap-8">
                    <span className="border-white border-[2px] rounded-[100%] scale-150">
                        <Image className=" p-3" src={Tools} width={70} alt="Tools"></Image>
                    </span>
                    <span>
                        <h1 className=" text-6xl font-bold">JADE & ANDY</h1>
                        <p className=" text-xl font-light">VINTAGE CAR SPECIALIST</p>
                    </span>
                </div>
                <div className=" flex gap-4">
                    {logos.map((item, id) => {
                        return <Logo key={id} description={item.description} source={item.image} duration={item.duration}></Logo>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Hero