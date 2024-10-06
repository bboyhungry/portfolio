import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProfilePage from './pages/ProfilePage';
import ProjectPage from './pages/ProjectPage'

const App = () => (
  <Router basename="/portfolio">
    <Routes>
      <Route path="/" element={<ProfilePage />} />
      <Route path="/project" element={<ProjectPage />} />
    </Routes>
  </Router>
);

export default App;
