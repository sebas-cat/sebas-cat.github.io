import type {Project } from '../data/projects'
import {View} from '../hooks/view'

interface ProjectCardProps {
    project: Project
    index: number
}

const ProjectCard = ({project, index}: ProjectCardProps) => {
    const {ref, inView} = View<HTMLDivElement>()
    return (
        <div ref={ref} data-reveal data-inview={inView}>
            <article>
                <h3>{project.title}</h3>
            <p className='hud'>
                {project.summary && <p>{project.summary}</p>}
                {!project.summary && project.status === 'in-progress' &&(<p>Write-up in progress.</p>)}
                {project.repoUrl && (
                    <a href={project.repoUrl}>{project.title} repository</a>
                    
                )}
                <br/>
                PROJECT_{String(index + 1).padStart(2, '0')} / Status /{' '}
                {project.status === 'in-progress' ? 'IN PROGRESS' : 'COMPLETED'}
            </p>
            
            </article>
        </div>


    )
}

export default ProjectCard