import '../index.css'

import SunsetPink from "../assets/pictures/PinkSunset.jpg"
import Profile from "../assets/pictures/EmilyPicture.jpg"
import Peng from "../assets/pictures/PengLogo.png"
import Cloud from "../assets/pictures/Cloud.png"
import { HashLink as Link2 } from 'react-router-hash-link';
import WaveBG from "../assets/pictures/WaveBG.svg"

import SectionHolder from '../components/SectionHolder'
import SkillSec from '../components/SkillSec'
// import Linked from "../assets/pictures/LinkedinIcon.svg"
import Flowers from "../assets/pictures/corina-ardeleanu-sWlxCweDzzs-unsplash.jpg"
import Bethel from "../assets/pictures/BethelCOC.png"
import Cacao from "../assets/pictures/chocolatePics/LogoBlack 2.png"
import ASL from "../assets/pictures/ASL-Color-Logo.png"






function Home() {

  return (
    <div className='max-w-[100vw] bg-black' id="home">


      {/* custom flower flow section */}
      <div className='max-w-370 mx-auto md:min-h-140 min-h-80 h-[110%] flex items-center justify-center relative'>
        <img src={SunsetPink} className='absolute top-0 left-0 w-full h-[110%]'/>
        <div className='bg-[#2A141D]/78 p-7 md:w-[40%] w-[70%] relative'>
          <h2 className='text-center text-white text-[24px]  font-bold z-10'>Creating quality websites that are beautiful and functional for your business.</h2>
        </div>

      </div>

      <SectionHolder >
        <h2 className=' font-bold text-[30px] leading-loose pt-[10%] md:pb-5 text-white' id="projects">Projects</h2>

        <div className='flex flex-col gap-10 pb-10 md:pb-0'>
          {/* top half */}
          <div className='flex flex-col lg:flex-row justify-between gap-10 md:gap-0'>

            <div className=' border-3 rounded-md  p-6 bg-[#2A141D]/78 lg:w-[47%]'>
              <div className='flex flex-row gap-10 pb-5'>
                <div className='w-[40%] flex flex-col items-center justify-center'>
                  <img src={Peng} className='rounded-sm ' />
                </div>

                <div className='w-[60%]'>
                  <h3 className='font-["Kameron"] text-[26px] text-white'>Peng-Cycle</h3>
                  <p className=' text-[18px]'>A recycling app for kids that gamifies recycling tasks for taking care of their pet penguin.</p>
                </div>
              </div>

              <Link2 to="/CycleProject#top"><div className='border-white bg-black text-white border-2 rounded-sm  text-[18px] p-3 flex flex-row gap-2 items-center justify-center hover:bg-[#C999BC] hover:border-[#F1D6E0] hover:cursor-pointer'>
              See Case Study!</div></Link2>
            </div>



            <div className=' border-3 rounded-md  p-6 bg-[#2A141D]/78 lg:w-[47%]'>
              <div className='flex flex-row gap-10 pb-5'>
                <div className='w-[40%] flex flex-col items-center justify-center'>
                  <img src={Cloud} className='lg:h-[90%] rounded-sm' />
                </div>

                <div className='w-[60%]'>
                  <h3 className='font-["Kameron"] text-[26px] text-white'>Prepared</h3>
                  <p className=' text-[18px]'>A disaster preperation app that helps people with steps to survive with confidence.</p>
                </div>
              </div>

              <Link2 to="/PreparedProject#top"><div className='border-white bg-black text-white border-2 rounded-sm  text-[18px] p-3 flex flex-row gap-2 items-center justify-center hover:bg-[#C999BC] hover:border-[#F1D6E0] hover:cursor-pointer'>
              See Case Study!</div></Link2>
            </div>


          </div>
          {/* end of top half */}

           <div className='flex flex-col lg:flex-row justify-between gap-10 md:gap-0'>

            <div className=' border-3 rounded-md  p-6 bg-[#2A141D]/78 lg:w-[47%]'>
              <div className='flex flex-row gap-10 pb-5'>
                <div className='w-[40%] flex flex-col items-center justify-center'>
                  <img src={Cacao} className='lg:h-[90%] rounded-sm' />
                </div>

                <div className='w-[60%]'>
                  <h3 className='font-["Kameron"] text-[26px] text-white'>Cacao del Sol</h3>
                  <p className=' text-[18px]'>Branding, marketing assets, and website designs for a fictional chocolate company.</p>
                </div>
              </div>

              <Link2 to="/CacaoProject#top"><div className='border-white bg-black text-white border-2 rounded-sm  text-[18px] p-3 flex flex-row gap-2 items-center justify-center hover:bg-[#C999BC] hover:border-[#F1D6E0] hover:cursor-pointer'>
              See Case Study!</div></Link2>
            </div>



            <div className=' border-3 rounded-md  p-6 bg-[#2A141D]/78 lg:w-[47%]'>
              <div className='flex flex-row gap-10 pb-5'>
                <div className='w-[40%] flex flex-col items-center justify-center'>
                  <img src={ASL} className='rounded-sm' />
                </div>

                <div className='w-[60%]'>
                  <h3 className='font-["Kameron"] text-[26px] text-white'>FHU ASL Club</h3>
                  <p className=' text-[18px]'>Branding, marketing assets, and website design for the FHU ASL Club.</p>
                </div>
              </div>

              <Link2 to="/ASLProject#top"><div className='border-white bg-black text-white border-2 rounded-sm  text-[18px] p-3 flex flex-row gap-2 items-center justify-center hover:bg-[#C999BC] hover:border-[#F1D6E0] hover:cursor-pointer'>
              See Case Study!</div></Link2>
            </div>


          </div>
          {/* end of bottom half */}



        </div>

      </SectionHolder>

      <div className='max-w-370 mx-auto px-[10%] bg-[#2A141D]/78'>
        <div className='flex lg:flex-row flex-col justify-between mt-[2%] py-[4%]' id="about" >
          <div className='lg:w-[50%] gap-[20] flex flex-col justify-center'>
            <h2 className=' font-bold text-[30px] leading-loose py-3 text-white'>Meet the Designer</h2>
            <p className=' text-[18px] leading-loose text-white'>I'm Emily, someone who will deliver a beautiful and functional solution for your business' website.</p>
            <p className=' text-[18px] leading-loose pt-3 text-white'>UX / UI Design is my specialty, especially with my keen eye for detail and empathy for users. I enjoy creating websites, optimizing them, and refining them. </p>
            <p className=' text-[18px] leading-loose pt-3 text-white'>It is my mission to create quality designs that are accesssible, beautiful, and functional!</p>
          </div>

          <div className='lg:w-[40%] flex justify-center pt-5'>
            <img src={Profile} width='400' height='200' />
          </div>
        </div>
      </div>

      <SectionHolder>
        <h2 className=' font-bold text-[30px] leading-loose pt-[10%] pb-5 mt-[-40] text-white'>Skills</h2>
        <div className='flex flex-col md:flex-row justify-between gap-10'>


          <div className='border-[#C37795] border-3 rounded-sm p-6 bg-[#2A141D]/78 md:w-[30%]'>
            <h3 className='font-["Kameron"] font-bold text-[26px] mb-[-2] text-white'>Technical</h3>
            <ul className='list-disc pl-5  leading-loose text-white text-[18px]'>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>React</li>
              <li>SEO Optimization</li>
              <li>React Native</li>
              <li>Python</li>

            </ul>
          </div>




          <div className='md:w-[40%] flex flex-col items-center justify-center'>
            <SkillSec title="Design">
              <li>Figma</li>
              <li>Adobe Illustrator</li>
            </SkillSec>
          </div>



          <div className='border-[#C37795] border-3 rounded-sm p-6 bg-[#2A141D]/78 md:w-[30%]'>
            <h3 className='font-["Kameron"] font-bold text-[26px] mb-[-2] text-white'>Personal</h3>
            <ul className='list-disc pl-5  leading-loose text-white text-[18px]'>
              <li>Attention to detail</li>
              <li>Hard-working</li>
              <li>Extrovert</li>
              <li>Organized</li>
              <li>Encourager</li>
              <li>Positive</li>
              <li>Team Player</li>
            </ul>
          </div>

        </div>
      </SectionHolder>


      <div className='relative' id="more">
        <img src={WaveBG} className='absolute top-0 left-0 z-1 md:w-[150vw] h-[130%] md:h-[140%]' />
        <div className='flex flex-col md:flex-row justify-between pt-[25%] md:pt-[18%] pb-5 max-w-370 mx-auto px-[10%] z-10 relative '>
          <div className='hidden md:flex md:w-[40%] justify-center items-center'>
            {/* <img src={Resume} width='300' height='200' /> */}
          </div>

          <div className='md:w-[50%] gap-[20] items-center justify-center'>
            <h2 className='font-bold text-[30px] leading-loose py-3'>More of My Work</h2>
            <p className=' text-[18px] leading-loose pb-[5%]'>Want to see what else I do? Check out my side studio for wedding designs or scroll down for real websites I created! I have experience across most of the frontend, and am a fast learner for new opportunities.</p>
            {/* insert button here */}
            <a href="">
            <div className='border-white bg-black text-white border-2 rounded-sm  text-[18px] p-3 flex flex-row gap-2 items-center justify-center hover:bg-[#C999BC] hover:border-[#F1D6E0] hover:cursor-pointer'>
              Check out Forever After Studio</div></a>
          </div>

        </div>
      </div>

      <SectionHolder>
        <div className='py-[10%]'>
        <h2 className='font-bold text-[30px] leading-loose pt-[10%] md:pb-5 text-white' id="projects">Websites</h2>

        <div className='flex flex-col lg:flex-row gap-10 pb-10 md:pb-0'>
           <a href="/" className=' border-3 rounded-md  p-6 bg-[#2A141D]/78 lg:w-[47%]  hover:bg-[#C37795]'>
              <div className='flex flex-row lg:flex-col gap-10 pb-5'>
                <div className='flex flex-col items-center justify-center w-[30%] lg:w-full'>
                  <img src={SunsetPink} className='rounded-sm' />
                </div>

                <div className='md:flex md:flex-col '>
                  <h3 className='font-["Kameron"] text-[26px] text-white'>Portfolio Website</h3>
                  <p className=' text-[18px]'>React, Tailwind CSS, Figma</p>
                </div>
              </div>
          </a>

           
          <a href="https://bethelchurchofchrist.net/" className=' border-3 rounded-md  p-6 bg-[#2A141D]/78 lg:w-[47%] hover:bg-[#C37795]'>
              <div className='flex flex-row lg:flex-col gap-10 pb-5'>
                <div className='flex flex-col items-center justify-center w-[30%] lg:w-full'>
                  <img src={Bethel} className='rounded-sm' />
                </div>

                <div className='md:flex md:flex-col '>
                  <h3 className='font-["Kameron"] text-[26px] text-white'>Bethel Church of Christ</h3>
                  <p className=' text-[18px]'>Wordpress, HTML, CSS</p>
                </div>
              </div>
          </a>


          <a href="https://magic-carousel.netlify.app/" className=' border-3 rounded-md  p-6 bg-[#2A141D]/78 lg:w-[47%] hover:bg-[#C37795]'>
              <div className='flex flex-row lg:flex-col gap-10 pb-5'>
                <div className='flex flex-col items-center justify-center w-[30%] lg:w-full'>
                  <img src={Flowers} className='rounded-sm' />
                </div>

                <div className='md:flex md:flex-col '>
                  <h3 className='font-["Kameron"] text-[26px] text-white'>Magic Carousel</h3>
                  <p className=' text-[18px]'>HTML, CSS, Javascript</p>
                </div>
              </div>
          </a>


        </div>
        </div>
      </SectionHolder>


    </div>
  )
}

export default Home
