'use client'

import React, { useState, useEffect } from 'react'



const items: string[] = ['HOME', 'SERVICES', 'OUR WORK', 'ABOUT US', 'CONTACT', 'BOOK ONLINE']


const Navbar = (): React.ReactNode => {

    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        if (window.scrollY > 100) {
            setIsScrolled(true)
        } else {
            setIsScrolled(false)
        }
    }, [isScrolled])

    return (
        <div className={`sticky text-white h-auto bg-black flex justify-center w-full z-10 p-4 gap-12 ${isScrolled && 'fixed'}`}>
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




