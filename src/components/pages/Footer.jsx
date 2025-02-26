import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

function Footer() {
  return (
    <div className='px-20 w-full bg-black'>
      <div className='p-10 text-white flex gap-6 border-b-2 border-white '>

        <div className='left w-full m-3.5'>
        <img src="/img/footerloge.png" alt="" srcset="" className='object-cover bg border-2 border-white h-64 w-64' />
        </div>

        <div className='right w-full  flex flex-col gap-11'>
          <h1 className='text-4xl font-semibold font-sans'>PORTFOLIO</h1>
          <div className='w-full flex'>
            <div className='w-full flex flex-col gap-6  py-4 px-2'>
              <h1 className='text-[22px]'>About Us</h1>
              <span className='flex flex-col gap-1 text-gray-400'>
              <p>Mission</p>
              <p>Team</p>
              <p>Newseletter</p>
              </span>
            </div>
            <div className='w-full flex flex-col gap-6 py-4 px-2'>
              <h1 className='text-[22px]'>Support</h1>
              <span className='flex flex-col gap-1 text-gray-400'>
              <p>Contact</p>
              <p>Refund Policy</p>
              <p>FAQ's</p>
              </span>
            </div>
            <div className='w-full flex flex-col gap-6 py-4 px-2'>
              <h1 className='text-[22px]'>Social</h1>
              <span className='flex flex-col gap-1 text-gray-400'>
              <p>Instagram</p>
              <p>Linkedin</p>
              <p>Twitter</p>
              </span>
            </div>
          </div>

        </div>

      </div>

      <div className='text-white w-full flex py-6 items-center'>

        <div className='left w-full flex'>
          <div className='w-full'>
          <p>
            Copyright @ Portfolio
          </p>
          </div>
          <div className='w-full'>
          <p>
            Terms of Service
          </p>
          </div>
        </div>

        <div className='right w-full flex justify-end gap-2 items-center'>
        <p>
          Bact To Top
        </p>
        <span><Icon className="" width={25} icon={"fluent-emoji-high-contrast:up-arrow"} /></span>
        </div>

      </div>

    </div>
  )
}

export default Footer