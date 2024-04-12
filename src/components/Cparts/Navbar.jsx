import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { RiArrowRightSLine } from "react-icons/ri"; // Importing right arrow icon

import Register from "../auth/register";
import Login from "../auth/login";
import { useAuth } from "../../contexts/authContext";
import { doSignOut } from "../../firebase/auth";

const Navbar = () => {
  const [LoginIsOpen, setLoginIsOpen] = useState(false);
  const [SignUp, setSignUp] = useState(false);

  const { userLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await doSignOut();
      navigate("/");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const handleclick = () => {
    setLoginIsOpen(true);
  };

  const HandleCLickSignUp = () => {
    setSignUp(true);
  };
  return (
    <>
      <header
        className="bg-black text-gray-600 body-font"
        style={{
          color: "black",
          opacity: "100%",
          backgroundColor: "transparent",
          backdropFilter: "blur(10px)",
          top: 0,
          zIndex: 1000,

          textDecoration: "none",
        }}
      >
        <div className="container mx-auto flex flex-wrap p-1 flex-col md:flex-row items-center">
          <Link to="/">
            <a
              className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
              style={{ margin: "20px" }}
            >
              <svg
                style={{ margin: "2px 13px", color: "white" }}
                className="w-10 h-10 text-white p-2 "
                viewBox="0 0 24 24"
              ></svg>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyyn5A4gjnjhnODfd_3uVYpA1t2X7O3fxScA&usqp=CAU"
                alt="Image"
                className="w-32 h-32 object-cover rounded-full"
                style={{ height: "50px", width: "50px" }}
              />
              <span
                className="ml-3 text-xl text-gray"
                style={{ color: "black" }}
              >
                Techiela
              </span>
            </a>
          </Link>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center text-lg">
            <Link to="/">
              <a
                className="mr-5 hover:text-gray-900"
                style={{ color: "black", fontWeight: "bold" }}
              >
                Home
              </a>
            </Link>
            <Link to="/About">
              <a
                className="mr-5 hover:text-gray-900"
                style={{ color: "black", fontWeight: "bold" }}
              >
                About
              </a>
            </Link>
            <Link to="/Courses">
              <a
                className="mr-5 hover:text-gray-900"
                style={{ color: "black", fontWeight: "bold" }}
              >
                Courses
              </a>
            </Link>
            <Link to="/Plans">
              <a
                className="mr-5 hover:text-gray-900"
                style={{
                  color: "black",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                Plans
              </a>
            </Link>
            <Link to="/Toprecruters">
              <a
                className="mr-5 hover:text-gray-900"
                style={{ color: "black", fontWeight: "bold" }}
              >
                Top recruters
              </a>
            </Link>
          </nav>
          {userLoggedIn ? (
            <button
              className="inline-flex items-center bg-black-100 border-0 py-1 px-5 focus:outline-none hover:bg-gray-200 rounded black  "
              onClick={handleLogout}
              style={{ background: "black", color: "white" }}
            >
              Logout
              <span>
                <RiArrowRightSLine />
              </span>
            </button>
          ) : (
            <>
              <div className="flex flex-row text-bold ">
                <button
                  className="bg-white text-black font-bold py-0 px-8 rounded-md mr-4 hover:bg-white hover:text-black transition-colors"
                  onClick={handleclick}
                  style={{
                    marginLeft: "2rem",
                    border: "2px solid black",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span>Login</span>
                  <span>
                    <RiArrowRightSLine />
                  </span>
                </button>

                {LoginIsOpen && (
                  <Popup
                    open={LoginIsOpen}
                    onClose={() => {
                      setLoginIsOpen(false);
                    }}
                    modal
                    nested
                    className="center-popup"
                  >
                    <Login />
                  </Popup>
                )}
                <button
                  className="bg-black text-white py-2 px-8 rounded-md"
                  onClick={HandleCLickSignUp}
                >
                  Sign-Up
                </button>
              </div>

              {SignUp && (
                <Popup
                  open={SignUp}
                  onClose={() => {
                    setSignUp(false);
                  }}
                  modal
                  nested
                  className="center-popup"
                >
                  <Register />
                </Popup>
              )}
            </>
          )}
        </div>
      </header>
    </>
  );
};

export default Navbar;
