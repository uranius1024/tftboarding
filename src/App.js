import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingPage from './LandingPage/LandingPage';
import SinglePage from './LandingPage/SinglePage/SinglePage';


function App() {
  return (
    <Router>

      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/singlepage" element={<SinglePage />} />
      </Routes>

    </Router>
  )
}

export default App;
