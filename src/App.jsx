import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Navbar from './components/Navbar';
import Myapp from './components/Myapp';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="contain h-screen">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={<Myapp key="general" pageSize="5" country="us" category="general" />}
          />
          <Route
            exact
            path="/sports"
            element={<Myapp key="sports" pageSize="5" country="us" category="sports" />}
          />
          <Route
            exact
            path="/entertainment"
            element={<Myapp key="entertainment" pageSize="5" country="us" category="entertainment" />}
          />
          <Route
            exact
            path="/business"
            element={<Myapp key="business" pageSize="5" country="us" category="business" />}
          />
          <Route
            exact
            path="/health"
            element={<Myapp key="health" pageSize="5" country="us" category="health" />}
          />
          <Route
            exact
            path="/science"
            element={<Myapp key="science" pageSize="5" country="us" category="science" />}
          />
          <Route
            exact
            path="/technology"
            element={<Myapp key="technology" pageSize="5" country="us" category="technology" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
