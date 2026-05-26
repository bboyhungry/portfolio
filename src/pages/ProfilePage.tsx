import Header from '../components/Header';
import Section from '../components/Section';
import Job from '../components/Job';
import SkillList from '../components/SkillList';

const ProfilePage = () => {
  const workExperience = [
    {
      title: "Software Engineer",
      company: "Netsmart Technology",
      location: "Overland Park, KS",
      period: "Dec. 2021 – Feb. 2026",
      responsibilities: [
        "Used SQL for database modification and to ensure smooth data transactions across systems.",
        "Designed and developed internal tools, utilizing software engineering fundamentals and Object Oriented Programming.",
        "Optimized AWS EC2 instances and deployed applications on Elastic Beanstalk for improved scalability and reliability.",
        "Developed backend API endpoints utilizing Java Spring Boot.",
      ]
    },
    {
      title: "Fullstack Software Engineer",
      company: "Wanderlog",
      location: "San Francisco, CA",
      period: "May 2021 – Dec. 2021",
      responsibilities: [
        "Created the in-app purchase flow to increase subscription revenue by 30%.",
        "Utilized web technologies such as JavaScript, HTML/DOM, and CSS to build the web applications.",
        "Achieved 99.9% uptime for API service by implementing robust error handling and logging mechanisms.",
      ]
    }
  ];

  const skills = [
    { category: "Languages", items: ["JavaScript", "TypeScript", "Python", "Java", "C#", "C/C++"] },
    { category: "Frontend", items: ["React", "HTML", "CSS"] },
    { category: "Backend", items: ["ASP.NET Core", "Spring Boot", "Node.js"] },
    { category: "Databases", items: ["PostgreSQL", "SQL"] },
    { category: "Cloud & Tools", items: ["AWS", "Docker", "Git", "Jenkins"] },
  ];

  return (
    <div className="container mx-auto px-6 max-w-2xl">
      <Header />
      <Section title="Experience">
        {workExperience.map((job, index) => (
          <Job key={index} {...job} />
        ))}
      </Section>
      <Section title="Education">
        <div>
          <h3 className="text-white font-medium">University of California, Santa Cruz</h3>
          <p className="text-slate-400 text-sm">B.S. Computer Science</p>
        </div>
      </Section>
      <Section title="Skills">
        <SkillList skills={skills} />
      </Section>
    </div>
  );
};

export default ProfilePage;
