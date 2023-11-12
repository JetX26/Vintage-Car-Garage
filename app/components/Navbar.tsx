'use client'

import React, { useState, useEffect, use } from 'react'
import { useInView } from "react-intersection-observer"
import Wrench from '../assets/wrench.png'
import Image from 'next/image'
import Burgermenu from './Burgermenu'
import { useMediaQuery } from 'usehooks-ts'
import Link from 'next/link'



const items: string[] = ['HOME', 'SERVICES', 'OUR WORK', 'ABOUT US', 'CONTACT', 'BOOK ONLINE']


const Navbar = (): React.ReactNode => {



    const { ref: navref, inView, entry } = useInView()

    const [showNavbar, setShowNavbar] = useState<boolean>(false)

    const [showBurgerMenu, setShowBurgerMenu] = useState<boolean>(false)



    useEffect(() => {
        setTimeout(() => {
            setShowNavbar(true)
        }, 10);
    }, [])

    const matches = useMediaQuery('(min-width: 1024px)')



    return (
        <div ref={navref} className={`${!showNavbar ? 'translate-y-[-200px]' : ' translate-y-0 duration-300'} fixed top-0 text-white h-auto bg-black flex justify-between lg:relative sm:relative md:relative items-center w-screen z-10 p-6 gap-12 xs:h-[3%] xs:flex xs:items-center xs:justify-between xs:relative sm:justify-between md:text-sm md:justify-between`}>
            <div className=' p-2'>
                <Image src={Wrench} alt="Wrench Icon" width={50} height={10}></Image>
            </div>
            <div className=' flex gap-12'>
                {showBurgerMenu && <Burgermenu></Burgermenu>}
                <div>
                    <button onClick={((e) => {
                        e.preventDefault()
                        showBurgerMenu ? setShowBurgerMenu(false) : setShowBurgerMenu(true)
                    })} className='universal:hidden bg-transparent w-[60px] h-[60px] flex flex-col gap-2 items-center justify-center'>
                        <div className=' bg-white w-[50%] h-[2px]'></div>
                        <div className=' bg-white w-[50%] h-[2px]'></div>
                        <div className=' bg-white w-[50%] h-[2px]'></div>
                    </button>
                </div>
                {matches && items.map((item, id) => {
                    if (item === 'BOOK ONLINE') {
                        return <a className=' hover:animate-bounce duration-100 delay-150' key={id} href="/book">{item}</a>
                    } else if (item === item) {
                        return <a className=' hover:animate-bounce' key={id} href={`${'/'}#${item}`}>{item}</a>
                    }
                })}
            </div>
            {matches && <a className='flex items-center pr-4' href="/login">
                <button className='text-2xl hover:animate-pulse font-extrabold'>Log In</button>
            </a>}
        </div >
    )
}




export default Navbar




