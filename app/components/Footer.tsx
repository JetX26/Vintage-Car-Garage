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

const Footer = (): React.ReactNode => {
    return (
        <div className=' bg-black flex flex-col items-center gap-4 p-14 xs:h-auto xs:p-2 xs:gap-1 xs:text-xs xs:text-center sm:text-center'>
            <div className=' flex gap-4'>
                {logos.map((item, id) => {
                    return <Image className=' hover:cursor-pointer' key={id} src={item.image} alt={item.name}></Image>
                })}
            </div>
            <p className=' text-white'>© 2035 by Jade & Andy. Powered and secured by JetX Corp.</p>
        </div>
    )
}

export default Footer