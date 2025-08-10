import React from 'react';
import { Award, Users, Home, Globe } from 'lucide-react';

const PillarCard = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-6">
    <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
      <Icon className="w-10 h-10 text-white" strokeWidth={1.5} />
    </div>
    
    <h3 className="text-gray-800 font-semibold text-sm mb-3 leading-tight">
      {title}
    </h3>
    
    <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
      {description}
    </p>
  </div>
);

export default function ChooseSurfCamp() {
  const pillars = [
    {
      icon: Award,
      title: "08th Consecutive Traveler Choise Awards on Tripadvisor. Most reviewd surf camp in Google ",
      description: "Recognized globally for excellence in surf experiences and service."
    },
    {
      icon: Users,
      title: "International ISA certified Instructors",
      description: "Trained surfing from the region who know the waves better than anyone."
    },
    {
      icon: Home,
      title: "Beachfront Locations",
      description: "Wake up to the waves in both Sri Lanka and Morocco."
    },
    {
      icon: Globe,
      title: "Make Friends For Life",
      description: "From sunset jams to surfy hangouts, our social vibes bring travelers together — good times, good crew, and friendships that ride beyond the waves."
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Why Choose The Surfer Surf Camps?
          </h2>
          <p className="text-gray-600 text-lg">
            4 Key Pillars You Can Use:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <div key={index} className="transform transition-transform duration-300 hover:scale-105">
              <PillarCard
                icon={pillar.icon}
                title={pillar.title}
                description={pillar.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}