'use client'
import Image, { StaticImageData } from "next/image"
import Tools from '../assets/tools.png'
import FbLogo from '../assets/facebook-logo.png'
import PinterestLogo from '../assets/pinterest-logo.png'
import InstaLogo from '../assets/insta-logo.png'
import VintageCar from '../assets/vintage-car4k.jpeg'
import React from 'react'
import { useState, useEffect } from 'react'
import Logo from '../components/logo'


interface logos {
    description: string,
    image: StaticImageData,
    duration: number
}

const Hero = () => {


    const logos = [
        {
            description: 'Facebook Icon',
            image: FbLogo,
            duration: 1000
        },
        {
            description: 'Pinterest Icon',
            image: PinterestLogo,
            duration: 1500
        },
        {
            description: 'Instagram Icon',
            image: InstaLogo,
            duration: 2000
        }
    ]





    return (
        <div className=" h-[1400px] relative flex">
            <Image className="w-full h-auto object-cover" src={VintageCar} alt="Vintage Car"></Image>
            <div className="text-white h-full w-full ml-[-100%] flex flex-col items-center justify-evenly p-8">
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
                        return <Logo source={item.image} duration={item.duration} description={item.description} key={id}></Logo>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Hero