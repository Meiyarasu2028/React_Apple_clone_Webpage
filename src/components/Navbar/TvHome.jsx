import React, { use, useState } from 'react'

const TvHome = () => {

    const [shop, setshop] = useState([
        { name: "Explore TV & Home", Link: "#" },
        { name: "Apple Tv 4K", Link: "#" },
        { name: "HomePod", Link: "#" },
        { name: "HomePod mini", Link: "#" },
    ])

    const [quickLinks, setquichLinks] = useState([
        { name: "Shop Apple TV 4K", Link: "#" },
        { name: "Shop HomePod", Link: "#" },
        { name: "Shop HomePod mini", Link: "#" }, 
    ])

    const [store, setsrore] = useState([
        { name: "Apple TV Support", Link: "#" },
        { name: "HomePod Support", Link: "#" },
        { name: "Applecar For Apple TV", Link: "#" },
        { name: "AppleCare For HomePod", Link: "#" },
        { name: "Apple TV app", Link: "#" },
        { name: "Apple TV+", Link: "#" },
        { name: "Home App", Link: "#" },
        { name: "Apple Music", Link: "#" },
        { name: "Siri", Link: "#" },
        { name: "Airplay", Link: "#" },
    ])
    return (
        <>
            <div className='flex p-10 gap-20 cursor-pointer'>
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

export default TvHome