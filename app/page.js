'use client'
import React, { useEffect, useState } from 'react'
// import "./globals.css"
import Navbar from './navbar'
import { format } from 'date-fns';
import Image from 'next/image';
// import Tec from './tec/page'
const page = () => {
  const [activeNum, setActiveNum] = useState(1);
  const maxNum = 2;

  const content = {
      1: "LLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book dfj"
  };
  useEffect(() => {
    const interval = setInterval(() => {
        setActiveNum(prevActiveNum => prevActiveNum < maxNum ? prevActiveNum + 1 : 1);
    }, 3000); // Change every 3000 milliseconds (3 seconds)

    return () => clearInterval(interval);
}, [maxNum]);

const handleClick = (num) => {
    setActiveNum(num);
    // Resetting the interval on click
    clearInterval(interval);
    interval = setInterval(() => {
        setActiveNum(prevActiveNum => prevActiveNum < maxNum ? prevActiveNum + 1 : 1);
    }, 3000);
};
// getting all project
const [data,setData]=useState(null);
const [wdata,setwData]=useState(null);
useEffect(()=>{
  fetch('/api/allproject').then((res)=>res.json()).then((data)=>{
setData(data);
console.log(data.Projects);
// data.Projects.forEach(project => {
//   console.log(project.projType); // Logs each project object
// });
  })
},[])
// getting working history
useEffect(()=>{
  fetch('/api/allworkhistory').then((res)=>res.json()).then((wdata)=>{
    setwData(wdata);
    console.log(wdata);
  })
},[])
  return (
    <>
    <Navbar/>
    {/* <Tec/> */}
      {/* header section */}
      <header className='pBgColor text-white' id='home'>
        <div className='block md:flex md:justify-between container mx-auto'>
          <div className='md:w-1/2 w-full px-4'>
            <img src="/images/bird.png" alt="" />
          </div>
          <div className='md:pt-[160px] md:pb-[50px] pb-6 md:w-1/2 w-full px-4'>
            <p className='pTextColor ls-lg text-lg font-semibold '>Web Developer & Designer</p>
            <h1 className='md:text-7xl text-5xl my-4 font-bold'>Himanshu <br></br> Gautam</h1>
            <p className='my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam sapiente excepturi, fugit magnam recusandae quis quod ratione ut molestias ea dignissimos libero odio quo autem.</p>
            <button className='border-2 border-white px-12 rounded text-2xl' style={{
              paddingTop: '10px',
              paddingBottom: '10px'
            }}>Resume</button>
          </div>
        </div>
      </header>
      {/* about me section */}
      <section id='about' className='sBgColor text-white relative'>
        <div className='flex flex-col md:flex-row justify-center container mx-auto pt-4 md:pb-48 pb-6' >
          <div className='md:w-1/2 w-full px-4 order-2 md:order-1'>
            <div className="num flex md:justify-end justify-center">
            {[...Array(maxNum)].map((_, index) => (
                    <p key={index} 
                       className={`mx-4  ${activeNum === index + 1 ? 'pTextColor' : ''}`} 
                       onClick={() => handleClick(index + 1)}>
                        {`0${index + 1}.`}
                    </p>
                ))}
              {/* <p className={`mx-4 pTextColor ${activeNum === 1 ? 'active' : ''}`}>01.</p>
              <p className={`mx-4 pTextColor ${activeNum === 2 ? 'active' : ''}`}>02.</p> */}
            </div>
            <div className="aboutMe mt-4">
              <p className='md:text-right text-center'>{content[activeNum]}</p>
            </div>
          </div>
          <div className='md:w-1/2 w-full px-4 order-1 md:order-2'>
            <p className='pTextColor '>About</p>
            <h3 className='text-3xl font-bold mt-4'>Me & My Design</h3>
          </div>
        </div>
        <div className="myFeature md:flex block md:justify-between container mx-auto md:absolute relative md:left-1/2 md:right-1/2 md:-translate-x-1/2 translate-y-24" style={{ top: '18%' }}>
          <div className="md:w-1/3  pBgColor p-12 p-6 mx-4 my-8 md:my-0">
            <div className="flex justify-between">
              <div className='icon pTextColor mr-4'>icon</div>
              <div> <p className='text-xl mb-4 uppercase'>Lorem ipsum</p> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates illum, culpa ducimus expedita sit rerum placeat delectus voluptatibus optio iste? Repellendus, veritatis necessitatibus maxime earum laudantium quae iure nihil esse.</p></div>
            </div>
          </div>
          <div className="md:w-1/3  pBgColor p-12 p-6 mx-4 my-8 md:my-0">
            <div className="flex justify-between">
              <div className='icon pTextColor mr-4'>icon</div>
              <div> <p className='text-xl mb-4 uppercase'>Lorem ipsum</p> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates illum, culpa ducimus expedita sit rerum placeat delectus voluptatibus optio iste? Repellendus, veritatis necessitatibus maxime earum laudantium quae iure nihil esse.</p></div>
            </div>
          </div>
          <div className="md:w-1/3  pBgColor p-12 p-6 mx-4 my-8 md:my-0">
            <div className="flex justify-between">
              <div className='icon pTextColor mr-4'>icon</div>
              <div> <p className='text-xl mb-4 uppercase'>Lorem ipsum</p> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates illum, culpa ducimus expedita sit rerum placeat delectus voluptatibus optio iste? Repellendus, veritatis necessitatibus maxime earum laudantium quae iure nihil esse.</p></div>
            </div>
          </div>
        </div>
        <div className='myBgImage h-[80vh]  md:block hidden'></div>
        <div>
      <Image
        src="/images/bgimg.png" // Your image link
        alt="Description of the image"
        width={500} // Desired width
        height={300} // Desired height
        layout='responsive' // This makes the image scale with the parent element
      />
    </div>
      </section>
      {/* my projeccts secction */}
      <section id='higlights' className='pBgColor text-white'>
        <div className="container mx-auto overflow-hidden">
          <p className='text-center capitalize py-4 pTextColor'>My Skills</p>
          <h3 className='capitalize text-3xl text-center font-bold'>Highlighted Skills</h3>
          <div className="higlightProjectBox relative mt-8 py-24">
            {/* midline */}
            <div className='midLine tBgColor'>
              <div className='topBall'></div>
            </div>
            {/* projecct featched higlight */}
            {data?.Projects.filter(project=>project.highlightProject === true).map((project, index) => (
        index % 2 === 0
          ? (
            // Even project layout
            <div className="flex justify-center md:flex-row flex-col mx-3" key={index}>
              <div className='md:w-1/2'>
                {/* Assuming 'projType' and other project-specific details are used here */}
                <h4 className='md:text-right text-left text-2xl bLine relative tracking-widest px-2'>{project.projType}</h4>
                <p className='md:text-right text-left pTextColor text-xl px-2'>{project.projCat}</p>
                <div className='projImg mt-4 md:ml-28 ml-16'>
                  {/* Use project-specific image if available */}
                  <img src={project.projImage || "/images/pr.jpeg"} alt="" />
                </div>
              </div>
              <div className='pt-12 md:w-1/2 px-2'>
                <p className='border-b w-fit mx-1 md:mx-0'>About Project</p>
                <p className='pr-8 mt-4'>{project.description}</p>
              </div>
            </div>
          )
          : (
            // Odd project layout
            <div className="flex justify-center md:flex-row flex-col mx-3" key={index}>
              <div className="pt-12 md:w-1/2 px-2 order-2 md:order-1">
                <p className="abLine md:text-right text-left relative mx-1 md:mx-0">About Project</p>
                <p className="mt-4 md:text-right text-left pl-8">{project.description}</p>
              </div>
              <div className="md:w-1/2 order-1 md:order-2">
                <h4 className="text-2xl bLine2 relative tracking-widest px-2">{project.projType}</h4>
                <p className="pTextColor text-xl px-2">{project.projCat}</p>
                <div className="projImg mt-4 md:ml-28 ml-16" >
                  {/* Use project-specific image if available */}
                  <img src={project.projImage || "/images/pr.jpeg"} alt="" />
                </div>
              </div>
            </div>
          )
      ))}
         
          </div>
        </div>
      </section >
      {/* projects and softwere */}
      <section className='sBgColor text-white pb-12' id='projects'>
        <div className="container mx-auto">
          <div className="flex justify-center">
            <div className='px-2'>
              <p className='pTextColor py-4'>Software</p>
              <h3 className='text-3xl font-bold'>Softwaer I use</h3>
            </div>
            <div className='px-2 mt-12'>
              <div className='d-flex'>icons</div>
            </div>
          </div>
          {/* all project */}
          <div className=" mt-12">
            <p className='pTextColor py-4 text-center md:text-start'>Work</p>
            <div className='flex flex-col md:flex-row justify-between'>
              <h3 className='text-3xl font-bold text-center md:text-start'>Portfolio</h3>
              <div className="projTab flex items-center justify-center md:justify-start flex-wrap">
                <div className='tab mx-3 md:mx-8 text-lg relative'>all</div>
                <div className='tab mx-3 md:mx-8 text-lg relative'>Illustrations</div>
                <div className='tab mx-3 md:mx-8 text-lg relative'>Posters</div>
                <div className='tab mx-3 md:mx-8 text-lg relative'>Logo</div>
              </div>
            </div>
          </div>
          {/* projects show case */}
         
          <div className="grid md:grid-cols-4 grid-cols-1 gap-4 my-12">
          {data?.Projects.map((p,i)=>  (
              <div className='relative'>
              <div className="type absolute left-0 top-4 px-4 md:px-8 py-2 md:py-4 tBgColor rounded-e-md">
                <p className='text-lg'>{p.projCat}</p>
              </div>
              <img src={p.projImage} alt={p.projImage} className='h-full'/>
            </div>
            ))
          }
            <div className='relative'>
              <div className="type absolute left-0 top-4 px-8 py-4 tBgColor rounded-e-md">
                <p className='text-lg'>cover art</p>
              </div>
              <img src="/images/pr1.png" alt="" className='w-full' />
            </div>
          </div>
        </div>

      </section>
      <section id="work" className='pBgColor text-white'>
        <div className="container mx-auto">
          <p className='pTextColor text-center py-4'>Work History</p>
          <h3 className='text-3xl font-bold text-center'>Working with Passion</h3>
          <div className='grid md:grid-cols-2 grid-cols-1 gap-11 py-12'>
            {wdata?.wh.map((wh,i)=>(
               <div className='flex mx-2 md:mx-0' key={i}>
               <div  className='mr-3 md:mr-8'>
                 <div className='workNum'><h2>{i+1}</h2></div>
                 
               </div>
               <div>
                 <h4 className='text-2xl font-bold'>{wh.compName}</h4>
                 <div className='flex justify-between '>
                   <p className='text-zinc-400 text-xs md:text-base'>as {wh.designation}</p>
                   <p className='font-bold text-xs md:text-base'>{format(wh.from, 'yyyy-MMM')} - {format(wh.to,'yyyy-MMM')}</p>
                 </div>
                 <div>
                   <p className='mt-4'>{wh.description}</p>
                 </div>
               </div>
             </div>
            ))}
          </div>
        </div>
      </section>
      <section id='footer' className='pBgColor text-white p-4'>
        <div className='container mx-auto'>
          <div className='grid md:grid-cols-5 grid-cols-1 gap-4'>
            <div>
              <h3 className='underline underline-offset-4 font-bold text-2xl'>Contact me:</h3>
            </div>
            <div className='flex md:justify-center justify-start items-center'>
              <p>Email:- <span className='pTextColor mx-2'>yourmail@gmail.com</span> </p>
            </div>
            <div className='flex md:justify-center justify-start items-center'>
              <p>Phone:- <span className='pTextColor mx-2'>9024XXXXXX</span> </p>
            </div>
            <div className='flex md:justify-center justify-start items-center'>
              <div><p>Social media:- </p></div>
              <div className='mx-2'><p className='pTextColor'>icons</p></div>
            </div>
            <div className='flex md:justify-center justify-start items-center'>
              <div><p>resume:-</p></div>
              <div><button className='px-3 py-2 Dbtn mx-2'>Download</button></div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default page