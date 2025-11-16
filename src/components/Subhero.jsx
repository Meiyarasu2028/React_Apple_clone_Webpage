import Button from "./Buttons/Button"
const Subhero = () => {
    return (
        <>
            <div className="bg-gray-50 mt-3 py-2">
                <div className="flex flex-col items-center mt-20">
                    <h1 className="text-4xl md:text-5xl font-semibold mb-2">iPhone Air</h1>
                    <p className="text-2xl md:text-3xl text-inherit ">The thinnest iPhone ever.</p>
                    <p className="text-2xl md:text-3xl text-inherit">With the power of pro inside.</p>
                    <div className="mb-10 mt-5 md:m-5">
                        <Button />
                    </div>

                </div>

                <div className="bg-[url('https://data.ictjournal.ch/styles/np8_full/s3/media/2025/09/10/apple-iphone-17-color-lineup-250909_big.jpg.large_.jpg?itok=vAuqTYhV')] h-[400px]  bg-contain  bg-no-repeat md:bg-center ">
                </div>
            </div>
        </>
    )
}

export default Subhero