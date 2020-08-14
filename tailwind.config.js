module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      white: '#fff',
      black: '#000',

      text: 'var(--color-text)',
      background: 'var(--color-background)',
      heading: 'var(--color-heading)',
      primary: 'var(--color-primary)',
      primaryHover: 'var(--color-primary-hover)',
      secondary: 'var(--color-secondary)',
      secondaryHover: 'var(--color-secondary-hover)',
      accent: 'var(--color-accent)',
      accentHover: 'var(--color-accent-hover)',
      muted: 'var(--color-muted)',
      mutedHover: 'var(--color-muted-hover)',
      red: 'var(--color-red)',
    },
  },
  plugins: [],
};
