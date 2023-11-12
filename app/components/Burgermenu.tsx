'use client'

import React from 'react'

const Burgermenu = (): React.ReactNode => {
    return (
        <>
            <div className='absolute top-[100%] translate-y-0 transition-all duration-500 ease-in-out left-0 bg-white text-black h-auto w-screen p-20 flex flex-col items-center gap-6 md:text-lg sm:text-lg'>
                <a href="/">Home</a>
                <a href="#SERVICES">Services</a>
                <a href="#OUR WORK">Our Work</a>
                <a href="#ABOUT US">About Us</a>
                <a href="#CONTACT">Contact</a>
                <a href="/book">Book Online</a>
                <span className=' flex items-center bottom-4 gap-4'>
                    <a className=' font-bold text-2xl' href="/login">Login</a>
                    <a className=' font-bold text-2xl' href="/register">Register</a>
                </span>
            </div>

        </>
    )
}

export default Burgermenu



// if (item === 'BOOK ONLINE') {
//     return <a className='sm:hidden hover:animate-bounce duration-100 delay-150' key={id} href="/book">{item}</a>
// } else if (item === item) {
//     return <a className='sm:hidden hover:animate-bounce' key={id} href={`${'/'}#${item}`}>{item}</a>
// }