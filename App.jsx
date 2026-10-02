import { useEffect, useState } from 'react'
import './App.css'

const currentYear = new Date().getFullYear()

const projects = [
  {
    number: '01',
    name: 'Quizzes',
    tags: ['React', 'JavaScript', 'HTML', 'CSS'],
    href: 'https://github.com/bziouizineb2008/QUIZZ-APP',
    preview: 'quiz',
  },
  {
    number: '02',
    name: 'Chatbot',
    tags: ['React', 'JavaScript', 'HTML', 'CSS'],
    href: 'https://github.com/bziouizineb2008/CHATBOT',
    preview: 'chat',
  },
  {
    number: '03',
    name: 'E-commerce Website',
    tags: ['React', 'JavaScript', 'HTML', 'CSS'],
    href: 'https://github.com/bziouizineb2008/E-COMMERCE',
    preview: 'shop',
  },
  {
    number: '04',
    name: 'Weather Website',
    tags: ['React', 'JavaScript', 'HTML', 'CSS'],
    href: 'https://github.com/bziouizineb2008/WEATHER-APP',
    preview: 'weather',
  },
]

const skills = [
  { name: 'HTML5', group: 'Foundation', level: 'Comfortable' },
  { name: 'CSS3', group: 'Foundation', level: 'Comfortable' },
  { name: 'JavaScript', group: 'Language', level: 'Comfortable' },
  { name: 'React', group: 'Framework', level: 'Comfortable' },
  { name: 'Tailwind CSS', group: 'Styling', level: 'Comfortable' },
  { name: 'TypeScript', group: 'Learning', level: 'In progress' },
]

const certifications = [
  {
    title: 'Responsive Web Design',
    description: 'HTML, modern CSS, responsive layouts, and accessibility.',
    href: '/certificates/responsive-web-design.pdf',
  },
  {
    title: 'Front End Development Libraries',
    description: 'JavaScript libraries, React, and interactive interfaces.',
    href: '/certificates/front-end-development-libraries.pdf',
  },
  {
    title: 'JavaScript Algorithms and Data Structures',
    description: 'JavaScript fundamentals, algorithms, and problem solving.',
    href: '/certificates/javascript-algorithms-and-data-structures.pdf',
  },
  {
    title: 'Legacy Front End',
    description: 'A foundation in front-end development and web technologies.',
    href: '/certificates/legacy-front-end.pdf',
  },
]

function ArrowIcon() {
  return (
    <svg className="arrow-icon" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M4 12 12 4M5 4h7v7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function SocialIcon({ name }) {
  if (name === 'github') {
    return (
      <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.08c-3.1.67-3.76-1.31-3.76-1.31-.51-1.29-1.24-1.63-1.24-1.63-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 .1.76 2.08 3.23 1.53.1-.73.39-1.22.7-1.5-2.47-.28-5.06-1.23-5.06-5.5 0-1.22.44-2.21 1.16-2.99-.12-.29-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.56 10.56 0 0 1 5.55 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.66.11 2.95.72.78 1.16 1.77 1.16 2.99 0 4.28-2.6 5.22-5.08 5.49.4.35.75 1.02.75 2.06v3.06c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
      </svg>
    )
  }

  if (name === 'linkedin') {
    return (
      <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M5.2 3.2a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4ZM3.3 9h3.8v12H3.3V9Zm6.2 0h3.6v1.64h.05A3.95 3.95 0 0 1 16.7 8.7c3.87 0 4.59 2.55 4.59 5.87V21h-3.77v-5.7c0-1.36-.02-3.11-1.9-3.11-1.9 0-2.2 1.48-2.2 3.01V21H9.5V9Z" />
      </svg>
    )
  }

  return (
    <svg className="social-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ThemeIcon({ theme }) {
  if (theme === 'dark') {
    return (
      <svg className="theme-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="3.8" stroke="currentColor" strokeWidth="1.7" />
        <path d="M12 2.5v2m0 15v2m9.5-9.5h-2m-15 0h-2m16.2-6.7-1.4 1.4M6.7 17.3l-1.4 1.4m13.4 0-1.4-1.4M6.7 6.7 5.3 5.3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    )
  }

  return (
    <svg className="theme-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M20.2 15.3A8.7 8.7 0 0 1 8.7 3.8 8.8 8.8 0 1 0 20.2 15.3Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function gmailComposeUrl(subject = '', body = '') {
  const query = new URLSearchParams({
    view: 'cm',
    fs: '1',
    to: 'zineb.bzioui01@gmail.com',
    su: subject,
    body,
  })

  return `https://mail.google.com/mail/?${query.toString()}`
}

function ProjectPreview({ type }) {
  if (type === 'quiz') {
    return (
      <div className="preview-screen quiz-screen" aria-hidden="true">
        <div className="preview-topline"><span>QUIZ / 04</span><span>● ● ●</span></div>
        <div className="quiz-card">
          <span className="preview-kicker">QUESTION 02</span>
          <strong>Ready for a<br />quick challenge?</strong>
          <div className="quiz-answer">A little curiosity <span>↗</span></div>
          <div className="quiz-answer muted-answer">Let's find out</div>
        </div>
      </div>
    )
  }

  if (type === 'chat') {
    return (
      <div className="preview-screen chat-screen" aria-hidden="true">
        <div className="chat-sidebar"><span className="chat-mark">✳</span><i /><i /><i /></div>
        <div className="chat-content">
          <span className="preview-kicker">A NEW CONVERSATION</span>
          <div className="chat-greeting">Hey there!<br />What can I help you explore?</div>
          <div className="chat-reply">Can you tell me something interesting?</div>
          <div className="chat-input">Write a message <span>↑</span></div>
        </div>
      </div>
    )
  }

  if (type === 'shop') {
    return (
      <div className="preview-screen shop-screen" aria-hidden="true">
        <div className="preview-topline"><span>OBJECTS & CO.</span><span>SHOP&nbsp;&nbsp; ABOUT&nbsp;&nbsp; ♡</span></div>
        <div className="shop-heading">Made for<br /><em>everyday.</em></div>
        <div className="shop-products">
          <div className="product product-one"><span>✳</span><small>THE DAILY TOTE</small></div>
          <div className="product product-two"><span>◒</span><small>STUDIO VASE</small></div>
          <div className="product product-three"><span>◉</span><small>WEEKEND BAG</small></div>
        </div>
      </div>
    )
  }

  return (
    <div className="preview-screen weather-screen" aria-hidden="true">
      <div className="preview-topline"><span>MONDAY, 28 APRIL</span><span>⌕</span></div>
      <div className="weather-location">SALÉ, MOROCCO <span>↗</span></div>
      <div className="weather-main"><strong>24°</strong><span>☼</span><p>Clear skies<br />A lovely day to get outside.</p></div>
      <div className="weather-forecast">
        <span>NOW <b>☼</b> 24°</span><span>12 PM <b>☀</b> 26°</span><span>3 PM <b>☼</b> 25°</span><span>6 PM <b>◒</b> 21°</span>
      </div>
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [formStatus, setFormStatus] = useState('')
  const [theme, setTheme] = useState(() => (
    window.localStorage.getItem('portfolio-theme') === 'dark' ? 'dark' : 'light'
  ))

  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.style.colorScheme = theme
    window.localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  function handleContactSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const gmailUrl = gmailComposeUrl(
      `Portfolio inquiry: ${formData.get('topic')}`,
      `Hi Zineb,\n\n${formData.get('message')}\n\nFrom: ${formData.get('name')} (${formData.get('email')})`,
    )
    const composeWindow = window.open(gmailUrl, '_blank')

    if (composeWindow) {
      composeWindow.opener = null
      setFormStatus('Gmail opened in a new tab with your message ready to send.')
    } else {
      setFormStatus('Opening Gmail with your message.')
      window.location.assign(gmailUrl)
    }
  }

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Zineb Bzioui, home">
          <span className="brand-mark">ZB</span>
          <span>Zineb Bzioui</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>
        <nav className={`main-nav${menuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#education" onClick={closeMenu}>Learning</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
        <a className="header-resume" href="/resume.pdf" download="Zineb-Bzioui-Resume.pdf" aria-label="Download Zineb's résumé">⇩ <span>Download résumé</span></a>
        <button
          className="theme-toggle"
          type="button"
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          aria-pressed={theme === 'dark'}
          title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          onClick={() => setTheme((currentTheme) => currentTheme === 'light' ? 'dark' : 'light')}
        >
          <ThemeIcon theme={theme} />
        </button>
        <a className="header-cta" href="#contact" onClick={closeMenu}>Hire me <ArrowIcon /></a>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> OPEN TO JUNIOR FRONT-END ROLES</p>
            <h1>Hi, I&apos;m Zineb.<br /><span>Junior Front-End</span><br />Developer</h1>
            <p className="hero-description">
              Junior Front-End Developer working with JavaScript, HTML/CSS and React to deliver
              exceptional customer experiences.
            </p>
            <div className="hero-actions">
                <a className="button button-primary" href="#projects">View my work <ArrowIcon /></a>
                <a className="button button-secondary" href="/resume.pdf" download="Zineb-Bzioui-Resume.pdf">↓ Download résumé</a>
            </div>
            <div className="hero-socials">
              <span>FIND ME</span>
              <a href="https://github.com/bziouizineb2008" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile"><SocialIcon name="github" /></a>
              <a href="https://www.linkedin.com/in/zineb-bzioui-892164427/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile"><SocialIcon name="linkedin" /></a>
              <a href={gmailComposeUrl('Hello Zineb', '')} target="_blank" rel="noopener noreferrer" aria-label="Email Zineb with Gmail"><SocialIcon name="email" /></a>
            </div>
          </div>

          <div className="hero-art" aria-label="Front-end developer illustration">
            <div className="art-grid" />
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="art-label">OPEN TO WORK<br />JUNIOR FRONT-END ROLES</div>
            <div className="code-window">
              <div className="window-bar"><span /><span /><span /><small>zineb.dev</small></div>
              <pre><span className="code-purple">const</span> zineb = {'{'}{'\n'}  role: <span className="code-blue">&apos;developer&apos;</span>,{'\n'}  focus: <span className="code-blue">&apos;the details&apos;</span>,{'\n'}  coffee: <span className="code-orange">true</span>{'\n'}{'}'}<span className="code-cursor">_</span></pre>
              <div className="code-footer"><span>HTML&nbsp; / &nbsp;CSS&nbsp; / &nbsp;JS</span><span>✳ &nbsp;BUILDING WITH CARE</span></div>
            </div>
            <div className="art-stamp"><span>✳</span><span>CURIOUS<br />BY NATURE</span></div>
            <div className="art-coordinate">34°02&apos;N&nbsp; · &nbsp;6°48&apos;W</div>
          </div>
        </section>

        <section className="stats-strip" aria-label="At a glance">
          <div><strong>60+</strong><span>Projects built</span></div>
          <div><strong>Always</strong><span>Learning &amp; growing</span></div>
          <div><strong>25+</strong><span>Tools &amp; technologies</span></div>
          <div><strong>100%</strong><span>Remote-ready</span></div>
        </section>

        <section className="about-section section-wrap" id="about">
          <div className="section-intro">
            <p className="eyebrow">ABOUT ME</p>
            <h2>A developer who cares about<br />the details <span>you feel.</span></h2>
            <p className="section-copy">
              Junior Front-End Developer working with JavaScript, HTML/CSS and React to deliver
              exceptional customer experiences.
            </p>
            <p className="section-copy">
              Adept at contributing to a highly collaborative work environment, finding
              solutions, and determining customer satisfaction.
            </p>
            <div className="about-skills" aria-label="Technologies">
              {['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'TypeScript (learning)'].map((skill) => <span key={skill}>{skill}</span>)}
            </div>
          </div>
          <aside className="about-card">
            <div className="about-card-top"><span className="about-monogram">Z.</span><span>QUICK FACTS</span></div>
            <div className="fact-row"><span className="fact-index">01</span><div><small>BASED IN</small><strong>Salé, Morocco</strong></div></div>
            <div className="fact-row"><span className="fact-index">02</span><div><small>LOOKING FOR</small><strong>Junior front-end opportunities</strong></div></div>
            <div className="fact-row"><span className="fact-index">03</span><div><small>LANGUAGES</small><strong>Arabic · French · English</strong></div></div>
            <div className="fact-row"><span className="fact-index">04</span><div><small>FAVOURITE PART</small><strong>Making ideas feel intuitive</strong></div></div>
            <a className="about-card-link" href="https://www.linkedin.com/in/zineb-bzioui-892164427/" target="_blank" rel="noopener noreferrer">Connect on LinkedIn <ArrowIcon /></a>
          </aside>
        </section>

        <section className="skills-section" id="skills">
          <div className="section-wrap">
            <div className="section-heading">
              <div><p className="eyebrow">SKILLS &amp; TOOLS</p><h2>My current toolkit</h2></div>
              <p className="section-copy">Here is what I actually build with, plus the one I am still getting the hang of.</p>
            </div>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <article className="skill-card" key={skill.name}>
                  <div className="skill-card-top"><span>0{index + 1}</span><span>{skill.group}</span></div>
                  <h3>{skill.name}</h3>
                  <span className={`skill-level${skill.level === 'In progress' ? ' learning' : ''}`}><span />{skill.level}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="projects-section section-wrap" id="projects">
          <div className="section-heading projects-heading">
            <div><p className="eyebrow">SELECTED WORK</p><h2>Projects I have built</h2></div>
            <p className="section-copy">Best of my projects</p>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <article className={`project-card project-${project.preview}`} key={project.number}>
                <a className="project-preview-link" href={project.href} target="_blank" rel="noreferrer" aria-label={`View ${project.name} on GitHub`}>
                  <ProjectPreview type={project.preview} />
                </a>
                <div className="project-details">
                  <h3><a href={project.href} target="_blank" rel="noreferrer">{project.name}</a></h3>
                  <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </div>
              </article>
            ))}
          </div>
          <div className="all-projects">
            <span>MORE CODE, MORE CURIOSITY</span>
            <a className="text-link" href="https://github.com/bziouizineb2008" target="_blank" rel="noreferrer">Visit my GitHub profile <ArrowIcon /></a>
          </div>
        </section>

        <section className="education-section" id="education">
          <div className="section-wrap education-layout">
            <div className="education-intro">
              <p className="eyebrow">EDUCATION &amp; LEARNING</p>
              <h2>Certified and looking<br />for my <span>first role.</span></h2>
              <p className="section-copy">
                I am at the start of my career — no job history yet, but plenty of practice
                behind me and four freeCodeCamp certifications to show for it. Right now I am
                looking for a junior front-end role where I can keep learning and contribute
                from day one.
              </p>
            </div>
            <div className="cert-list">
              {certifications.map((certificate, index) => (
                <article className="cert-item" key={certificate.title}>
                  <span className="cert-number">0{index + 1}</span>
                  <div><span className="cert-provider">freeCodeCamp / CERTIFICATION</span><h3><a href={certificate.href} target="_blank" rel="noreferrer">{certificate.title}</a></h3><p>{certificate.description}</p></div>
                  <a className="cert-check" href={certificate.href} target="_blank" rel="noreferrer" aria-label={`View ${certificate.title} certificate`}>↗</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <div className="contact-copy">
            <p className="eyebrow">GET IN TOUCH</p>
            <h2>Let&apos;s build<br /><span>something together.</span></h2>
            <p className="section-copy">
              I am looking for my first junior front-end role right now, and I am happy to take
              on freelance projects too. Drop me a message and I will get back to you within a
              day or two.
            </p>
            <a className="contact-email" href={gmailComposeUrl('Hello Zineb', '')} target="_blank" rel="noopener noreferrer"><strong>Email</strong><span>zineb.bzioui01@gmail.com</span><ArrowIcon /></a>
            <div className="contact-location"><strong>Location</strong><span>Salé, Morocco</span></div>
            <div className="contact-socials">
              <a href="https://github.com/bziouizineb2008" target="_blank" rel="noopener noreferrer"><SocialIcon name="github" /> GitHub <ArrowIcon /></a>
              <a href="https://www.linkedin.com/in/zineb-bzioui-892164427/" target="_blank" rel="noopener noreferrer"><SocialIcon name="linkedin" /> LinkedIn <ArrowIcon /></a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleContactSubmit}>
            <p className="form-heading">SEND A NOTE <span>✳</span></p>
            <label htmlFor="name">Your name</label>
            <input id="name" name="name" type="text" placeholder="Jane Doe" autoComplete="name" required />
            <label htmlFor="email">Email address</label>
            <input id="email" name="email" type="email" placeholder="jane@company.com" autoComplete="email" required />
            <label htmlFor="topic">What&apos;s this about?</label>
            <select id="topic" name="topic" defaultValue="A job opportunity">
              <option>A job opportunity</option>
              <option>A freelance project</option>
              <option>Just saying hello</option>
            </select>
            <label htmlFor="message">Your message</label>
            <textarea id="message" name="message" placeholder="Tell me a bit about it..." rows="4" required />
            <button className="button button-primary form-submit" type="submit">Send message <ArrowIcon /></button>
            <p className="form-status" role="status">{formStatus}</p>
            <p className="form-footnote">This opens Gmail with your message — it is not stored on this website.</p>
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-about">
            <a className="brand footer-brand" href="#home"><span className="brand-mark">ZB</span><span>Zineb Bzioui</span></a>
            <p>Junior front-end developer in Salé, Morocco.<br />Building thoughtful things for the web.</p>
            <span className="footer-availability"><span className="status-dot" /> OPEN TO OPPORTUNITIES</span>
          </div>
          <div className="footer-column"><span>EXPLORE</span><a href="#about">About</a><a href="#skills">Skills</a><a href="#projects">Projects</a><a href="#education">Learning</a></div>
          <div className="footer-column"><span>SAY HELLO</span><a href={gmailComposeUrl('Hello Zineb', '')} target="_blank" rel="noopener noreferrer">Email <ArrowIcon /></a><a href="https://www.linkedin.com/in/zineb-bzioui-892164427/" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowIcon /></a><a href="https://github.com/bziouizineb2008" target="_blank" rel="noopener noreferrer">GitHub <ArrowIcon /></a></div>
        </div>
        <div className="footer-bottom"><span>© {currentYear} Zineb Bzioui. Made with care.</span><a href="#home">Back to top ↑</a></div>
      </footer>
    </>
  )
}

export default App
