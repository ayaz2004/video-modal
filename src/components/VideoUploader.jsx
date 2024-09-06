import React, { useState } from "react";
import ReactPlayer from "react-player";

const VideoUploader = ({ onVideoLoaded }) => {
  const [videoUrl, setVideoUrl] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setVideoUrl(url);
      onVideoLoaded(file);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <input
        className="hidden"
        id="upload-button"
        type="file"
        onChange={handleFileChange}
      />
      <label htmlFor="upload-button">
        <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold rounded-full shadow-lg transform transition duration-500 hover:scale-110 hover:shadow-2xl">
          Choose Video
        </button>
      </label>
      {videoUrl && (
        <div className="mt-8 w-full max-w-lg animate-fade-in">
          <ReactPlayer url={videoUrl} controls={true} width="100%" />
        </div>
      )}
    </div>
  );
};

export default VideoUploader;
