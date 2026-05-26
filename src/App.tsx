import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.tsx';
import { HashLink as Link2 } from 'react-router-hash-link';


import Menu from "./assets/pictures/Menu.svg"
import xMenu from "./assets/pictures/xIcon.svg"

import ASLProject from './pages/ASLProject'
import CycleProject from './pages/CycleProject'
import CacaoProject from './pages/CacaoProject'
import PreparedProject from './pages/PreparedProject'
import { useState } from 'react';


function App() {

    const [menuUp, setMenu] = useState(false);

    const handleClick = () => setMenu(!menuUp);

    return (
        <BrowserRouter>

            <div className='w-full bg-black flex flex-row px-[5%] border-b-2 justify-between items-center border-[#C37795]'>
                <Link2 to="/#home"><h1 className='text-[30px] text-white font-["Kameron"] pb-2 pt-2'>Emily Taylor</h1></Link2>
                {/* <p>Created with React, TypeScript, and Tailwind CSS</p> */}




                <ul className='w-[40%] flex-row justify-between ml-auto mt-1 lg:flex hidden'>
                    <Link2 to="/#about"><li className='text-[18px] font-["Kameron"] hover:bg-[#C37795] hover:cursor-pointer p-4 w-30 text-center text-white hover:text-black'>About</li> </Link2>
                    <Link2 to="/#projects"><li className='text-[18px] font-["Kameron"] hover:bg-[#C37795] hover:cursor-pointer p-4 w-30 text-center text-white hover:text-black'>Projects</li></Link2>
                    <Link2 to="/#more"><li className='text-[18px] font-["Kameron"] hover:bg-[#C37795] hover:cursor-pointer p-4 w-30 text-center text-white hover:text-black'>More</li></Link2>
                </ul>

                <button onClick={handleClick} className='p-4 ml-auto h-[70%] lg:hidden cursor-pointer'>
                        <img src={Menu} className='h-[70%] lg:hidden cursor-pointer' />
                    </button>

                
            </div>

            {menuUp &&
                <div className='w-full h-full absolute top-0 right-0 z-100  bg-[#2A141D]'>
                    <button onClick={handleClick} className='p-4 ml-[87%]'>
                        <img src={xMenu} />
                    </button>
                    
                    <ul className='font-["Kameron"] text-[20px] leading-loose ml-auto w-[60%]'>
                        <li><Link2 to="/#about" className='hover:bg-white hover:cursor-pointer p-2 text-[#C37795]'>About</Link2></li>
                        <li><Link2 to="/#projects" className='hover:bg-white hover:cursor-pointer p-2 text-[#C37795]'>Projects</Link2></li>
                        <li><Link2 to="/#more" className='hover:bg-white hover:cursor-pointer p-2 text-[#C37795]'>More</Link2></li>
                    </ul>

                </div>

            }


            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/ASLProject" element={<ASLProject />} />
                <Route path="/CacaoProject" element={<CacaoProject />} />
                <Route path="/CycleProject" element={<CycleProject />} />
                <Route path="/PreparedProject" element={<PreparedProject />} />
            </Routes>


            <hr className='border-t-[#C37795] w-full border-2 bg-black' />
            <div className='max-w-370 mx-auto px-[10%] flex flex-col gap-10 text-white py-10 bg-black '>
                <div className='flex flex-col md:flex-row gap-10 justify-evenly items-center'>
                    <div className='md:w-[40%] pt-4 pb-7'>
                        <Link2 to="/#home"><h1 className='font-["Kameron"] text-[30px] pb-1'>Emily Taylor</h1></Link2>
                        <p className='font-["Kameron"] text-[18px] leading-loose'>Creating quality websites that are beautiful and functional.</p>

                    </div>


                    <ul className='font-["Kameron"] text-[20px] leading-loose w-[30%] hidden md:block mr-auto'>
                        <li><Link2 to="/#about" className='hover:bg-[#2A141D]/78 hover:cursor-pointer p-[5%] text-[#C37795]'>About</Link2></li>
                        <li><Link2 to="/#projects" className='hover:bg-[#2A141D]/78 hover:cursor-pointer  p-[5%]  text-[#C37795]'>Projects</Link2></li>
                        <li><Link2 to="/#contact" className='hover:bg-[#2A141D]/78 hover:cursor-pointer  p-[5%]  text-[#C37795]'>Contact</Link2></li>
                    </ul>


                </div>


            </div>






        </BrowserRouter>
    );
}

export default App;