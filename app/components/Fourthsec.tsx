'use client'

import React from 'react'
import Image from 'next/image'
import VintageCar from '../assets/vintage-car-fourthsec.png'

const Fourthsec = (): React.ReactNode => {
    return (
        <div id="CONTACT" className=' bg-[#e6beae]'>
            <div className=' flex flex-col items-center justify-center h-full'>
                <div className=' pt-20'>
                    <Image src={VintageCar} alt="Vintage Car"></Image>
                </div>
                <div className=' bg-white text-black w-[25%] h-[800px] mb-32'>
                    <h1 className=' text-3xl text-center pt-12'>FIND US</h1>
                    <form className='text-lg flex gap-16 justify-center pt-24 h-full'>
                        <div className=' flex flex-col gap-16'>
                            <div className=' flex flex-col gap-4'>
                                <p>500 Terry Francine Street<br></br>
                                    San Francisco, CA 94158</p>
                                <p>info@mysite.com</p>
                                <p>Phone: 1-800-857-3221</p>
                            </div>
                            <div className=' flex flex-col gap-4'>
                                <h2>OPENING HOURS:</h2>
                                <p>Mon - Fri: 7am - 10pm</p>
                                <p>Saturday: 8am - 10pm</p>
                                <p>Sunda: CLOSED</p>
                            </div>
                        </div>
                        <div className=' flex flex-col gap-2'>
                            <label htmlFor="firstname">First Name</label>
                            <input type="text" id="firstname" className='rounded-sm border-[2px] border-black' />
                            <label htmlFor="lastname">Last Name</label>
                            <input type="text" id='lastname' className='rounded-sm border-[2px] border-black' />
                            <label htmlFor="email">Email</label>
                            <input type="text" id="email" className='rounded-sm border-[2px] border-black' />
                            <label htmlFor="subject">Subject</label>
                            <input type="text" id="subject" className='rounded-sm border-[2px] border-black' />
                            <label htmlFor="message">Message</label>
                            <textarea className='rounded-sm border-[2px] border-black' name="message" id="message" cols={30} rows={7}></textarea>
                            <button className=' bg-slate-800 text-white rounded-sm' type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    )
}

export default Fourthsec