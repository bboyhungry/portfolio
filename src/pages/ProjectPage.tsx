import ProjectCard from '../components/ProjectCard';
import { useNavigate } from 'react-router-dom';
import { projects } from '../variables/projects';

const ProjectPage = () => {
  const navigate  = useNavigate();
  const handleGoBack = () => {
    navigate('/'); 
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">My Projects</h1>
      <button
        onClick={handleGoBack}
        className="absolute top-4 left-4 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
      >
        Go Back
      </button>
      <div className="flex flex-col items-center gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;