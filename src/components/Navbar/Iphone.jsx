import React, { use, useState } from 'react'

const Iphone = () => {

    const [shop, setshop] = useState([
        { name: "Explore All iPhone", Link: "#" },
        { name: "iPhone 17 Pro", Link: "#" },
        { name: "iPhone Air", Link: "#" },
        { name: "iPhone 17", Link: "#" },
        { name: "iPhone 16", Link: "#" },
        { name: "iPhone 16e", Link: "#" },

    ])

    const [quickLinks, setquichLinks] = useState([
        { name: "Shop iPhone", Link: "#" },
        { name: "iPhone Accesories", Link: "#" },
        { name: "Apple Trade In", Link: "#" },
        { name: "Ways to Buy", Link: "#" },
    ])

    const [store, setsrore] = useState([
        { name: "iPhone Support", Link: "#" },
        { name: "Applecare", Link: "#" },
        { name: "iOS 26", Link: "#" },
        { name: "Apple intelligence", Link: "#" },
        { name: "Apps by Apple", Link: "#" },
        { name: "iPhone Privacy", Link: "#" },
        { name: "Even Better With Mac", Link: "#" },
        { name: "iCloude+", Link: "#" },
        { name: "wallet", Link: "#" },
        { name: "siri", Link: "#" },
    ])
    return (
        <>
            <div className='flex p-10 gap-20 cursor-pointer pl-40'>
                <div className='text-xl font-sans font-medium pl-28'>
                    <p className='text-[14px] text-gray-500 cursor-default'>Explore iPhone</p>
                    {
                        shop.map(function (shop, i) {
                            return <p key={i} ><a href={shop.Link}>{shop.name}</a></p>
                        })
                    }
                </div>

                <div className='text-[14px] font-sans font-medium'>
                    <p className='text-[14px] text-gray-500 cursor-default mb-2 mt-1'>Shop iPhone</p>
                    {
                        quickLinks.map(function (quickLinks, i) {
                            return <p className='mb-2' key={i}><a href={quickLinks.Link}>{quickLinks.name}</a></p>
                        })
                    }
                </div>

                <div className='text-[14px] font-sans font-medium '>
                    <p className='text-[14px] text-gray-500 cursor-default mb-2 mt-1'>More from iPhone</p>
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

export default Iphone