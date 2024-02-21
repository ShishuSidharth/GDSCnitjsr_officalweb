import './App.css';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import { profiles } from './data';

import { FreeMode, Pagination } from 'swiper/modules'
function App() {
  return (
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-center">
        <img
          className="w-16 h-16 mr-4"
          src="/assets/gdsc bracket left.svg" 
          alt="left bracket"
        /> 
        <p className="font-Patric text-4xl text-black-600 capitalize ">
          Our Team
        </p>
        <img
          className="w-16 h-16 ml-4  width: 62px"
          src="./assets/gdsc bracket right.svg" 
          alt="right bracket"
        />
      </div>
      <div className='flex items-center justify-center mx-0'>
        <p className='lg:w-2/4 w-5/6 text-center m-10 text-[#5F6368] text-[25px] font-Lato'>Meet the incredible GDSC team - a synergy of coding brilliance, design prowess, strategic minds, and innovation wizards. Together, they propel the boundaries of technology.</p>
      </div>
      <Swiper
        
            slidesPerView={1}
        spaceBetween={15}
        freeMode={true}
         pagination={{ clickable: true }}
        modules={[ Pagination, FreeMode]}
      >
        <SwiperSlide>
      <div className='grid grid-cols-2 lg:grid-cols-3 m-auto'>
        {
          profiles.map((person, index) =>  (
            <div key={index}>
              <img className='m-auto' src={`${person.img}`} alt="" />
              <h2 className='text-center text-[32px] font-Patrick leading-[48px]'>{person.name}</h2>
              <p className='text-center text-[20px]font-Lato leading-[30px]'>{ person.position}</p>
            </div>
          ))  
          }
          
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='grid grid-cols-2 lg:grid-cols-3 m-auto'>
        {
          profiles.map((person, index) =>  (
            <div key={index}>
              <img className='m-auto' src={`${person.img}`} alt="" />
              <h2 className='text-center text-[32px] font-Patrick leading-[48px]'>Name</h2>
              <p className='text-center text-[20px]font-Lato leading-[30px]'>Position</p>
            </div>
          ))  
          }
          
          </div>
          </SwiperSlide>
        </Swiper>
    </div>
  );
}



export default App;
