const Section = ({ children }) => {
  return (
    <>
      <section className="w-full h-[calc(100dvh-60px)] md:h-[calc(100dvh-68px)] lg:h-[calc(100dvh-80px)] text-white px-2 md:px-15 lg:px-20 ">
        {children}
      </section>
    </>
  )
}

export default Section
