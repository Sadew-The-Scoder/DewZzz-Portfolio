const NavLinks = () => {
  const links = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Skills", path: "/" },
    { id: 3, name: "Projects", path: "/" },
    { id: 4, name: "About", path: "/" },
  ]
  return (
    <ul className="md:flex md:gap-3 hidden md:block text-lg sm:text-sm lg:text-base md:items-center h-full text-white">
      {links.map((link) => (
        <li className="md:px-2" key={link.id}>
          <a href={link.path} className="hover:underline hover:bg-black/15 uppercase p-1 tracking-wide px-2 rounded-sm">
            {link.name}
          </a>
        </li>
      ))}
      <button className="bg-black py-2 px-4 rounded-md hover:cursor-pointer font-semibold flex items-center justify-center text-sm md:text-base">Contact Me</button>
    </ul>
  )
}

export default NavLinks
