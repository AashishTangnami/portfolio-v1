import Head from 'next/head';
import Navbar from '../components/Navbar';
import Main from '../components/Main';
// import About from '../components/About';
// import Contact from '../components/Contact';
// import Projects from '../components/Projects';
// import Skills from '../components/Projects';

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          Aashish Tangnami
        </title>
      </Head>
      <Navbar />
      <Main />
      {/* <About />
      <Projects />
      <Skills />
      <Contact /> */}
    </div>
    
  )
}
