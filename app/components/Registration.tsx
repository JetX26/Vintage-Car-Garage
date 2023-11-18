'use client'

import React from 'react'
import Footer from './Footer'


const Registration = (): React.ReactNode => {
    return (
        <div className='relative bg-[#e5e5e5] h-screen w-screen flex flex-col justify-center items-center'>
            <a className='flex justify-center' href="/">
                <button className=' text-white animate-bounce bg-black p-2 rounded-md absolute top-10'>Take me home!</button>
            </a>
            <div className=' scale-125 xs:scale-100 bg-white w-[35%] sm:w-auto sm:h-auto sm:p-10 xs:w-auto xs:h-auto xs:p-10 h-[50%] rounded-lg flex flex-col items-center text-center justify-evenly'>
                <div className=' flex flex-col gap-4'>
                    <h1 className=' text-3xl'>Welcome,</h1>
                    <p className=' text-lg'>User</p>
                </div>
                <div className=' flex flex-col gap-4'>
                    <label className=' hidden' htmlFor="email"></label>
                    <input className=' border-b-gray-400 border-[1px] border-t-0 border-l-0 border-r-0' type="email" id="email" placeholder='Email' />
                    <label className=' hidden' htmlFor="password"></label>
                    <input className=' border-b-gray-400 border-[1px] border-t-0 border-l-0 border-r-0' type="password" id="password" placeholder='Password' />
                    <button className=' bg-black text-white rounded-md p-2'>Register</button>
                </div>
                <div className=' flex flex-col gap-2 items-center'>
                    <p>{`Already signed up?`}</p>
                    <a className=' w-[60%] py-1 px-4 bg-black rounded-md text-white' href="/login">
                        <button >Login</button>
                    </a>
                </div>
            </div>
            <div className=' w-full absolute bottom-0'>
                <Footer></Footer>
            </div>
        </div>
    )
}

export default Registration