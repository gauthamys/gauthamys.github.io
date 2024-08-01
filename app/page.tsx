'use client'

import { useMotionValueEvent, useScroll, motion } from "framer-motion"

type Project = {
  title: string,
  description: string,
  link?: string,
  key: number
}

const projects: Project[] = [
  {
    title: 'Numerite',
    description: "An automatic word problem solver for middle school math word problems using Deep Learning and Linguistic rules.",
    link: 'https://www.github.com/aditikilledar/NLP-Numerite-capstone-2022',
    key: 1
  },
  {
    title: 'gRPC vs Thrift Performance Analysis',
    description: 'Performed workload performance testing for gRPC and Thrift in 3 environments - Across VMs, Across Containers and Across Physical Machines',
    key: 2,
    link: 'https://github.com/AstroSkape/RPC_Perf'
  },
  {
    title: 'CT Scan Failure Prediction',
    description: 'GE Healthcare Hackathon 4th Place - Prediction model for CT Scan failure date, part-wise and machine-wise',
    key: 3,
    link: "https://github.com/gauthamys/hackelth"
  },
  {
    title: 'Cryptography-of-Things',
    description: 'IoT Edge devices like Raspberry Pis and ESP32s have very limited RAM and cannot perform heavy encryption algorithms and result in vulnerabilities, we developed a lightweight time based dynamic key encryption algorithm to be able to run on IoT devices',
    key: 4,
    link: "https://github.com/gauthamys/elecrypt1"
  },
  {
    title: 'Social Graph Extraction from Novels',
    description: "Using Graph Algorithms and NLP, we perform character interaction modelling as a graph, on which tasks such as centrality analysis and clustering reveal key insights about the storyline.",
    key: 5,
    link: "https://github.com/gauthamys/NAM_Assignments"
  },
  {
    title: 'Stream Machine Learning using Apache Spark',
    description: 'Performed batch processing on a stream of 10,000 tweets to perform clustering and sentiment analysis using 5 classification algorithms using MLLib and Spark',
    key: 6,
    link: "https://github.com/aditikilledar/spark-stream"
  }
]

function ProjectCard({project} : {project: Project}) {
  return(
    <div className="col-span-1 p-2 relative">
      <h1 className="text-4xl mb-2 font-mono"> {project.title} </h1>
      <p>{project.description}</p>
      <div className="flex flex-row-reverse">
      <a href={project.link ? project.link : ''} className="underline mt-4 font-mono text-blue-500 hover:underline-offset-4"> {project.link? 'link': ''}</a>
      </div>
      <p className="absolute top-0 right-0">{project.key}</p>
    </div>
  )
}

function Projects() {
  return (
    <div className="border-t-2 border-white border-dashed">
      <h1 className="text-5xl w-full mt-24 mb-4 font-mono">PROJECTS</h1>
      <div className="grid grid-cols-3 gap-4 mb-4 mr-4">
        {projects.map((project) => {
          return <ProjectCard project={project} key={project.key} />
        })}
      </div> 
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
      <NavItem href="#" text="/" />
      <NavItem href="#about" text="ABOUT ME" />
      <NavItem href="#projects" text="PROJECTS" />
      <NavItem href="#education" text="EDUCATION" />
      <NavItem href="#interests" text="INTERESTS" />
    </ul>
  )
}

function Identifier({name}: {name: string}){
  return (
    <div className="h-6 w-full" id={name}></div>
  )
}

function Education() {
  return (
    <div className="border-t-2 border-dashed border-white">
      <h1 className="text-5xl w-full mt-28 mb-4 font-mono">EDUCATION</h1>
      <div className="grid grid-cols-2">
        <div className="relative col-span-1">
          <div className="top-0 px-2 text-center bg-pink-500 font-mono">Master of Science, Computer Science</div>
          <div className="text-3xl font-mono px-1">UNIVERSITY OF ILLINOIS AT CHICAGO</div>
          <div className="absolute left-1 bottom-0 pr-1 font-mono">GPA: 4</div>
        </div>
        <div className="pb-10 relative col-span-1">
          <div className="top-0 px-2 text-center bg-blue-500 font-mono">Bachelor of Technology, Computer Science</div>
          <div className="text-3xl font-mono px-1">PES UNIVERSITY, BANGALORE</div>
          <div className="absolute right-2 bottom-0 font-mono">GPA: 8.38</div>
        </div>
      </div>
    </div>
  )
}

function About() {
  return (
    <div className="border-t-2 border-dashed border-white">
      <h1 className="text-5xl w-full mb-4 font-mono mt-20 ml-1">ABOUT</h1>
      <div className="mb-10 font-mono ml-1">
        {">"} I am a Masters Student at the <span className="underline underline-offset-4 text-pink-500">University of Illinois at Chicago</span> in Computer Science<br />
        {">"} I love building clean websites and I am fascinated deeply by large scale software architecture<br />
        {">"} I have 2+ years of professional experience in DevOps engineering and Backend Engineering<br />
        {">"} I am proficient in Java, Python, C++ and Javascript
      </div>
    </div>
  )
}

function Interests() {
  return(
    <div className="border-t-2 border-dashed border-white">
    <h1 className="text-5xl w-full mb-4 font-mono mt-20 ml-1">INTERESTS</h1>
      <div className="mb-10 font-mono ml-1 flex flex-row">
        <a href="https://www.instagram.com/ys.gautham/">
          {"> "}<span className="underline underline-offset-4 hover:underline-offset-8">Video Editing</span>{" <"}
        </a><br />
        <a href="https://www.instagram.com/ys.gautham/">{"> "}<span className="underline underline-offset-4 hover:underline-offset-8">Carnatic Violin</span>{" <"}</a><br />
        <a href="https://www.instagram.com/ys.gautham/">{"> "}<span className="underline underline-offset-4 hover:underline-offset-8">Soccer</span>{" <"}</a>

      </div>
    </div>
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
        <div className="col-span-1 border-b-2 border-white" style={{backgroundImage: "url(profile.png)", backgroundSize: "cover", backgroundPosition: "center"}}></div>
        <div className="col-span-6 border-white border-b-2 relative pl-3"> 
          <h1 className="text-6xl text-white absolute bottom-0 font-mono">GAUTHAM YS</h1>
          <p className="text-xl text-green-500 absolute top-full font-mono ml-[2px]">Full Stack Developer with experience in Web Development, Platform Engineering and NLP </p>
        </div>
      </div>
      <div className="row-span-3 grid grid-cols-7">
        <div className="col-span-1 border-white border-r-2 flex flex-row-reverse">
          <NavItems />
        </div>
        <div className="col-span-6 pt-2 pb-12 mb-12">
          <Identifier name={"about"} />
          <About />
          <Identifier name="projects" />
          <Projects />
          <Identifier name="education" />
          <Education />
          <Identifier name="interests" />
          <Interests />
        </div>
      </div>
    </div>
  );
}
