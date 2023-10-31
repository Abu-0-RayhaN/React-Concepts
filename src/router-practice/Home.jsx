import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container mx-auto max-w-7xl">
      <div className="row">
        <aside className="col-12 col-sm-8 mx-auto my-16 rounded-lg overflow-hidden">
          <div className="px-4 sm:px-6 lg:px-8 pt-10 pb-20 sm:py-24 text-center sm:text-right position-relative">
            <div className="max-w-xl mx-auto sm:ml-auto space-y-8">
              <h2 className="text-4xl font-bold sm:text-5xl">
                Download Now
                <span className="hidden sm:block text-4xl">Lorem Ipsum</span>
              </h2>

              <Link
                className="btn btn-primary inline-flex items-center px-6 py-3 font-medium rounded-lg hover-opacity-75"
                to="/"
              >
                <svg
                  fill="white"
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  clipRule="evenodd"
                >
                  <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                </svg>
                &nbsp; Download now
              </Link>
            </div>
          </div>

          <div className="position-absolute inset-0 w-full pt-1 sm:pt-20 h-full">
            <img
              className="w-100"
              src="https://i.ibb.co/5BCcDYB/Remote2.png"
              alt="image1"
            />
          </div>
        </aside>
      </div>

      <div className="row justify-content-center mt-20">
        <div className="col-12 col-sm-8 text-center">
          <img
            className="w-100"
            src="https://i.ibb.co/2M7rtLk/Remote1.png"
            alt="image2"
          />
        </div>
      </div>

      <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">
        Lorem Ipsum Yojo
      </h1>
    </div>
  );
}
// import React from "react";

// const Home = () => {
//   return <div>Home</div>;
// };

// export default Home;
