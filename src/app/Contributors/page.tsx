'use client';

import Tilt from 'react-parallax-tilt';
import { Box, Typography, Grid2 } from "@mui/material";
import { teamMembers } from "../data/meet-our-team";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const people = {
  mentors: [
    { name: "Bhimraj Yadav", role: "Lead Mentor", image: "/images/MeetOurTeam/mentor.jpg" },
  ],
  advisors: [
    { name: "Samrat Neupane", role: "Advisor", image: "/images/MeetOurTeam/project-supervisor1.png" },
    { name: "Prabhash Kumar Jha", role: "Advisor", image: "/images/MeetOurTeam/president.jpg" },
  ],
  management: [
    { name: "Sahil Dangol", role: "Project Manager", image: "/images/MeetOurTeam/event-coordinator.jpg" },
    { name: "Nischal Shakya", role: "Program Manager", image: "/images/MeetOurTeam/tech-lead.jpg" },
  ],
  team: [
    { name: "Suraj Acharya", role: "Developer", image: "/images/MeetOurTeam/executive-member1.jpg" },
    { name: "Aashika Lamichhane", role: "Designer", image: "/images/MeetOurTeam/designer.jpg" },
    { name: "Sushmita Khadka", role: "Designer", image: "/images/MeetOurTeam/social-media-handler2.jpg" },
    { name: "Rachit Niroula", role: "Developer", image: "/team4.jpg" },
    { name: "Sahil Kapali", role: "Developer", image: "/team5.jpg" },
    { name: "Rakesh Thapa", role: "Developer", image: "/team6.jpg" },
    { name: "Krishna Kusiyat", role: "DevOps", image: "/images/MeetOurTeam/executive-member2.png" },
    { name: "Ankit Jha", role: "Team Member", image: "/team8.jpg" },
  ],
};

const Card = ({
  name,
  role,
  image,
}: {
  name: string;
  role: string;
  image: string;
}) => (
  <Tilt
    tiltMaxAngleX={10}
    tiltMaxAngleY={10}
    className="w-72 bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-3xl"
  >
    <div className="flex flex-col items-center p-8">
      <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-white/20 shadow-md mb-4">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-xl font-bold text-center text-white">{name}</h3>
      <p className="text-sm text-gray-300 text-center mt-2">{role}</p>
    </div>
  </Tilt>
);

const Category = ({
  title,
  members,
}: {
  title: string;
  members: { name: string; role: string; image: string }[];
}) => (
  <>
    <h2 className="text-3xl font-semibold mb-10 text-center text-white">{title}</h2>
    <div className="flex flex-wrap justify-center gap-10 mb-20">
      {members.map((p, i) => (
        <Card key={i} {...p} />
      ))}
    </div>
  </>
);

const ContributorsSection = () => {
  const particlesInit = async (engine: any) => {
    await loadFull(engine);
  };

  return (
    <section className="relative overflow-hidden min-h-screen">
      {/* Particle Background */}
      <div className="absolute inset-0 z-0">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            fullScreen: { enable: false },
            background: { color: { value: "transparent" } },
            fpsLimit: 60,
            particles: {
              color: { value: "#ffffff" },
              number: { value: 100 },
              size: { value: 1.2 },
              move: { enable: true, speed: 0.25 },
              opacity: { value: 0.5, random: true },
            },
          }}
          className="w-full h-full"
        />
      </div>

      {/* Content */}
      <div
        className="relative z-10 px-6 md:px-16 py-12"
        style={{
          background: "linear-gradient(to bottom right, #0E1322 0%, #1A2138 100%)",
          minHeight: "100vh",
        }}
      >
        <h1 className="text-4xl md:text-5xl font-bold m-16 text-center text-white">
          Contributors
        </h1>

        <Category title="Mentors" members={people.mentors} />
        <Category title="Advisors" members={people.advisors} />
        <Category title="Management" members={people.management} />
        <Category title="Team Members" members={people.team} />
      </div>
    </section>
  );
};

export default ContributorsSection;
