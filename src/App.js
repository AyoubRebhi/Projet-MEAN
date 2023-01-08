import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from "./components/index";
import { Provider } from 'react-redux';

const App = () => {

  return (
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </Router>
  );
};

export default App;