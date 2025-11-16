import Button from "./Buttons/Button"
const Header = () => {
  return (
        <>
        <div className="lg:bg-black lg:h-10 w-full"></div>
        <div className="bg-[url('https://i.pinimg.com/736x/ca/0e/03/ca0e03f05de230e40471b7c8db50c82c.jpg')] lg:bg-[url('https://www.apple.com/v/iphone-17-pro/a/images/overview/welcome/hero__bdntboqignj6_xlarge.jpg')]  pb-[30px] bg-cover md:bg-contain bg-black text-white  bg-center  bg-no-repeat h-screen flex justify-center items-end md:pb-[50px] z-10">
            <Button></Button>
        </div>
        </>
  )
}

export default Header