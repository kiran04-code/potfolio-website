import React, { useState, useEffect } from "react";

const Reloader = () => {
  const [visible, setVisible] = useState(false);
  const [swipeOut, setSwipeOut] = useState(false); // State to trigger the swipe-out animation
  const [contentHidden, setContentHidden] = useState(false); // State to hide content after swipe

  useEffect(() => {
    // Show content after 1s
    const showTimer = setTimeout(() => {
      setVisible(true);
    }, 1000);

    // Start swipe animation after 3s (1s delay + 2s of content showing)
    const swipeTimer = setTimeout(() => {
      setSwipeOut(true);
    }, 3000);

    // Hide content after swipe completes (3000ms + 1000ms animation)
    const hideTimer = setTimeout(() => {
      setContentHidden(true); // Hide the entire page
    }, 4000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(swipeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <div className={`w-full h-screen bg-black overflow-hidden relative ${contentHidden ? 'hidden' : ''}`}>
      {/* Main content that will swipe right */}
      <div
        className={`w-full h-full absolute top-0 left-0 transition-transform duration-1000 ease-in-out ${
          swipeOut ? "translate-x-full" : "translate-x-0"
        } ${contentHidden ? "opacity-0" : "opacity-100"}`}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <h1
            className={`text-5xl font-bold bg-gradient-to-r from-orange-300 via-red-400 to-red-600 text-transparent bg-clip-text transform transition-all duration-1000 ease-out ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
            }`}
          >
            Kiran.dev
          </h1>

          {visible && (
            <p
              className={`mt-4 text-xl font-semibold bg-gradient-to-r from-orange-300 via-red-400 to-red-600 text-transparent bg-clip-text transform transition-all duration-1000 ease-out delay-200 ${
                visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
              }`}
            >
              MERN Stack Developer
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reloader;
