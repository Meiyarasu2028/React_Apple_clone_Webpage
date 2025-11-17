import React, { use, useState } from 'react'

const Airpods = () => {

    const [shop, setshop] = useState([
        { name: "Explore All AirPods", Link: "#" },
        { name: "AirPods 4", Link: "#" },
        { name: "AirPods Pro 3", Link: "#" },
        { name: "AirPods Mac", Link: "#" },
    ])

    const [quickLinks, setquichLinks] = useState([
        { name: "Shop AirPods", Link: "#" },
        { name: "AirPods Accesories", Link: "#" },
    ])

    const [store, setsrore] = useState([
        { name: "AirPods Support", Link: "#" },
        { name: "Applecare", Link: "#" },
        { name: "Apple music", Link: "#" },
    ])
    return (
        <>
            <div className='flex p-10 gap-20 cursor-pointer pl-40'>
                <div className='text-xl font-sans font-medium pl-28'>
                    <p className='text-[14px] text-gray-500 cursor-default'>Explore Mac</p>
                    {
                        shop.map(function (shop, i) {
                            return <p key={i} ><a href={shop.Link}>{shop.name}</a></p>
                        })
                    }
                </div>

                <div className='text-[14px] font-sans font-medium '>
                    <p className='text-[14px] text-gray-500 cursor-default mb-2 mt-1'>Shop Mac</p>
                    {
                        quickLinks.map(function (quickLinks, i) {
                            return <p className='mb-2' key={i}><a href={quickLinks.Link}>{quickLinks.name}</a></p>
                        })
                    }
                </div>

                <div className='text-[14px] font-sans font-medium '>
                    <p className='text-[14px] text-gray-500 cursor-default mb-2 mt-1'>More from Mac</p>
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

export default Airpods