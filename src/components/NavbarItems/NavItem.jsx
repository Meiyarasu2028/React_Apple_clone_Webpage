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

const NavItem = ({ item }) => {

  return (
    <div className="relative group">
      <p className="cursor-pointer"><a href="#">{item.name}</a></p>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        
        className="invisible opacity-0 group-hover:visible group-hover:opacity-100 duration-200 fixed top-10 left-0 w-screen z-50">
        <div className="bg-black/95 shadow-lg w-full">
          {item.name === "Store" && <Store />}
          {item.name === "Mac" && <Mac />}
          {item.name === "iPad" && <Ipad />}
          {item.name === "iPhone" && <Iphone />}
          {item.name === "Watch" && <Watch />}
          {item.name === "AirPods" && <Airpods />}
          {item.name === "TV & Home" && <TvHome />}
          {item.name === "Entertainment" && <Entertainment />}
          {item.name === "Accessories" && <Accesories />}
          {item.name === "Support" && <Support />}

        </div>
      </motion.div>
    </div>
  );

}



export default NavItem