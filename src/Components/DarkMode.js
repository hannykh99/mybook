<<<<<<< HEAD
import React, { useEffect } from 'react';

import { ReactComponent as Moon } from "./moon.svg";
import './DarkMode.css';

const DarkMode = () => {
  useEffect(() => {
    const selectedTheme = localStorage.getItem("selectedTheme");
    if (selectedTheme === "dark") {
      setDarkMode();
    }
  }, []);

  const setDarkMode = () => {
    document.querySelector("body").setAttribute('data-theme', 'dark');
    localStorage.setItem("selectedTheme", "dark");
  };

  const setLightMode = () => {
    document.querySelector("body").setAttribute('data-theme', 'light');
    localStorage.setItem("selectedTheme", "light");
  };

  const toggleTheme = (e) => {
    if (e.target.checked) setDarkMode();
    else setLightMode();
  };

  const selectedTheme = localStorage.getItem("selectedTheme");

  return (
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode_toggle"
        onChange={toggleTheme}
        defaultChecked={selectedTheme === "dark"}
      />
      
      <label className="dark_mode_label" htmlFor="darkmode_toggle">
       
        <Moon />
      </label>
    </div>
  );
};

=======
import React, { useEffect } from 'react';

import { ReactComponent as Moon } from "./moon.svg";
import './DarkMode.css';

const DarkMode = () => {
  useEffect(() => {
    const selectedTheme = localStorage.getItem("selectedTheme");
    if (selectedTheme === "dark") {
      setDarkMode();
    }
  }, []);

  const setDarkMode = () => {
    document.querySelector("body").setAttribute('data-theme', 'dark');
    localStorage.setItem("selectedTheme", "dark");
  };

  const setLightMode = () => {
    document.querySelector("body").setAttribute('data-theme', 'light');
    localStorage.setItem("selectedTheme", "light");
  };

  const toggleTheme = (e) => {
    if (e.target.checked) setDarkMode();
    else setLightMode();
  };

  const selectedTheme = localStorage.getItem("selectedTheme");

  return (
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode_toggle"
        onChange={toggleTheme}
        defaultChecked={selectedTheme === "dark"}
      />
      
      <label className="dark_mode_label" htmlFor="darkmode_toggle">
       
        <Moon />
      </label>
    </div>
  );
};

>>>>>>> ea20c38978ad516912f6dd644651f99eb7a9662c
export default DarkMode;