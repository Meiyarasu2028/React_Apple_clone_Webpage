import React, { use, useState } from 'react'

const Entertainment = () => {

    const [shop, setshop] = useState([
        { name: "Explore Entertainment", Link: "#" },
        { name: "Apple One", Link: "#" },
        { name: "Apple TV", Link: "#" },
        { name: "Apple Music", Link: "#" },
        { name: "Apple Arcade", Link: "#" },
        { name: "Apple Podcast", Link: "#" },
        { name: "Apple Book", Link: "#" },
        { name: "App Store", Link: "#" },
    ])

    const [quickLinks, setquichLinks] = useState([
        { name: "Apple TV+ Support", Link: "#" },
        { name: "Apple Movie Support", Link: "#" },
    ])
    return (
        <>
            <div className='flex p-10 gap-20 cursor-pointer'>
                <div className='text-xl font-sans font-medium pl-28'>
                    <p className='text-[14px] text-gray-500 cursor-default'>Explore Entertainment</p>
                    {
                        shop.map(function (shop, i) {
                            return <p key={i} ><a href={shop.Link}>{shop.name}</a></p>
                        })
                    }
                </div>

                <div className='text-[14px] font-sans font-medium '>
                    <p className='text-[14px] text-gray-500 cursor-default mb-2 mt-1'>Support</p>
                    {
                        quickLinks.map(function (quickLinks, i) {
                            return <p className='mb-2' key={i}><a href={quickLinks.Link}>{quickLinks.name}</a></p>
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Entertainment