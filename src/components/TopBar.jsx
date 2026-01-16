const TopBar = () => {
  const links = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Skills", path: "/" },
    { id: 3, name: "Projects", path: "/" },
    { id: 4, name: "About", path: "/" },
  ]
  return (
    <ul className="bg-black/80 z-40 flex items-center flex-col justify-center gap-2 text-lg sm:text-sm lg:text-base py-2 w-full absolute h-auto top-10 left-0">
      {links.map((link) => (
        <li className="w-full flex items-center justify-center" key={link.id}>
          <a href={link.path} className="hover:underline hover:bg-black/15 px-10 py-1 tracking-wide uppercase rounded-sm hover:scale-[1.03]">
            {link.name}
          </a>
        </li>
      ))}
      <button className="bg-gray-400 p-1 px-6 rounded-md text-sm md:text-base font-semibold hover:cursor-pointer uppercase hover:scale-[1.05]">Contact Me</button>
    </ul>
  )
}

export default TopBar
