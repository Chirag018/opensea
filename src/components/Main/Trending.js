import React from 'react'
import trend1 from '../../assets/trend1.png'
import trend2 from '../../assets/trend2.png'
import trend3 from '../../assets/trend3.png'
import trend11 from '../../assets/trend11.png'
import trend12 from '../../assets/trend12.png'
import trend13 from '../../assets/trend13.png'


function Trending() {
    return (
        <div className="pt-12 trending flex flex-col items-center pb-20">
            <div className='p-12 grid grid-rows-1'>
                <h1 className="font-serif text-3xl py-3">Trending in All Categories</h1>
                <span className="w-80">A play of light and shade, chairoscuro is the realm between the light and dark.</span>
                <div className="lg:-mr-96 lg:mt-10 -mr-16 -mb-8 mt-6">
                    <a href='#' className="underline text-blue-600 p-10 text-right">Recently Added</a>
                    <a href='#' className="underline text-blue-300">Mostly used</a>
                </div>
            </div>
            <div className="grid lg:grid-cols-3 lg:gap-x-3 lg:-mt-10 gap-y-10">
                <div className=" relative">
                    <img src={trend1} className='w-80' />
                    <div className='border border-x-2 bg-white mb-32 absolute top-64 flex flex-col pb-10 rounded-md w-auto'>
                        <img src={trend11} className='w-16 ml-32 -mt-6' alt='' />
                        <h1>FriYaywiz</h1>
                        <span className='w-80'>A play of light and shade, chairoscuro is the realm.</span>
                    </div>
                </div>
                <div class=" relative">
                    <img src={trend2} className='w-80' alt='' />
                    <div className='border border-x-2 bg-white mb-32 absolute top-64 flex flex-col pb-10 rounded-md w-auto'>
                        <img src={trend12} className='w-16 ml-32 -mt-6' alt='' />
                        <h1>FPixelwizards</h1>
                        <span className='w-80'>A play of light and shade, chairoscuro is the realm.</span>
                    </div>
                </div>
                <div className=" relative">
                    <img src={trend3} className='w-80' alt='' />
                    <div className='border border-x-2 bg-white mb-32 absolute top-64 flex flex-col pb-10 rounded-md w-auto'>
                        <img src={trend13} className='w-16 ml-32 -mt-6' alt='' />
                        <h1>Aesthetic’smatter</h1>
                        <span className='w-80'>A play of light and shade, chairoscuro is the realm.</span>
                    </div>
                </div>

            </div>

        </div>

    )
}

export default Trending