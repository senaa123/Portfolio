import { NavBar } from "./layout/navbar"
import { About } from "./sections/About"
import { Projects } from "./sections/Project"
import { Hero } from "./sections/Hero"
import { Contact } from "./sections/Contact"
import { Skills } from "./sections/Skill"


function App() {
 
  return (
    <>
    <div className="min-h-screen overflow-x-hidden">
        <NavBar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
    </div>
    
    </>
  )
}

export default App
