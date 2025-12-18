import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './src/components/layout/Header';
import Footer from './src/components/layout/Footer';
import Home from './src/pages/Home';
import Games from './src/pages/Games';
import Creators from './src/pages/Creators';
import SubmitGame from './src/pages/SubmitGame';
import SupportUs from './src/pages/SupportUs';
import Pong from './src/pages/games/Pong';

const App: React.FC = () => {
  return (
    <Router>
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <Header />
          
          <main className="flex flex-1 justify-center py-5">
            <div className="layout-content-container flex w-full max-w-[1200px] flex-1 flex-col px-4 sm:px-8">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/games" element={<Games />} />
                <Route path="/games/pong" element={<Pong />} />
                <Route path="/creators" element={<Creators />} />
                <Route path="/submit" element={<SubmitGame />} />
                <Route path="/support" element={<SupportUs />} />
              </Routes>
            </div>
          </main>

          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;