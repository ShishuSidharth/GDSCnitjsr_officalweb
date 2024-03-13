// OurTeam.js
import React from 'react';
import Llogo from '../img/gdsc bracket left.svg';
import Rlogo from '../img/gdsc bracket right.svg';
import A from '../img/leads/1.png';
import Adi from '../img/leads/2.png';
import Ad from '../img/leads/3.png';
import Sh from '../img/leads/4.png';
import Sid from '../img/leads/5.png';
import P from '../img/leads/6.png';
const Leads = () => {
    const profiles = [
        {
            img: A,
            name: "Akash Ranjan",
            position: "GDSC Lead",
        },
        {
            img: Sh,
            name: "Shubham Kumar",
            position: "Creative & Socials Lead",
        },
        {
            img: Sid,
            name: "Sidharth Sharma",
            position: "Team Manager and Cloud Lead",
        },
        {
            img: Adi,
            name: "Aditya Gautam",
            position: "Android Lead",
        },
        {
            img: Ad,
            name: "Adarsh Tiwari",
            position: "Technical Lead",
        },
        {
            img: P,
            name: "Priyanshu Raj",
            position: "Event Lead",
        },
        
    ];

    return (
        <div className="container mx-auto px-4 mt-10">
            <div className="flex items-center justify-center">
                {/* <img
                    className="mr-4"
                    src={Llogo}
                    alt="left bracket"
                /> */}
                <p className="font-Patrick sm:text-[48px] text-[24px] text-decoration-line: underline ">
                    Meet the Leads
                </p>
                {/* <img
                    className="ml-4"
                    src={Rlogo}
                    alt="right bracket"
                /> */}
            </div><br/><br/>
            
            <div className="grid grid-cols-1 md:grid-cols-3  grid-rows-2 gap-4"> {/* Adjusted grid layout */}
                {profiles.map((person, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <img className="m-auto md:p-[50px] md:pb-0" src={person.img} alt={person.name} />
                        <h2 className="text-center text-2xl font-Patrick leading-[48px] font-bold md:text-[34px]">{person.name}</h2>
                        <p className="text-center text-lg font-Lato leading-[30px]">{person.position}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Leads;
