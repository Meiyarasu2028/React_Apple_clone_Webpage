import { useState } from "react";
import { ChevronDown } from "lucide-react";

export const footerData = [
    {
        title: "Shop and Learn",
        links: [
            "Store",
            "Mac",
            "iPad",
            "iPhone",
            "Watch",
            "Vision",
            "AirPods",
            "TV & Home",
            "AirTag",
            "Accessories",
            "Gift Cards",
        ],
    },
    {
        title: "Apple Wallet",
        links: ["Wallet", "Apple Card", "Apple Pay", "Apple Cash"],
    },
    {
        title: "Account",
        links: [
            "Manage Your Apple Account",
            "Apple Store Account",
            "iCloud.com",
        ],
    },
    {
        title: "Entertainment",
        links: [
            "Apple One",
            "Apple TV",
            "Apple Music",
            "Apple Arcade",
            "Apple Fitness+",
            "Apple News+",
            "Apple Podcasts",
            "Apple Books",
            "App Store",
        ],
    },
    {
        title: "Apple Store",
        links: [
            "Find a Store",
            "Genius Bar",
            "Today at Apple",
            "Group Reservations",
            "Apple Camp",
            "Apple Store App",
            "Certified Refurbished",
            "Apple Trade In",
            "Financing",
            "Carrier Deals at Apple",
            "Order Status",
            "Shopping Help",
        ],
    },
    {
        title: "For Business",
        links: ["Apple and Business", "Shop for Business"],
    },
    {
        title: "For Education",
        links: ["Apple and Education", "Shop for K-12", "Shop for College"],
    },
    {
        title: "For Healthcare",
        links: ["Apple and Healthcare"],
    },
    {
        title: "For Government",
        links: [
            "Apple and Government",
            "Shop for Veterans and Military",
            "Shop for State and Local Employees",
            "Shop for Federal Employees",
        ],
    },
    {
        title: "Apple Values",
        links: [
            "Accessibility",
            "Education",
            "Environment",
            "Inclusion and Diversity",
            "Privacy",
            "Racial Equity and Justice",
            "Supply Chain Innovation",
        ],
    },
    
];

export default function Footer() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (i) => {
        setOpenIndex(openIndex === i ? null : i);
    };

    return (
        <footer className="bg-[#f5f5f7] text-gray-700 w-full py-6 px-4">

            <div className="hidden md:grid grid-cols-5 gap-4 max-w-6xl mx-auto">
                {footerData.map((section, index) => (
                    <div key={index}>
                        <h3 className="font-semibold mb-2 text-[13px]">{section.title}</h3>

                        <ul className="space-y-1">
                            {section.links.map((link, i) => (
                                <li
                                    key={i}
                                    className="text-[12px] text-gray-600 hover:underline cursor-pointer"
                                >
                                    {link}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* MOBILE ACCORDION (TIGHT) */}
            <div className="md:hidden max-w-xl">
                {footerData.map((section, index) => (
                    <div key={index} className="border-b py-2 px-10">
                        <button
                            onClick={() => toggle(index)}
                            className="w-full flex justify-between items-center"
                        >
                            <span className="font-medium text-[14px]">{section.title}</span>
                            <ChevronDown
                                className={`transition-transform ${openIndex === index ? "rotate-180" : ""
                                    }`}
                            />
                        </button>

                        {openIndex === index && (
                            <ul className="mt-2 space-y-1 pl-3 pb-2">
                                {section.links.map((link, i) => (
                                    <li
                                        key={i}
                                        className="text-[13px] text-gray-600 hover:underline cursor-pointer"
                                    >
                                        {link}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
            <div>
                <p className="text-left mt-10 text-sm md:px-16 mb-3">More ways to shop: Find an Apple Store or other retailer near you. Or call 000800 040 1966.</p>
                <hr className=" border border-gray-400 md:mx-16" />
            </div>
            <div className="flex items-center gap-5 flex-wrap md:px-16 mt-3">
                <div>
                    <p className="text-sm text-gray-500 text-center">© 2025 Apple Inc. All rights reserved.</p>
                </div>

                <div>
                    <p className="text-sm text-gray-500 text-center">Privacy Policy | Terms of Use | Sales Policy | Legal | Site Map</p>
                </div>

            </div>
        </footer>
    );
}



