import CardItems from './CardItems'
import { createContext, useState } from 'react'
import { FaApple } from 'react-icons/fa'


const CardContect = createContext()
const Cards = (data) => {

    const [Card,setCard] = useState([

        {
            Title:"AirPods Pro 3",
            SubTitle:"The Worlds Best in-ear",
            Nots:"Active noise Cancellation.",
            Img:"https://i.pinimg.com/1200x/33/98/9e/33989e94b4e166c139da6fd0c184365f.jpg",
            isDark:""
        },

        {
            Title:"iPad air",
            SubTitle:"New SuperCharged by the M3 Chip",
            Img:"https://i.pinimg.com/736x/ad/8f/ea/ad8feaa2402e320bf062de1acfc9ecb8.jpg",
            isDark:"true"
        },

        {
            Title: <><FaApple /> Watch SERIES 11</>,
            SubTitle:"The Ultimate way to watch your health.",
            Img:"https://i.pinimg.com/1200x/3f/b9/93/3fb993de6aa497da3af0835fc613fe1d.jpg",
            isDark:""
        },
        {
            Title:"iPad",
            SubTitle:"Now with the Speed of the A16 chip",
            Nots:"and double the startind storage.",
            Img:"https://i.pinimg.com/1200x/88/20/31/882031cc7b056e8be8a1f1d626faa80a.jpg",
            isDark:""
        },

        {
           Title: <><FaApple /> Trade In</>,
            SubTitle:"Get Up to $180-$670",
            Nots:"in credit when you trade in",
            SubNotes:"iPhone 13 or higher.",
            Img:"https://i.pinimg.com/736x/df/b4/e0/dfb4e03824e76e0627517015af27051a.jpg",
            isDark:""
        },

        {
            Title: <><FaApple /> Card</>,
            SubTitle:"Get Up to 3% Daily Cashback",
            Nots:"with every purchase.",
            Img:"https://i.pinimg.com/736x/1a/a0/86/1aa086945b50d2420e388595f6896bac.jpg",
            isDark:""
        },


        
    ])
    
    return (
        <>
            <div>
                <CardContect.Provider value={{Card}}>
                    {data.children}
                </CardContect.Provider>
            </div>
        </>
    )
}

export default Cards
export {CardContect}