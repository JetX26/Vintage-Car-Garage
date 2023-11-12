import React, { useEffect, useState } from 'react'
import Image, { StaticImageData } from 'next/image'

interface props {
    duration: number,
    description: string,
    source: StaticImageData
}

const Logo = ({ duration, description, source }: props) => {

    const [scale, setScale] = useState('scale-0')

    useEffect(() => {
        setTimeout(() => {
            setScale('scale-100')
        }, duration);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Image className={`${scale} duration-300 hover:animate-bounce hover:cursor-pointer`} src={source} alt={description}></Image>
    )
}

export default Logo