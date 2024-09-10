import { useState, useContext } from "react";
import context from "../context/context";
export default function NameForm() {
  const { setIsWriting } = useContext(context);
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState(null);

  const handleChange = (event) => {
    setName(event.target.value);
  };
  const clickSubmit = () => {
    setInterval(() => {
      setIsWriting(false);
    }, 2000);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedName(name);
    setName("");
  };

  return (
    <div className=" bg-red-400 w-full fixed z-50 top-0 left-0 h-full flex justify-center items-center">
      <div className=" p-4 max-w-md mx-auto bg-white shadow-md rounded-lg">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 font-semibold mb-2"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleChange}
              className="w-full px-3 py-2 border text-black border-gray-300 rounded-lg"
              required
            />
          </div>
          <button
            onClick={clickSubmit}
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
        {submittedName && (
          <div className="mt-4">
            <h2 className="text-xl font-semibold">Submitted Name:</h2>
            <p className="text-lg text-gray-700">{submittedName}</p>
          </div>
        )}
      </div>
    </div>
  );
}
