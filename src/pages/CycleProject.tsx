import '../index.css'

import PengComplete from "../assets/pictures/Completed Tasks.png"
import SectionHolder from '../components/SectionHolder'
import { HashLink as Link2 } from 'react-router-hash-link';

import PengHome from "../assets/pictures/PengHome.png"
import PengTask from "../assets/pictures/Tasks.png"
import PengLeader from "../assets/pictures/Leaderboard.png"
import PengFriends from "../assets/pictures/Friends.png"
import PengCover from "../assets/pictures/Cover.png"

import ASL from "../assets/pictures/ASL-Color-Logo.png"
import Cloud from "../assets/pictures/Cloud.png"
import Cacao from "../assets/pictures/chocolatePics/LogoBlack 2.png"

import SkillSec from '../components/SkillSec'

function CycleProject() {

    return (
        <div className='max-w-[100vw] bg-black pb-5' id="top">

            {/* custom flower flow section */}
            <div className='max-w-370 mx-auto pt-20 px-[10%]'>
                <h2 className='text-center text-[30px] font-["Kameron"] font-bold '>Peng-cycle: A Recycling Game Mobile App</h2>
                <p className='md:text-center text-[20px] font-["Kameron"]'>Case Study on UX / UI design for a Recycling App.</p>
            </div>

            <SectionHolder>
                <div className='flex flex-col lg:flex-row justify-between py-[5%]'>
                    <div className='lg:w-[40%] gap-[20]'>
                        <h2 className='font-["Kameron"] font-bold text-[24px] leading-loose md:py-3'>The Problem</h2>
                        <p className='font-["Kameron"] text-[18px] leading-loose'>For this class project, we had to identify a problem and come up with a creative solution that we could design a mobile app for. I chose the problem of global warming and zoned in on promoting recycling as my problem.</p>
                        <p className='font-["Kameron"] text-[18px] leading-loose'>There are plenty of recycling apps out there, but none for kids. I decided to come up with a game that combined Webkinz and Finch that promoted recycling from kids 7 - 14 years old.</p>

                    </div>

                    <div className='lg:w-[50%] flex flex-col gap-2 mt-6'>
                        <img src={PengCover} width='500' height='200' />
                        <p className='font-["Kameron"] text-[12px] leading-loose'>Project cover of Peng-cycle</p>
                    </div>
                </div>
            </SectionHolder>

            

            <SectionHolder>
                <div className='flex flex-row justify-evenly py-[5%]'>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <h2 className='font-["Kameron"] font-bold text-[30px] md:leading-loose '>Project Goals</h2>
                        <SkillSec>
                            <li>Identify a problem, target audience, and analyze competitors.</li>
                            <li>Create a mobile app that identifies a creative solution to the problem</li>
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
                        <p className='font-["Kameron"] text-[18px] leading-loose'>My target audience is 7 - 14 years old, and what better way to get them involved than to gamify recycling? I drew inspiration from apps like Finch and Webkinz for ideas, and overall incorperated those into a recycling mobile app.</p>
                        <p className='font-["Kameron"] text-[18px] leading-loose pt-[3%]'>The app consists of a pet penguin, where you can earn points based on recycling tasks to customize its home and its outfits.</p>
                    </div>

                    <div className='flex flex-row justify-between lg:justify-evenly lg:w-[60%]'>
                        <div className='flex flex-col gap-2 mt-6'>
                            <img src={PengHome} width='200' height='200' />
                            <p className='font-["Kameron"] text-[12px] leading-loose'>Home Screen of Peng-Cycle</p>
                        </div>
                        <div className='flex flex-col gap-2 mt-6'>
                            <img src={PengTask} width='200' height='200' className='border-black border' />
                            <p className='font-["Kameron"] text-[12px] leading-loose'>Task Screen of Peng-Cycle</p>
                        </div>
                    </div>

                </div>
            </SectionHolder>
            

            <SectionHolder>
                <div className='flex flex-row justify-between py-[5%] gap-[3%]'>
                    <div className='hidden w-[50%] lg:flex flex-row gap-2 mt-1 justify-evenly'>
                        <div className=' flex flex-col gap-2'>
                            <img src={PengFriends} width='200' height='200' className='border-black border' />
                            <p className='font-["Kameron"] text-[12px] leading-loose'>Friends screen</p>
                        </div>
                        <div className=' flex flex-col gap-2 '>
                            <img src={PengLeader} width='200' height='200' className='border-black border' />
                            <p className='font-["Kameron"] text-[12px] leading-loose'>Leaderboard screen</p>
                        </div>

                    </div>
                    <div className='lg:w-[50%] gap-[20] pt-[5%]'>
                        <h2 className='font-["Kameron"] font-bold text-[24px] leading-loose py-3'>Features</h2>
                        <p className='font-["Kameron"] text-[18px] leading-loose pb-4'>Aside from tasks, the users are able to add friends. There is a leaderboard that tallys up the number of points each week if people wish to compete with their siblings or friends. </p>
                        <a href="https://www.figma.com/design/YWadhozmmECRtLTeTATqO6/Recycling-Penguin-App?node-id=11-2993&t=f956Z6gheGIu1KEZ-1" className='no-underline' target="_blank" rel="noopener noreferrer"><div className='border-white bg-black text-white border-2 rounded-sm font-["Kameron"] text-[18px] p-3 flex flex-row gap-2 items-center justify-center hover:bg-[#C999BC] hover:border-[#F1D6E0] hover:cursor-pointer'>
              See the Design</div></a>
                    </div>
                </div>
            </SectionHolder>

            

            <SectionHolder>
                <div className='flex flex-col lg:flex-row justify-between py-[5%]'>
                    <div className='lg:w-[50%] gap-[20]'>
                        <h2 className='font-["Kameron"] font-bold text-[24px] leading-loose py-3'>Results</h2>
                        <p className='font-["Kameron"] text-[18px] leading-loose'>This project probably was one of the most fun to do, since I got to incorperate a mascot into the game. It felt more enjoyable than just simply a design, and I really do enjoy promoting recycling.</p>
                        <p className='font-["Kameron"] text-[18px] leading-loose pt-[2%]'>If I could do anything different, I would end up getting more feedback on the design aspect and not the usability aspect, as it was a class solely focused on understanding user flow.</p>
                    </div>

                    <div className='lg:w-[50%] flex flex-col justify-center items-center gap-2 mt-10'>
                        <img src={PengComplete} width='200' height='200' />
                        <p className='font-["Kameron"] text-[12px] leading-loose'>Completed Tasks Screen</p>
                    </div>
                </div>

                
                <h2 className='font-["Kameron"] font-bold text-[24px] leading-loose py-3'>More Projects!</h2>

                <div className='flex flex-col lg:flex-row justify-between'>
                
                    <div className=' border-3 rounded-md  p-6 bg-[#2A141D]/78 lg:w-[30%]'>
                        <div className='flex flex-row gap-10 pb-5'>
                            <div className='w-[40%] flex flex-col items-center justify-center'>
                                <img src={ASL} className='rounded-sm ' />
                            </div>

                            <div className='w-[60%] flex flex-col  justify-center'>
                                <h3 className='font-["Kameron"] text-[20px] text-white'>FHU ASL Club</h3>
                            </div>
                        </div>

                        <Link2 to="/ASLProject#top"><div className='border-white bg-black text-white border-2 rounded-sm  text-[18px] p-3 flex flex-row gap-2 items-center justify-center hover:bg-[#C999BC] hover:border-[#F1D6E0] hover:cursor-pointer'>
                            See Case Study!</div></Link2>
                    </div>



                    <div className=' border-3 rounded-md  p-6 bg-[#2A141D]/78 lg:w-[30%]'>
                        <div className='flex flex-row gap-10 pb-5'>
                            <div className='w-[40%] flex flex-col items-center justify-center'>
                                <img src={Cloud} className='lg:h-[90%] rounded-sm' />
                            </div>

                            <div className='w-[60%] flex flex-col items-center  justify-center'>
                                <h3 className='font-["Kameron"] text-[20px] text-white'>Prepared</h3>
                             </div>
                        </div>

                        <Link2 to="/PreparedProject#top"><div className='border-white bg-black text-white border-2 rounded-sm  text-[18px] p-3 flex flex-row gap-2 items-center justify-center hover:bg-[#C999BC] hover:border-[#F1D6E0] hover:cursor-pointer'>
                            See Case Study!</div></Link2>
                    </div>

                    <div className=' border-3 rounded-md  p-6 bg-[#2A141D]/78 lg:w-[30%]'>
                        <div className='flex flex-row gap-10 pb-5'>
                            <div className='w-[40%] flex flex-col items-center justify-center'>
                                <img src={Cacao} className='lg:h-[90%] rounded-sm' />
                            </div>

                            <div className='w-[60%] flex flex-col items-center justify-center'>
                                <h3 className='font-["Kameron"] text-[20px] text-white'>Cacao del Sol</h3>
                                </div>
                        </div>

                        <Link2 to="/CacaoProject#top"><div className='border-white bg-black text-white border-2 rounded-sm  text-[18px] p-3 flex flex-row gap-2 items-center justify-center hover:bg-[#C999BC] hover:border-[#F1D6E0] hover:cursor-pointer'>
                            See Case Study!</div></Link2>
                    </div>
                </div>

            </SectionHolder>

        </div>
    )
}

export default CycleProject
