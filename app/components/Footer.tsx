'use client'

import React from 'react'
import FbLogo from '../assets/facebook-logo.png'
import PinterestLogo from '../assets/pinterest-logo.png'
import InstaLogo from '../assets/insta-logo.png'
import Image from 'next/image'

const logos = [
    {
        name: 'Facebook',
        image: FbLogo
    },
    {
        name: 'Pinterest',
        image: PinterestLogo
    },
    {
        name: 'Instagram',
        image: InstaLogo
    }
]

const Footer = () => {
    return (
        <div className=' bg-black flex flex-col items-center gap-4 p-14'>
            <div className=' flex gap-4'>
                {logos.map((item, id) => {
                    return <Image key={id} src={item.image} alt={item.name}></Image>
                })}
            </div>
            <p className=' text-white'>© 2035 by Jade & Andy. Powered and secured by JetX Corp.</p>
        </div>
    )
}

export default Footer