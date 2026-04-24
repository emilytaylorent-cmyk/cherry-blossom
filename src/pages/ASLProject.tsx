
import '../index.css'

import FlowLeft from "../assets/pictures/FlowerTop.svg"
import FlowRight from "../assets/pictures/FlowerFlowRight.svg"
import OldSlide from "../assets/pictures/PowerPointOld.png"
import NewSlide from "../assets/pictures/NewASLSlide.png"
import SectionHolder from '../components/SectionHolder'
import ASLColor from '../assets/pictures/ASL-Color-Logo.png'
import ASLPoster from '../assets/pictures/Poster-For-Meetings.png'
import FlowerLeft from "../assets/pictures/FlowerSkewLeft.svg"
import FlowerRight from "../assets/pictures/FlowerSkewRight.svg"
import HomeASL from "../assets/pictures/HomeScreenASL.png"
import EventsASL from "../assets/pictures/AboutEventsASL.png"


import SkillSec from '../components/SkillSec'

function ASLProject() {

    return (
        <div className='max-w-[100vw]'>

            {/* custom flower flow section */}
            <div className='max-w-370 mx-auto'>
                <img src={FlowLeft} />
                <h2 className='text-center text-[30px] font-["Kameron"] font-bold'>Freed-Hardeman's American Sign Language Club</h2>
                <p className='text-center text-[20px] font-["Kameron"]'>Case Study on Designs for Campus Outreach</p>
            </div>

            <SectionHolder>
                <div className='flex flex-row justify-between py-[5%]'>
                    <div className='w-[40%] gap-[20]'>
                        <h2 className='font-["Kameron"] font-bold text-[24px] leading-loose py-3'>The Beginning</h2>
                        <p className='font-["Kameron"] text-[18px] leading-loose'>When I came to the club, there weren't really any specific identifiers for the Club. The only thing that set us apart was our use of geometric shapes in slides and posters.</p>
                        <p className='font-["Kameron"] text-[18px] leading-loose'>Not a lot of people knew about the ASL Club, and really just thought of it as just another club. I was just getting into branding and design, so I wanted to help the club as I became its social media manager.</p>
                    </div>

                    <div className='w-[50%] flex flex-col gap-2 mt-6'>
                        <img src={OldSlide} width='500' height='200' />
                        <p className='font-["Kameron"] text-[12px] leading-loose'>Old powerpoint slide from Spring 2025</p>
                    </div>
                </div>
            </SectionHolder>

            <hr className='w-[80%] mx-auto' />

            <SectionHolder>
                <div className='flex flex-row justify-evenly py-[5%]'>
                    <img src={FlowerLeft} width='100' className='pt-[6%]' />
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <h2 className='font-["Kameron"] font-bold text-[30px] leading-loose '>Project Goals</h2>
                        <SkillSec>
                            <li>To have a recognizable brand</li>
                            <li>To spread real information about the Club</li>
                            <li>To stand out from just a name</li>
                        </SkillSec>

                    </div>
                    <img src={FlowerRight} width='90' className='pt-[6%]' />
                </div>
            </SectionHolder>

            <hr className='w-[80%] mx-auto' />

            {/* branding */}
            <SectionHolder>
                <div className='flex flex-row justify-between py-[5%] gap-[2%]'>
                    <div className='flex flex-col gap-[2%] w-[65%]'>
                        <div className='flex flex-row justify-between'>
                            <div className='w-[50%] gap-[20]'>
                                <h2 className='font-["Kameron"] font-bold text-[24px] leading-loose py-3'>Branding</h2>
                                <p className='font-["Kameron"] text-[18px] leading-loose'>To begin branding, I chose dark blue for trustworthiness and to have a different color from the social clubs. I then incorperated some of the ASL Alphabet into a logo and added our motto to summarize what the club does.</p>
                                <p className='font-["Kameron"] text-[18px] leading-loose'>I originally designed the logo for slides and shirts, so the logo featured the current year.</p>
                            </div>

                            <div className='w-[40%] flex flex-col gap-2 mt-6'>
                                <img src={ASLColor} width='250' height='200' />
                                <p className='font-["Kameron"] text-[12px] leading-loose'>New logo</p>
                            </div>
                        </div>
                        <p className='font-["Kameron"] text-[18px] leading-loose'>Wanting to keep the same smooth geometric feel, I incorperated shapes into the designs. However, I wanted to make it feel professional as well, so I chose fonts keeping with that line between fun and professional.</p>
                    </div>
                    <div className='w-[30%] flex flex-col gap-2 mt-6'>
                        <img src={ASLPoster} width='300' height='190' className='border-black border' />
                        <p className='font-["Kameron"] text-[12px] leading-loose'>Poster created from branding materials</p>
                    </div>
                </div>
            </SectionHolder>
            <hr className='w-[80%] mx-auto' />

            <SectionHolder>
                <div className='flex flex-row justify-between py-[5%]'>
                    <div className='w-[50%] flex flex-col gap-2 mt-1'>
                        <div className='flex flex-col gap-2 mt-6'>
                            <img src={HomeASL} width='400' height='200' className='border-black border' />
                            <p className='font-["Kameron"] text-[12px] leading-loose'>Designed Homescreen</p>
                        </div>
                        <div className='flex flex-col gap-2 mt-6'>
                            <img src={EventsASL} width='400' height='200' />
                            <p className='font-["Kameron"] text-[12px] leading-loose'>Designed About Screen</p>
                        </div>
                    </div>
                    <div className='w-[50%] gap-[20] pt-[5%]'>
                        <h2 className='font-["Kameron"] font-bold text-[24px] leading-loose py-3'>The Website</h2>
                        <p className='font-["Kameron"] text-[18px] leading-loose'>A lot of people had to track down information from chapel slides, or find one of our posters hanging up, so I brainstormed another way to get people involved quickly and be able to find information without scraping our social media accounts.</p>
                        <p className='font-["Kameron"] text-[18px] leading-loose'>I wasn't able to implement my website before leadership changed, and leadership didn't seem interested in the rebranding effort, so the design remained in Figma. If you'd like to see the design, click <a className='underline text-pink-700' href="https://www.figma.com/design/rfTX5NdoOo2om42cwCanFJ/FHU-ASL-Website?node-id=0-1&t=VQ3nvjFYhpiCyyei-1" target="_blank" rel="noopener noreferrer">here</a> or the button below!</p>
                        <a href="https://www.figma.com/design/rfTX5NdoOo2om42cwCanFJ/FHU-ASL-Website?node-id=0-1&t=VQ3nvjFYhpiCyyei-1" className='no-underline' target="_blank" rel="noopener noreferrer"><div className='border-[#C999BC] border-2 rounded-sm font-["Kameron"] text-[18px] p-3 flex flex-row gap-2 items-center justify-center hover:bg-[#C999BC] hover:border-[#F1D6E0] hover:cursor-pointer mt-7'>See the Design</div></a>
                    </div>
                </div>
            </SectionHolder>

            <hr className='w-[80%] mx-auto' />

            <SectionHolder>
                <div className='flex flex-row justify-between py-[5%]'>
                    <div className='w-[40%] gap-[20]'>
                        <h2 className='font-["Kameron"] font-bold text-[24px] leading-loose py-3'>Results</h2>
                        <p className='font-["Kameron"] text-[18px] leading-loose'>Many students in chapel expressed appreciation of the new chapel slide, making a mental note to attend or expressing surprise that a such a club existed on campus.</p>
                        <p className='font-["Kameron"] text-[18px] leading-loose'>A few noted that the difference of color and design from the other slides made it stand out, making it more noticable, making the overall effort a success.</p>
                    </div>

                    <div className='w-[50%] flex flex-col gap-2 mt-10'>
                        <img src={NewSlide} width='500' height='200' />
                        <p className='font-["Kameron"] text-[12px] leading-loose'>New powerpoint slide from Fall 2025</p>
                    </div>
                </div>

                <a className='no-underline' target="_blank" rel="noopener noreferrer"><div className='border-[#C999BC] border-2 rounded-sm font-["Kameron"] text-[18px] p-3 flex flex-row gap-2 items-center justify-center hover:bg-[#C999BC] hover:border-[#F1D6E0] hover:cursor-pointer mt-7'>Return to Home Page</div></a>   
            </SectionHolder>
             <img src={FlowRight} />



        </div>
    )
}

export default ASLProject
