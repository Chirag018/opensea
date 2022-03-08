import React from 'react'
// import dummy1 from '../assets/dummy1.png'
import { RiArrowRightSLine, RiArrowLeftSLine, RiSlideshow2Fill } from 'react-icons/ri'

import reso1 from '../../assets/reso1.png'
import reso2 from '../../assets/reso2.png'
import reso3 from '../../assets/reso3.png'

function Resource() {
    return (
        <div class="grid lg:pb-36 lg:grid-rows-2">
            <div class="head-para lg:grid lg:grid-rows-2 lg:justify-center lg:mb-10">
                <h1 class="font-serif text-2xl text-blue-700">Resources for Getting Started</h1>
                <p className='ml-3 w-30'>A play of light and shade, chairoscuro is the realm between the light and dark.</p>
            </div>

            <div class="carasoel lg:flex lg:items-center lg:justify-center lg:gap-x-10">
               <RiArrowLeftSLine/>
                <div class="border flex bg-green-200 lg:w-56 lg:p-1 items-center">
                    <img src={reso1} alt="" class="w-14" />
                    <span class="px-2">10 tips for avoiding scams and staying safe.</span>
                </div>
                <div class="border flex bg-green-200 lg:w-56 lg:p-1 items-center">
                    <img src={reso2} alt="" class="w-20 h-14" />
                    <span class="px-2">Keeping yourself safe when buying Nft’s on Opensea.</span>
                </div>
                <div class="border flex bg-green-200 lg:w-56 lg:p-1 items-center">
                    <img src={reso3} alt="" class="w-14 h-14" />
                    <span class="">The beginner’s guide to creating & selling digital art Nft’s</span>
                </div>
                <RiArrowRightSLine />
            </div>
            {/* <img src={dots} className=''/> */}
        </div>
    )
}

export default Resource

//code to be arranged !