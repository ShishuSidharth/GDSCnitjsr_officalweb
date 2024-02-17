import React from 'react'

import bracket from '../assets/bracket.png'
function Footer() {
  return (
    <div className='bg-gray-200 h-[40vh]  text-gray-600 font-lato t font-normal '>
    <div className='flex  justify-around'>
 <div className="mt-5" >
 <div className='flex  justify-center mt-10'>

       <div >
          <img src={bracket} className='mt-1'/>
      </div>
      
     <div>
        <p className='lato text-lg font-normal leading-8 '>
        Google Developer Student Club
      </p>
      <p className='text-xs'>
         National Institute of Technology Jamshedpur
      </p>
      <div className='mt-5'>
         <span>
         <h2 className='font-lato text-sm font-normal'>Google Developer Student Club is a Program</h2>
         <h2 className='font-lato text-sm font-normal'>Supported By Google Developers.</h2> 
       </span> 
      </div>
      
     </div>
 </div>
     
    
    </div>
      <div className='mt-5'>
         
    <div className='flex justify-between mt-10'>
        <div  >
          <h2 >
            About Us
          </h2>
          <h2>
           Events
          </h2>
          <h2>
            Our Team
          </h2>
        </div>
         <div className='ml-10 '>
          <h2>
           Socials
          </h2>
          <h2>
            GDSC NITJSR Chapter
          </h2>
          <h2>
            About GDSC
          </h2>
        </div>
        
    </div>
    
    </div>
      </div>

    <div className='text-center mt-5 mb-5 '>
       <p>
        Made with ❤️ by GDSC NIT JSR 
       </p>
       <p>
        Copyright ©2024, All rights reserved.
       </p>
    </div>
    
    </div>
    
   
  )
}

export default Footer
