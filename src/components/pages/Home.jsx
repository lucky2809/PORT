import React from 'react'
// import "./App.css"
// import "./index.css"

function Home() {
    return (
        <div>
            <div className='bg-black text-white flex w-full px-20'>

                <div className="left w-full py-12 ">
                    <div className='border-b-2 border-gray-500 p-0'>
                    <p className='text-8xl font-semibold'>Hi!</p>
                    <p className='text-8xl font-bold p-0'>I'm Lalit Full <span className='gap-5 flex'>Stack<span className='text-sky-600'>Developer</span> 
                    </span></p>
                    <p className='py-5 text-[20px]'>Check out my latest projects or contact me to discuss your next idea.</p>
                </div>
                <div className='pt-10'>
                <button className='p-4 border-1 border-white rounded-[6px]'>My Project</button>
                </div>
                </div>

                <div className="right w-full  flex justify-end ">
                      <div className='image bg-sky-300  '> 
                        <img src="/img/homelogo.png" alt="" srcset="" className='object-cover ' />
                      </div>
                </div>

            </div>
        </div>
    )
}

export default Home