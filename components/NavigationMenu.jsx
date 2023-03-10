import Link from "next/link";
import { motion } from "framer-motion";
import ClickAwayListener from "@mui/base/ClickAwayListener";
import { BsGlobe, BsHouseFill, BsFillQuestionCircleFill, BsPlusSquareFill } from "react-icons/bs";
import NavLink from "./NavLink";
const NavigationLinks = [
  {
    title: "Home",
    href: "/",
    icon: BsHouseFill,
  },
  {
    title: "Worlds",
    href: "/worlds",
    icon: BsGlobe,
  },
  {
    title: "FAQ",
    href: "/faq",
    icon: BsFillQuestionCircleFill,
  },
  {
    title: "Support",
    href: "/support",
    icon: BsPlusSquareFill,
  },
];
const NavigationMenu = ({ setIsMenuOpen }) => (
  <ClickAwayListener onClickAway={() => setIsMenuOpen(false)}>
    <motion.ul
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ duration: 0.3 }}
      className=" 
    select-none fixed top-0 left-0 h-screen w-screen md:w-auto backdrop-blur-3xl bg-black/20 z-40 shadow-2xl md:rounded-r-3xl px-10 pt-24 pb-24 flex flex-col gap-8 items-center text-2xl font-bold text-white ">
      <li className="text-3xl">
        <Link onClick={() => setIsMenuOpen(false)} href="">
          METAVERSUS
        </Link>
      </li>
      {NavigationLinks.map((link, index) => (
        <li key={index} className="w-full rounded-3xl">
          <NavLink
            setIsMenuOpen={setIsMenuOpen}
            className="flex items-center w-full justify-start px-10 py-4 bg-primary-blue sm:hover:bg-primary-blue/80 transition-colors rounded-3xl"
            href={link.href}>
            <link.icon className="mr-4" />
            {link.title}
          </NavLink>
        </li>
      ))}
    </motion.ul>
  </ClickAwayListener>
);

export default NavigationMenu;
