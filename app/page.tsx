'use client'

import { useMotionValueEvent, useScroll, motion } from "framer-motion"

type Project = {
  title: string,
  description: string,
  key: number
}

const projects: Project[] = [
  {
    title: 'Project',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu consequat diam, a lacinia felis. Nulla eget eros congue, hendrerit nisl eget, hendrerit tortor. Donec ullamcorper, dolor quis ornare eleifend, ligula erat facilisis justo, nec molestie est ipsum vitae tortor. Morbi molestie orci ipsum, eget elementum ligula blandit vitae. Cras ultrices turpis ac augue tristique condimentum. Etiam sagittis orci vel nisi semper commodo. Maecenas mi purus, maximus eget vehicula nec, scelerisque sit amet urna. Vivamus aliquet nisl non dui aliquam rhoncus.",
    key: 1
  },
  {
    title: 'Project',
    description: 'description',
    key: 2
  },
  {
    title: 'Project',
    description: 'description',
    key: 3
  },
  {
    title: 'Project',
    description: 'description',
    key: 4
  },
  {
    title: 'Project',
    description: 'description',
    key: 5
  }
]

function ProjectCard({project} : {project: Project}) {
  return(
    <div className="col-span-1 bg-graph-paper p-2 relative">
      <h1 className="text-4xl mb-2 font-mono"> {project.title} </h1>
      <p>{project.description}</p>
      <p className="absolute top-0 right-0">{project.key}</p>
    </div>
  )
}

function Projects() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {projects.map((project) => {
        return <ProjectCard project={project} />
      })}
    </div>  
  )
}

function NavItem({href, text}: {href: string, text: string}) {
  return (
    <li className="my-1">
      <a href={href} className="font-mono text-md underline underline-offset-4 hover:underline-offset-8">{text}</a>
    </li>
  )
}

function NavItems() {
  return (
    <ul className="text-right border-b-2 border-white border-l-2 h-max sticky top-8 bg-graph-paper p-4">
      <NavItem href="#projects" text="PROJECTS" />
      <NavItem href="#education" text="EDUCATION" />
      <NavItem href="#projects" text="PROJECTS" />
      <NavItem href="#projects" text="PROJECTS" />
    </ul>
  )
}

export default function Home() {
  const {scrollYProgress} = useScroll();
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Page scroll: ", latest)
  })
  return (
    <div className="h-screen w-full bg-black text-white grid grid-rows-4">
      <div className="grid row-span-1 grid-cols-7">
        <div className="col-span-1 border-b-2 border-white" style={{backgroundImage: "url(profile.png)", backgroundSize: "cover", backgroundPosition: "center"}}>
          
        </div>
        <div className="col-span-6 border-white border-b-2 relative pl-3"> 
          <h1 className="text-6xl text-white absolute bottom-0 font-mono">GAUTHAM YELLIBOINA SATYANARAYANA</h1>
          <p className="text-xl text-green-500 absolute top-full font-mono ml-[2px]">Full Stack Developer with experience in Web Development, Platform Engineering and NLP </p>
        </div>
      </div>
      <div className="row-span-3 grid grid-cols-7">
        <div className="col-span-1 border-white border-r-2 flex flex-row-reverse">
          <NavItems />
        </div>
        <div className="col-span-6 pt-2 pb-12 px-[1%] my-12 border-y-2 border-white border-dashed">
          <h1 id="education" className="text-5xl w-full mb-4 font-mono">ABOUT</h1>
          <div className="mb-20">
            <ul>
              <li>
                1. PES University
              </li>
            </ul>
          </div>
          <h1 id="projects" className="text-5xl w-full mb-4 font-mono">PROJECTS</h1>
          <Projects />
        </div>
      </div>
    </div>
  );
}
