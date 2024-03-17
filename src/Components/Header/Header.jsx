import { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";
import HeroArea from "../HeroArea/HeroArea";

const Header = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };
  return (
    <div className="w-full bg-slate-200 sticky z-50 top-0 py-2">
      <div className="container mx-auto flex justify-between items-center py-4 sm:px-0 px-2">
        <div>
          <Link to="/">
            <h2 className="sm:text-[32px] text-xl font-bold">Job-Hunter</h2>
          </Link>
        </div>
        <nav
          className={`flex  md:flex-row flex-col duration-1000 right-0 md:static absolute ${
            menu ? "top-16" : "-top-40"
          } md:bg-transparent bg-slate-200 md:p-0 p-4  rounded-sm `}
        >
          <Link className="md:mx-[16px] mb-3 md:mb-0  text-[18px]" to="/">
            Home
          </Link>

          <Link className="md:mx-[16px] mb-3 md:mb-0 text-[18px]" to="/applied">
            Applied Jobs
          </Link>
          <Link className="md:mx-[16px]  text-[18px]" to="/blog">
            Blog
          </Link>
        </nav>
        <div onClick={handleMenu} className="text-2xl md:hidden block">
          {menu ? <FaXmark></FaXmark> : <FaBars></FaBars>}
        </div>
      </div>
      <HeroArea />
    </div>
  );
};

export default Header;
