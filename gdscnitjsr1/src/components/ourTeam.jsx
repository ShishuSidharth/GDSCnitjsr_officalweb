// OurTeam.js
import React, { useEffect, useState } from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import Leads from "./Leads";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Llogo from "../img/gdsc bracket left.svg";
import Rlogo from "../img/gdsc bracket right.svg";
import axios from "axios";

const OurTeam = () => {
  const slideno = function () {
    if (window.innerWidth >= 850) {
      return 3;
    } else if (window.innerWidth >= 580) {
      return 2;
    } else {
      return 1;
    }
  };

  const profile = [
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
  ];
  const baseurl = "localhost:3080/";
  const [profiles, setprofiles] = useState([]);
  const fetchdata = async () => {
    const response = await axios.get(
      "https://gds-cnitjsr-officalweb.vercel.app/api/v1/displaymembers"
    );
    setprofiles(response.data);
    console.log(response.data);
  };
  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div className="container mx-auto px-4 mt-10" id="our-team">
      <div className="flex items-center justify-center">
        <img src={Llogo} />
        <h1 className=" font-Patrick sm:text-[64px] text-[30px] "> Our Team</h1>
        <img src={Rlogo} />
      </div>
      <div className="flex items-center justify-center mx-0">
        <p className="sm:text-[24px] text-[16px] font-Lato  text-[#5F6368] self-center mt-[44px]">
          Meet the incredible GDSC team - a synergy of coding brilliance, design
          prowess, strategic minds, and innovation wizards. Together, they
          propel the boundaries of technology.
        </p>
      </div>
      <br />
      <br />
      <Leads />
      <br />
      <br />
      <h1 className=" font-Patrick sm:text-[48px] text-[24px] text-decoration-line: underline">
        Meet the Core
      </h1>{" "}
      <br />
      <br />
      <Swiper
        className="md:h-[440px] h-[350px]"
        spaceBetween={50}
        slidesPerView={slideno()}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {profiles.map((person, index) => (
          <>
            <SwiperSlide key={index}>
              <div>
                <img
                  className="m-auto md:h-[300px] md:w-[300px] h-[225px] w-[225px] object-cover rounded-full"
                  src={`${person.imageurl}`}
                  alt={person.name}
                />
                <h2 className="text-center text-[32px] font-Patrick leading-[48px]">
                  {person.name}
                </h2>
                <p className="text-center text-[20px] font-Lato leading-[30px]">
                  {person.team}
                </p>
              </div>
            </SwiperSlide>
          </>
        ))}
      </Swiper>
    </div>
  );
};

export default OurTeam;
