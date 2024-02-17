
import HeroImage from '../img/Hero image.svg'

function Hero() {
    return (
        
      <div className="hero flex  sm:p-[100px] flex-nowrap flex-wrap justify-between flex-col">
        <div className="flex md:flex-nowrap">
        <div className='flex flex-col w-fit'>
            <h1 className='font-Patrick sm:text-[110px] text-[52px] sm:text-left sm:leading-[126.5px] leading-[59.8px]'>Google Developer Student Club</h1>
            <h2 className='font-Lato sm:text-[32px] text-[24px] text-[#5F6368] sm:text-left sm:mt-[-15px] mt-[15px]'>NIT JAMSHEDPUR</h2>
            <br></br>
            <br></br>
            
        </div>
            
        <div className="sm:w-[45%]  flex items-end">
            <img src={HeroImage}/>
        </div>
        </div>
        <div className='sm:w-[245.1px] sm:h-[71.21px] w-[123px] h-[23px] bg-[#4285F4] rounded-[20px] text-white sm:text-[24px] text-[16px] flex items-center justify-center'>
               Join the Chapter
            </div>
        
      </div>
    );
  }
  
  export default Hero;