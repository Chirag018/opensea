import React from 'react'

function CreateSell() {
    return (
            <div class="create-sell grid grid-cols-1 border-4 p-4 pt-32 mx-8 -mt-20">
                <div class="sm:text-center text-center">
                    <h1 class="font-bold text-2xl text-blue-500">Create and Sell Your Nft's</h1>
                    <p class="sm:text-center mx-32 text-center pt-5 sm:mx-72 text-sm md:mx-56">A play of light and shade, chairoscuro is the realm between the light and dark.</p>
                </div>
                <div class="grid grid-cols-2 gap-4 md:grid-cols-4 pt-20 pb-32">
                    <div class="bg-white p-4">
                        <h1 class="text-2xl text-black">Set up your wallet</h1>
                        <p class="text-sm py-4">Once you’ve set up your wallet of choice, connect it to OpenSea. Learn about the wallets we support.</p>
                    </div>
                    <div class="bg-white p-4">
                        <h1 class="text-2xl text-black">Create your collection</h1>
                        <p class="text-sm py-4">Click My Collections and set up your collection. Add social links, a description, profile & banner images, and set a secondary.</p>
                    </div>
                    <div class="bg-white p-4">
                        <h1 class="text-2xl text-black">Add your NFT's</h1>
                        <p class="text-sm py-4">Upload your work (image, video, audio, or 3D art), add a title and description, and customize your NFTs stats, and unlockable content.</p>
                    </div>
                    <div class="bg-white p-4">
                        <h1 class="text-2xl text-black">List them for sale</h1>
                        <p class="text-sm py-4">Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs.</p>
                    </div>
                </div>
            </div>

    )
}

export default CreateSell