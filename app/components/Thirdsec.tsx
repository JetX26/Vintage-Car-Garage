'use client'

import Image from 'next/image'
import React from 'react'
import PeopleSitting from '../assets/third-sec-photo.png'

const Thirdsec = (): React.ReactNode => {
    return (
        <div>
            <Image className='w-full' src={PeopleSitting} alt="People Sitting on a wall"></Image>
        </div>
    )
}

export default Thirdsec