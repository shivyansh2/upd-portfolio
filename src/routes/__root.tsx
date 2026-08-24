import { HeadContent, Link, Scripts, createRootRoute } from '@tanstack/react-router'
import { ArrowDownToLine, Mail } from 'lucide-react'

import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Shivyansh Thakur — Front-End Developer' },
      {
        name: 'description',
        content:
          'Portfolio of Shivyansh Thakur, a front-end developer crafting responsive, accessible interfaces with React, JavaScript, HTML, and CSS.',
      },
      { property: 'og:title', content: 'Shivyansh Thakur — Front-End Developer' },
      {
        property: 'og:description',
        content: 'Selected interface work, technical skills, and resume.',
      },
      { property: 'og:type', content: 'website' },
    ],
  }),
  shellComponent: RootDocument,
})

const navigation = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'Resume', to: '/resume' },
  { label: 'Contact', to: '/contact' },
] as const

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <div className="site-shell">
          <header className="site-header">
            <Link to="/" className="brand" aria-label="Shivyansh Thakur home">
              <span className="brand-mark">ST</span>
              <span className="brand-name">Shivyansh Thakur</span>
            </Link>
            <nav className="site-nav" aria-label="Primary navigation">
              {navigation.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  activeOptions={{ exact: item.to === '/' }}
                  activeProps={{ className: 'nav-link nav-link-active' }}
                  inactiveProps={{ className: 'nav-link' }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <a className="header-resume" href="/Shivyansh-Thakur-Resume.pdf" download>
              Resume <ArrowDownToLine size={15} aria-hidden="true" />
            </a>
          </header>

          <main>{children}</main>

          <footer className="site-footer">
            <div>
              <span className="footer-kicker">Open to front-end opportunities</span>
              <p>Let’s turn a thoughtful idea into a clear, useful interface.</p>
            </div>
            <a href="mailto:shivyanshthakur64@gmail.com">
              <Mail size={17} aria-hidden="true" />
              shivyanshthakur64@gmail.com
            </a>
          </footer>
        </div>
        <Scripts />
      </body>
    </html>
  )
}
