import React from 'react'
import search from '../assets/search.png'
import logo from '../assets/logo.png'
import purse from '../assets/purse.png'
import added from '../assets/added.png'
import backg from '../assets/background.png'
import rightheader from '../assets/rightheader.png'

const Header = () => {
    return (
        <div style={{backgroundImage:`url(${backg})`}} className='flex flex-col pb-20'>
            <div className='ent-app p-2'>
                <div className='header flex'>
                    <div className='leftmainn flex lg:items-center '>
                        <img src={logo} alt='' className='h-10 pr-2 ml-4' />
                        <span className='text-white'>OpenSea</span>
                    </div>

                    <div className='right flex items-center ml-auto relative'>
                        <img src={search} className='absolute left-4 h-4' alt='' />
                        <input type='text' placeholder='Search' className='text-center bg-slate-500 p-1' />
                        <div className='flex items-center'>
                            <img src={purse} className=' h-4 pr-2 ml-4' alt='' />
                            <img src={added} className=' h-3 pr-2 ml-4' alt='' />
                        </div>
                    </div>
                </div>

            </div>
            <div className='flex justify-between pr-10 '>
                <div className='leftmainn flex flex-col items-start p-10 pt-20'>
                    <span className='font-black text-7xl text-white'>Discover.</span>
                    <span className='font-black text-7xl text-white'> Collect.&Sell.</span>
                    <span className='font-bold text-7xl text-white'>Extraordinary</span>
                    <span className='font-bold text-6xl text-white'> NFT's</span>
                    <span className='pt-6 text-white'>On the world's first & largest NFT </span>
                    <span className='text-white'>marketplace.</span>
                    <div className='flex pt-8'>
                        <button type='submit' className='mt-4 bg-indigo-500 text-white py-2 px-6 '>Explore</button>
                        <button type='submit' className='mt-4 bg-indigo-500 text-white py-2 px-6 ml-4'>Create</button>
                    </div>
                    <a href='#' className='underline pt-14 text-white'>Get Featured On The Homepage</a>
                    
                </div>
                <div className='rightmainn flex flex-col text-right pt-52 w-80'>
                    <img src={rightheader} className=''/>
                    <a href='#' className='underline text-white'>SoulCurry Art</a>
                    <span className='text-white'>A play of light and shade,chairoscurso is the realm between the light and dark</span>
                    <button type='submit' className='mt-4 bg-slate-500 text-white py-2 '>Place Bid</button>
                </div>
            </div>
        </div>
    )
}

export default Header