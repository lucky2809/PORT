import React from 'react'
import { Icon } from "@iconify/react";
function Skill() {
  return (
    <div className='px-20'>
      <div className="con py-5 w-full">
        <p className='flex flex-wrap justify-center align-middle items-center text-3xl font-semibold'>Our Technology</p>
      </div>

      <div className='w-full flex gap-4 '>
        <div className=' w-[60%] flex flex-col justify-center'>
          <div className=' w-[80%] flex flex-col gap-3'>
            <p className='p-2 flex justify-between items-center border border-black rounded-[6px]'>HTML/CSS <span><Icon className="" width={30} icon={"icon-park:html-five"} /></span></p>
            <p className='p-2 flex justify-between items-center border border-black rounded-[6px]'>TailwindCss <span><Icon className="" width={30} icon={"skill-icons:tailwindcss-dark"} /></span></p>
            <p className='p-2 flex justify-between items-center border border-black rounded-[6px]'>React.js <span><Icon className="" width={30} icon={"skill-icons:react-dark"} /></span></p>
            <p className='p-2 flex justify-between items-center border border-black rounded-[6px]'>MongoDB <span><Icon className="" width={30} icon={"skill-icons:mongodb"} /></span></p>
            <p className='p-2 flex justify-between items-center border border-black rounded-[6px]'>Express <span><Icon className="" width={30} icon={"devicon:express"} /></span></p>
            <p className='p-2 flex justify-between items-center border border-black rounded-[6px]'>Node.js <span><Icon className="" width={30} icon={"la:node"} /></span></p>
            <p className='p-2 flex justify-between items-center border border-black rounded-[6px]'>JAVASCRIPT <span><Icon className="" width={30} icon={"tabler:brand-javascript"} /></span></p>
          </div>
        </div>


        <div className='w-full border border-black flex flex-col align-middle justify-center p-7 gap-5 rounded-[6px]'>
          <div className=''> <Icon className="" width={45} icon={"simple-icons:nextui"} /> </div>
          <h1 className='text-2xl font-semibold font-serif'>UI/UX Desighner</h1>
          <p className=' font-serif'>
            "I craft intuitive, user-centered digital experiences by designing user interfaces and optimizing user journeys. My work blends creativity and usability to enhance product functionality, aesthetics, and overall user satisfaction."</p>
            <div className=''>
              <button className='border border-amber-600 p-2 w-full rounded-[6px]'>See More</button>
            </div>
        </div>
        <div className='w-full border border-black flex flex-col align-middle justify-center p-7 gap-5 rounded-[6px]'>
          <div className=''><Icon className="" width={45} icon={"hugeicons:laptop-programming"} /></div>
          <h1 className='text-2xl font-semibold font-serif'>Full Stack Devloper</h1>
          <p className=' font-serif'>
          "As a full-stack developer, I design, build, and maintain both front-end and back-end systems, ensuring seamless user experiences, robust server functionality, and efficient database management for scalable web applications."</p>
            <div className=''>
              <button className='border border-amber-600 p-2 w-full rounded-[6px]'>See More</button>
            </div>
        </div>


      </div>

    </div>
  )
}

export default Skill