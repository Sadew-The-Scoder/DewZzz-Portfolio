import Navbar from "./Navbar"

const Body = ({ children }) => {
  return (
    <div className="w-full h-auto bg-gradient-to-r from-black to-gray-400 transition-all duration-300">
      <Navbar />
      {children}
    </div>
  )
}

export default Body
