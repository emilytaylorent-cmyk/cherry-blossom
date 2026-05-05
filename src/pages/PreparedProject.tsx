
import {Link } from 'react-router-dom';
import '../index.css'


import SectionHolder from '../components/SectionHolder'

import PreparedLogin from "../assets/pictures/Login.png"
import PreparedLocation from "../assets/pictures/Locations.png"
import PreparedFor from "../assets/pictures/Prepare For.png"
import PreparedChecklist from "../assets/pictures/Checklist Preview.png"
import PreparedCover from "../assets/pictures/PreparedCover.png"
import PreparedSunny from "../assets/pictures/Henderson Location.png"
import PreparedHurricane from "../assets/pictures/Jacksonville Location.png"


import SkillSec from '../components/SkillSec'

function PreparedProject() {

    return (
        <div className='max-w-[100vw] bg-black pb-5'>

            {/* custom flower flow section */}
            <div className='max-w-370 mx-auto pt-20'>

                <h2 className='text-center text-[30px] font-["Kameron"] font-bold px-5 lg:px-0'>Prepared: an Emergency Preperation App</h2>
                <p className='text-center text-[20px] font-["Kameron"]'>Case Study on UX / UI design for a Emergency Preperation App.</p>
            </div>

            <SectionHolder>
                <div className='flex flex-col lg:flex-row justify-between py-[5%]'>
                    <div className='lg:w-[40%] gap-[20]'>
                        <h2 className='font-["Kameron"] font-bold text-[24px] leading-loose py-3'>The Problem</h2>
                        <p className='font-["Kameron"] text-[18px] leading-loose'>The class project began at a time when campus got closed down for a week because of a major snow storm in the South. Because of that, I wanted to create an emergency prepardness app that would help people know how to deal with situations such as that one.</p>
                        <p className='font-["Kameron"] text-[18px] leading-loose'>The audience for the project would be anybody with a phone, probably a space to live, and demographically between 20 - 60. </p>
                    </div>

                    <div className='lg:w-[50%] flex flex-col gap-2 mt-6'>
                        <img src={PreparedCover} width='500' height='200' />
                        <p className='font-["Kameron"] text-[12px] leading-loose'>Project cover of Prepared</p>
                    </div>
                </div>
            </SectionHolder>

            

            <SectionHolder>
                <div className='flex flex-col lg:flex-row justify-evenly py-[5%]'>
                  
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <h2 className='font-["Kameron"] font-bold text-[30px] leading-loose '>Project Goals</h2>
                        <SkillSec>
                            <li>Identify a problem, target audience, and analyze competitors.</li>
                            <li>Create a mobile app that helps solve the problem</li>
                            <li>Refine UX / UI wireframes for the best user experience.</li>
                        </SkillSec>

                    </div>
                 
                </div>
            </SectionHolder>

           

            {/* branding */}
            <SectionHolder>
                <div className='flex flex-col lg:flex-row justify-between py-[5%] gap-[2%]'>
                    <div className='flex flex-col gap-[20] lg:w-[40%]'>
                        <h2 className='font-["Kameron"] font-bold text-[24px] leading-loose py-3'>The Concept</h2>
                        <p className='font-["Kameron"] text-[18px] leading-loose'>The mobile app will assess your preparedness and give you suggestions based off of location and current prepardness. There is also be resources for offline use to look up for personal use.</p>
                        <p className='font-["Kameron"] text-[18px] leading-loose pt-[3%]'>The Home Page will give any current warnings for your favorited locations, and then suggest resources and links to national alerts and radar. It also has current preparation tracks and the next steps to do.</p>
                    </div>

                    <div className='flex flex-row justify-between lg:justify-evenly lg:w-[60%]'>
                        <div className='flex flex-col gap-2 mt-6'>
                            <img src={PreparedLogin} width='200' height='200' />
                            <p className='font-["Kameron"] text-[12px] leading-loose'>Login Screen of Prepared</p>
                        </div>
                        <div className='flex flex-col gap-2 mt-6'>
                            <img src={PreparedLocation} width='200' height='200' className='border-black border' />
                            <p className='font-["Kameron"] text-[12px] leading-loose'>Locations Screen of Prepared</p>
                        </div>
                    </div>

                </div>
            </SectionHolder>
           

            <SectionHolder>
                <div className='flex flex-col lg:flex-row justify-between py-[5%] gap-[3%]'>
                    <div className='hidden lg:w-[50%] lg:flex flex-col lg:flex-row gap-2 mt-1 justify-evenly'>
                        <div className=' flex flex-col gap-2'>
                            <img src={PreparedChecklist} width='200' height='200' className='border-black border' />
                            <p className='font-["Kameron"] text-[12px] leading-loose'>Checklist Screen of Prepared</p>
                        </div>
                        <div className=' flex flex-col gap-2 '>
                            <img src={PreparedFor} width='200' height='200' className='border-black border' />
                            <p className='font-["Kameron"] text-[12px] leading-loose'>Preperation Screen of Prepared</p>
                        </div>
                            
                    </div>
                    <div className='lg:w-[50%] gap-[20] pt-[5%]'>
                        <h2 className='font-["Kameron"] font-bold text-[24px] leading-loose py-3'>Preperation</h2>
                        <p className='font-["Kameron"] text-[18px] leading-loose'>The Preperation is broken down into catagories, with ones for weather disasters and first aid. Each catagory has small steps, no longer than 15 minutes, that are easy to understand and achieve.</p>
                        <p className='font-["Kameron"] text-[18px] leading-loose pb-4'>The catagories are accompanied by icons to signify which disaster they are preparing for. If you want to see all of the screens, check out the Figma design by hitting the button below!</p>
                        <a href="https://www.figma.com/design/YWadhozmmECRtLTeTATqO6/Recycling-Penguin-App?node-id=11-2993&t=f956Z6gheGIu1KEZ-1" className='no-underline' target="_blank" rel="noopener noreferrer"><div className='border-white bg-black text-white border-2 rounded-sm font-["Kameron"] text-[18px] p-3 flex flex-row gap-2 items-center justify-center hover:bg-[#C999BC] hover:border-[#F1D6E0] hover:cursor-pointer'>
              See the Design</div></a>
                    </div>
                </div>
            </SectionHolder>

           

            <SectionHolder>
                <div className='flex flex-col lg:flex-row justify-between py-[5%]'>
                    <div className='lg:w-[50%] gap-[20]'>
                        <h2 className='font-["Kameron"] font-bold text-[24px] leading-loose py-3'>Results</h2>
                        <p className='font-["Kameron"] text-[18px] leading-loose'>I really pushed myself on this project to make it both professional and fun, because adults tend to enjoy things that are fun. However, adults do not want to be treated like kids in preparing their house for a sudden disaster.</p>
                        <p className='font-["Kameron"] text-[18px] leading-loose pt-[2%]'>My favorite part about this was probably adding the clouds and weather to the app. Adding little touches that make the user enjoy it while not diminishing the serious experience is one of my favorite parts of design.</p>
                    </div>

                    <div className='flex flex-row lg:w-[50%] justify-between lg:justify-evenly'>
                        <div className='flex flex-col  gap-2'>
                            <img src={PreparedSunny} width='200' height='200' />
                            <p className='font-["Kameron"] text-[12px] leading-loose'>Weather for Henderson, TN Screen</p>
                        </div>
                        <div className=' flex flex-col gap-2'>
                            <img src={PreparedHurricane} width='200' height='200' />
                            <p className='font-["Kameron"] text-[12px] leading-loose'>Weather for Jacksonville, FL Screen</p>
                        </div>
                    </div>
                </div>

                <Link to="/"><div className='border-white bg-black text-white border-2 rounded-sm font-["Kameron"] text-[18px] p-3 flex flex-row gap-2 items-center justify-center hover:bg-[#C999BC] hover:border-[#F1D6E0] hover:cursor-pointer'>
               Return to Home Page</div></Link>
            </SectionHolder>




        </div>
    )
}

export default PreparedProject
