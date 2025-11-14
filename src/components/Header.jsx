import Button from "./Button"
const Header = () => {
  return (
        <>
        <div className="bg-black h-10 w-full"></div>
        <div style={{backgroundImage:"url(https://www.apple.com/v/iphone-17-pro/a/images/overview/welcome/hero__bdntboqignj6_xlarge.jpg)",}}
            className="bg-cover h-[300px]  pb-[30px]  md:bg-contain bg-black text-white  bg-center  bg-no-repeat md:h-screen flex justify-center items-end md:pb-[50px] z-10">
            <Button></Button>
        </div>
        </>
  )
}

export default Header