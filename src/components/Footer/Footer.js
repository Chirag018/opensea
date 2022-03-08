import React from 'react'
import logo from '../../assets/logo.png'
import { AiFillFacebook } from 'react-icons/ai'
import { BsDiscord } from 'react-icons/bs'
import { AiFillYoutube } from 'react-icons/ai'
import { AiFillTwitterSquare } from 'react-icons/ai'

const Footer = () => {
    return (
        <div className="footer lg:grid grid-cols-2 ">
            <div className="footer-left flex flex-col space-x-6 text-left space-y-5">
                <div className="flex items-center space-x-4 ml-3">
                    <img className="lg:w-10" src={logo}/>
                    <span>OpenSea</span>
                </div>
                <p className="lg:w-72 lg:pb-48 pb-16 w-64">From Opensea.io, go to your profile icon and click “Create” in the top right corner. You’ll be taken to the NFT item creation page. This page will allow you to upload your NFT file, name it and add a description.</p>
                <div className="flex">
                    <AiFillFacebook className='lg:w-auto lg:h-10' />
                    <AiFillYoutube className='lg:w-auto lg:h-10' />
                    <BsDiscord className='lg:w-auto lg:h-10' />
                    <AiFillTwitterSquare className='lg:w-auto lg:h-10' />
                </div>
            </div>
            <div className='footer-right'>
                <div className="grid grid-cols-2 pb-14">
                    <div className="grid text-left ml-24 text-blue-800">
                        <h1 className="font-serif text-blue-800 text-lg">Resources</h1>
                        <span>Help Center</span>
                        <span>Platform Status</span>
                        <span>Partners</span>
                        <span>Gas-Free Marketplace</span>
                        <span>Suggestions</span>
                        <span>Discord Community</span>
                        <span>Newsletter</span>
                        <span>Blog</span>
                        <span>Docs</span>
                    </div>
                    <div className="right-right grid grid-cols-2">
                        <div className="grid pb-11 text-left text-blue-800">
                            <h1 className="font-serif text-lg">My Account</h1>
                            <span>Profile</span>
                            <span>Favorite</span>
                            <span>My Collections</span>
                            <span>Settings</span>
                        </div>
                        <div className="grid grid-rows-6 text-left text-blue-800">
                            <span class="font-serif text-lg">Stats</span>
                            <span>Rankings</span>
                            <span>Activity</span>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="pb-8  text-left ml-24 text-blue-800">
                        <h1 className="loop font-serif text-xl text-blue-900">Stay In The Loop</h1>
                        <p>Join our mailing list to stay in the loop with out newest feature releases, NFT drops, and tips & tricks for navigating OpenSea.</p>
                    </div>
                    <form className="lg:flex lg:flex-row lg:space-x-2 lg:divide-x-4 lg:divide-blue-500 lg:ml-14">
                        <input type="text" placeholder="Email Address" className="border p-2 w-64 ml-24" />
                        <button className="bg-blue-700 ml-16 p-1">Sign Up</button>
                    </form>

                    <div className="flex flex-row justify-evenly lg:ml-72">
                        <a href='#' className='text-blue-800 hover:underline'>Privacy Policy</a>
                        <a href='#' className='text-blue-800 hover:underline'>Terms & Conditions</a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer