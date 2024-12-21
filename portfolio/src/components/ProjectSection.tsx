export const ProjectsSection = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce application with payment integration',
      technologies: ['React', 'Node.js', 'MongoDB'],
      link: '#',
    },
    {
      title: 'Task Management App',
      description:
        'Collaborative task tracking application with real-time updates',
      technologies: ['React', 'Firebase', 'Redux'],
      link: '#',
    },
    {
      title: 'Weather Forecast App',
      description: 'Responsive weather application using public APIs',
      technologies: ['React', 'API Integration'],
      link: '#',
    },
  ]

  return (
    <div className='projects-section'>
      <h2 className='projects-section__title'>Projects</h2>
      <div className='projects-section__grid'>
        {projects.map((project, index) => (
          <div key={index} className='projects-section__card'>
            <h3 className='projects-section__card-title'>{project.title}</h3>
            <p className='projects-section__card-description'>
              {project.description}
            </p>
            <div className='projects-section__technologies'>
              {project.technologies.map((tech) => (
                <span key={tech} className='projects-section__tech-tag'>
                  {tech}
                </span>
              ))}
            </div>
            <a href={project.link} className='projects-section__link'>
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
