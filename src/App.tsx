import {projects} from './data/projects'
import ProjectCard from './components/ProjectCard'
import WebHero from './components/webHero'
import { experience } from './data/experience'
import ExperienceItem from './components/ExperienceItem'
import { certs } from './data/certs'
import CertsGroup from './components/CertsGroup'

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
        <section id="about"><h2>About</h2><h3>Languages</h3>
        <ul><li>Spanish (Native)</li>
        <li>English (Bilingual) <a href='https://etscertificate.engdis.com/certificate/455a08f4-4c77-487c-89f4-23a92da28b56'>TOEIC 980/990</a></li>
        <li>French (Basic)</li>
        <li>Mnadarin (Learning)</li></ul>
        </section>
        
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
                <section id="certs"><h2>Certifications</h2>
                <CertsGroup
                title="Certifications"
                items={certs.filter((c) => c.kind === 'certification')}/>

                 <CertsGroup
                title="Courses"
                items={certs.filter((c) => c.kind === 'course')}/>
                </section>



                  <section id="contact"><h2>Contact information</h2>
                  <ul>
                    <li><a href='mailto:sebastian.vargas.carva@gmail.com'>sebastian.vargas.carva@gmail.com</a></li>
                    <li><a href='https://github.com/sebas-cat'>GitHub</a></li>
                    <li><a href='https://www.linkedin.com/in/sebastian-vargas1/'>LinkedIn</a></li>
                    </ul></section>
                  
      </main>
    </div>
  );
}

export default App
