import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import Leads from "./Leads";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import axios from "axios";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Llogo from "../img/gdsc bracket left.svg";
import Rlogo from "../img/gdsc bracket right.svg";

const PersonCard = ({ person }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <img
        className="m-auto md:h-[300px] md:w-[300px] h-[225px] w-[225px] object-cover rounded-full cursor-pointer"
        src={person.imageurl}
        alt={person.name}
        onClick={() => setOpen(true)}
      />
      <h2 className="text-center text-[32px] font-Patrick leading-[48px] cursor-pointer"  onClick={() => setOpen(true)}>
        {person.name}
      </h2>
      <Modal
        isOpen={isOpen}
        setOpen={setOpen}
        onClose={() => setOpen(false)}
        name={person.name}
        githublink={`${person.github}`}
        instagramlink={`${person.instagram}`}
        linkedinlink={`${person.linkedin}`}
        facebooklink={`${person.facebook}`}
        xlink={`${person.x}`}
        gmail={`${person.mail}`}
      />
    </div>
  );
};

const OurTeam = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get("https://gds-cnitjsr-officalweb.vercel.app/api/v1/displaymembers");
        setProfiles(response.data);
        console.log(response.data)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchdata();
  }, []);

  const slideno = () => {
    if (window.innerWidth >= 850) {
      return 3;
    } else if (window.innerWidth >= 580) {
      return 2;
    } else {
      return 1;
    }
  };

  return (
    <>
      <div className="container mx-auto px-4 mt-10" id="our-team">
        <div className="flex items-center justify-center">
          <img src={Llogo} alt="left bracket logo" />
          <h1 className="font-Patrick sm:text-[64px] text-[30px] "> Our Team</h1>
          <img src={Rlogo} alt="right bracket logo" />
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
        <h1 className="font-Patrick sm:text-[48px] text-[24px] text-decoration-line: underline">
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
            <SwiperSlide key={index}>
              <PersonCard person={person} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default OurTeam;
