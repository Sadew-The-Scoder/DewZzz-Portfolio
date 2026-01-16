import Section from "../components/Section"
import Logo from "../assets/logo.png"
import Button from "../components/Button"
import { MdArrowCircleRight } from "react-icons/md"

export const Hero = () => {
  return (
    <>
      <Section>
        <div className="flex flex-col-reverse items-center justify-center h-full w-full md:flex-row justify-space-between">
          <div className="w-[60vw] flex items-center text-center justify-center flex-col gap-1">
            <h1 className="text-white/50 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Hey...!</h1>
            <h1 className="text-white/50 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Im <span className="text-white">Sadew</span>, The <span className="text-white">Scoder</span>...!</h1>
            <h2 className="text-xl sm:2xl md:text-3xl lg:text-4xl">Creative Web Dev & Software Specialist.</h2>
            <p className="text-sm mx-auto md:text-base lg:text-lg  text-white/50">"A versatile developer focused on high-performancse web solutions, Combining deep hardware knowladge with software expertie to build efficient digital experiences."</p>
            <Button>Contact Me Via Email<MdArrowCircleRight size={20} />
            </Button>
          </div>
          <div className="flex items-center justify-center">
            <img src={Logo} alt="Logo" className=" mb-4 md:mb-0 aspect-square object-cover shadow-lg w-45 h-45 md:w-67 md:h-67 lg:w-83 lg:h-83 border-2 rounded-full" />
          </div>
        </div>
      </Section >
    </>
  )
}

