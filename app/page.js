'use client'
import React, { useEffect, useState } from 'react'
// import "./globals.css"
import Navbar from './navbar'
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
  return (
    <>
    <Navbar/>
      {/* header section */}
      <header className='pBgColor text-white' id='home'>
        <div className='flex justify-between container mx-auto'>
          <div className='w-1/2 px-4'>
            <img src="/images/bird.png" alt="" />
          </div>
          <div className='pt-[160px] pb-[50px] w-1/2 px-4'>
            <p className='pTextColor ls-lg text-lg font-semibold '>Web Developer & Designer</p>
            <h1 className='text-7xl my-4 font-bold'>Himanshu <br></br> Gautam</h1>
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
        <div className='flex justify-center container mx-auto pt-4 pb-48' >
          <div className='w-1/2 px-4'>
            <div className="num flex justify-end">
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
              <p className='text-right'>{content[activeNum]}</p>
            </div>
          </div>
          <div className='w-1/2 px-4'>
            <p className='pTextColor '>About</p>
            <h3 className='text-3xl font-bold mt-4'>Me & My Design</h3>
          </div>
        </div>
        <div className="myFeature flex justify-between container mx-auto absolute left-1/2 right-1/2 -translate-x-1/2" style={{ top: '18%' }}>
          <div className="w-1/3 pBgColor p-12 mx-4">
            <div className="flex justify-between">
              <div className='icon pTextColor mr-4'>icon</div>
              <div> <p className='text-xl mb-4 uppercase'>Lorem ipsum</p> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates illum, culpa ducimus expedita sit rerum placeat delectus voluptatibus optio iste? Repellendus, veritatis necessitatibus maxime earum laudantium quae iure nihil esse.</p></div>
            </div>
          </div>
          <div className="w-1/3 pBgColor p-12 mx-4">
            <div className="flex justify-between">
              <div className='icon pTextColor mr-4'>icon</div>
              <div> <p className='text-xl mb-4 uppercase'>Lorem ipsum</p> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates illum, culpa ducimus expedita sit rerum placeat delectus voluptatibus optio iste? Repellendus, veritatis necessitatibus maxime earum laudantium quae iure nihil esse.</p></div>
            </div>
          </div>
          <div className="w-1/3 pBgColor p-12 mx-4">
            <div className="flex justify-between">
              <div className='icon pTextColor mr-4'>icon</div>
              <div> <p className='text-xl mb-4 uppercase'>Lorem ipsum</p> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates illum, culpa ducimus expedita sit rerum placeat delectus voluptatibus optio iste? Repellendus, veritatis necessitatibus maxime earum laudantium quae iure nihil esse.</p></div>
            </div>
          </div>
        </div>
        <div className='myBgImage h-[80vh]'></div>
      </section>
      {/* my projeccts secctioni */}
      <section id='higlights' className='pBgColor text-white'>
        <div className="container mx-auto overflow-hidden">
          <p className='text-center capitalize py-4 pTextColor'>My Skills</p>
          <h3 className='capitalize text-3xl text-center font-bold'>Highlighted Skills</h3>
          <div className="higlightProjectBox relative mt-8 py-24">
            {/* midline */}
            <div className='midLine tBgColor'>
              <div className='topBall'></div>
            </div>
            {/* projecct left */}
            <div className='flex justify-center'>
              <div className='w-1/2'>
                <h4 className='text-right text-2xl bLine relative tracking-widest px-2'>Illustrator</h4>
                <p className='text-right pTextColor text-xl px-2'>Illustration</p>
                <div className='projImg mt-4 ml-28'>
                  <img src="/images/pr.jpeg" alt="" />
                </div>
              </div>
              <div className='pt-12 w-1/2 px-2'>
                <p className='border-b w-fit'>About Project</p>
                <p className='pr-8 mt-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem voluptates fugiat possimus, repudiandae ut, obcaecati modi, esse voluptatibus expedita qui voluptatum! Doloremque minima consectetur, vel fugiat qui quaerat debitis incidunt?</p>
              </div>
            </div>
            {/* project right */}
            <div class="flex justify-center">
              <div class="pt-12 w-1/2 px-2">
                <p class="abLine text-right relative">About Project</p>
                <p class=" mt-4 text-right pl-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem voluptates fugiat possimus, repudiandae ut, obcaecati modi, esse voluptatibus expedita qui voluptatum! Doloremque minima consectetur, vel fugiat qui quaerat debitis incidunt?</p>
              </div>
              <div class="w-1/2">
                <h4 class=" text-2xl bLine2 relative tracking-widest px-2">Illustrator</h4>
                <p class=" pTextColor text-xl px-2">Illustration</p>
                <div class="projImg mt-4" style={{ marginLeft: '45%' }}>
                  <img src="/images/pr.jpeg" alt="" />
                </div>
              </div>
            </div>
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
            <p className='pTextColor py-4'>Work</p>
            <div className='flex justify-between'>
              <h3 className='text-3xl font-bold'>Portfolio</h3>
              <div className="projTab flex items-center">
                <div className='tab mx-8 text-lg relative'>all</div>
                <div className='tab mx-8 text-lg relative'>Illustrations</div>
                <div className='tab mx-8 text-lg relative'>Posters</div>
                <div className='tab mx-8 text-lg relative'>Logo</div>
              </div>
            </div>
          </div>
          {/* projects show case */}
          <div className="grid grid-cols-4 gap-4 my-12">
            <div className='relative'>
              <div className="type absolute left-0 top-4 px-8 py-4 tBgColor rounded-e-md">
                <p className='text-lg'>cover art</p>
              </div>
              <img src="/images/pr1.png" alt="" />
            </div>
            <div className='relative'>
              <div className="type absolute left-0 top-4 px-8 py-4 tBgColor rounded-e-md">
                <p className='text-lg'>cover art</p>
              </div>
              <img src="/images/pr2.png" alt="" />
            </div>
            <div className='relative'>
              <div className="type absolute left-0 top-4 px-8 py-4 tBgColor rounded-e-md">
                <p className='text-lg'>cover art</p>
              </div>
              <img src="/images/pr3.png" alt="" />
            </div>
            <div className='relative'>
              <div className="type absolute left-0 top-4 px-8 py-4 tBgColor rounded-e-md">
                <p className='text-lg'>cover art</p>
              </div>
              <img src="/images/pr1.png" alt="" />
            </div>
            <div className='relative'>
              <div className="type absolute left-0 top-4 px-8 py-4 tBgColor rounded-e-md">
                <p className='text-lg'>cover art</p>
              </div>
              <img src="/images/pr2.png" alt="" />
            </div>
            <div className='relative'>
              <div className="type absolute left-0 top-4 px-8 py-4 tBgColor rounded-e-md">
                <p className='text-lg'>cover art</p>
              </div>
              <img src="/images/pr3.png" alt="" />
            </div>
          </div>
        </div>

      </section>
      <section id="work" className='pBgColor text-white'>
        <div className="container mx-auto">
          <p className='pTextColor text-center py-4'>Work History</p>
          <h3 className='text-3xl font-bold text-center'>Working with Passion</h3>
          <div className='grid grid-cols-2 gap-11 py-12'>
            <div className='flex'>
              <div  className='mr-8'>
                <div className='workNum'><h2>1</h2></div>
                
              </div>
              <div>
                <h4 className='text-2xl font-bold'>Pantheon digitals</h4>
                <div className='flex justify-between '>
                  <p className='text-zinc-400'>as graphic designer</p>
                  <p className='font-bold'>2022-oct - 2023-feb</p>
                </div>
                <div>
                  <p className='mt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                </div>
              </div>
            </div>
            <div className='flex'>
              <div  className='mr-8'>
                <div className='workNum'><h2>1</h2></div>
                
              </div>
              <div>
                <h4 className='text-2xl font-bold'>Pantheon digitals</h4>
                <div className='flex justify-between '>
                  <p className='text-zinc-400'>as graphic designer</p>
                  <p className='font-bold'>2022-oct - 2023-feb</p>
                </div>
                <div>
                  <p className='mt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='footer' className='pBgColor text-white p-4'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-5 gap-4'>
            <div>
              <h3 className='underline underline-offset-4 font-bold text-2xl'>Contact me:</h3>
            </div>
            <div className='flex justify-center items-center'>
              <p>Email:- <span className='pTextColor mx-2'>yourmail@gmail.com</span> </p>
            </div>
            <div className='flex justify-center items-center'>
              <p>Phone:- <span className='pTextColor mx-2'>9024XXXXXX</span> </p>
            </div>
            <div className='flex justify-center items-center'>
              <div><p>Social media:- </p></div>
              <div className='mx-2'><p className='pTextColor'>icons</p></div>
            </div>
            <div className='flex justify-center items-center'>
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