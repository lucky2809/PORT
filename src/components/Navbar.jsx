import { Icon } from '@iconify/react/dist/iconify.js'
import React, { useState } from 'react'

function Navbar() {
const [toggle, setToggle] = useState(false)
console.log(toggle)
    return (
        <div className='sticky top-0'>
            <div >
                <div className="nav font-semibold px-20 py-3.5 border-b border-grey bg-black text-white max-sm:px-5">
                    <nav className='flex justify-between items-center '>

                        <div className="logo text-2xl">
                            <h1>PORTFOLIO</h1>
                        </div>

                        <div className='w-[50%]'>
                            <ul className='flex justify-between border-2 border-black max-sm:hidden '>
                                <li><a href="">Home</a></li>
                                <li><a href="">About Me</a></li>
                                <li><a href="">Skill</a></li>
                                <li><a href="">Services</a></li>
                                <li><a href="">Contact</a></li>
                                <li><a href="">PortFolio</a></li>
                            </ul>
                        </div>

                        <div className="button ">
                            <button className='px-3 py-2 rounded-4xl font-bold bg-white text-black max-sm:hidden'>Submit</button>
                            <div className="hamburger md:hidden" onClick={() => setToggle(!toggle)}>
                                {toggle ? <div><Icon className="" width={21} icon={"fluent-emoji-high-contrast:cross-mark"} /></div> : <div><Icon className="" width={30} icon={"mdi:hamburger-menu"} /></div>
                                }
                                </div>
                        </div>
                        

                    </nav>
                

                </div>
            </div>

            <div  className='absolute w-full md:hidden h-96 p-5 '>
                {toggle == true ? 
                            <ul className='popup w-full bg-black text-white border border-white h-full flex flex-col justify-center items-center gap-7'>
                            <li>
                                <a href="">Home</a></li>
                                <li><a href="">About Me</a></li>
                                <li><a href="">Skill</a></li>
                                <li><a href="">Services</a></li>
                                <li><a href="">Contact</a></li>
                                <li><a href="">PortFolio</a></li>
                            </ul>
                            :
                            <div></div>
                                    }
                        </div>

        </div>
    )
}

export default Navbar