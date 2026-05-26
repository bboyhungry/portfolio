import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const isExternalLink = (url: string) => /^https?:\/\//.test(url);

const SocialLinks = () => (
  <ul className="flex justify-center space-x-8">
    {[
      { href: "https://www.linkedin.com/in/henry-dang-dev891", icon: faLinkedin, label: "LinkedIn", colorClass: "text-sky-400 hover:text-sky-300" },
      { href: "https://github.com/bboyhungry", icon: faGithub, label: "GitHub", colorClass: "text-slate-300 hover:text-white" },
      { href: "/project", icon: faFolderOpen, label: "Projects", colorClass: "text-amber-400 hover:text-amber-300" }
    ].map(({ href, icon, label, colorClass }) => (
      <li key={label}>
        {isExternalLink(href) ? (
          <a href={href} target="_blank" rel="noopener noreferrer" className={`flex flex-col items-center gap-1 transition-colors ${colorClass}`}>
            <FontAwesomeIcon icon={icon} size="xl" />
            <span className="text-xs text-slate-400">{label}</span>
          </a>
        ) : (
          <Link to={href} className={`flex flex-col items-center gap-1 transition-colors ${colorClass}`}>
            <FontAwesomeIcon icon={icon} size="xl" />
            <span className="text-xs text-slate-400">{label}</span>
          </Link>
        )}
      </li>
    ))}
  </ul>
);

export default SocialLinks;
