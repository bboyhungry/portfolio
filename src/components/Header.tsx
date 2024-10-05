import SocialLinks from './SocialLinks'; 
import profilePic from '../assets/profile-pic.jpg';

const Header = () => (
  <header className="text-center py-8">
    <h1 className="text-3xl font-bold mb-4">
      <a href="https://bboyhungry.github.io/portfolio" className="text-blue-600 hover:text-blue-800">Henry Dang</a>
    </h1>
    <img 
      src={profilePic} 
      alt="Headshot" 
      className="rounded-full w-32 h-32 md:w-48 md:h-48 object-cover mx-auto" 
    />
    <div className="mt-8">
      <SocialLinks />
    </div>
  </header>
);

export default Header;