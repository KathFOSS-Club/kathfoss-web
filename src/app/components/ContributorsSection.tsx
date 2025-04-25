'use client';

import Tilt from 'react-parallax-tilt';

const people = {
  mentors: [
    { name: "Bhimraj Yadav", image: "/mentor.jpg" },
  ],
  advisors: [
    { name: "Samrat Neupane", image: "/advisor1.jpg" },
    { name: "Prabhash Kumar Jha", image: "/advisor2.jpg" },
  ],
  management: [
    { name: "Sahil Dangol", image: "/pm.jpg" },
    { name: "Nischal Shakya", image: "/prgm.jpg" },
  ],
  team: [
    { name: "Member 1", image: "/team1.jpg" },
    { name: "Member 2", image: "/team2.jpg" },
    { name: "Member 3", image: "/team3.jpg" },
    { name: "Member 4", image: "/team4.jpg" },
    { name: "Member 5", image: "/team5.jpg" },
    { name: "Member 6", image: "/team6.jpg" },
    { name: "Member 7", image: "/team7.jpg" },
    { name: "Member 8", image: "/team8.jpg" },
    { name: "Member 9", image: "/team9.jpg" },
    { name: "Member 10", image: "/team10.jpg" },
  ],
};

export const Card = ({ name, image }: { name: string; image: string }) => (
  <Tilt
    tiltMaxAngleX={10}
    tiltMaxAngleY={10}
    className="w-full max-w-xs bg-black shadow-lg rounded-2xl overflow-hidden transition-transform duration-300"
  >
    <div className="flex flex-col items-center p-4">
      <img
        src={image}
        alt={name}
        className="w-24 h-24 rounded-full object-cover mb-2"
      />
      <h3 className="text-lg font-semibold text-center">{name}</h3>
    </div>
  </Tilt>
);

export const ContributorsSection = () => {
  return (
    <section className="px-6 md:px-16 py-12 bg-gray-50">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Contributors</h1>

      <h2 className="text-2xl font-semibold mb-4">Mentors</h2>
      <div className="grid grid-cols-1 gap-6 mb-10">
        {people.mentors.map((p, i) => (
          <Card key={i} {...p} />
        ))}
      </div>

      <h2 className="text-2xl font-semibold mb-4">Advisors</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
        {people.advisors.map((p, i) => (
          <Card key={i} {...p} />
        ))}
      </div>

      <h2 className="text-2xl font-semibold mb-4">Team</h2>

      {/* Management */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        {people.management.map((p, i) => (
          <Card key={i} {...p} />
        ))}
      </div>

      {/* Team Members */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {people.team.map((p, i) => (
          <Card key={i} {...p} />
        ))}
      </div>
    </section>
  );
};
export default ContributorsSection;
