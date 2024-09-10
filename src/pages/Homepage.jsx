import { useContext } from "react";
import context from "../context/context";
import Warning from "../components/Warning";
import HeroImage from "../assets/kbg.jpg";
import NoteAName from "../components/NoteAName";

export default function Homepage() {
  const { isWarned, isWriting, setIsWriting } = useContext(context);

  const handleWriteName = () => {
    setIsWriting(true);
  };

  return (
    <div>
      {isWarned ? (
        <Warning />
      ) : (
        <div>
          <section className="relative flex items-center justify-center h-screen bg-black overflow-hidden">
            <img
              src={HeroImage}
              alt="Dangerous"
              className="absolute inset-0 object-cover w-full h-full opacity-60"
            />
            <div className="z-20 text-center">
              <h1 className="text-7xl font-semibold">Note A Name</h1>
              <p className="py-6">
                Death Is A Dangerous NoteBook Where <br /> If You Write Anyones
                name He/She Will Die{" "}
              </p>
              <button
                onClick={handleWriteName}
                className="bg-red-500 py-3 px-7 rounded-full"
              >
                Write A Name
              </button>
            </div>
          </section>
          {isWriting ? <NoteAName /> : null}
        </div>
      )}
    </div>
  );
}
