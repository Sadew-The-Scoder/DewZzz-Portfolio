import Section from "../components/Section"
import Logo from "../assets/logo.png"
import Button from "../components/Button"
import { MdArrowCircleRight } from "react-icons/md"

export const Hero = () => {
  return (
    <>
      <Section>
        <div className="flex flex-col-reverse items-center justify-center h-full w-full">
          <div className="w-full flex items-center justify-center flex-col gap-1">
            <h1 className="text-white/50">Hey...!</h1>
            <h1 className="text-white/50">Im <span className="text-white">Sadew</span>, The <span className="text-white">Scoder</span>...!</h1>
            <h3>Creative Web Dev & Software Specialist.</h3>
            <p className="text-[0.6rem] text-white/50">"A versatile developer focused on high-performancse web solutions, Combining deep hardware knowladge with software expertie to build efficient digital experiences."</p>
            <Button>Contact Me Via Email<MdArrowCircleRight size={20} />
            </Button>
          </div>
          <div className="w-43 h-43 flex items-center justify-center">
            <img src={Logo} alt="Logo" className="w-43 h-43 rounded-full" />
          </div>
        </div>
      </Section >
    </>
  )
}

