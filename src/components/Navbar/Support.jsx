import { p } from 'framer-motion/client'
import React, { use, useState } from 'react'

const Support = () => {

    const [shop, setshop] = useState([
        { name: "iPhone", Link: "#" },
        { name: "Mac", Link: "#" },
        { name: "iPad", Link: "#" },
        { name: "Watch", Link: "#" },
        { name: "AirPods", Link: "#" },
        { name: "Music", Link: "#" },
        { name: "TV", Link: "#" },
    ])

    const [quickLinks, setquichLinks] = useState([
        { name: "ommunity", Link: "#" },
        { name: "Chech Coverage", Link: "#" },
        { name: "Genius bar", Link: "#" },
        { name: "Repair", Link: "#" },
    ])

    const [store, setsrore] = useState([
        { name: "Get Applecare", Link: "#" },
        { name: "Apple Account And Password", Link: "#" },
        { name: "Billing & Subscriptions", Link: "#" },
         { name: "Accessibility", Link: "#" },
    ])
    return (
        <>
            <div className='flex p-10 gap-20 cursor-pointer'>
                <div className='text-xl font-sans font-medium pl-28'>
                    <p className='text-[14px] text-gray-500 cursor-default'>Explore Support</p>
                    {
                        shop.map(function (shop, i) {
                            return <p key={i} ><a href={shop.Link}>{shop.name}</a></p>
                        })
                    }
                </div>

                <div className='text-[14px] font-sans font-medium '>
                    <p className='text-[14px] text-gray-500 cursor-default mb-2 mt-1'>Get Help</p>
                    {
                        quickLinks.map(function (shop, i) {
                            return <p className='mb-2' key={i}><a href={shop.Link}>{shop.name}</a></p>
                        })
                    }
                </div>

                <div className='text-[14px] font-sans font-medium '>
                    <p className='text-[14px] text-gray-500 cursor-default mb-2 mt-1'>Helpfull Topics</p>
                    {
                        store.map(function (shop, i) {
                            return <p className='mb-2' key={i}><a href={shop.Link}>{shop.name}</a></p>
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Support