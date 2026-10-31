import type { Experience } from "../data/experience"
import {View} from '../hooks/view'

interface ExperienceItemProps{
    experience : Experience
}

export const ExperienceItem = ({experience}: ExperienceItemProps) => {
    const {ref, inView} = View<HTMLDivElement>()
    return (
        <div ref={ref} data-reveal data-inview={inView}>
            <article>
                <h3>{experience.role}</h3>
                <p>{experience.organization}</p>
                {experience.period && <p className="hud">{experience.period}</p>}
                {experience.summary && <p>{experience.summary}</p>}
            </article>
        </div>
    )
  
}
export default ExperienceItem