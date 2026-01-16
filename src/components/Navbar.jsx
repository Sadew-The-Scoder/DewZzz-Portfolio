import { MdClose, MdMenu } from "react-icons/md"
import NavLinks from "./NavLinks"
import { useState } from "react"
import TopBar from "./TopBar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="flex justify-between items-center w-full h-15  md:h-17 lg:h-20 px-2 md:px-15 lg:px-20 text-white backdrop-blur-lg bg-white/5 sticky top-0 left-0 z-50">
      <span className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">DewZzz</span>

      <NavLinks />
      <button className="p-2 hover:cursor-pointer rounded-md hover:bg-black/10 md:hidden relative"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <MdClose size={20} /> : <MdMenu size={20} />}
      </button>
      {isOpen && <TopBar />}
    </nav>
  )
}

export default Navbar
