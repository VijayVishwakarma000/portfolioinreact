import React from 'react'
import { ReactTyped } from "react-typed";
import usrimg from '../user-picture.png'
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";

const MainBody = () => {
 
const Home = ()=>{
   
    return <div id='home' className='h-[85vh] flex items-center max-[500px]:pl-5  pl-52 max-[1700px]:pl-40  max-[1100px]:pl-10'>

            <div className='  '>
                    <h1   className='text-[3rem] max-[1600px]:text-[2.8rem]  max-[1500px]:text-[2.2rem] max-[500px]:text-[1.5rem] font-extrabold capitalize max-[500px]:leading-[30px] leading-[50px] max-[1000px]:text-[2rem]'>Hi,My name is Vijay Vishwakarma</h1>
                    <h2 className='text-[2.2rem] max-[1600px]:text-[2rem] max-[1500px]:text-[1.8rem] max-[1000px]:text-[1.3rem] max-[500px]:text-[1.2rem]'>And I, am a  <ReactTyped className='uppercase text-[crimson]' strings={["UI/UX DESIGNER","Web Designer",]} loop typeSpeed={30} /> </h2>
                    <p className='text-justify text-lg  max-[1500px]:text-[16px] max-[1000px]:text-[14px] max-[1000px]:text-[12px] max-[1000px]:w-fit max-[1000px]:pr-10  max-[500px]:tracking-wider   max-[500px]:pr-5  max-[500px]:leading-[24px] w-3/5 '>
                        

                    Hello! I'm Vijay Vishwakarma, a first-year B.Sc. Computer Science student at Thakur Ramnarayan College of Arts and Commerce (TRCAC). I have a passion for coding and gaming, enjoying both software development and exploring the latest video games. I'm eager to combine my technical skills with my love for gaming as I progress through college.                    </p>
                    <button className='px-4 rounded-[5px] uppercase mt-2  [box-shadow:rgba(60,_64,_67,_0.3)_0px_1px_2px_0px,_rgba(60,_64,_67,_0.15)_0px_2px_6px_2px] bg-[#EDEDED] py-2'><a href="#about">read more</a></button>
            </div>
           
    </div>
}
const About = ()=>{
    return <div id='about' className=' bg-[hsl(232,_11%,_15%)] flex flex-col items-center   justify-center p-2 '>
        <h1 className='m-10  mb-0 text-3xl text-white font-bold tracking-wide'>ABOUT ME</h1>
        <p className=' my-2 text-white   tracking-wide'>Hover or Click Below Card to see Details</p>
        <div className='group  [perspective:1000px] mb-10'>

            <div className='flex gap-5 p-5 max-[800px]:scale-[.8] transition-all duration-500 ease-in-out relative [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)]  bg-white   rounded-lg '>
                <div className="  bg-white    absolute inset-0 rounded-lg flex items-center justify-center [backface-visibility:hidden]  ">
                    <h1 className='font-bold text-2xl uppercase'>View Details</h1>
                </div>
                <div className='flex gap-5 p-4   max-[700px]:p-0  [transform:rotateX(180deg)] [backface-visibility:hidden] '>
                <div className=' h-48 w-48  max-[800px]:h-28 max-[800px]:w-34   [box-shadow:rgba(0,_0,_0,_0.15)_1.95px_1.95px_2.6px] '>
                    <img className='  rounded-[10px] h-full w-full object-cover   border-[hsl(233,_8%,_19%)] border-1 [box-shadow:inset_0_0_0.5px_1px_hsla(0,_0%,_100%,_0.075),_0_0_0_1px_hsla(0,_0%,_0%,_0.05),_0_0.3px_0.4px_hsla(0,_0%,_0%,_0.02),_0_0.9px_1.5px_hsla(0,_0%,_0%,_0.045),_0_3.5px_6px_hsla(0,_0%,_0%,_0.09)]' src={usrimg} alt="usrimg" />
                </div>
                <div className='flex flex-col gap-4 max-[600px]:gap-1  max-[700px]:w-full '>
                    <span className='uppercase text-black max-[800px]:text-sm max-[500px]:text-[10px] '>Name : <span className='font-bold  tracking-wider'>Vijay Vishwakarma</span></span>
                    <span className='uppercase text-black max-[800px]:text-sm max-[500px]:text-[10px]'>Class : <span className='font-bold tracking-wider'>FYCS</span></span>
                    <span className='uppercase text-black max-[800px]:text-sm max-[500px]:text-[10px]'>ROll no : <span className='font-bold tracking-wider'>2407127</span></span>
                    <span className='uppercase text-black max-[800px]:text-sm max-[500px]:text-[10px]'>Department : <span className='font-bold tracking-wider'>BSC-CS</span></span>
                    <span className='uppercase text-black max-[800px]:text-sm max-[500px]:text-[10px]    '> Hobbies :  <span className='bg-[crimson] text-white px-2 py-1 rounded font-bold'>CODING</span> <span className='bg-[crimson] text-white px-2 py-1 rounded font-bold'>GAMING</span> </span>
                </div>
                </div>
            </div>
        </div>

    </div>
}
const Skills = ()=>{
    const cardData = [
        {
            icon:<IoLogoJavascript color={"yellow"}   size={90}  />,
            title:"javascript",
            size:90,
            color:"yellow",
            body:"JavaScript is a high-level, dynamic programming language commonly used to create interactive and dynamic content on websites."
        },
        // {
        //     icon:<FaReact  color={"lightblue"}   size={90} />,
        //     title:"React js",
        //     size:90,
        //     color:"lightblue",
        //     body:"React JS is a popular JavaScript library for building user interfaces, particularly for single-page applications, by using a component-based architecture."
        // }
        // ,
        // {
        //     icon:<TbBrandReactNative  color={"darkblue"}   size={90}/> ,
        //     title:"react native",
        //     size:90,
        //     color:"darkblue",
        //     body:"React Native is a framework for building mobile applications using JavaScript and React, allowing developers to create apps for both iOS and Android from a single codebase."
        // }
        // ,
        {
            icon:<FaHtml5 color={"maroon"}   size={90} />,
            title:"html",
            size:90,
            color:"orange",
            body:"HTML (HyperText Markup Language) is the standard markup language used for creating and structuring content on the web."
        }
        ,
        {
            icon:<FaCss3 color={"cyan"}   size={90} />            ,
            title:"css",
            size:90,
            color:"blue",
            body:"CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation, layout, and design of HTML documents on the web."
        }
        ,
        // {
        //     icon:<SiExpress color={"green"}   size={90} />            ,
        //     title:"express js",
        //     size:90,
        //     color:"yellow",
        //     body:"Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for building web and API servers."
        // }
        // ,
        // {
        //     icon:<DiMongodb color={"green"}   size={90} />          ,
        //     title:"monogo db",
        //     size:90,
        //     color:"green",
        //     body:"MongoDB is a NoSQL, document-oriented database that stores data in flexible, JSON-like documents, allowing for scalable and high-performance applications."
        // }
        // ,
        {
            icon:<FaNodeJs color={"green"}   size={90} />          ,
            title:"Node JS",
            size:90,
            color:"green",
            body:"Node.js is a runtime environment that allows you to execute JavaScript code on the server side, enabling the development of scalable and high-performance network applications."
        }
    ]
    const SkillsCard = ({Logo,para,title})=>{
      
        return <div className='w-[300px] hover:bg-[#EAEAEA] transition-all duration-200 ease-in-out rounded-lg  p-5 flex flex-col items-center gap-2 bg-[#FFFFF] [box-shadow:rgba(60,_64,_67,_0.3)_0px_1px_5px_0px,_rgba(60,_64,_67,_0.15)_0px_2px_6px_2px]'>
                     {Logo}
                     <h1 className='font-bold uppercase tracking-wider'>{title}</h1>
                <div>
                    <p className='text-justify tracking-wide'>{para}</p>
                </div>
        </div>
    }
    return <div id='skills' className='  flex flex-col items-center  p-10 '>
            <div className='mb-5 '>
                <h1 className='font-bold text-2xl border-b-2 border-[crimson]  w-fit border-block'>MY SKILLS</h1>
            </div>
            <div className="flex gap-5 mt-8 flex-wrap   justify-center    ">
                {
                    cardData.map((item,id)=>{
                        return <SkillsCard logocolor={"yellow"} title={item.title} Logo={item.icon} para={item.body} logosize={90} body={""}/>
                    })
                }
                 
                 
            </div>
    </div>
}
 

const Footer = ()=>{
    return <div id='contact' className='  text-center bg-black p-2   '>
        <h1 className='font-thin text-lg tracking-wider text-white'>Created By <b className='text-[crimson]'>@</b>Vijay Vishwakarma</h1>
    </div>
}


  return (
    <section>
        <Home/>
        <About/>
        <Skills/>
        <Footer/>
    </section>
  )
}

export default MainBody
