import Head from 'next/head'
import Header from '../components/header'
import Demo from '../components/demo'
import Projects from '../components/githubprojects'
import About from '../components/about'

export default function Home() {
  return (
    <>
      <Head>
        <title>Daniel Berezin</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header
        menuItems={[
          { href: '#about', title: 'About' },
          { href: '/daniel-berezin-software-engineer.pdf', title: 'Resume' },
          { href: '#portfolio', title: 'Portfolio' },
        ]}
      />

      <main>
        <div className='container'>
          <div className='overlay'>
            <h1>Programmer</h1>
            <h1>Web Developer</h1>
            <h1>World Builder</h1>
          </div>
        </div>
        <Demo />
        <About />
        <Projects />
      </main>
      <footer>gello</footer>
    </>
  )
}
