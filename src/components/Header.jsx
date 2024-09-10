import { Link } from "react-router-dom";
import context from "../context/context";
import { useContext } from "react";
export default function Header() {
  const { isWarned } = useContext(context);
  return (
    <>
      {!isWarned && (
        <header className="bg-black p-4">
          <div className="container mx-auto flex justify-between items-center bg-black">
            {/* Logo */}
            <div
              className="text-red-500 text-4xl font-bold bg-transparent"
              style={{
                textShadow: "2px 2px 10px rgba(255, 0, 0, 0.7)",
              }}
            >
              DeathNote
            </div>

            {/* Navigation Menu */}
            <nav className="bg-transparent">
              <ul className="flex space-x-8 bg-transparent">
                <li>
                  <Link
                    to="/"
                    className="text-red-500 hover:text-red-700 transition duration-300 bg-transparent"
                    style={{
                      textShadow: "2px 2px 10px rgba(255, 0, 0, 0.7)",
                    }}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-red-500 hover:text-red-700 transition duration-300 bg-transparent"
                    style={{
                      textShadow: "2px 2px 10px rgba(255, 0, 0, 0.7)",
                    }}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-red-500 hover:text-red-700 transition duration-300 bg-transparent"
                    style={{
                      textShadow: "2px 2px 10px rgba(255, 0, 0, 0.7)",
                    }}
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-red-500 hover:text-red-700 transition duration-300 bg-transparent"
                    style={{
                      textShadow: "2px 2px 10px rgba(255, 0, 0, 0.7)",
                    }}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      )}
    </>
  );
}
