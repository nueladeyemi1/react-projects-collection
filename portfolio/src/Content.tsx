import React, { useState } from 'react'

// SVG Icons
const HomeIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' />
    <polyline points='9 22 9 12 15 12 15 22' />
  </svg>
)

const UserIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2' />
    <circle cx='12' cy='7' r='4' />
  </svg>
)

const BriefcaseIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <rect x='2' y='7' width='20' height='14' rx='2' ry='2' />
    <path d='M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16' />
  </svg>
)

const MailIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <rect x='2' y='4' width='20' height='16' rx='2' />
    <path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7' />
  </svg>
)

const GitHubIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='32'
    height='32'
    viewBox='0 0 24 24'
    fill='currentColor'
  >
    <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.607-2.805 5.624-5.475 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
  </svg>
)

const LinkedinIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='32'
    height='32'
    viewBox='0 0 24 24'
    fill='currentColor'
  >
    <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
  </svg>
)

// Main App Component
const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <div className='min-h-screen bg-gray-100 flex flex-col'>
      {/* Navigation */}
      <nav className='fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50'>
        <div className='flex justify-around p-4'>
          {[
            { section: 'home', Icon: HomeIcon },
            { section: 'about', Icon: UserIcon },
            { section: 'projects', Icon: BriefcaseIcon },
            { section: 'contact', Icon: MailIcon },
          ].map(({ section, Icon }) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`flex flex-col items-center ${
                activeSection === section ? 'text-blue-600' : 'text-gray-500'
              }`}
            >
              <Icon />
              <span className='text-xs mt-1 capitalize'>{section}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content Area */}
      <main className='flex-grow container mx-auto px-4 pt-8 pb-20'>
        {activeSection === 'home' && <HomeSection />}
        {activeSection === 'about' && <AboutSection />}
        {activeSection === 'projects' && <ProjectsSection />}
        {activeSection === 'contact' && <ContactSection />}
      </main>
    </div>
  )
}

// Home Section
const HomeSection = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center text-center'>
      <img
        src='/api/placeholder/200/200'
        alt='Profile'
        className='rounded-full w-48 h-48 mb-6 object-cover'
      />
      <h1 className='text-4xl font-bold mb-4'>John Doe</h1>
      <p className='text-xl text-gray-600 mb-6'>
        Full Stack Developer | Tech Enthusiast | Problem Solver
      </p>
      <div className='flex space-x-4'>
        <a
          href='https://github.com/yourusername'
          target='_blank'
          rel='noopener noreferrer'
          className='text-gray-700 hover:text-black'
        >
          <GitHubIcon />
        </a>
        <a
          href='https://linkedin.com/in/yourusername'
          target='_blank'
          rel='noopener noreferrer'
          className='text-gray-700 hover:text-blue-600'
        >
          <LinkedinIcon />
        </a>
      </div>
    </div>
  )
}

// About Section
const AboutSection = () => {
  return (
    <div className='max-w-2xl mx-auto'>
      <h2 className='text-3xl font-bold mb-6 text-center bg-red-600'>
        About Me
      </h2>
      <div className='bg-white p-8 rounded-lg shadow-md'>
        <p className='text-gray-700 mb-4'>
          Hello! I'm a passionate developer with expertise in building web
          applications using modern technologies. I love creating elegant
          solutions to complex problems and continuously learning new skills.
        </p>
        <h3 className='text-xl font-semibold mt-6 mb-4'>Skills</h3>
        <div className='flex flex-wrap gap-2'>
          {['React', 'JavaScript', 'Node.js', 'Python', 'Docker', 'AWS'].map(
            (skill) => (
              <span
                key={skill}
                className='bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm'
              >
                {skill}
              </span>
            )
          )}
        </div>
      </div>
    </div>
  )
}

// import './ProjectsSection.scss'

const ProjectsSection = () => {
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

// Projects Section
// const ProjectsSection = () => {
//   const projects = [
//     {
//       title: 'E-Commerce Platform',
//       description: 'Full-stack e-commerce application with payment integration',
//       technologies: ['React', 'Node.js', 'MongoDB'],
//       link: '#',
//     },
//     {
//       title: 'Task Management App',
//       description:
//         'Collaborative task tracking application with real-time updates',
//       technologies: ['React', 'Firebase', 'Redux'],
//       link: '#',
//     },
//     {
//       title: 'Weather Forecast App',
//       description: 'Responsive weather application using public APIs',
//       technologies: ['React', 'API Integration'],
//       link: '#',
//     },
//   ]

//   return (
//     <div>
//       <h2 className='text-3xl font-bold mb-8 text-center'>Projects</h2>
//       <div className='grid md:grid-cols-3 gap-6'>
//         {projects.map((project, index) => (
//           <div
//             key={index}
//             className='bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow'
//           >
//             <h3 className='text-xl font-semibold mb-3'>{project.title}</h3>
//             <p className='text-gray-600 mb-4'>{project.description}</p>
//             <div className='flex flex-wrap gap-2 mb-4'>
//               {project.technologies.map((tech) => (
//                 <span
//                   key={tech}
//                   className='bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs'
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </div>
//             <a href={project.link} className='text-blue-600 hover:underline'>
//               View Project
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// Contact Section
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add form submission logic here
    alert(
      'Message sent! (Note: This is a demo - actual submission not implemented)'
    )
  }

  return (
    <div className='max-w-md mx-auto'>
      <h2 className='text-3xl font-bold mb-8 text-center'>Contact Me</h2>
      <form
        onSubmit={handleSubmit}
        className='bg-white p-8 rounded-lg shadow-md'
      >
        <div className='mb-4'>
          <label htmlFor='name' className='block text-gray-700 mb-2'>
            Name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            required
            className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='email' className='block text-gray-700 mb-2'>
            Email
          </label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
            className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='message' className='block text-gray-700 mb-2'>
            Message
          </label>
          <textarea
            id='message'
            name='message'
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          ></textarea>
        </div>
        <button
          type='submit'
          className='w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors'
        >
          Send Message
        </button>
      </form>
    </div>
  )
}

export default Portfolio
