'use client'

import React from 'react'
import Image from 'next/image'
import UpholsteryImg from '../assets/upholstery-icon.jpg'
import RepairsIcon from '../assets/repairs-icon.jpg'
import PaintworkIcon from '../assets/paintwork-icon.jpg'



const Firstsec = (): React.ReactNode => {


    const icons = [
        {
            name: 'Repairs',
            altdescription: 'Repairs Icon',
            image: RepairsIcon,
            description: 'General Repairs, Specialist Repairs & Vintage Parts'
        },
        {
            name: 'Upholstery',
            altdescription: 'Upholstery Icon',
            image: UpholsteryImg,
            description: `A Range of Fabrics, Including Vintage Leathers & Wide Variety of Colors`
        },
        {
            name: 'Paintwork',
            altdescription: 'Paintwork Icon',
            image: PaintworkIcon,
            description: 'Spray Paint, Custom Stencilling & Variety of Custom Made Artwork'
        }
    ]



    return (
        <div id="SERVICES" className='bg-black p-32 flex flex-col items-center justify-evenly xs:w-auto xs:h-auto xs:p-12 sm:h-auto sm:p-12 md:p-12'>
            <span className=' text-white'>
                <h2 className=' text-3xl'>SERVICES</h2>
            </span>
            <div className=' flex w-full justify-center gap-12 xs:flex-col xs:gap-0 sm:flex-col md:flex-col'>
                {icons.map((item, id) => {
                    return <div key={id} className=' flex flex-col items-center'>
                        <Image className=' scale-[0.65] border-white border-[2px] rounded-[50%] xs:scale-50' src={item.image} alt={item.altdescription}></Image>
                        <div className=' flex flex-col'>
                            <p className=' text-white text-center text-xl'>{item.name}</p>
                            <p className=' text-white text-md w-[250px] text-center'>{item.description}</p>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Firstsec