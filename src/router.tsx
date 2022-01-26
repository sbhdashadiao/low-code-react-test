import * as React from 'react';
import { Route, Routes, HashRouter as Router } from 'react-router-dom';
import {Hello,Apple} from './pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/hello" element={<Hello />} />
        <Route path="/apple" element={<Apple />} />
      </Routes>
    </Router>
  );
}
export default App