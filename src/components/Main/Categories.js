import React from 'react'
import exp1 from '../../assets/exp1.png'
import exp2 from '../../assets/exp2.png'
import exp3 from '../../assets/exp3.png'
import exp4 from '../../assets/exp4.png'
import exp5 from '../../assets/exp5.png'
import exp6 from '../../assets/exp6.png'
import exp7 from '../../assets/exp7.png'
import exp8 from '../../assets/exp8.png'

function Categories() {
    return (
        <>
            <div className='grid p-10 text-center '>
                <h1 className="font-serif text-2xl p-10 ">Explore  Categories</h1>
                <span className='pb-20 inline'>A play of light and shade, chairoscuro is the realm between the light and dark.</span>
                <div className="cols lg:grid lg:grid-cols-4 lg:gap-x-48 lg:gay-y-48 lg:space-y-1 lg:pr-20 space-y-4">
                    <div className="art flex flex-row w-64 h-24 text-left gap-x-2 gap-y-10">
                        <img src={exp1} alt="" className="" />
                        <div>
                            <h1 className="text-blue-700 ">Art</h1>
                            <span>Art is something that stimulates an individual’s thoughts</span>
                        </div>
                    </div>
                    <div className="music flex flex-row w-64 h-24 text-left gap-x-2">
                        <img src={exp2} alt="" class="" />
                        <div>
                            <h1 class="text-blue-700">Music</h1>
                            <span>Music is the art of arraning sounds elements of melody</span>
                        </div>
                    </div>
                    <div className="vw flex flex-row w-64 h-24 text-left gap-x-2">
                        <img src={exp3} alt="" class="" />
                        <div>
                            <h1 className="text-blue-700">Visual Worlds</h1>
                            <span>Visuals are the picture elements , as distinguished</span>
                        </div>
                    </div><div className="art flex flex-row w-64 h-24 text-left gap-x-2">
                        <img src={exp4} alt="" className="" />
                        <div>
                            <h1 className="text-blue-700">Trading Cards</h1>
                            <span>A Trading card ( or collectible card ) is a small card.</span>
                        </div>
                    </div><div className="art flex flex-row w-64 h-24 text-left gap-x-2">
                        <img src={exp5} alt="" class="" />
                        <div>
                            <h1 className="text-blue-700">Collectibles</h1>
                            <span>An item worth far more than it was sold for rarity.</span>
                        </div>
                    </div><div className="art flex flex-row w-64 h-24 text-left gap-x-2">
                        <img src={exp6} alt="" class="" />
                        <div>
                            <h1 className="text-blue-700">Sports</h1>
                            <span>Sport pertains to any form of competitive.</span>
                        </div>
                    </div><div className="art flex flex-row w-64 h-24 text-left gap-x-2">
                        <img src={exp7} alt="" className="" />
                        <div>
                            <h1 className="text-blue-700">Domain Name</h1>
                            <span>Use Traditional Domains. The native name suffix.</span>
                        </div>
                    </div><div class="art flex flex-row w-64 h-24 text-left gap-x-2">
                        <img src={exp8} alt="" className="" />
                        <div>
                            <h1 className="text-blue-700">All NFT’s</h1>
                            <span>Music is the art of arranging sounds elements of melody</span>
                        </div>
                    </div>

                </div>


            </div>

        </>
    )
}

export default Categories

//code to be refactored .