'use client'

import React, { useState, useEffect } from 'react'
import Image, { StaticImageData } from 'next/image'
import RearBumper from '../assets/rearlights.jpeg'
import CarInspectorMale from '../assets/maleinspector.jpg'
import FrontBumper from '../assets/frontbumper.jpeg'
import FrontBumperWhite from '../assets/vintagecarlights.jpeg'
import FemaleInspector from '../assets/femaleinspector.jpeg'
import Steeringwheel from '../assets/steeringwheel.jpg'
import HeartIcon from '../assets/hearticon.png'
import HeartIconLiked from '../assets/hearticon-liked.png'
import ShareIcon from '../assets/shareicon.png'

interface shapeOfImages {
    image: StaticImageData,
    alt: string,
    keepLike: boolean,
    description?: string,
    heartIcon: StaticImageData,
    heartIconLiked: StaticImageData,
    clickedHeart: boolean,
    shareIcon: StaticImageData,
    clickedShare: boolean,
}


const Secondsec = (): React.ReactNode => {

    const [hoveredItem, setHoveredItem] = useState<number | null>(null)
    const [images, setImages] = useState<shapeOfImages[]>([
        {
            image: RearBumper,
            alt: 'Rear Light of A Car',
            keepLike: false,
            description: `Don't get pulled over because of your unawareness that your brake lights are not working, schedule an appt today!`,
            heartIcon: HeartIcon,
            heartIconLiked: HeartIconLiked,
            clickedHeart: false,
            shareIcon: ShareIcon,
            clickedShare: false
        },
        {
            image: CarInspectorMale,
            alt: 'A man inspecting the paint on the car',
            keepLike: false,
            description: 'Get your car inspected today!',
            heartIcon: HeartIcon,
            heartIconLiked: HeartIconLiked,
            clickedHeart: false,
            shareIcon: ShareIcon,
            clickedShare: false

        },
        {
            image: FrontBumper,
            alt: 'Front Grill of A Black Car',
            keepLike: false,
            description: 'Bumper into a brick wall? Get your front bumper fixed today!',
            heartIcon: HeartIcon,
            heartIconLiked: HeartIconLiked,
            clickedHeart: false,
            shareIcon: ShareIcon,
            clickedShare: false

        },
        {
            image: FrontBumperWhite,
            alt: 'Front Grill of A White Car',
            keepLike: false,
            description: 'Lights out? Replace them!',
            heartIcon: HeartIcon,
            heartIconLiked: HeartIconLiked,
            clickedHeart: false,
            shareIcon: ShareIcon,
            clickedShare: false

        },
        {
            image: FemaleInspector,
            alt: 'A female inspecting the paint of the car',
            keepLike: false,
            description: 'We mark our work before actually getting to it.',
            heartIcon: HeartIcon,
            heartIconLiked: HeartIconLiked,
            clickedHeart: false,
            shareIcon: ShareIcon,
            clickedShare: false

        },
        {
            image: Steeringwheel,
            alt: 'A Steering Wheel',
            keepLike: false,
            description: 'Steering wheel crooked? Get an alignment!',
            heartIcon: HeartIcon,
            heartIconLiked: HeartIconLiked,
            clickedHeart: false,
            shareIcon: ShareIcon,
            clickedShare: false

        }
    ])


    return (
        <div id="OUR WORK" className='bg-[#edede9] flex p-32 relative justify-center'>
            <div className=' flex flex-col items-center absolute top-12'>
                <span>
                    <h2 className=' text-3xl'>OUR WORK</h2>
                </span>
                <span>
                    <p className=' text-lg'>{`A collection of cars we've renovated with passion`}</p>
                </span>
            </div>
            <div className=' grid grid-cols-3 gap-4 mt-10'>
                {images.map((item, id) => {
                    <p>{item.description}</p>
                    return <div
                        onMouseEnter={() => {
                            setHoveredItem(id)
                        }}
                        onMouseLeave={() => {
                            setHoveredItem(null)
                        }}
                        key={id}
                        className='relative w-[550px] h-[500px]'>
                        <div className={`opacity-0 hover:opacity-100 flex flex-col  justify-between items-center text-center w-full h-full absolute bg-[rgba(73,80,87,0.5)] transition-all duration-500`}>
                            <div></div>
                            <p className='text-xl text-white font-mono font-semibold'>{item.description}</p>
                            <div className='flex justify-between w-full'>
                                <div className=' flex justify-between w-full p-6'>
                                    <Image className=' hover:cursor-pointer hover:scale-110 duration-300 active:animate-ping' onClick={() => {
                                        if (!item.clickedHeart) {
                                            setImages(prev => {
                                                let previousValue = [...prev];
                                                previousValue[id].clickedHeart = true;
                                                return previousValue;
                                            })
                                            setImages(prev => {
                                                let previousValue = [...prev];
                                                previousValue[id].keepLike = true;
                                                return previousValue;
                                            })
                                        } else if (item.clickedHeart) {
                                            setImages(prev => {
                                                let previousValue = [...prev];
                                                previousValue[id].clickedHeart = false;
                                                return previousValue;
                                            })
                                            setImages(prev => {
                                                let previousValue = [...prev];
                                                previousValue[id].keepLike = false;
                                                return previousValue;
                                            })
                                        }
                                    }}
                                        onMouseEnter={() => {
                                            if (!item.keepLike) {
                                                setImages(prev => {
                                                    let previousValue = [...prev];
                                                    previousValue[id].keepLike = true;
                                                    return previousValue;
                                                })
                                            }
                                        }}
                                        onMouseLeave={() => {
                                            if (!item.clickedHeart) {
                                                setImages(prev => {
                                                    let previousValue = [...prev];
                                                    previousValue[id].keepLike = false;
                                                    return previousValue;
                                                })
                                            }
                                        }}
                                        src={item.keepLike ? item.heartIconLiked : item.heartIcon} width={30} height={30} alt="Liked Button"></Image>
                                    <Image className=' hover:scale-110 hover:cursor-pointer duration-300 active:animate-ping' src={ShareIcon} width={30} height={30} alt="Share Button"></Image>
                                </div>
                            </div>
                        </div>
                        <Image className={`h-full w-full`} src={item.image} alt={item.alt}></Image>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Secondsec


// clickedHeart ? <Image src={HeartIconLiked} alt="Liked Button" width={30} height={30}></Image> : <Image src={HeartIcon} width={30} height={30} alt="Like Button"></Image>



// onClick={() => {
//     if (clickedHeart !== id) {
//         setChangeOfHeart(id)
//         setImages(prev => {
//             let previousArray = [...prev]
//             previousArray[id].keepLike = true
//             return previousArray;
//         })
//     } else {
//         setChangeOfHeart(null)
//         setImages(prev => {
//             let previousArray = [...prev]
//             previousArray[id].keepLike = false
//             return previousArray;
//         })
//     }
// }}


// onMouseEnter = {() => {
//     if (item.keepLike) {
//         return;
//     }
//     setImages(prev => {
//         let previousArray = [...prev]
//         previousArray[id].keepLike = true
//         return previousArray;
//     })
// }}
// onMouseLeave = {() => {
//     if (clickedHeart !== id) {
//         setChangeOfHeart(null)
//         setImages(prev => {
//             let previousArray = [...prev]
//             previousArray[id].keepLike = false
//             return previousArray;
//         })
//     }
// }}