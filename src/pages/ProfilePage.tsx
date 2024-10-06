import Header  from '../components/Header';
import Section from '../components/Section';
import Job from '../components/Job';
import SkillList from '../components/SkillList';

const ProfilePage = () => {
  const workExperience = [
    {
      title: "Software Engineer",
      company: "Netsmart Technology",
      location: "Overland Park, KS",
      period: "Dec. 2021 - Present",
      responsibilities: [
        "Used SQL for database modification and to ensure smooth data transactions across systems.",
        "Designed and developed internal tools, utilizing software engineering fundamentals, and Object Oriented Programming.",
        "Optimized AWS EC2 instances and deployed applications on Elastic Beanstalk for improved scalability and reliability.",
        "Developed backend API endpoints utilizing Java Spring Boot",
      ]
    },
    {
      title: "Fullstack Software Engineer",
      company: "Wanderlog",
      location: "San Francisco, CA",
      period: "May 2021 - Dec 2021",
      responsibilities: [
        "Created the in-app purchase flow to increase subscription revenue by 30%.",
        "Utilized web technologies such as JavaScript, HTML/DOM, and CSS to build the web applications.",
        "Achieved 99.9% uptime for API service by implementing robust error handling and logging mechanisms.",
      ]
    }
  ];

  const skills = [
    { category: "Languages", items: ["C/C++", "CSS", "Python", "Java", "JavaScript"] },
    { category: "Cloud Services", items: ["Amazon Web Services"] },
    { category: "Technology", items: ["Docker, Jenkins, Git"] }
  ];

  return (
    <div className="container mx-auto px-4 max-w-3xl">
      <Header />
      <h1 className="text-2xl font-bold mb-4 text-center">Fullstack Software Engineer</h1>
      
      <Section title="Work Experience">
        {workExperience.map((job, index) => (
          <Job key={index} {...job} />
        ))}
      </Section>

      <hr className="my-6 border-1 border-black" />

      <Section title="Education">
        <h3 className="text-lg font-medium">University of California, Santa Cruz</h3>
        <p>B.S Computer Science</p>
      </Section>

      <hr className="my-6 border-1 border-black" />
      
      <div className="pb-6">
        <Section title="Technical Skills">
          <SkillList skills={skills} />
        </Section>
      </div>
    </div>
  );
}

export default ProfilePage;
