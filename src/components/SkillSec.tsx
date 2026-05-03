import '../index.css'



const SkillSec = ({ title, children }) => {
  return (
         <div className='border-[#C37795] border-3 rounded-sm p-6 bg-[#2A141D]/78'>
          <h3 className='font-["Kameron"] font-bold text-[26px] mb-[-2] text-white'>{title}</h3>
          <ul className='list-disc pl-5 font-["Kameron"] leading-loose text-white text-[20px]'>
            {children}
          </ul>
         </div>
  )
}

export default SkillSec