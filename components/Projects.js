import uniqid from 'uniqid'
import ProjectCard from './ProjectCard'
import { projects } from '../data/config'

const Projects = () => {
  if (!projects.length) return null

  return (
    <section className='section projects' id='projects'>
      <h2 className='section__title'>Projects</h2>
      <div className='projects__column'>
        {projects.map((project) => (
          <ProjectCard key={uniqid()} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
