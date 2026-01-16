import Body from "./components/Body"
import About from "./pages/About"
import { Hero } from "./pages/Hero"
import Projects from "./pages/Projects"
import Skills from "./pages/Skills"

function App() {
  return (
    <>
      <Body>
        <Hero />
        <Skills />
        <Projects />
        <About />
      </Body>
    </>
  )
}

export default App
