import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import Login from './Login';
import Timer from './Timer';
import BreakTimer from './BreakTimer';

function App() {
  return (
    <Router>
      <Routes> {/* Use Routes instead of Switch */}
        <Route path="/timer" element={<Timer />} /> {/* Use 'element' prop */}
        <Route path="/break" element={<BreakTimer />} /> {/* Use 'element' prop */}
        <Route path="/" element={<Login />} /> {/* Use 'element' prop */}
      </Routes>
    </Router>
  );
}

export default App;



