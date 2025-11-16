import { p } from 'framer-motion/client'
import React, { use, useState } from 'react'

const Store = () => {

    const [shop, setshop] = useState([
        { name: "Shop the Latest", Link: "#" },
        { name: "Mac", Link: "#" },
        { name: "iPad", Link: "#" },
        { name: "iPhone", Link: "#" },
        { name: "Apple Watch", Link: "#" },
        { name: "AirPods", Link: "#" },
        { name: "Accessories", Link: "#" },
    ])

    const [quickLinks, setquichLinks] = useState([
        { name: "Find the Store", Link: "#" },
        { name: "Order Status", Link: "#" },
        { name: "Apple Trade In", Link: "#" },
        { name: "Ways to Buy", Link: "#" },
        { name: "Personal Setup", Link: "#" },

    ])

    const [store, setsrore] = useState([
        { name: "Education", Link: "#" },
        { name: "Business", Link: "#" }
    ])
    return (
        <>
            <div className='flex p-10 gap-20 cursor-pointer'>
                <div className='text-xl font-sans font-medium pl-28'>
                    <p className='text-[14px] text-gray-500 cursor-default'>Shop</p>
                    {
                        shop.map(function (shop, i) {
                            return <p key={i} ><a href={shop.Link}>{shop.name}</a></p>
                        })
                    }
                </div>

                <div className='text-[14px] font-sans font-medium '>
                    <p className='text-[14px] text-gray-500 cursor-default mb-2 mt-1'>Quick Links</p>
                    {
                        quickLinks.map(function (quickLinks, i) {
                            return <p className='mb-2' key={i}><a href={quickLinks.Link}>{quickLinks.name}</a></p>
                        })
                    }
                </div>

                <div className='text-[14px] font-sans font-medium '>
                    <p className='text-[14px] text-gray-500 cursor-default mb-2 mt-1'>Shop Special Stores</p>
                    {
                        store.map(function (store, i) {
                            return <p className='mb-2' key={i}><a href={store.Link}>{store.name}</a></p>
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Store