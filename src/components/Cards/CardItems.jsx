import { useContext } from "react"
import { CardContect } from "./Cards"
import Button from "../Buttons/Button"

const CardItems = () => {

    const { Card } = useContext(CardContect)

    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full p-4 mt-3  ">
                {
                    Card.map(function (item, index) {
                        return <div key={index} style={{ backgroundImage: `url(${item.Img})` }} className={`h-[520px] md:h-screen rounded-lg gap-1 pt-6 font-sans bg-gray-100 bg-cover bg-center bg-no-repeat flex flex-col items-center ${item.isDark ? "text-white" : "text-black"}`}>
                            <p className="text-3xl md:text-5xl font-medium flex items-center">{item.Title}</p>
                            <p className="text-sm md:text-xl font-normal">{item.SubTitle}</p>
                            <p className="text-sm md:text-xl font-normal">{item.Nots}</p>
                            <p>{item.SubNotes}</p>
                            <Button />
                        </div>

                    })
                }
            </div>
        </>
    )
}

export default CardItems