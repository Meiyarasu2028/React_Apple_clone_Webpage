import { useState } from "react";
import { FaSearch, FaShoppingBag, FaApple } from "react-icons/fa";
import NavItem from "../NavbarItems/NavItem";


import Store from "./Store";
import Mac from "./Mac";
import Ipad from "./Ipad";
import Iphone from "./Iphone";
import Watch from "./Watch";
import Airpods from "./Airpods";
import TvHome from "./TvHome";
import Entertainment from "./Entertainment";
import Accesories from "./Accesories";
import Support from "./Support";

export default function Navbar() {

    const [navItems,setnavItem] = useState([
        { name: "Store", href: "#" },
        { name: "Mac", href: "#" },
        { name: "iPad", href: "#" },
        { name: "iPhone", href: "#" },
        { name: "Watch", href: "#" },
        { name: "AirPods", href: "#" },
        { name: "TV & Home", href: "#" },
        { name: "Entertainment", href: "#" },
        { name: "Accessories", href: "#" },
        { name: "Support", href: "#" },
    ]);


    const componentMap = {
        Store,
        Mac,
        iPad: Ipad,
        iPhone: Iphone,
        Watch,
        AirPods: Airpods,
        "TV & Home": TvHome,
        Entertainment,
        Accessories: Accesories,
        Support,
    };

    return (
        <div className="sticky top-0 z-50 w-full">
            <div className="flex items-center justify-between px-6 lg:space-x-10 md:space-x-5 bg-black/90 text-gray-300 p-4 text-xs">

                <div>
                    <p className="text-lg">
                        <FaApple />
                    </p>
                </div>

                <div className="hidden lg:flex md:gap-5 ">
                    {navItems.map((navItem, i) => {
                        const Component = componentMap[navItem.name];
                        return (
                            <NavItem key={i} navItem={navItem}>
                                {Component && <Component />}
                            </NavItem>
                        );
                    })}
                </div>

                {/* if else explain method if incase componentmap methos is confused if You use if method */}
                {/* {navItems.map((item, i) => {
                    if (item.name === "Store") {
                        return <NavItem key={i} item={item}><Store/></NavItem> 
                    }
                    else if(item.name === "Mac") {
                        return <NavItem key={i} item={item}><Store/></NavItem> 
                    }
                    else if(item.name === "iPad"){
                        return <NavItem key={i} item={item}><Ipad/></NavItem>
                    }
                    else if(item.name === "iPhone"){
                        return <NavItem key={i} item={item}><Iphone/></NavItem>
                    }
                    else if(item.name === "Watch"){
                        return <NavItem key={i} item={item}><Watch/></NavItem>
                    }
                    else if(item.name === "AirPods"){
                        return <NavItem key={i} item={item}><Airpods/></NavItem>
                    }
                    else if(item.name === "TV & Home"){
                        return <NavItem key={i} item={item}><TvHome/></NavItem>
                    }
                    else if(item.name === "Entertainment"){
                        return <NavItem key={i} item={item}><Entertainment/></NavItem>
                    }
                    else if(item.name === "Accessories"){
                        return <NavItem key={i} item={item}><Accesories/></NavItem>
                    }
                    else if(item.name === "Support"){
                        return <NavItem key={i} item={item}><Support/></NavItem>
                    }

                })} */}

                <div className="flex gap-5">
                    <p className="text-sm">
                        <FaSearch />
                    </p>
                    <p className="text-sm">
                        <FaShoppingBag />
                    </p>
                </div>
            </div>
        </div>
    );
}

