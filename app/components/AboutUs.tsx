'use client'

import React from 'react'

const AboutUs = (): React.ReactNode => {
    return (
        <div id="ABOUT US" className='text-lg bg-black text-black p-12 flex justify-center'>
            <div className=' flex flex-col text-center gap-4 bg-white italic p-12 w-[30%]'>
                <h1 className=' font-bold text-3xl'>ABOUT US</h1>
                <p>{`The About Us page of our vintage mechanic and body shop is where the rich tapestry of our automotive journey unfolds. Nestled in the heart of our community, we are a dedicated team of skilled craftsmen and enthusiasts with a shared passion for preserving and reviving classic automobiles. Our story began decades ago when a love for vintage cars and a commitment to craftsmanship merged, paving the way for our establishment.`}</p>
                <p>{`At our shop, we breathe life into the timeless beauties of yesteryear, meticulously restoring each vehicle to its former glory. Our team's expertise encompasses everything from vintage engine overhauls to painstaking bodywork, ensuring that every project is a work of art in motion. With a deep-rooted respect for the history and heritage of these automobiles, we take pride in being caretakers of automotive nostalgia.`}</p>
            </div>
        </div>
    )
}

export default AboutUs