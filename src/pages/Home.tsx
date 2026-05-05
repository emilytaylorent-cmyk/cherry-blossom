import '../index.css'

import SunsetPink from "../assets/pictures/PinkSunset.jpg"
import Profile from "../assets/pictures/EmilyPicture.jpg"
import Peng from "../assets/pictures/PengLogo.png"
import Cloud from "../assets/pictures/Cloud.png"
import { Link } from 'react-router-dom';
import WaveBG from "../assets/pictures/WaveBG.svg"

import SectionHolder from '../components/SectionHolder'
import SkillSec from '../components/SkillSec'
// import Linked from "../assets/pictures/LinkedinIcon.svg"
// import Email from "../assets/pictures/EmailIcon.svg"
import Download from "../assets/pictures/DownloadWhite.svg"
import Cacao from "../assets/pictures/chocolatePics/LogoBlack 2.png"
import ASL from "../assets/pictures/ASL-Color-Logo.png"
import Resume from "../assets/pictures/EmilyTaylor-Resume.jpg"
import PDF from "../assets/pictures/EmilyTaylor-Resume.pdf"




function Home() {

  return (
    <div className='max-w-[100vw] bg-black'>


      {/* custom flower flow section */}
      <div className='max-w-370 mx-auto md:min-h-140 min-h-80 h-[80%] flex items-center justify-center relative'>
        <img src={SunsetPink} className='absolute top-0 left-0 w-full h-[110%]'/>
        <div className='bg-[#2A141D]/78 p-7 md:w-[40%] w-[70%] relative'>
          <h2 className='text-center text-white text-[24px] font-["Kameron"] font-bold z-10'>Creating quality websites that are beautiful and functional for your business.</h2>
        </div>

      </div>

      <SectionHolder >
        <h2 className='font-["Kameron"] font-bold text-[30px] leading-loose pt-[10%] pb-5 mt-[-40] text-white' id="projects">Projects</h2>

        <div className='flex flex-col gap-10'>
          {/* top half */}
          <div className='flex flex-col lg:flex-row justify-between'>

            <div className=' border-3 rounded-md  p-6 bg-[#2A141D]/78 lg:w-[47%]'>
              <div className='flex flex-row gap-10 pb-5'>
                <div className='w-[40%] flex flex-col items-center justify-center'>
                  <img src={Peng} className='rounded-sm ' />
                </div>

                <div className='w-[60%]'>
                  <h3 className='font-["Kameron"] text-[26px] text-white'>Peng-Cycle</h3>
                  <p className='font-["Kameron"] text-[20px]'>A recycling app for kids that gamifies recycling tasks for taking care of their pet penguin.</p>
                </div>
              </div>

              <Link to={"/CycleProject"}><div className='border-white bg-black text-white border-2 rounded-sm font-["Kameron"] text-[18px] p-3 flex flex-row gap-2 items-center justify-center hover:bg-[#C999BC] hover:border-[#F1D6E0] hover:cursor-pointer'>
              See Case Study!</div></Link>
            </div>



            <div className=' border-3 rounded-md  p-6 bg-[#2A141D]/78 lg:w-[47%]'>
              <div className='flex flex-row gap-10 pb-5'>
                <div className='w-[40%] flex flex-col items-center justify-center'>
                  <img src={Cloud} className='lg:h-[90%] rounded-sm' />
                </div>

                <div className='w-[60%]'>
                  <h3 className='font-["Kameron"] text-[26px] text-white'>Prepared</h3>
                  <p className='font-["Kameron"] text-[20px]'>A disaster preperation app that helps people with steps to survive with confidence.</p>
                </div>
              </div>

              <Link to="/PreparedProject"><div className='border-white bg-black text-white border-2 rounded-sm font-["Kameron"] text-[18px] p-3 flex flex-row gap-2 items-center justify-center hover:bg-[#C999BC] hover:border-[#F1D6E0] hover:cursor-pointer'>
              See Case Study!</div></Link>
            </div>


          </div>
          {/* end of top half */}

           <div className='flex flex-col lg:flex-row justify-between'>

            <div className=' border-3 rounded-md  p-6 bg-[#2A141D]/78 lg:w-[47%]'>
              <div className='flex flex-row gap-10 pb-5'>
                <div className='w-[40%] flex flex-col items-center justify-center'>
                  <img src={Cacao} className='lg:h-[90%] rounded-sm' />
                </div>

                <div className='w-[60%]'>
                  <h3 className='font-["Kameron"] text-[26px] text-white'>Cacao del Sol</h3>
                  <p className='font-["Kameron"] text-[20px]'>Branding, marketing assets, and website designs for a fictional chocolate company.</p>
                </div>
              </div>

              <Link to="/CacaoProject"><div className='border-white bg-black text-white border-2 rounded-sm font-["Kameron"] text-[18px] p-3 flex flex-row gap-2 items-center justify-center hover:bg-[#C999BC] hover:border-[#F1D6E0] hover:cursor-pointer'>
              See Case Study!</div></Link>
            </div>



            <div className=' border-3 rounded-md  p-6 bg-[#2A141D]/78 lg:w-[47%]'>
              <div className='flex flex-row gap-10 pb-5'>
                <div className='w-[40%] flex flex-col items-center justify-center'>
                  <img src={ASL} className='rounded-sm' />
                </div>

                <div className='w-[60%]'>
                  <h3 className='font-["Kameron"] text-[26px] text-white'>FHU ASL Club</h3>
                  <p className='font-["Kameron"] text-[20px]'>Branding, marketing assets, and website design for the FHU ASL Club.</p>
                </div>
              </div>

              <Link to="/ASLProject"><div className='border-white bg-black text-white border-2 rounded-sm font-["Kameron"] text-[18px] p-3 flex flex-row gap-2 items-center justify-center hover:bg-[#C999BC] hover:border-[#F1D6E0] hover:cursor-pointer'>
              See Case Study!</div></Link>
            </div>


          </div>
          {/* end of bottom half */}



        </div>

      </SectionHolder>

      <div className='max-w-370 mx-auto px-[10%] bg-[#2A141D]/78'>
        <div className='flex lg:flex-row flex-col justify-between mt-[2%] py-[4%]' id="about" >
          <div className='lg:w-[50%] gap-[20] flex flex-col justify-center'>
            <h2 className='font-["Kameron"] font-bold text-[30px] leading-loose py-3 text-white'>Meet the Designer</h2>
            <p className='font-["Kameron"] text-[20px] leading-loose text-white'>A small-town Christian with a big heart, I’ll deliver a beautiful and functional solution for your business' website.</p>
            <p className='font-["Kameron"] text-[20px] leading-loose pt-3 text-white'>UX / UI Design is my specialty, especially with my keen eye for detail and empathy for users. I enjoy creating websites, optimizing them, and refining them. </p>
            <p className='font-["Kameron"] text-[20px] leading-loose pt-3 text-white'>It is my mission to create quality designs that are accesssible, beautiful, and functional!</p>
          </div>

          <div className='lg:w-[40%] flex justify-center pt-5'>
            <img src={Profile} width='400' height='200' />
          </div>
        </div>
      </div>

      <SectionHolder>
        <h2 className='font-["Kameron"] font-bold text-[30px] leading-loose pt-[10%] pb-5 mt-[-40] text-white'>Skills</h2>
        <div className='flex flex-col md:flex-row justify-between gap-10'>


          <div className='border-[#C37795] border-3 rounded-sm p-6 bg-[#2A141D]/78 md:w-[30%]'>
            <h3 className='font-["Kameron"] font-bold text-[26px] mb-[-2] text-white'>Technical</h3>
            <ul className='list-disc pl-5 font-["Kameron"] leading-loose text-white text-[20px]'>
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
            <ul className='list-disc pl-5 font-["Kameron"] leading-loose text-white text-[20px]'>
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


      <div className='relative'>
        <img src={WaveBG} className='absolute top-0 left-0  z-1 md:w-[150vw] h-[150vh] md:h-[140%]' />
        <div className='flex flex-col md:flex-row justify-between pt-[25%] md:pt-[18%] pb-5 max-w-370 mx-auto px-[10%] z-10 relative '>
          <div className='hidden md:flex md:w-[40%] justify-center items-center'>
            <img src={Resume} width='300' height='200' />
          </div>

          <div className='md:w-[50%] gap-[20] items-center justify-center'>
            <h2 className='font-["Kameron"] font-bold text-[30px] leading-loose py-3'>Resume</h2>
            <p className='font-["Kameron"] text-[20px] leading-loose pb-[5%]'>Want to know more? Download my resume to see my work experience, my awards, my education, my skills, and my contact information!</p>
            {/* insert button here */}
            <a href={PDF} 
      download="EmilyTaylor-Resume.pdf">
            <div className='border-white bg-black text-white border-2 rounded-sm font-["Kameron"] text-[18px] p-3 flex flex-row gap-2 items-center justify-center hover:bg-[#C999BC] hover:border-[#F1D6E0] hover:cursor-pointer'>
              <img src={Download} />
              Download Resume Here</div></a>
          </div>

        </div>
      </div>

      <SectionHolder>
        <div className='max-w-370 mx-auto min-h-70  flex pt-[30%] justify-center items-center pb-[15%]'>
          <h2 className='text-center text-[24px] font-["Kameron"] font-bold' id="contact">Contact me at <a href="mailto:emilytaylor@gmail.com" className='underline'>emilytaylor@gmail.com</a> or follow me on <a href="www.linkedin.com/in/emily-taylor-1a145138b" className='underline'>LinkedIn!</a></h2>
        </div>
      </SectionHolder>

    </div>
  )
}

export default Home
