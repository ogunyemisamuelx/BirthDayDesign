import { useState, useEffect } from "react";
import { Heart, Gift, Sparkles, Star } from "lucide-react";
import ej from "./assets/WhatsApp Image 2025-08-05 at 7.02.08 PM.jpeg";
const App = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [currentWish, setCurrentWish] = useState(0);

  const wishes = [
    "Happy Birthday to the most amazing aunty!",
    "Your love and wisdom light up our lives",
    "May this year bring you endless joy",
    "Thank you for being so special to us",
    "Wishing you health, happiness, and love",
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true);
      setShowConfetti(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showMessage) {
      const wishTimer = setInterval(() => {
        setCurrentWish((prev) => (prev + 1) % wishes.length);
      }, 3000);

      return () => clearInterval(wishTimer);
    }
  }, [showMessage, wishes.length]);

  const createConfetti = () => {
    return Array.from({ length: 50 }, (_, i) => (
      <div
        key={i}
        className="absolute animate-bounce"
        style={{
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 2}s`,
          animationDuration: `${2 + Math.random() * 2}s`,
        }}
      >
        {Math.random() > 0.5 ? (
          <Heart className="text-pink-400 w-4 h-4" />
        ) : (
          <Star className="text-yellow-400 w-4 h-4" />
        )}
      </div>
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          >
            <Sparkles className="text-white opacity-30 w-6 h-6" />
          </div>
        ))}
      </div>

      {/* Confetti */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          {createConfetti()}
        </div>
      )}

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Initial animation - Birthday cake or gift */}
          <div
            className={`transition-all duration-1000 transform ${
              showMessage ? "scale-110" : "scale-100"
            }`}
          >
            <div className="mb-8 relative">
              {/* <div className=" p-8 bg-white bg-opacity-20 rounded-full backdrop-blur-sm animate-pulse hidden"> */}
              <div className="w-full flex items-center justify-center">
                <img
                  src={ej}
                  alt=""
                  className="w-[300px] h-[300px] rounded-full"
                />
              </div>
              {/* <Gift className="w-24 h-24 text-white mx-auto" />
              </div> */}
              {/* Floating hearts around the gift */}
              <div className="absolute -top-4 -left-4 animate-bounce delay-300">
                <Heart className="w-8 h-8 text-pink-400" />
              </div>
              <div className="absolute -top-4 -right-4 animate-bounce delay-500">
                <Heart className="w-6 h-6 text-red-300 " />
              </div>
              <div className="absolute -bottom-4 left-8 animate-bounce delay-700">
                <Heart className="w-7 h-7 text-rose-300" />
              </div>
            </div>
          </div>

          {/* Birthday message with fade-in animation */}
          <div
            className={`transition-all duration-1500 transform ${
              showMessage
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 font-serif tracking-wide">
              🎉 HAPPY BIRTHDAY! 🎉
            </h1>

            <div className="bg-white bg-opacity-15 backdrop-blur-md rounded-3xl p-8 mb-8 border border-white border-opacity-20 shadow-2xl">
              <p className="text-2xl md:text-3xl text-black mb-4 font-light leading-relaxed min-h-[4rem] flex items-center justify-center">
                {wishes[currentWish]}
              </p>

              <div className="flex justify-center space-x-2 mb-4">
                {wishes.map((_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-500 ${
                      index === currentWish
                        ? "bg-white"
                        : "bg-white bg-opacity-40"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Floating action message */}
            <div className="animate-bounce">
              <p className="text-xl text-white font-light opacity-90 bg-black bg-opacity-20 inline-block px-6 py-3 rounded-full backdrop-blur-sm">
                Made with 💝 just for you!
              </p>
            </div>

            {/* Age celebration (you can customize this) */}
            <div className="mt-8 flex justify-center space-x-4">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="animate-bounce"
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full flex items-center justify-center text-2xl shadow-lg">
                    🎂
                  </div>
                </div>
              ))}
            </div>

            {/* Final blessing */}
            <div className="mt-12 p-6 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl bg-opacity-80 backdrop-blur-sm shadow-xl">
              <p className="text-white text-lg font-medium italic">
                "May your special day be filled with happiness, love, and all
                the wonderful things you deserve. You mean the world to us, and
                we're so grateful to have you in our lives!"
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black from-opacity-20 to-transparent"></div>
    </div>
  );
};

export default App;
