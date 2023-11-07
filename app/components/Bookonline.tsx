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
                <div className=' flex flex-col items-center p-32 gap-12'>
                    <div>
                        <h1 className=' text-4xl'>BOOK ONLINE</h1>
                    </div>
                    <div className=' flex justify-center'>
                        <div className=' border-black border-[2px]'>
                            <Image src={Bookimage} alt="Car Steering Wheel"></Image>
                        </div>
                        <div className='p-20 text-center flex flex-col justify-center gap-4 border-black border-[1px] border-l-0'>
                            <h2 className=' text-xl'>Style My Ride - Consultation</h2>
                            <p>2 hr</p>
                            <p>$100</p>
                        </div>
                    </div>

                </div>
                <Footer></Footer>
            </div>
        </>
    )
}

export default Bookonline