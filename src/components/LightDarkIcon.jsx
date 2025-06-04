import React, { useEffect, useState } from 'react';
import lightIcon from "../assets/image/lightDarkIcon/light.png";
import darkIcon from "../assets/image/lightDarkIcon/dark.png"; // bunu əlavə et

const LightDarkIcon = () => {
  const [theme, setTheme] = useState('light');

  // İlk dəfə səhifə yüklənəndə localStorage varsa ordan götür
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') || 'light';
    setTheme(storedTheme);
    document.documentElement.setAttribute('data-theme', storedTheme);
  }, []);

  // Toggle funksiyası
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className='icon-container' onClick={toggleTheme} style={{ cursor: 'pointer' }}>
      <div className="light-dark-icon">
        <img src={theme === 'light' ? lightIcon : darkIcon} alt="theme icon" />
      </div>
    </div>
  );
};

export default LightDarkIcon;
