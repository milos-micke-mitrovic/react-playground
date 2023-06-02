import React from "react";
import { Link } from "react-router-dom";

import useDarkMode from "../hooks/useDarkMode";

const Login = (): JSX.Element => {
  useDarkMode(true);

  return (
    <section className="">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Link
          to="/login"
          className="flex items-center mb-6 text-2xl font-semibold"
        >
          <img className="w-8 h-8 mr-2" src="./cat.svg" alt="Cat" />
          My Cat
        </Link>

        <div className="w-full rounded-lg shadow dark:border border-green md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
              Sign in to your account
            </h1>

            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium"
                >
                  Your email
                </label>

                <input
                  type="email"
                  name="email"
                  id="email"
                  className="border  sm:text-sm rounded-lg block w-full p-2.5"
                  placeholder="name@company.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium"
                >
                  Password
                </label>

                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="border  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border rounded focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required
                    />
                  </div>

                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="">
                      Remember me
                    </label>
                  </div>
                </div>

                <a href="#" className="text-sm font-medium hover:underline">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                Sign in
              </button>

              <p className="text-sm font-light">
                Don't have an account yet?{" "}
                <a href="#" className="font-medium hover:underline">
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
