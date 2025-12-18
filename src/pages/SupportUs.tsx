import React, { useState, useEffect } from 'react';

interface FloatingHeart {
  id: number;
  x: number;
  y: number;
}

const SupportUs: React.FC = () => {
  const [loveCount, setLoveCount] = useState<number>(0);
  const [isPulsing, setIsPulsing] = useState(false);
  const [floatingHearts, setFloatingHearts] = useState<FloatingHeart[]>([]);
  const [showCopySuccess, setShowCopySuccess] = useState(false);

  // Load love count from localStorage on mount
  useEffect(() => {
    const savedCount = localStorage.getItem('gamehub_love_count');
    if (savedCount) {
      setLoveCount(parseInt(savedCount, 10));
    }
  }, []);

  // Handle heart click
  const handleHeartClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const newCount = loveCount + 1;
    setLoveCount(newCount);
    localStorage.setItem('gamehub_love_count', newCount.toString());

    // Trigger pulse animation
    setIsPulsing(true);
    setTimeout(() => setIsPulsing(false), 300);

    // Create floating heart
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const newHeart: FloatingHeart = {
      id: Date.now() + Math.random(),
      x,
      y,
    };

    setFloatingHearts((prev) => [...prev, newHeart]);

    // Remove floating heart after animation
    setTimeout(() => {
      setFloatingHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
    }, 1000);
  };

  // Format number with commas
  const formatNumber = (num: number): string => {
    return num.toLocaleString();
  };

  // Handle WhatsApp share
  const handleWhatsAppShare = () => {
    const message = encodeURIComponent(`Check out GameHub! ${window.location.origin}`);
    window.open(`https://wa.me/?text=${message}`, '_blank');
  };

  // Handle copy link
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.origin);
      setShowCopySuccess(true);
      setTimeout(() => setShowCopySuccess(false), 2000);
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = window.location.origin;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setShowCopySuccess(true);
      setTimeout(() => setShowCopySuccess(false), 2000);
    }
  };

  return (
    <div className="flex flex-col gap-12">
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
              SUPPORT US
            </h1>
            <h2 className="text-base font-normal leading-relaxed text-white/80 sm:text-lg">
              Show some love to GameHub! Every click helps us grow and bring more awesome games to young developers.
            </h2>
          </div>
        </div>
      </div>

      {/* Love Section */}
      <div className="px-4">
        <div className="flex flex-col items-center gap-8">
          {/* Heart Button with Counter */}
          <div className="flex flex-col items-center gap-6">
            <div className="relative">
              <button
                onClick={handleHeartClick}
                className={`group relative flex h-[200px] w-[200px] items-center justify-center transition-all hover:scale-110 sm:h-[300px] sm:w-[300px] ${
                  isPulsing ? 'animate-pulse-heart' : ''
                }`}
                aria-label="Click to show love"
              >
                {/* Subtle glow effect on hover */}
                <div 
                  className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background: 'radial-gradient(circle, rgba(236, 72, 153, 0.15) 0%, transparent 70%)',
                    filter: 'blur(20px)',
                  }}
                />
                
                <img
                  src="/assets/heart-pixel.png"
                  alt="Pixel heart"
                  className="relative z-10 h-[180px] w-[180px] drop-shadow-lg transition-all group-hover:drop-shadow-2xl sm:h-[280px] sm:w-[280px]"
                  style={{
                    imageRendering: 'pixelated',
                    filter: 'drop-shadow(0 4px 20px rgba(236, 72, 153, 0.3))',
                  }}
                />

                {/* Floating hearts */}
                {floatingHearts.map((heart) => (
                  <img
                    key={heart.id}
                    src="/assets/heart-pixel-small.png"
                    alt="Floating heart"
                    className="absolute z-20 h-12 w-12 animate-float-heart"
                    style={{
                      left: `${heart.x}px`,
                      top: `${heart.y}px`,
                      pointerEvents: 'none',
                      imageRendering: 'pixelated',
                      filter: 'drop-shadow(0 2px 8px rgba(236, 72, 153, 0.4))',
                    }}
                  />
                ))}
              </button>
            </div>

            {/* Love Counter */}
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-baseline gap-2">
                <p className="font-arcade text-4xl text-arcade-pink sm:text-6xl" style={{ textShadow: '0 0 20px rgba(236, 72, 153, 0.5)' }}>
                  {formatNumber(loveCount)}
                </p>
                <span className="material-symbols-outlined text-2xl text-arcade-pink/60 sm:text-3xl">favorite</span>
              </div>
              <p className="text-sm text-white/50 tracking-wide">
                {loveCount === 1 ? 'Love Received' : 'Loves Received'}
              </p>
            </div>

            {/* Love Meter */}
            <div className="w-full max-w-md">
              <div className="flex flex-col gap-3">
                <p className="text-center font-arcade text-xs tracking-wider text-arcade-cyan/80">
                  LOVE METER
                </p>
                <div className="relative h-3 w-full overflow-hidden rounded-full bg-white/5 backdrop-blur-sm">
                  {/* Progress bar */}
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-arcade-pink via-arcade-yellow to-arcade-cyan transition-all duration-500 ease-out"
                    style={{
                      width: `${Math.min((loveCount / 100) * 100, 100)}%`,
                      boxShadow: '0 0 15px rgba(236, 72, 153, 0.5)',
                    }}
                  />
                  {/* Shimmer effect */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    style={{
                      animation: 'shimmer 2s infinite',
                    }}
                  />
                </div>
                <p className="text-center text-sm text-white/50">
                  {loveCount < 100 ? `${100 - loveCount} more to reach 100!` : 'Amazing! Keep going! 🎉'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Share Section */}
      <div className="px-4 pb-8">
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col items-center gap-2">
            <h2 className="font-arcade text-xl text-arcade-pink sm:text-2xl">
              Share the Love
            </h2>
            <p className="max-w-xl text-center text-sm text-white/60">
              Help us spread the word! Share GameHub with your friends and family.
            </p>
          </div>

          {/* Share Buttons */}
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
            <button
              onClick={handleWhatsAppShare}
              className="group flex h-12 items-center justify-center gap-3 rounded-lg border border-white/10 bg-white/5 px-6 font-arcade text-xs text-white backdrop-blur-sm transition-all hover:border-green-500/50 hover:bg-green-500/10 hover:scale-105"
            >
              <span className="material-symbols-outlined text-lg transition-colors group-hover:text-green-400">chat</span>
              <span>Share on WhatsApp</span>
            </button>

            <button
              onClick={handleCopyLink}
              className="group flex h-12 items-center justify-center gap-3 rounded-lg border border-white/10 bg-white/5 px-6 font-arcade text-xs text-white backdrop-blur-sm transition-all hover:border-arcade-cyan/50 hover:bg-arcade-cyan/10 hover:scale-105"
            >
              <span className="material-symbols-outlined text-lg transition-colors group-hover:text-arcade-cyan">content_copy</span>
              <span>Copy Link</span>
            </button>
          </div>

          {/* Copy Success Message */}
          {showCopySuccess && (
            <div className="animate-fade-in rounded-lg border border-green-500/30 bg-green-500/10 px-6 py-3 font-arcade text-xs text-green-400 backdrop-blur-sm">
              Link copied! 🎉
            </div>
          )}
        </div>
      </div>

      {/* CSS for animations */}
      <style>{`
        @keyframes pulse-heart {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.15);
          }
          100% {
            transform: scale(1);
          }
        }

        @keyframes float-heart {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) translateX(${Math.random() * 40 - 20}px);
            opacity: 0;
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-pulse-heart {
          animation: pulse-heart 0.3s ease-in-out;
        }

        .animate-float-heart {
          animation: float-heart 1s ease-out forwards;
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default SupportUs;
