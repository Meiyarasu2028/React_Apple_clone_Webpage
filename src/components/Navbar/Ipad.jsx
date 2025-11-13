import React, { use, useState } from 'react'

const Ipad = () => {

    const [shop, setshop] = useState([
        { name: "Explore All iPad", Link: "#" },
        { name: "iPad Pro", Link: "#" },
        { name: "iPad Air", Link: "#" },
        { name: "iPad", Link: "#" },
        { name: "Ipad mini", Link: "#" },
        { name: "Apple Pencil", Link: "#" },
        { name: "Keybords", Link: "#" },
    ])

    const [quickLinks, setquichLinks] = useState([
        { name: "Shop iPad", Link: "#" },
        { name: "iPad Accesories", Link: "#" },
        { name: "Ways to Buy", Link: "#" },
    ])

    const [store, setsrore] = useState([
        { name: "iPad Support", Link: "#" },
        { name: "Applecare", Link: "#" },
        { name: "iPadOS 26", Link: "#" },
        { name: "Apple intelligence", Link: "#" },
        { name: "Apps by Apple", Link: "#" },
        { name: "iCloude+", Link: "#" },
        { name: "Education", Link: "#" },
    ])
    return (
        <>
            <div className='flex p-10 gap-20 cursor-pointer'>
                <div className='text-xl font-sans font-medium pl-28'>
                    <p className='text-[14px] text-gray-500 cursor-default'>Explore iPad</p>
                    {
                        shop.map(function (shop, i) {
                            return <p key={i} ><a href={shop.Link}>{shop.name}</a></p>
                        })
                    }
                </div>

                <div className='text-[14px] font-sans font-medium '>
                    <p className='text-[14px] text-gray-500 cursor-default mb-2 mt-1'>Shop iPad</p>
                    {
                        quickLinks.map(function (shop, i) {
                            return <p className='mb-2' key={i}><a href={shop.Link}>{shop.name}</a></p>
                        })
                    }
                </div>

                <div className='text-[14px] font-sans font-medium '>
                    <p className='text-[14px] text-gray-500 cursor-default mb-2 mt-1'>More from iPad</p>
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

export default Ipad