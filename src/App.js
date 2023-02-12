import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Main } from './pages/main';
import { MeetTheTeam } from './pages/meet-the-team';
import { NewMembers } from './pages/new-members';
import { TrainingHub } from './pages/training-hub';
import { WhatsOn } from './pages/whats-on';
import { NavBar } from './components/navBar';

function AppRouter() {
  return (
    <Router>
      <div className="App" style={{ display: 'flex', flexDirection: 'column' }}>
        <NavBar />

        <div style={{ padding: '0 10px' }}>
          <Routes>
            <Route path="/" exact element={<Main />} />
            <Route path="/whats-on" element={<WhatsOn />} />
            <Route path="/meet-the-team" element={<MeetTheTeam />} />
            <Route path="/training-hub" element={<TrainingHub />} />
            <Route path="new-members" element={<NewMembers />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default AppRouter;
