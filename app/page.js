import React from 'react'
import Container from './components/Container'
import SpecialAnchorTag from './components/SpecialAnchorTag'
import { Github, Instagram, Mail, Sparkle } from 'lucide-react'
import Link from 'next/link'
import NavItems from './components/NavItems'

const page = () => {
  return (
    <Container className='flex flex-col items-start justify-center h-screen'>
      <div className='flex items-center justify-between w-full'>
        <h1 className='md:text-xl text-lg font-medium text-darkTxt'>jatin singh</h1>
        <NavItems />
      </div>
      <div className='md:text-lg text-md flex flex-col gap-4 py-4 text-lightTxt'>
        <div>
          <p>React Developer based in Jammu, India.</p>
        </div>
        <div>
          <p>Currently, working for <SpecialAnchorTag newTab={true} href="https://botgauge.com/">BotGauge</SpecialAnchorTag>, developing</p>
          <p>web applications with React.</p>
        </div>
        <div>
          <p>Throughout my journey, I've also gained</p>
          <p>experience with various other <SpecialAnchorTag href='/expertise'>technologies</SpecialAnchorTag>.</p>
        </div>
        <div>
          <p>When I'm not coding, I enjoy reading, writing, and</p>
          <p>exploring the outdoors.</p>
        </div>
        <div className='mt-4'>
          <p>Explore some of my recent <SpecialAnchorTag href="/work" highlight={true}>work</SpecialAnchorTag>, or feel free to reach out.</p>
        </div>
      </div>
      <div className='flex gap-5 border-[2px] border-lightTxt py-2 px-3 rounded-full'>
        <Link className="text-lightTxt hover:text-darkTxt" target='_blank' href='https://www.instagram.com/vex.ax/'>
          <Instagram size={17} />
        </Link>
        <Link className="text-lightTxt hover:text-darkTxt" target='_blank' href='mailto:jatinsingh.jsin@gmail.com'>
          <Mail size={17} />
        </Link>
        <Link className="text-lightTxt hover:text-darkTxt" target='_blank' href='https://github.com/the-jatin-singh'>
          <Github size={17} />
        </Link>
      </div>
    </Container>
  )
}

export default page