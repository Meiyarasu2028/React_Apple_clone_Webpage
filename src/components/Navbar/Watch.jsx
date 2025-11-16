import React, { use, useState } from 'react'

const Mac = () => {

    const [shop, setshop] = useState([
        { name: "Explore All Apple Watch", Link: "#" },
        { name: "Apple Watch Series 11", Link: "#" },
        { name: "Apple Watch SE 3", Link: "#" },
        { name: "Apple Watch Ultra 3", Link: "#" },
        { name: "Apple Watch Nike", Link: "#" },
    ])

    const [quickLinks, setquichLinks] = useState([
        { name: "Shop Apple Watch", Link: "#" },
        { name: "Apple Watch Straps", Link: "#" },
        { name: "Apple Watch Accesories", Link: "#" },
        { name: "Ways to Buy", Link: "#" }, 
    ])

    const [store, setsrore] = useState([
        { name: "Apple Watch Support", Link: "#" },
        { name: "Applecare", Link: "#" },
        { name: "WatchOS 26", Link: "#" },
        { name: "Apple Watch For Your Kids", Link: "#" },
        { name: "Apps by Apple", Link: "#" },
    ])
    return (
        <>
            <div className='flex p-10 md:gap-20 cursor-pointer'>
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
                        quickLinks.map(function (shop, i) {
                            return <p className='mb-2' key={i}><a href={shop.Link}>{shop.name}</a></p>
                        })
                    }
                </div>

                <div className='text-[14px] font-sans font-medium '>
                    <p className='text-[14px] text-gray-500 cursor-default mb-2 mt-1'>More from Mac</p>
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

export default Mac