import Button from "./Button"
const Header = () => {
  return (
        <>
        <div className="bg-black h-10 w-full"></div>
        <div style={{backgroundImage:"url(https://www.apple.com/v/iphone-17-pro/a/images/overview/welcome/hero__bdntboqignj6_xlarge.jpg)",}}
            className="bg-black text-white bg-contain bg-center  bg-no-repeat h-screen flex justify-center items-end pb-[50px] z-10">
            <Button></Button>
        </div>
        </>
  )
}

export default Header