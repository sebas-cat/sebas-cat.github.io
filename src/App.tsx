import {projects} from './data/projects'
import ProjectCard from './components/ProjectCard'
import WebHero from './components/webHero'
import { experience } from './data/experience'
import ExperienceItem from './components/ExperienceItem'

interface NavigationItem {
  label: string
  href: string
}
const navigationItems: NavigationItem[] = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certs", href: "#certs" },
  { label: "Contact", href: "#contact" },
]

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          {navigationItems.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
      <main>
        <WebHero />
        <section id="about"><h2>About</h2></section>
          <section id="education"><h2>Education</h2>
          <article> <h3>Computer Science</h3>
          <p>ULACIT</p>
          <p className='hud'>Expected Graduation / December 2026</p>
          </article>
          </section>

            <section id="experience"><h2>Experience</h2>
            {experience.map((item)=> (
            <ExperienceItem key={item.id} experience={item} />
            ))}
            
            </section>

              <section id="projects"><h2>Projects</h2>
              {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index}/>
              ))}</section>
                <section id="certs"><h2>Certifications</h2> </section>
                  <section id="contact"><h2>Contact information</h2></section>
                  
      </main>
    </div>
  );
}

export default App
