import React, { useState } from 'react';

const SubmitGame: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    gameIdea: '',
    gameName: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Game Submission: ${formData.gameName}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Age: ${formData.age}\n` +
      `Email: ${formData.email}\n` +
      `Game Name: ${formData.gameName}\n\n` +
      `Game Idea:\n${formData.gameIdea}`
    );
    
    window.location.href = `mailto:surabhi.pandey14@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="flex flex-col gap-8 py-8">
      {/* Hero Section */}
      <div className="px-4">
        <div
          className="flex h-[350px] flex-col items-center justify-center gap-6 rounded-xl bg-cover bg-center bg-no-repeat p-4 text-center sm:gap-8"
          style={{
            backgroundImage:
              'linear-gradient(rgba(16, 25, 34, 0.6) 0%, rgba(16, 25, 34, 0.9) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDir9WmGR9O1-iqrJqLCW_-SK7Cf8CZICP7YZGStAn0OCACbwA2VvJeL2Fl9BbkMBfga1FkmKFsSH3m_rhdB9CiSDvpCcMFLwWyjb8LNd7Qu4cdl_t8rLE7x8AV1-JlyJnQqM5mmeOz2HzfIEOXbC4g5mM-2l9_x7_FUwFTQiAcqgM2BbP21gJRPfEPZ5R4ac1wQB2t8n3LQEbWAtWd5AWQooSc6n499BvmATWI_IdG-thzOrjQ9_t59PP8t0HCC0C5ealfz9R0sqk6")',
          }}
        >
          <div className="flex max-w-2xl flex-col gap-4">
            <h1 className="font-arcade text-4xl leading-tight text-white sm:text-6xl text-shadow">
              SUBMIT YOUR GAME
            </h1>
            <h2 className="text-base font-normal leading-relaxed text-white/80 sm:text-lg">
              Have an awesome game idea? Tell us about it! We'll add your name and game to our arcade.
            </h2>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="px-4 max-w-2xl mx-auto w-full">
        <div className="rounded-xl border-2 border-arcade-cyan bg-black/30 p-6 sm:p-8 backdrop-blur-sm">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* Name */}
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-arcade-yellow font-arcade text-sm">
                Your Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="rounded-lg border-2 border-arcade-cyan bg-black/50 px-4 py-3 text-white placeholder-white/40 focus:border-arcade-yellow focus:outline-none"
                placeholder="Enter your name"
              />
            </div>

            {/* Age */}
            <div className="flex flex-col gap-2">
              <label htmlFor="age" className="text-arcade-yellow font-arcade text-sm">
                Your Age *
              </label>
              <input
                type="number"
                id="age"
                name="age"
                required
                min="7"
                max="15"
                value={formData.age}
                onChange={handleChange}
                className="rounded-lg border-2 border-arcade-cyan bg-black/50 px-4 py-3 text-white placeholder-white/40 focus:border-arcade-yellow focus:outline-none"
                placeholder="7-15"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-arcade-yellow font-arcade text-sm">
                Email (optional)
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="rounded-lg border-2 border-arcade-cyan bg-black/50 px-4 py-3 text-white placeholder-white/40 focus:border-arcade-yellow focus:outline-none"
                placeholder="your.email@example.com"
              />
            </div>

            {/* Game Name */}
            <div className="flex flex-col gap-2">
              <label htmlFor="gameName" className="text-arcade-yellow font-arcade text-sm">
                Game Name *
              </label>
              <input
                type="text"
                id="gameName"
                name="gameName"
                required
                value={formData.gameName}
                onChange={handleChange}
                className="rounded-lg border-2 border-arcade-cyan bg-black/50 px-4 py-3 text-white placeholder-white/40 focus:border-arcade-yellow focus:outline-none"
                placeholder="What's your game called?"
              />
            </div>

            {/* Game Idea */}
            <div className="flex flex-col gap-2">
              <label htmlFor="gameIdea" className="text-arcade-yellow font-arcade text-sm">
                Tell Us Your Idea *
              </label>
              <textarea
                id="gameIdea"
                name="gameIdea"
                required
                rows={6}
                value={formData.gameIdea}
                onChange={handleChange}
                className="rounded-lg border-2 border-arcade-cyan bg-black/50 px-4 py-3 text-white placeholder-white/40 focus:border-arcade-yellow focus:outline-none resize-none"
                placeholder="Describe your game idea... What's the goal? How do you play? What makes it fun?"
              />
            </div>

            {/* Info Box */}
            <div className="rounded-lg bg-arcade-purple/20 border border-arcade-purple p-4">
              <p className="text-white/80 text-sm leading-relaxed">
                <span className="material-symbols-outlined text-arcade-yellow text-base align-middle mr-2">info</span>
                Our Game Master will review your idea and bring it to life using AI! Your name will be featured alongside your game.
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="flex h-12 items-center justify-center gap-2 rounded-lg bg-arcade-pink px-6 font-arcade text-sm text-white transition-all hover:scale-105 hover:bg-arcade-pink/90 shadow-lg"
            >
              <span className="material-symbols-outlined text-base">send</span>
              <span>Submit Your Game</span>
            </button>
          </form>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center">
          <p className="text-white/60 text-sm">
            Questions? Email us at{' '}
            <a 
              href="mailto:surabhi.pandey14@gmail.com" 
              className="text-arcade-cyan hover:text-arcade-yellow transition-colors"
            >
              surabhi.pandey14@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SubmitGame;

