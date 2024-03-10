// OurTeam.js
import React from 'react';
import Llogo from '../img/gdsc bracket left.svg';
import Rlogo from '../img/gdsc bracket right.svg';

const Leads = () => {
    const profiles = [
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

    return (
        <div className="container mx-auto px-4 mt-10">
            <div className="flex items-center justify-center">
                {/* <img
                    className="mr-4"
                    src={Llogo}
                    alt="left bracket"
                /> */}
                <p className="font-Patrick sm:text-[48px] text-[24px] ">
                    Meet the Leads
                </p>
                {/* <img
                    className="ml-4"
                    src={Rlogo}
                    alt="right bracket"
                /> */}
            </div><br/><br/>
            
            <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-4"> {/* Adjusted grid layout */}
                {profiles.map((person, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <img className="m-auto" src={person.img} alt={person.name} />
                        <h2 className="text-center text-2xl font-Patrick leading-[48px]">{person.name}</h2>
                        <p className="text-center text-lg font-Lato leading-[30px]">{person.position}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Leads;
