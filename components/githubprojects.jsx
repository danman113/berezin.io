import Card from './card'
import { useEffect, useState } from 'react'

const Projects = ({}) => {
  const [projects, setProjects] = useState([])
  useEffect(async () => {
    const res = await fetch('https://api.github.com/users/danman113/repos')
    const projects = await res.json()
    setProjects(projects.sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 6))
  }, [])
  return (
    <div className='container' id='portfolio'>
      <h2>
        <a href='https://github.com/danman113'>Cool Things I've Made</a>
      </h2>
      <div className='flex two-600 three-800'>
        {projects.length ? (
          projects.map((project, i) => (
            <Card
              key={i}
              title={
                <a href={project.html_url} target='_blank' rel='noopener noreferrer'>
                  {project.name}
                </a>
              }
              content={project.description}
            />
          ))
        ) : (
          <h4>Fetching Projects...</h4>
        )}
      </div>
    </div>
  )
}

export default Projects
