const NavLinks = () => {
  const links = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Skills", path: "/" },
    { id: 3, name: "Projects", path: "/" },
    { id: 4, name: "About", path: "/" },
  ]
  return (
    <ul className="md:flex md:gap-3 text-[0.9rem] hidden md:block lg-text-[1.4rem] md:items-center h-full text-white">
      {links.map((link) => (
        <li className="md:px-2" key={link.id}>
          <a href={link.path} className="hover:underline hover:bg-black/15 p-1 px-2 rounded-sm">
            {link.name}
          </a>
        </li>
      ))}
      <button className="bg-black p-2 rounded-md hover:cursor-pointer flex items-center justify-center">Contact Me</button>
    </ul>
  )
}

export default NavLinks
