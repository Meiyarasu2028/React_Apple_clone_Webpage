
const Button = ({ className = "" }) => {
    return (
        <div className={`flex gap-3 ${className}`}>
            <button className={`bg-blue-600 py-2 px-4 rounded-3xl text-white font-normal border hover:bg-white hover:border-black hover:text-black transition duration-[1s]`}>
                Learn more
            </button>

            <button className={`bg-transparent py-2 px-6 border border-black rounded-3xl font-normal hover:bg-blue-600 hover:text-white hover:border-blue-600 transition duration-[1s]`}>
                Buy
            </button>
        </div>
    )
}


export default Button