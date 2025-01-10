"use client";
import React, { useState, useEffect } from "react";

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  // Simulate loading when component mounts
  useEffect(() => {
    const simulateLoading = () => {
      let currentProgress = 0;
      
      const interval = setInterval(() => {
        if (currentProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsComplete(true), 500);
          return;
        }
        
        currentProgress += Math.random() * 15;
        if (currentProgress > 100) currentProgress = 100;
        setProgress(currentProgress);
      }, 200);

      return () => clearInterval(interval);
    };

    simulateLoading();
  }, []);

  return (
    <div 
      className={`fixed z-[1000] inset-0 flex items-center justify-center bg-highlighter transition-transform duration-500 ${
        isComplete ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="flex flex-col items-center gap-2">
        <div className="w-full flex items-center justify-end text-sm font-semibold text-darkTxt">
          {Math.round(progress)}%
        </div>
        <div className="w-52 h-[2px] bg-white overflow-hidden">
          <div 
            className="h-full bg-darkTxt transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default Loader;