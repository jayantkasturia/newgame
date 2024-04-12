const CoursesMy = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container  mx-auto">
          <div className="flex flex-col">
            <div
              className="flex flex-wrap flex-col mb-7"
              style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                lineHeight: "4",
                fontSize: "3.2rem",
              }}
            >
              <h1 className="text-5xl font-bold text-black">Popular Courses</h1>
            </div>
            <div
              className="flex flex-row justify-center font-bold"
              style={{ width: "100%", marginBottom: "2rem", marginTop: "2rem",color:'black' }}
            >
              <span
                className="border border-black px-4 py-2 rounded-md hover:bg-black hover:text-white transition-colors"
                style={{ margin: "0 1rem"}}
              >
                All Programme
              </span>
              <span
                className="border border-black px-4 py-2 rounded-md hover:bg-black hover:text-white transition-colors"
                style={{ margin: "0 1rem" }}
              >
                UI/UX
              </span>
              <span
                className="border border-black px-4 py-2 rounded-md hover:bg-black hover:text-white transition-colors"
                style={{ margin: "0 1rem" }}
              >
                HTML
              </span>
              <span
                className="border border-black px-4 py-2 rounded-md hover:bg-black hover:text-white transition-colors"
                style={{ margin: "0 1rem" }}
              >
                NODE JS
              </span>
              <span
                className="border border-black px-4 py-2 rounded-md hover:bg-black hover:text-white transition-colors"
                style={{ margin: "0 1rem" }}
              >
                REACT JS
              </span>
              
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src="https://logowik.com/content/uploads/images/nodejs.jpg"
                />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                Shooting Stars
              </h2>
              <p className="text-base leading-relaxed mt-2">
                Swag shoivdigoitch literally meditation subway tile tumblr
                cold-pressed. Gastropub street art beard dreamcatcher neutra,
                ethical XOXO lumbersexual.
              </p>
              <a className="text-indigo-500 inline-flex items-center mt-3">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src="https://thumbs.dreamstime.com/b/docker-logo-editorial-illustrative-white-background-eps-download-vector-jpeg-banner-docker-logo-editorial-illustrative-white-208329238.jpg"
                />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                The Catalyzer
              </h2>
              <p className="text-base leading-relaxed mt-2">
                Swag shoivdigoitch literally meditation subway tile tumblr
                cold-pressed. Gastropub street art beard dreamcatcher neutra,
                ethical XOXO lumbersexual.
              </p>
              <a className="text-indigo-500 inline-flex items-center mt-3">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src="https://logowik.com/content/uploads/images/python.jpg"
                />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                The 400 Blows
              </h2>
              <p className="text-base leading-relaxed mt-2">
                Swag shoivdigoitch literally meditation subway tile tumblr
                cold-pressed. Gastropub street art beard dreamcatcher neutra,
                ethical XOXO lumbersexual.
              </p>
              <a className="text-indigo-500 inline-flex items-center mt-3">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoursesMy;
