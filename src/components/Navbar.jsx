import React from 'react'
import { useState,useEffect } from 'react'

const Navbar = () => {
    const [ScrollFixed, setScrollFixed] = useState(false)
    const [toggleNavbar, settoggleNavbar] = useState(false)
    window.addEventListener("scroll",()=>{
        if(window.scrollY>100){
            setScrollFixed(true)
        }else{
            setScrollFixed(false)
        }
      })
     
     
      
      
   
  return (
    <>
   
   <nav    className={`flex bg-[#ffffff] ${ScrollFixed ? "fixed w-full transition-all duration-300 ease-in-out":" "}      transition-all duration-300    ease-in-out  z-10      w-full       p-4 items-center justify-around max-[1000px]:justify-between`}>

        <span className='text-2xl   text-black logo max-[1000px]:text-lg'>VIJAY VISHWAKARMA</span>
        
        <ul className={`flex gap-3 uppercase  max-[1000px]:flex-col  max-[1000px]:absolute bg-[#ffffff] z-10  ${toggleNavbar ? "max-[1000px]:w-full max-[1000px]:left-0    max-[1000px]:left-0   duration-500    ease-in-out ":"max-[1000px]:w-0 max-[1000px]:-left-40  transition-all duration-500    ease-in-out  "}  max-[1000px]:top-0  max-[1000px]:p-5  max-[1000px]:h-screen  `}>
            <li onClick={()=>{settoggleNavbar(!toggleNavbar)}}><a className='font-[500] after:content-[""] after:block after:bg-black after:h-[1px] hover:after:w-8  after:w-0 after:transtion-all after:ease-in-out after:duration-200 text-black  transition-all duration-200 ease-in-out text-lg' href="#home">Home</a></li>
            <li onClick={()=>{settoggleNavbar(!toggleNavbar)}}><a className='font-[500] after:content-[""] after:block after:bg-black after:h-[1px] hover:after:w-8  after:w-0 after:transtion-all after:ease-in-out after:duration-200 text-black  transition-all duration-200 ease-in-out text-lg' href="#about">About</a></li>
            <li onClick={()=>{settoggleNavbar(!toggleNavbar)}}><a className='font-[500] after:content-[""] after:block after:bg-black after:h-[1px] hover:after:w-8  after:w-0 after:transtion-all after:ease-in-out after:duration-200 text-black  transition-all duration-200 ease-in-out text-lg' href="#skills">skills</a></li>
            {/* <li onClick={()=>{settoggleNavbar(!toggleNavbar)}}><a className='font-[500] after:content-[""] after:block after:bg-black after:h-[1px] hover:after:w-8  after:w-0 after:transtion-all after:ease-in-out after:duration-200 text-black  transition-all duration-200 ease-in-out text-lg' href="#contact">contact</a></li> */}
        </ul>
        <div onClick={()=>{
          settoggleNavbar(!toggleNavbar)

         }} className={" max-[1000px]:flex  z-10 hidden gap-2 flex-col-reverse  "}  >
                  <div className={`w-8 transition-all ease-in-out duration-500  ${toggleNavbar?"rotate-45 -translate-y-1 ":""}    h-[1px] bg-black`}></div>
                  <div className={`w-8 transition-all ease-in-out duration-500 ${toggleNavbar?"hidden":""}   h-[1px] bg-black`}></div>
                  <div className={`w-8 transition-all ease-in-out duration-500   ${toggleNavbar?"-rotate-45 translate-y-1":""}   h-[1px] bg-black`}></div>
        
         </div>
     </nav>
  
    </>
  
  )
}

export default Navbar