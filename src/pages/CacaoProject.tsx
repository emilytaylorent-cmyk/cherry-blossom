import '../index.css'
import { HashLink as Link2 } from 'react-router-hash-link';


import CacaoDelSolLogo from "../assets/pictures/chocolatePics/LogoBlack.png"
import SolWhiteLogo from "../assets/pictures/chocolatePics/WhiteLogo.png"

import SectionHolder from '../components/SectionHolder'
import Brand1 from '../assets/pictures/chocolatePics/Brand-Guideline Book-01.jpg'
import Brand2 from '../assets/pictures/chocolatePics/Brand-Guideline Book-02.jpg'
import Brand3 from '../assets/pictures/chocolatePics/Brand-Guideline Book-03.jpg'
import Brand4 from '../assets/pictures/chocolatePics/Brand-Guideline Book-04.jpg'
import Brand5 from '../assets/pictures/chocolatePics/Brand-Guideline Book-05.jpg'
import Brand6 from '../assets/pictures/chocolatePics/Brand-Guideline Book-06.jpg'

import FamilyCacao from "../assets/pictures/chocolatePics/Family Photo.png"
import Chocolates from "../assets/pictures/chocolatePics/Mockup-Chocolate-Bars.png"
import Packets1 from "../assets/pictures/chocolatePics/Mockup-Packet-1.png"
import Packets2 from "../assets/pictures/chocolatePics/Mockup-Packet-2.png"


import ASL from "../assets/pictures/ASL-Color-Logo.png"
import Peng from "../assets/pictures/PengLogo.png"
import Cloud from "../assets/pictures/Cloud.png"


import SkillSec from '../components/SkillSec'

