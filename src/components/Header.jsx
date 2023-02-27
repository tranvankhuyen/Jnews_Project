import React from "react";
import { Link } from "react-router-dom";
import ButtonDarkmode from "./ButtonDarkmode";
import Culture from "../pages/Culture";
import dropdownNav from "../javascripts/dropdownNav";
import Home from "../pages/Home";
import { HiOutlineMenu } from "react-icons/hi";

function Header() {
  return (
    <div
      id="header"
      className="md:w-full md:h-20 lg:h-16 md:bg-white flex justify-between drop-shadow-sm dark:bg-gray-900 relative"
    >
      {/* Logo */}
      <Link
        to="/home"
        element={Home}
        class="md:flex md:items-center md:ml-8 flex items-center"
      >
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          class="md:h-9 md:mr-3 sm:h-9"
          alt="Flowbite Logo"
        />
        <span class="self-center md:text-2xl font-semibold whitespace-nowrap dark:text-white">
          JNews
        </span>
      </Link>
      {/* Hamburger */}
      <button
        className="hamburger lg:hidden text-4xl mr-10"
        onClick={() => {
          document.querySelector(".Nav").classList.toggle("md:hidden");
        }}
      >
        <HiOutlineMenu className="" />
      </button>

      <div className="Nav lg:flex md:hidden lg:h-full md:w-1/2 md:p-4 lg:absolute md:fixed lg:top-0 lg:right-10 md:top-20 md:right-0 lg:bg-white dark:bg-gray-900 md:bg-gray-300 md:m-auto flex lg:flex-row lg:justify-between md:flex-col">
        {/* JNews, Culture */}
        <div className="flex lg:items-center lg:flex-row md:flex-col lg:relative">
          <div
            className="dropdown md:h-full"
            onMouseEnter={dropdownNav}
            onMouseLeave={dropdownNav}
          >
            <button
              id="dropdownHoverButton"
              class="md:text-gray-700 md:text-md lg:h-full md:w-full md:h-12 md:px-4 md:text-center md:inline-flex md:items-center hover:text-black dark:text-gray-300 dark:hover:text-white hover:bg-gray-200"
            >
              Jnews{" "}
            </button>
            {/* <!-- Dropdown menu --> */}
            <div
              id="dropdownHover"
              npm
              class="z-50 lg:hidden lg:bg-white md:ml-4 md:divide-y md:divide-gray-100 lg:shadow md:w-44 dark:bg-gray-700"
            >
              <ul
                class="lg:py-2 md:text-sm md:text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownHoverButton"
              >
                <li class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  <Link to="/culture" element={Culture}>
                    Culture
                  </Link>
                </li>
                <li class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  <Link to="/culture" element={Culture}>
                    Culture
                  </Link>
                </li>
                <li class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ">
                  <Link to="/culture" element={Culture}>
                    Culture
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="hover:bg-gray-200 lg:h-full md:h-12 md:flex md:items-center">
            <Link
              to="/culture"
              element={Culture}
              className="m-4 text-md w-full text-gray-700 dark:text-gray-300 hover:text-black flex items-center"
            >
              Culture
            </Link>
          </div>
        </div>

        {/* Search box */}

        <form className="lg:flex lg:items-center">
          <label
            for="default-search"
            class="lg:mb-2 lg:text-sm lg:font-medium lg:sr-only mb-2 text-sm font-medium sr-only text-gray-900 dark:text-white"
          >
            Search
          </label>
          <div class="relative block">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              class="block w-full p-2 pl-10 outline-none text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search News"
              required
            />
          </div>
        </form>

        <button className="flex items-center pr-4 lg:block sm:hidden">
          <ButtonDarkmode />
        </button>
      </div>
    </div>
  );
}

export default Header;
