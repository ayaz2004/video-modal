import React from "react";

const VideoProcessingResult = ({ result, isProcessing }) => {
  return (
    <div className="flex flex-col items-center p-4 mt-8">
      {isProcessing ? (
        <div className="flex items-center justify-center">
          <svg
            className="animate-spin h-8 w-8 text-blue-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M12 4v2.02a4.969 4.969 0 0 0-2.05.428l-1.42-1.42A7.957 7.957 0 0 1 12 4zm0 16c-4.418 0-8-3.582-8-8h2a6 6 0 0 0 6 6v2zm7.05-7.05A4.969 4.969 0 0 0 20 12V10h2a8 8 0 0 1-3.95 6.95zM4 12a8 8 0 0 1 3.95-6.95L6.55 7.43A6 6 0 0 0 4 10H2v2h2z" />
          </svg>
        </div>
      ) : (
        <div className="text-center mt-8 bg-pink-100 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4 text-pink-600">
            Processing Result
          </h3>
          {result ? (
            <p className="text-lg text-gray-700">{result}</p>
          ) : (
            <p className="text-lg text-gray-700"></p>
          )}
        </div>
      )}
    </div>
  );
};

export default VideoProcessingResult;
