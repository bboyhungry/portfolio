import { useState } from 'react';
import { Transition, DisclosureButton, Disclosure  } from '@headlessui/react';

interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  bulletPoints: string[];
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = (props: ProjectCardProps) => {
  const { project } = props;

  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  const initialBulletPoints = project.bulletPoints.slice(0, 3);
  const remainingBulletPoints = project.bulletPoints.slice(3);
  const hasMoreBulletPoints = remainingBulletPoints.length > 0;

  return (
    <div className="bg-gradient-to-br rounded-lg shadow-lg overflow-hidden h-full max-w-lg w-full transition-all duration-300 hover:shadow-xl">
      <div className="relative w-full h-80">
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-fill"
        />
      </div>
      <div className="p-6 flex-grow flex flex-col bg-gradient-to-b from-blue-50 to-white">
        <h3 className="text-xl font-semibold mb-2 text-blue-800">{project.title}</h3>
        <p className="text-blue-600 mb-4">{project.description}</p>
        <ul className="list-disc list-inside space-y-1 text-sm text-blue-700">
          {initialBulletPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
        {hasMoreBulletPoints && (
          <div className="mt-auto">
            <Transition
              show={isOpen}
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <ul className="list-disc list-inside space-y-1 text-sm text-blue-700 mt-2 mb-2">
                {remainingBulletPoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </Transition>
            <Disclosure>
              <DisclosureButton
                onClick={toggleOpen}
                className="w-full px-4 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75 mt-2 transition-colors duration-200"
              >
                {isOpen ? 'Show Less' : `Show ${remainingBulletPoints.length} More`}
              </DisclosureButton>
            </Disclosure>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;