function CacaoProject() {

    return (
        <div className='max-w-[100vw] bg-black pb-5' id="top">

            {/* custom flower flow section */}
            <div className='max-w-370 mx-auto pt-20 px-[10%]'>
                <h2 className='text-center text-[30px] font-["Kameron"] font-bold pb-2'>Cacao del Sol</h2>
                <p className='text-center text-[18px] md:text-[20px] pb-2 '>Case Study Class Project on the Full Design Process</p>
            </div>

            <SectionHolder>
                <div className='flex flex-col lg:flex-row justify-between py-[5%]'>
                    <div className='lg:w-[40%] gap-[20]'>
                        <h2 className='font-["Kameron"] font-bold text-[24px] leading-loose md:py-3 '>The Prompt</h2>
                        <p className='font-["Kameron"] text-[18px] leading-loose '>Giving us a fictional name, our teacher tasked us with creating a brand identity and visual assets for a chocolate company.</p>
                        <p className='font-["Kameron"] text-[18px] leading-loose '>I chose the name "Cacao del Sol," which originiated from Mexican roots and means "Chocolate of the Sun."</p>
                        <p className='font-["Kameron"] text-[18px] leading-loose '>Delieverables for this project included: a logo, a website, a company story, and chocolate packaging.</p>
                    </div>

                    <div className='lg:w-[50%] flex flex-col gap-2'>
                        <img src={CacaoDelSolLogo} width='500' height='200' className='border border-black' />
                        <p className='font-["Kameron"] text-[12px] leading-loose '>Logo of Cacao del Sol, a fictional chocolate company</p>
                    </div>
                </div>
            </SectionHolder>

            


            <SectionHolder>
                <div className='flex flex-row justify-evenly py-[10%]'>
            
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <h2 className='font-["Kameron"] font-bold text-[30px] leading-loose '>Project Goals</h2>
                        <SkillSec>
                            <li>To have a consistent brand identity across all delieverables</li>
                            <li>Create a user-friendly interface of a company website</li>
                            <li>To create the story of the company and weave it into delieverables</li>
                        </SkillSec>

                    </div>
         
                </div>
            </SectionHolder>

             

            

            <SectionHolder>
                <div className='flex flex-row items-center justify-center py-[5%]'>
                    <h2 className='font-["Kameron"] font-bold text-[24px] leading-loose md:py-3 pl-2 text-center '>Cacao del Sol leans deeply into their Mexican culture with fun bright colors, while creating a family-friendly chocolate. They are a family business run on hope, love, and  papel picado.</h2>
                </div>
            </SectionHolder>

                       

            {/* branding */}
            <SectionHolder>
                <div className='flex  flex-col lg:flex-row justify-between py-[5%] gap-[2%]'>
                    <div className='flex flex-col gap-[2%] lg:w-[55%]'>
                        <div className='flex flex-row justify-between'>
                            <div className='gap-[20]'>
                                <h2 className='font-["Kameron"] font-bold text-[24px] leading-loose md:py-3 '>Branding</h2>
                                <p className='font-["Kameron"] text-[18px] leading-loose '>Doing research on Mexican culture, I found that one of the biggest cultural art styles was of papel picado. I chose a flowing friendly cursive font for the logo, since Mexican families often own businesses together and cursive fonts generally are associated with home.</p>
                                <p className='font-["Kameron"] text-[18px] leading-loose '> To bring the branding together, I used papel picado and a sun for the Sol part of the company name. </p>
                            </div>
                        </div>

                    </div>
                    <div className='lg:w-[40%] flex flex-col gap-2 mt-6 items-center justify-center'>
                        <img src={SolWhiteLogo} width='400' height='300' className='border border-black' />
                        <p className='font-["Kameron"] text-[12px] leading-loose '>White logo for Cacao del Sol</p>
                    </div>
                </div>
            </SectionHolder>


            <SectionHolder>
                <div className='flex flex-col lg:flex-row justify-between pb-[5%]'>
                    <div className='lg:w-[50%] flex flex-col gap-2 mt-[5%]'>
                        <div className='flex flex-col gap-2 mt-6 justify-center items-center'>
                            <img src={FamilyCacao} width='400' height='200' />
                            <p className='font-["Kameron"] text-[12px] leading-loose '>Designed Featured Family Photo</p>
                        </div>
                    </div>
                    <div className='lg:w-[50%] gap-[20] pt-[5%]'>
                        <h2 className='font-["Kameron"] font-bold text-[24px] leading-loose md:py-3'>The Website</h2>
                        <p className='font-["Kameron"] text-[18px] leading-loose '>For the website, it was more about the story than selling the products. So, using the company story and the brand's papel picado, I focused on the family and the impact of the chocolate.</p>
                        <p className='font-["Kameron"] text-[18px] leading-loose pb-4'>Most of the website is black and white, since people tend to ignore bright colors because of advertisements or think it looks unprofessional on a website.</p>
                        <a href="https://www.figma.com/design/UnAUqJ9pz8jUGNyI0QLz4f/Cacao-Del-Sol?node-id=0-1&t=zDWFzgkvnmBwljMX-1" className='no-underline' target="_blank" rel="noopener noreferrer"><div className='border-white bg-black text-white border-2 rounded-sm font-["Kameron"] text-[18px] p-3 flex flex-row gap-2 items-center justify-center hover:bg-[#C999BC] hover:border-[#F1D6E0] hover:cursor-pointer'>
              See the Design</div></a>
                    </div>
                </div>
            </SectionHolder>


                        

            <SectionHolder>
                <div className='flex flex-col lg:flex-row justify-between pt-[5%]'>
                    <div className='lg:w-[45%] gap-[20]'>
                        <h2 className='font-["Kameron"] font-bold text-[24px] leading-loose md:py-3 tracking-wide'>Chocolate Packaging</h2>
                        <p className='font-["Kameron"] text-[18px] leading-loose'>I chose three common Mexican chocolate flavors for my designs: dark, cinnamon, and almond. I chose colors from a inspiration photo to help the brand stay consistent with packaging and designs.</p>
                        <p className='font-["Kameron"] text-[18px] leading-loose'>I chose two primary fonts, a script for the chocolate heading and a serif font for the English translation of the chocolate name. The illustrations use the same lacy feel as the logo and the stars help bring the chocolates together.</p>
                    </div>

                    <div className='lg:w-[45%] flex flex-col gap-2 mt-10'>
                        <img src={Chocolates} width='500' height='200' />
                        <p className='font-["Kameron"] text-[12px] leading-loose'>Two of the hot chocolate package designs for Cacao del Sol: cinnamon and dark.</p>
                    </div>
                </div>

                <div className='flex flex-col lg:flex-row justify-between pb-[5%]'>
                    <div className='lg:w-[45%] flex flex-col gap-2 mt-10'>
                        <img src={Packets1} width='500' height='200' />
                        <p className='font-["Kameron"] text-[12px] leading-loose'>Two of the hot chocolate package designs for Cacao del Sol: cinnamon and almond.</p>
                    </div>
                    <div className='lg:w-[45%] flex flex-col gap-2 mt-10'>
                        <img src={Packets2} width='500' height='200' />
                        <p className='font-["Kameron"] text-[12px] leading-loose'>The three chocolate designs for Cacao del Sol: almond, dark, and cinnamon.</p>
                    </div>

                </div>


                </SectionHolder>

            <SectionHolder>
                <div className='flex flex-col lg:flex-row items-center justify-center'>
                    <h2 className='font-["Kameron"] font-bold text-[24px] leading-loose md:py-3 pl-2 text-center'>Brand Guidelines</h2>
                </div>
                <div className='flex flex-col lg:flex-row justify-between lg:pb-[5%] items-center'>
                    <img src={Brand1} width='300' height='300' className='border border-black'/>
                    <img src={Brand2} width='300' height='300' className='border border-black'/>
                    <img src={Brand3} width='300' height='300' className='border border-black'/>
                </div>
                <div className='flex flex-col lg:flex-row justify-between pb-[5%] mx-auto items-center'>
                    <img src={Brand4} width='300' height='300' className='border border-black'/>
                    <img src={Brand5} width='300' height='300' className='border border-black'/>
                    <img src={Brand6} width='300' height='300' className='border border-black'/>
                </div>

              
                                <h2 className='font-["Kameron"] font-bold text-[24px] leading-loose md:py-3'>More Projects!</h2>

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
                                <img src={Peng} className='lg:h-[90%] rounded-sm' />
                            </div>

                            <div className='w-[60%] flex flex-col items-center justify-center'>
                                <h3 className='font-["Kameron"] text-[20px] text-white'>Peng-Cycle</h3>
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

export default CacaoProject
