import { motion } from "framer-motion";
import Link from "next/link";
import { useRef, useContext } from "react";
import ThemeContext from "../ContextProvider";
import { UilGlobe } from "@iconscout/react-unicons";
import { UilListUiAlt } from "@iconscout/react-unicons";
import { UilUser, UilSun, UilMoon } from "@iconscout/react-unicons";
const outsideClick = (toggle_ref, content_ref) => {
  if (typeof window !== "undefined") {
    document.addEventListener("mousedown", (e) => {
      if (toggle_ref.current && toggle_ref.current.contains(e.target)) {
        content_ref.current.classList.toggle("active");
      } else {
        if (content_ref.current && !content_ref.current.contains(e.target)) {
          content_ref.current.classList.remove("active");
        }
      }
    });
  }
};
const Header = () => {
  const navList = useRef(null);

  const { dark, toggleDark } = useContext(ThemeContext);

  const handleMenu = () => {
    navList.current.classList.add("active");
  };
  const handleClose = () => {
    navList.current.classList.remove("active");
  };
  return (
    <div className="w-full  bg-[#344BA8]  shadow-sm  dark:bg-[#10102e]  z-[110] sticky top-0">
      <header
        dir="rtl"
        className="flex  items-center text-white  justify-between p-5 
      w-full md:container mx-auto   shadow-lg md:shadow-none"
      >
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{ duration: 1.5 }}
          className="f-dast text-2xl text-white"
        >
          <button className="lg:hidden translate-y-2 pl-2" onClick={handleMenu}>
            <UilListUiAlt />
          </button>
          <p>محمد فتحی</p>
        </motion.div>
        <div ref={navList} className={`z-[105] navlist`}>
          <div
            className="flex menu_list duration-300 overflow-hidden bg-white dark:bg-slate-800/90 lg:bg-transparent 
          lg:dark:bg-transparent text-slate-900 
          items-start lg:items-center fixed h-screen lg:h-auto  flex-col lg:flex-row 
            top-0 right-0  w-2/3 z-[200] lg:w-full  lg:relative"
          >
            <Link
              className="nav__link text-slate-900 dark:text-white lg:text-white"
              href="#main"
            >
              صفحه اصلی
            </Link>
            <Link
              className="nav__link text-slate-900 dark:text-white lg:text-white"
              href="#"
            >
              خدمات
            </Link>
            <Link
              className="nav__link text-slate-900 dark:text-white lg:text-white"
              href="#"
            >
              درباره من
            </Link>
            <Link
              className="nav__link text-slate-900 dark:text-white lg:text-white"
              href="#"
            >
              رزومه
            </Link>
            <Link
              className="nav__link text-slate-900 dark:text-white lg:text-white"
              href="#"
            >
              نمونه کار
            </Link>
            <button
              onClick={handleClose}
              className="absolute dark:text-white lg:hidden top-4 left-4 z-[101]"
            >
              X
            </button>
          </div>
        </div>
        <motion.div
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{ duration: 1.5 }}
          className="flex items-center gap-2 relative z-[100]"
        >
          <button className="btn-indigo">
            <span className="hidden lg:block"> حساب کاربری </span>
            <UilUser size={16} />
          </button>
          <button onClick={() => toggleDark()} className="btn-indigo">
            {dark ? <UilSun size={16} /> : <UilMoon size={16} />}
          </button>
        </motion.div>
      </header>
    </div>
  );
};

export default Header;
