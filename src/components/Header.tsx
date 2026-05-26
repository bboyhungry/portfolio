import SocialLinks from './SocialLinks';
import profilePic from '../assets/profile-pic.jpg';

const Header = () => (
  <header className="py-16 text-center border-b border-slate-700">
    <img
      src={profilePic}
      alt="Headshot"
      className="w-28 h-28 rounded-full mx-auto object-cover ring-2 ring-slate-600 mb-6"
    />
    <h1 className="text-3xl font-bold text-white mb-1">Henry Dang</h1>
    <p className="text-slate-400 mb-8">Fullstack Software Engineer</p>
    <SocialLinks />
  </header>
);

export default Header;
