// OurTeam.js
import React, { useEffect, useState } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// import { FreeMode, Pagination } from 'swiper/modules';
import Llogo from '../img/gdsc bracket left.svg'
import Rlogo from '../img/gdsc bracket right.svg'
import axios from 'axios'
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
const swiperOptions = {
  modules: [Navigation, Pagination, Scrollbar, A11y],
  spaceBetween: 50,
  slidesPerView: 3,
  navigation: true,
  pagination: { clickable: true },
  scrollbar: { draggable: true },
  onSwiper: (swiper) => console.log(swiper),
  onSlideChange: () => console.log('slide change'),
};
const OurTeam =() => {

    const  profile = [
        {
            img: "/our-team-bub/team-bub-red1.svg",
            name: "Akash Ranjan",
            position: "GDSC Lead",
        },
        {
            img: "/our-team-bub/team-bub-blue.svg",
            name: "Sidharth Sharma",
            position: "Event Manager",
        },
        {
            img: "/our-team-bub/team-bub-yellow1.svg",
            name: "Priyanshu Raj",
            position: "Team Lead",
        },
        {
            img: "/our-team-bub/team-bub-green.svg",
            name: "Shubham Kumar",
            position: "Creative & Socials Lead",
        },
        {
            img: "/our-team-bub/team-bub-yellow2.svg",
            name: "Adarsh Tiwari",
            position: "Technical Lead",
        },
        {
            img: "/our-team-bub/team-bub-red2.svg",
            name: "Aditya Gautam",
            position: "Android Lead",
        },   


    ]
    const baseurl = 'localhost:3080/';
      const [profiles,setprofiles]=useState([])
    const fetchdata =  async () =>{
      const response = await axios.get('https://gds-cnitjsr-officalweb.vercel.app/api/v1/displaymembers')
       setprofiles(response.data)
      console.log(response.data)
    }
      useEffect(()=>{
        fetchdata()
      },[])

  return (
    <div className="container mx-auto px-4 mt-10"  id="our-team">
      <div className="flex items-center justify-center">
      <img src={Llogo}/>
<h1 className=" font-Patrick sm:text-[64px] text-[30px] " > Our Team</h1>          
<img src={Rlogo}/>
      </div>
      <div className='flex items-center justify-center mx-0'>
        <p className='lg:w-2/4 w-5/6 text-center m-10 text-[#5F6368] text-[25px] font-Lato'>Meet the incredible GDSC team - a synergy of coding brilliance, design prowess, strategic minds, and innovation wizards. Together, they propel the boundaries of technology.</p>
      </div>
      
      <Swiper
  spaceBetween={50}
  slidesPerView={{function(){
    if(window.innerWidth>=850){
      return 3;
    }else if(window.innerWidth>=580){
      return 2;

    }else{
      return 1;
    }
  }}}
  slidesPerColumn={2} // Set the number of rows
  onSlideChange={() => console.log('slide change')}
  onSwiper={(swiper) => console.log(swiper)}
>
  {profiles.map((person, index) => (<>
    <SwiperSlide key={index}>
      <div>
        <img className='m-auto md:h-[300px] md:w-[300px] h-[225px] w-[225px] object-cover rounded-full' src={`${person.imageurl}`} alt={person.name} />
        <h2 className='text-center text-[32px] font-Patrick leading-[48px]'>{person.name}</h2>
        <p className='text-center text-[20px] font-Lato leading-[30px]'>{person.team}</p>
      </div>
    </SwiperSlide>
  
  </>

  ))}
  
</Swiper>

    </div>
  );
};

export default OurTeam;
