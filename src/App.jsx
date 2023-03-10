import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import publicRoutes from "./route";
import Footer from "./components/Footer";
import { useState } from "react";
import i18n from "./translation/i18n";

function App() {
  const [lang, setLang] = useState("vi");
  function changeLanguage(e) {
    setLang(e.target.value);
    i18n.changeLanguage(e.target.value);
  }
  return (
    <BrowserRouter>
      <div className="bg-gray-50 dark:bg-gray-900">
        <div className="relative z-50 bg-gray-100 drop-shadow-sm dark:bg-gray-800">
          <Header changeLanguage={changeLanguage} />
        </div>
        <div className="bg-gray-50 dark:bg-gray-900 min-[300px]:w-full lg:m-auto lg:w-[1280px]">
          <Routes>
            {publicRoutes.map((route, index) => {
              return (
                <Route
                  path={route.path}
                  element={<route.component lang={lang} />}
                />
              );
            })}
          </Routes>
        </div>
        <div className="sm:w-full lg:w-[1280px] lg:dark:bg-gray-900 xl:m-auto xl:w-full">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
