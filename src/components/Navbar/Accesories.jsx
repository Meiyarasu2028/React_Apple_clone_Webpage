import React, { use, useState } from 'react'

const Accesories = () => {

    const [shop, setshop] = useState([
        { name: "Shop All Accesories", Link: "#" },
        { name: "Mac", Link: "#" },
        { name: "ipad", Link: "#" },
        { name: "iphone", Link: "#" },
        { name: "Airpods", Link: "#" },
        { name: "TV & Home", Link: "#" },
    ])

    const [quickLinks, setquichLinks] = useState([
        { name: "Made by Apple", Link: "#" },
        { name: "Beats", Link: "#" },
        { name: "AirTag", Link: "#" }, 
    ])
    return (
        <>
            <div className='flex p-10 gap-20 cursor-pointer pl-40'>
                <div className='text-xl font-sans font-medium pl-28'>
                    <p className='text-[14px] text-gray-500 cursor-default'>Shop Accesories</p>
                    {
                        shop.map(function (shop, i) {
                            return <p key={i} ><a href={shop.Link}>{shop.name}</a></p>
                        })
                    }
                </div>

                <div className='text-[14px] font-sans font-medium '>
                    <p className='text-[14px] text-gray-500 cursor-default mb-2 mt-1'>Explore Accesories</p>
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

export default Accesories