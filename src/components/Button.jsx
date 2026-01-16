const Button = ({ children }) => {
  return (
    <>
      <button className="flex items-center justify-center gap-2  bg-gray-400 text-[0.7rem] w-auto h-auto py-1 px-3 rounded-md">{children}</button>
    </>
  )
}

export default Button
