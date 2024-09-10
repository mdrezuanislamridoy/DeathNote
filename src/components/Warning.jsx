import { useContext, useEffect, useRef, useState } from "react";
import context from "../context/context";
import WarnImg from "../assets/warn.webp";
import WarnSound from "../assets/videoplayback.mp3";

export default function Warning() {
  const { setIsWarned } = useContext(context);
  const audioRef = useRef(null);
  const [audioReady, setAudioReady] = useState(false);

  useEffect(() => {
    const playAudio = async () => {
      if (audioRef.current) {
        try {
          await audioRef.current.play();
          audioRef.current.loop = true; // Ensure looping is set
          setAudioReady(true);
          console.log("Autoplay succeeded");
        } catch (error) {
          console.log("Autoplay failed or blocked by browser", error);
        }
      }
    };
    if (audioReady) playAudio(); // Only play if audio is ready
  }, [audioReady]);

  const handleWarned = () => {
    setIsWarned(false);
  };

  const handleExit = () => {
    setIsWarned(true);
    window.location.replace("http://www.google.com");
  };

  const handleStartAudio = () => {
    setAudioReady(true); // Trigger audio playback
  };

  return (
    <div className="flex items-center bg-black justify-center min-h-screen w-full animate-bgChange">
      <div className="text-white p-8 bg-gray-900 rounded-lg shadow-lg flex flex-col items-center text-center px-16">
        <img src={WarnImg} alt="Warning" />
        <h1
          className="text-5xl py-4 font-bold mb-4 text-red-600"
          style={{
            textShadow: "2px 2px 10px rgba(255, 0, 0, 0.7)", // Add red shadow
          }}
        >
          Warning!
        </h1>
        <p className="mb-2">Only For The Privet Users</p>
        <p className="mb-6">Ensure you are strong-hearted before proceeding.</p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => {
              handleWarned();
              handleStartAudio(); // Start audio playback on Proceed
            }}
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-500"
          >
            Proceed
          </button>
          <button
            onClick={handleExit}
            className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-500"
          >
            Exit
          </button>
        </div>
      </div>
      <audio ref={audioRef} src={WarnSound} loop className="hidden"></audio>
    </div>
  );
}
