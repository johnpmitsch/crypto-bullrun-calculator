import React, { useEffect } from 'react';

const DarkModeToggle = () => {
  const getPreferredColorScheme = () => {
    const darkQuery = '(prefers-color-scheme: dark)';
    const darkMQL = window.matchMedia ? window.matchMedia(darkQuery) : {};
    if (darkMQL.media === darkQuery && darkMQL.matches) {
      return 'dark';
    }

    return 'default';
  };

  const toggle = () => {
    const colorScheme = document.documentElement.getAttribute(
      'data-color-scheme'
    );
    document.documentElement.setAttribute(
      'data-color-scheme',
      colorScheme === 'default' ? 'dark' : 'default'
    );
  };

  useEffect(() => {
    const colorScheme = getPreferredColorScheme();
    document.documentElement.setAttribute('data-color-scheme', colorScheme);
  }, []);

  return <button onClick={toggle}>Toggle Dark Mode</button>;
};

export default DarkModeToggle;
