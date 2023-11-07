'use client'

import React from 'react'
import Footer from './Footer'

const Loginpage = (): React.ReactNode => {
    return (
        <div className='relative bg-[#e5e5e5] h-screen w-screen flex flex-col justify-center items-center'>
            <a className='flex justify-center' href="/">
                <button className=' text-white animate-bounce bg-black p-2 rounded-md absolute top-10'>Take me home!</button>
            </a>
            <div className=' scale-125 bg-white w-[35%] h-[50%] rounded-lg flex flex-col items-center text-center justify-evenly'>
                <div className=' flex flex-col gap-4'>
                    <h1 className=' text-3xl'>Welcome,</h1>
                    <p className=' text-lg'>User</p>
                </div>
                <div className=' flex flex-col gap-4'>
                    <label className=' hidden' htmlFor="email"></label>
                    <input className=' border-b-gray-400 border-[1px] border-t-0 border-l-0 border-r-0' type="email" id="email" placeholder='Email' />
                    <label className=' hidden' htmlFor="password"></label>
                    <input className=' border-b-gray-400 border-[1px] border-t-0 border-l-0 border-r-0' type="password" id="password" placeholder='Password' />
                    <button className=' bg-black text-white rounded-md p-2'>Log In</button>
                </div>
                <div className=' flex flex-col gap-2 items-center'>
                    <p>{`Don't have an account?`}</p>
                    <a className=' w-[60%] py-1 px-4 bg-black rounded-md text-white' href="/register">
                        <button >Sign Up!</button>
                    </a>
                </div>
            </div>
            <div className=' w-full absolute bottom-0'>
                <Footer></Footer>
            </div>
        </div>
    )
}

export default Loginpage