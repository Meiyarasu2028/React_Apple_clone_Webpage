import Button from "./Buttons/Button"

const Hero = () => {
  return (
    <>
      <div className=" mt-3 py-2 px-4">
        <div className="flex flex-col items-center mt-20">
          <h1 className="text-4xl md:text-5xl font-semibold mb-2">iPhone Air</h1>
          <p className="text-2xl md:text-3xl text-inherit ">The thinnest iPhone ever.</p>
          <p className="text-2xl md:text-3xl text-inherit">With the power of pro inside.</p>
          <div className="mb-20 mt-5 md:m-5">
            <Button />
          </div>

        </div>

        <div className="bg-[url('https://i.pinimg.com/1200x/eb/13/3f/eb133faea1e776c37bef1d14972bf540.jpg')] lg:bg-[url('https://www.apple.com/v/iphone-air/c/images/overview/welcome/hero__pkj0eg4w6ki2_large_2x.jpg')] h-[450px] md:h-screen bg-contain md:bg-cover bg-no-repeat md:bg-center ">
        </div>
      </div>
    </>
  )
}

export default Hero