
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';

const SocialLinks = () => (
  <ul className="flex justify-center space-x-4">
    {[
      { href: "https://www.linkedin.com/in/henry-dang891", 
        icon: faLinkedin, 
        label: "LinkedIn", 
        colorClass: "text-blue-600" 
      },
      { href: "https://github.com/bboyhungry", 
        icon: faGithub, 
        label: "GitHub",
        colorClass: "text-black"
      },
      { href: "/projects", 
        icon: faFolderOpen, 
        label: "Projects",
        colorClass: "text-yellow-500"
      }
    ].map(({ href, icon, label, colorClass }) => (
      <li key={label}>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex flex-col items-center ${colorClass} hover:opacity-80`}
        >
          <FontAwesomeIcon icon={icon} size="2x" />
          <span className="mt-1">{label}</span>
        </a>
      </li>
    ))}
  </ul>
);

export default SocialLinks;
