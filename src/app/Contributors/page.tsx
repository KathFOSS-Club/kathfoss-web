'use client';

import Tilt from 'react-parallax-tilt';

const people = {
  mentors: [
    { name: "Bhimraj Yadav", role: "Lead Mentor", image: "/mentor.jpg" },
  ],
  advisors: [
    { name: "Samrat Neupane", role: "Advisor", image: "/advisor1.jpg" },
    { name: "Prabhash Kumar Jha", role: "Advisor", image: "/advisor2.jpg" },
  ],
  management: [
    { name: "Sahil Dangol", role: "Project Manager", image: "/pm.jpg" },
    { name: "Nischal Shakya", role: "Program Manager", image: "/prgm.jpg" },
  ],
  team: [
    { name: "Member 1", role: "Team Member", image: "/team1.jpg" },
    { name: "Member 2", role: "Team Member", image: "/team2.jpg" },
    { name: "Member 3", role: "Team Member", image: "/team3.jpg" },
    { name: "Member 4", role: "Team Member", image: "/team4.jpg" },
    { name: "Member 5", role: "Team Member", image: "/team5.jpg" },
    { name: "Member 6", role: "Team Member", image: "/team6.jpg" },
    { name: "Member 7", role: "Team Member", image: "/team7.jpg" },
    { name: "Member 8", role: "Team Member", image: "/team8.jpg" },
    { name: "Member 9", role: "Team Member", image: "/team9.jpg" },
    { name: "Member 10", role: "Team Member", image: "/team10.jpg" },
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
    className="w-64 bg-white shadow-xl rounded-2xl overflow-hidden transition-transform duration-300"
  >
    <div className="flex flex-col items-center p-6">
      <img
        src={image}
        alt={name}
        className="w-24 h-24 rounded-full object-cover mb-4"
      />
      <h3 className="text-lg font-bold text-center">{name}</h3>
      <p className="text-sm text-gray-600 text-center mt-1">{role}</p>
    </div>
  </Tilt>
);

const ContributorsSection = () => {
  return (
    <section className="px-6 md:px-16 py-12 bg-black min-h-screen">
      <h1 className="text-3xl md:text-4xl font-bold m-10 text-center">
        Contributors
      </h1>

      <Category title="Mentors" members={people.mentors} />
      <Category title="Advisors" members={people.advisors} />
      <Category title="Management" members={people.management} />
      <Category title="Team Members" members={people.team} />
    </section>
  );
};

const Category = ({
  title,
  members,
}: {
  title: string;
  members: { name: string; role: string; image: string }[];
}) => (
  <>
    <h2 className="text-2xl font-semibold mb-4 text-center">{title}</h2>
    <div className="flex flex-wrap justify-center gap-6 mb-12">
      {members.map((p, i) => (
        <Card key={i} {...p} />
      ))}
    </div>
  </>
);

export default ContributorsSection;
