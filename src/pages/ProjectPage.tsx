import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../variables/projects';

const ProjectPage = () => (
  <div className="container mx-auto px-6 max-w-2xl py-12">
    <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-200 transition-colors text-sm mb-10">
      <FontAwesomeIcon icon={faArrowLeft} />
      Back
    </Link>
    <h2 className="text-xs font-semibold tracking-widest text-sky-400 uppercase mb-8">Projects</h2>
    <div className="flex flex-col gap-6">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  </div>
);

export default ProjectPage;
