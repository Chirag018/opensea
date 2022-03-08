import React from 'react'
import alpha from '../assets/alpha.png'
import beta from '../assets/beta.png'
import gamma from '../assets/gamma.png'
import zamma from '../assets/zamma.png'

function NotableDrops() {
    return (
        <div className="notable-drops grid grid-cols-2 pb-48">
            <div className="grid grid-row-2 grid-cols-2">
                <img className="w-56 mx-20 my-10" src={alpha} alt="FriYayWiz" />
                <img className="w-48 -ml-8 mt-20" src={beta} alt="Kootings" />
                <img className="w-56 ml-11 -mt-8" src={gamma} alt="Harry chinati" />
                <img className="-ml-14 -mt-8" src={zamma} alt="PixelWizards" />
            </div>
            <div className="right mx-36 my-20 text-left w-72">
                <h1 className="text-xl text-blue-700 my-6">Notable Drops</h1>
                <p className="">Upload your work (image, video, audio, or 3D art), add a title and description, and customize your NFTs stats, and unlockable content.</p>
                <button className="bg-blue-400 px-11 py-2 my-20">View all</button>
            </div>
        </div>





    )
}

export default NotableDrops