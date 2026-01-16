const Button = ({ children }) => {
  return (
    <>
      <button className="flex items-center justify-center gap-2  bg-gray-400 text-base my-2 font-semibold w-auto h-auto py-2 px-3 md:px-3 lg:py-3 lg:px-4 uppercase rounded-md">{children}</button>
    </>
  )
}

export default Button
