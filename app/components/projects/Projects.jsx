import { projectsData } from '@/app/data'
import Project from './Project'
import './project.css'


const Projects = () => {
  return (
    <section id='project' aria-labelledby='project_heading' className='px-16' >
        <h2 
          id='project_heading' 
          className='font-semibold text-4xl leading-8 py-5 px-8 w-fit mx-auto border-b-4 '
          >
          Projects
        </h2>
        <ul className='projects_grid mt-14'>
          {
            projectsData.map(project => (
              <li key={project.id}>
                <Project {...project} />
              </li>
            ))
          }
        </ul>
    </section>
  )
}

export default Projects