import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  bulletPoints: string[];
  link?: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => (
  <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden w-full max-w-2xl transition-colors duration-300 hover:border-slate-500">
    <div className="w-full aspect-video overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-6">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-white font-semibold text-lg">{project.title}</h3>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sky-400 hover:text-sky-300 text-sm transition-colors"
          >
            Live demo <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" />
          </a>
        )}
      </div>
      <p className="text-slate-400 text-sm mb-4">{project.description}</p>
      <ul className="space-y-2">
        {project.bulletPoints.map((point, index) => (
          <li key={index} className="flex gap-3 text-sm text-slate-300">
            <span className="text-sky-400 mt-0.5 shrink-0">–</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default ProjectCard;
