import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CrewGrid from './components/CrewGrid';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="flex flex-1 justify-center px-4 py-5 sm:px-10 md:px-20 lg:px-40">
          <div className="layout-content-container flex w-full max-w-[960px] flex-1 flex-col">
            
            <Header />

            <main className="flex flex-col gap-8 py-8 sm:gap-12 sm:py-12">
              <Hero />
              <CrewGrid />
              <Footer />
            </main>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;