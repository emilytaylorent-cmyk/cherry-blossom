import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.tsx';
import { HashLink as Link2 } from 'react-router-hash-link';



import ASLProject from './pages/ASLProject'
import CycleProject from './pages/CycleProject'
import CacaoProject from './pages/CacaoProject'
import PreparedProject from './pages/PreparedProject'
import Scroll from "./components/Scroll.tsx"
function App() {
    return (
        <BrowserRouter>
            <div className='w-full bg-black flex flex-row px-[5%] border-b-2 items-end border-[#C37795]'>
                <Link to="/"><h1 className='text-[30px] text-white font-["Kameron"] mb-2'>Emily Taylor</h1></Link>
                {/* <p>Created with React, TypeScript, and Tailwind CSS</p> */}


                <ul className='w-[40%] flex flex-row justify-between ml-auto mt-1'>
                    <Link2 to="/#about"><li className='text-[18px] font-["Kameron"] hover:bg-[#C37795] hover:cursor-pointer p-4 w-30 text-center text-white hover:text-black'>About</li> </Link2>
                    <Link2 to="/#projects"><li className='text-[18px] font-["Kameron"] hover:bg-[#C37795] hover:cursor-pointer p-4 w-30 text-center text-white hover:text-black'>Projects</li></Link2>
                    <Link2 to="/#contact"><li className='text-[18px] font-["Kameron"] hover:bg-[#C37795] hover:cursor-pointer p-4 w-30 text-center text-white hover:text-black'>Contact</li></Link2>
                </ul>
            </div>


            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/ASLProject" element={<ASLProject />} />
                <Route path="/CacaoProject" element={<CacaoProject />} />
                <Route path="/CycleProject" element={<CycleProject />} />
                <Route path="/PreparedProject" element={<PreparedProject />} />
            </Routes>


            <hr className='border-t-[#C37795] w-full border-2 bg-black' />
            <div className='max-w-370 mx-auto px-[10%] flex flex-col gap-10 text-white py-10 bg-black '>
                <div className='flex flex-row gap-10 justify-evenly items-center'>
                    <div className='w-[40%] pt-4 pb-7'>
                        <h1 className='font-["Kameron"] text-[30px] pb-1'>Emily Taylor</h1>
                        <p className='font-["Kameron"] text-[18px] leading-loose'>Creating quality websites that are beautiful and functional.</p>

                    </div>


                    <ul className='font-["Kameron"] text-[20px] leading-loose w-[30%]'>
                        <li><Link2 to="/#about" className='hover:bg-[#C37795] hover:cursor-pointer  p-[5%]'>About</Link2></li>
                        <li><Link2 to="/#projects" className='hover:bg-[#C37795] hover:cursor-pointer  p-[5%]'>Projects</Link2></li>
                        <li><Link2 to="/#contact" className='hover:bg-[#C37795] hover:cursor-pointer  p-[5%]'>Contact</Link2></li>
                    </ul>

                    <ul className='font-["Kameron"] text-[20px] leading-loose w-[40%]'>
                        <li>Email: emilytaylor@gmail.com</li>
                        <li>LinkedIn: emilytaylor3333333</li>
                        <li>Website: emily-portfolio.netlify.com</li>
                    </ul>
                </div>


            </div>
            <Scroll />





        </BrowserRouter>
    );
}

export default App;