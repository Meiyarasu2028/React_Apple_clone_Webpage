import React, { use, useState } from 'react'

const Mac = () => {

    const [shop, setshop] = useState([
        { name: "Explore All Mac", Link: "#" },
        { name: "MacBook Air", Link: "#" },
        { name: "MacBook Pro", Link: "#" },
        { name: "iMac", Link: "#" },
        { name: "Mac mini", Link: "#" },
        { name: "Mac Studio", Link: "#" },
        { name: "Mac Pro", Link: "#" },
        { name: "Displays", Link: "#" },
    ])

    const [quickLinks, setquichLinks] = useState([
        { name: "Shop Mac", Link: "#" },
        { name: "Mac Accesories", Link: "#" },
        { name: "Ways to Buy", Link: "#" }, 
    ])

    const [store, setsrore] = useState([
        { name: "Mac Support", Link: "#" },
        { name: "Applecare", Link: "#" },
        { name: "macOS Tahoe", Link: "#" },
        { name: "Apple intelligence", Link: "#" },
        { name: "Apps by Apple", Link: "#" },
        { name: "Even better with iPhone", Link: "#" },
        { name: "iCloude+", Link: "#" },
        { name: "Mac for Business", Link: "#" },
        { name: "Education", Link: "#" },
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

                <div className='text-[14px] font-sans font-medium'>
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

export default Mac