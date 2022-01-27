
import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import {List,Detail} from './pages';

function App() {
  return (
    // <Router>
      <Routes>
       <Route path='/list' element={<List />} /> 
       <Route path='/detail' element={<Detail />} /> 
       
      </Routes>
    // </Router>
  );
}
export default App
