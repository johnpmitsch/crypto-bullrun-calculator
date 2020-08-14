import React, { useState, useEffect } from 'react';
import { RiSunLine, RiMoonClearLine } from 'react-icons/ri';

const DarkModeToggle = () => {
  const [userColorScheme, setUserColorScheme] = useState('default');

  const getPreferredColorScheme = () => {
    const darkQuery = '(prefers-color-scheme: dark)';
    const darkMQL = window.matchMedia ? window.matchMedia(darkQuery) : {};
    if (darkMQL.media === darkQuery && darkMQL.matches) {
      return 'dark';
    }

    return 'default';
  };

  const getBrowserColorScheme = () => {
    return document.documentElement.getAttribute('data-color-scheme');
  };

  const setBrowserColorScheme = (scheme) => {
    return document.documentElement.setAttribute('data-color-scheme', scheme);
  };

  const toggle = () => {
    const colorScheme = getBrowserColorScheme();
    const newColorScheme = colorScheme === 'default' ? 'dark' : 'default';
    setUserColorScheme(newColorScheme);
  };

  // Set initial prefered color scheme from OS
  useEffect(() => {
    setUserColorScheme(getPreferredColorScheme());
  }, []);

  // Update color scheme in browser when user changes
  useEffect(() => {
    setBrowserColorScheme(userColorScheme);
  }, [userColorScheme]);

  return (
    <button onMouseDown={(e) => e.preventDefault()} onClick={toggle}>
      {userColorScheme == 'dark' ? <RiMoonClearLine /> : <RiSunLine />}
    </button>
  );
};

export default DarkModeToggle;
