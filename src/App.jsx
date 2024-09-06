import React, { useState } from "react";
import VideoUploader from "./components/VideoUploader.jsx";
import VideoProcessingResult from "./components/VideoProcessingResult.jsx";

const App = () => {
  const [result, setResult] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleVideoLoaded = async (videoFile) => {
    setIsProcessing(true);
    console.log("Hello");
    // Simulate processing delay
    setTimeout(() => {
      setResult("HELLO ");
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-pink-200 via-pink-300 to-pink-400 p-4">
      <div className="bg-white shadow-2xl rounded-lg p-8 w-full max-w-4xl transform transition duration-500 hover:scale-105 hover:shadow-2xl">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-6 text-pink-600 ">
          Women Safety Analytics – Protecting Women from Safety Threats
        </h1>
        <p className="text-center text-gray-700 mb-6 bg-pink-100 p-4 rounded-lg shadow-md">
          The growing concern for the safety of women and the increase in crimes
          against women in various cities highlight the need for advanced
          surveillance and analytical solutions to protect women from various
          possible threats. By leveraging advanced analytics through real-time
          monitoring, Women Safety Analytics aims to create safer environments
          for women and assist law enforcement in effectively addressing and
          preventing crimes against women. The proactive approach of detecting
          anomalies and generating alerts can play a crucial role in enhancing
          public safety and fostering a secure atmosphere for women.
        </p>
        <VideoUploader onVideoLoaded={handleVideoLoaded} />
        <VideoProcessingResult result={result} isProcessing={isProcessing} />
      </div>
    </div>
  );
};

export default App;
