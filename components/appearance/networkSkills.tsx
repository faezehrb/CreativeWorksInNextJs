import React from 'react';

const NetworkSkills = () => {
  // Define your skills here
  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React.js',
    'Node.js',
    'Tailwind CSS',
    'TypeScript',
    'GraphQL',
    'MongoDB',
    'Express.js',
    'Next.js',
    'UI/UX Design',
    'Responsive Web Design',
    'Version Control (Git)',
  ];

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-4">My Skills</h2>
      <div className="grid grid-cols-2 gap-4">
        {skills.map((skill, index) => (
          <div key={index} className="bg-gray-200 p-4 rounded shadow">
            <h3 className="text-lg font-semibold mb-2">{skill}</h3>
            {/* You can add more details about each skill if needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NetworkSkills;
