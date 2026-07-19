import { NavBar } from "./layout/navbar"
import { TechMarquee } from "./sections/TechMarquee"
import { About } from "./sections/About"
import { Projects } from "./sections/Project"
import { Hero } from "./sections/Hero"
import { Contact } from "./sections/Contact"
import { Skills } from "./sections/Skill"
import { Footer } from "./sections/Footer"

function App() {
 
  return (
    <>
    <div className="min-h-screen">
        <NavBar />
        <main>
          <Hero />
          <TechMarquee />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
    </div>
    
    </>
  )
}

export default App
