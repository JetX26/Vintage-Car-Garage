'use client'
import Image from 'next/image'
import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Bookimage from '../assets/book-now-image.jpg'

const Bookonline = (): React.ReactNode => {
    return (
        <>
            <div>
                <Navbar></Navbar>
                <div className=' flex flex-col items-center p-32 gap-12 xs:p-0 sm:p-6'>
                    <div className='h-[50%]'>
                        <div className=' flex'>
                            <h1 className=' text-4xl'>BOOK ONLINE</h1>
                        </div>
                    </div>
                    <div className=' flex justify-center xs:flex-col xs:mb-2 sm:flex-col sm:mb-2 md:flex-col'>
                        <div className=' border-black border-[2px]'>
                            <Image className=' h-full' src={Bookimage} alt="Car Steering Wheel"></Image>
                        </div>
                        <div className='p-20 relative text-center flex flex-col justify-center items-center gap-4 border-black border-[1px] border-l-0 xs:border-l-[1px] xs:gap-1 xs:p-4 sm:border-l-[1px] sm:gap-1 sm:p-2 md:gap-0 md:p-6 md:border-l-[1px]'>
                            <h2 className=' text-xl'>Style My Ride - Consultation</h2>
                            <p>2 hr</p>
                            <p>$100</p>
                            <button className=' p-2 bg-black text-white w-[50%]'>BOOK NOW</button>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </>
    )
}

export default Bookonline