'use client'

import React, { useState, useEffect, use } from 'react'
import { useInView } from "react-intersection-observer"




const items: string[] = ['HOME', 'SERVICES', 'OUR WORK', 'ABOUT US', 'CONTACT', 'BOOK ONLINE']


const Navbar = (): React.ReactNode => {



    const { ref: navref, inView, entry } = useInView()

    const [showNavbar, setShowNavbar] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setShowNavbar(true)
        }, 1000);
    }, [])


    return (
        <div ref={navref} className={`${!showNavbar ? 'translate-y-[-200px]' : ' translate-y-0 duration-300'} fixed top-0 text-white h-auto bg-black flex justify-center w-full z-10 p-4 gap-12`}>
            {items.map((item, id) => {
                if (item === 'BOOK ONLINE') {
                    return <a className=' hover:animate-bounce duration-100 delay-150' key={id} href="/book">{item}</a>
                } else if (item === item) {
                    return <a className=' hover:animate-bounce' key={id} href={`${'/'}#${item}`}>{item}</a>
                }
            })}
            <a className=' absolute right-5 flex items-center' href="/login">
                <button className='text-2xl hover:animate-pulse'>Log In</button>
            </a>
        </div>
    )
}

export default Navbar




