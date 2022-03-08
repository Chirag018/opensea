import React, { useState } from 'react'

//custom hooks to be used for repeatation.

function Help() {
    const [show, setShow] = useState(false);
    const [show01, setShow01] = useState(false);
    const [show02, setShow02] = useState(false);
    const [show03, setShow03] = useState(false);
    const [show04, setShow04] = useState(false);

    return (
        <div class="grid lg:grid-cols-2 pt-28 pb-32">
            <div class="left lg:pl-20 text-left lg:w-80 ">
                <h1 class="font-serif text-2xl text-blue-700">We will try to help you if you are confused.</h1>
                <p>A fequently asked question (FAQ) forum is often used in articles,
                    websites, email lists, and online forums where common questions
                    tend to recur.</p>
            </div>
            <div class="right grid grid-rows-6 text-left">
                <h1 onClick={() => setShow(!show)} class="text-2xl text-blue-700 cursor-pointer">How do I create an NFT?</h1>
                {show && <p class="text-sm w-auto">From Opensea.io, go to your profile icon and click “Create” in the top right corner. You’ll be taken to the NFT item creation page. This page will allow you to upload your NFT file, name it and add a description.</p>}
                <span onClick={() => setShow01(!show01)} className='text-blue-700'>How do I create and sell NFTs on Polygon?</span>
                {show01 && <p class="text-sm w-auto">From Opensea.io, go to your profile icon and click “Create” in the top right corner. You’ll be taken to the NFT item creation page. This page will allow you to upload your NFT file, name it and add a description.</p>}
                <span onClick={() => setShow02(!show02)} className='text-blue-700' >What is Freezing Metadata</span>
                {show02 && <p class="text-sm w-auto">From Opensea.io, go to your profile icon and click “Create” in the top right corner. You’ll be taken to the NFT item creation page. This page will allow you to upload your NFT file, name it and add a description.</p>}
                <span onClick={() => setShow03(!show03)}  className='text-blue-700'>Does Opensea allow physical item trades?</span>
                {show03 && <p class="text-sm w-auto">From Opensea.io, go to your profile icon and click “Create” in the top right corner. You’ll be taken to the NFT item creation page. This page will allow you to upload your NFT file, name it and add a description.</p>}
                <span onClick={() => setShow04(!show04)}  className='text-blue-700'>How do I add a collection collaborator?</span>
                {show04 && <p class="text-sm w-auto">From Opensea.io, go to your profile icon and click “Create” in the top right corner. You’ll be taken to the NFT item creation page. This page will allow you to upload your NFT file, name it and add a description.</p>}
                <button class="bg-blue-400 w-32 p-1 mt-10 text-white">View all</button>
            </div>

        </div>
    )
}

export default Help