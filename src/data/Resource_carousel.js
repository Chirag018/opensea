import React from 'react'
import reso1 from '../assets/reso1.png'


function Resource_carousel({data,img}) {
    return (
        <div>
            <div class="border flex bg-green-200 lg:w-56 lg:p-1 items-center">
                <img src={img} alt="" class="w-14" />
                <span class="px-2">{data}</span>
            </div>
        </div>
    )
}

export default Resource_carousel