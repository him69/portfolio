import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
const navbar = () => {
    const [active, setActive] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'higlights', 'projects', 'work'];
            let currentSection = sections.find(section => {
                const elem = document.getElementById(section);
                if (elem) {
                    const rect = elem.getBoundingClientRect();
                    return rect.top >= 0 && rect.top <= window.innerHeight / 2;
                }
                return false;
            });

            if (!currentSection) {
                currentSection = null;
            }

            setActive(currentSection);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleClick = (navItem) => {
        setActive(navItem);
    };
    return (
        <>
            <div className="navbar pBgColor ">
                <div className='mx-auto container'>
                    <div className="flex justify-between">
                        <div className="logo p-4"> <img src="/images/hg.svg" alt="" /></div>
                        <div className="nav flex fixed md:static bottom-2.5 items-center backdrop-blur-sm bg-slate-800/50 md:bg-inherit rounded-full md:rounded-none left-1/2 -translate-x-1/2 md:transform-none h-10 md:h-auto justify-between px-2 md:px-0 z-50" >
                            <div className=' md:p-2 grid'>
                                <Link to="home" smooth={true} duration={1000} className={`${active === 'home' ? 'active' : ''} text-lg mx-3 md:mx-8 text-white capitalize  relative cursor-pointer`} onClick={() => handleClick('home')}
                                >home</Link>
                            </div>
                            <div className=' md:p-2 grid'>
                                <Link to="about" smooth={true} duration={1000} className={`${active === 'about' ? 'active' : ''} text-lg mx-3 md:mx-8 text-white capitalize  relative cursor-pointer`} onClick={() => handleClick('about')}>about</Link>
                            </div>
                            <div className=' md:p-2 grid'>
                                <Link to="higlights" smooth={true} duration={1000} className={`${active === 'higlights' ? 'active' : ''} text-lg mx-3 md:mx-8 text-white capitalize  relative cursor-pointer`} onClick={() => handleClick('higlights')}>Higlights</Link>
                            </div>
                            <div className=' md:p-2 grid'>
                                <Link to="projects" smooth={true} duration={1000} className={`${active === 'projects' ? 'active' : ''} text-lg mx-3 md:mx-8 text-white capitalize  relative cursor-pointer`} onClick={() => handleClick('projects')}>Projects</Link>
                            </div>
                            <div className=' md:p-2 grid'>
                                <Link to="work" smooth={true} duration={1000} className={`${active === 'work' ? 'active' : ''} text-lg mx-3 md:mx-8 text-white capitalize  relative cursor-pointer`} onClick={() => handleClick('work')}>Experience</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default navbar;