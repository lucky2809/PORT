import React from 'react'

function Contact() {
  return (
    <>
    <div className='py-9'>
        <h1 className='flex flex-wrap justify-center align-middle items-center text-3xl font-semibold'>Contact Me</h1>
      </div>
    <div className='px-20 py-10 w-full  flex gap-6 '>
      <div className='right w-full flex flex-col gap-4'>
        <h1 className='text-3xl gap-4'>Ready To Personalize Your Space ?</h1>
        <span className=''>
        <p className=''>"Have a project in mind? Let’s build something amazing together!"
        If you're available for local work or remote work, mention your location or your willingness to work remotely.</p>
        </span>
      </div>
      <div className='left w-full flex flex-col gap-3'>
        <span className='flex flex-row w-full'>
        <input className='text-black w-full border-l-2 border-b-2 p-2' type="text" placeholder='Name' />
        <input className='text-black w-full border-l-2 border-b-2 p-2' type="text" placeholder='Email' />
        </span>
        <span className='flex flex-col w-full gap-3'>
        <input className='text-black w-full border-l-2 border-b-2 p-2' type="text" placeholder='Phone Number' />
        <input className='text-black w-full border-l-2 border-b-2 p-2' type="text" placeholder='Anything we should know ?' />
        </span>
      </div>
    </div>
    </>
  )
}

export default Contact