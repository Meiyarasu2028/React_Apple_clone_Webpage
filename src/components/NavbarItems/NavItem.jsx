import { motion } from "framer-motion";
import Store from "../Navbar/Store";
import Mac from "../Navbar/Mac";
import Ipad from "../Navbar/Ipad";
import Iphone from "../Navbar/Iphone";
import Watch from "../Navbar/Watch";
import Airpods from "../Navbar/Airpods";
import TvHome from "../Navbar/TvHome";
import Entertainment from "../Navbar/Entertainment";
import Accesories from "../Navbar/Accesories";
import Support from "../Navbar/Support";

const NavItem = ({ navItem }) => {

  return (
    <div className="relative group">
      <p className="cursor-pointer"><a href={navItem.Link}>{navItem.name}</a></p>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        
        className="invisible opacity-0 group-hover:visible group-hover:opacity-100 duration-200 fixed top-10 left-0 w-screen z-50">
        <div className="bg-black/95 shadow-lg w-full">
          {navItem.name === "Store" && <Store />}
          {navItem.name === "Mac" && <Mac />}
          {navItem.name === "iPad" && <Ipad />}
          {navItem.name === "iPhone" && <Iphone />}
          {navItem.name === "Watch" && <Watch />}
          {navItem.name === "AirPods" && <Airpods />}
          {navItem.name === "TV & Home" && <TvHome />}
          {navItem.name === "Entertainment" && <Entertainment />}
          {navItem.name === "Accessories" && <Accesories />}
          {navItem.name === "Support" && <Support />}

        </div>
      </motion.div>
    </div>
  );

}



export default NavItem