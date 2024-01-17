
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import BirthdayCard from './components/BirthdayCard';
import Fireworks from './components/Fireworks';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route path="/wishes" element={<BirthdayCard/>} />
        <Route path='/celebrate' element={<Fireworks />}/>
      </Routes>
    </Router>
  );
};

export default App;
