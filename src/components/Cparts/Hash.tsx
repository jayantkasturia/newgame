import { RiArrowRightSLine } from "react-icons/ri"; // Importing right arrow icon
import { TypewriterEffectSmoothDemo } from "./Hero";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";

const Hash = () => {

  const {userLoggedIn} =useAuth();

  return (
    <div
      style={{
        width: "95%",
        paddingLeft: "2.25rem",
        paddingRight: "1.2",
        paddingTop: " 0.5rem",
        paddingBottom: "1rem",
      }}
    >
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1
              className="title-font sm:text-xl text-8xl mb-4 font-medium text-gray-900"
              style={{ fontSize: "3.25rem" }}
            >
              <div style={{ width: "99%" }}>
                <TypewriterEffectSmoothDemo />
              </div>
            </h1>
            <p className="mb-8 mt-4 leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
            <div className="flex justify-center" style={{marginTop:'6.25rem'}}>
              <button
                className="inline-flex items-center justify-center text-dark bg-dark-500 border-0 py-2 px-6 focus:outline-none hover:bg-black-600 rounded text-lg"
                style={{
                  background: "black",
                  color: "white",
                  boxShadow: "0px 4px 6px rgba(6,6,6)",
                }}
                
              >
                <Link to={'/auth/user'}>
                <span className="flex items-center" >
                  Enter free
                  <RiArrowRightSLine className="ml-2" />
                </span>
                </Link>
              </button>
              {!userLoggedIn && <button
                className="ml-4 font-bold inline-flex text-black-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
                style={{ color: "black",boxShadow: "0px 4px 6px rgba(6,6,6)"}}
              >
                Sign Up
              </button>}
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://img.freepik.com/free-vector/learning-concept-illustration_114360-6186.jpg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hash;
