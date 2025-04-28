// UCF Brand Colors
const colors = {
  primary: '#000000', // Black
  secondary: '#BA9B37', // Metallic Gold
  accent: '#FFC904', // Bright Gold
  background: '#FFFFFF', // White
  surface: '#FFFFFF', // White
  text: {
    primary: '#000000', // Black
    secondary: '#000000', // Black
    tertiary: '#000000', // Black
    muted: '#666666' // Dark Gray for muted text
  },
  border: '#BA9B37', // Metallic Gold
  shadow: 'rgba(0, 0, 0, 0.1)',
  card: '#FFFFFF', // White
  button: {
    primary: '#000000', // Black
    text: '#FFFFFF' // White
  }
};

const theme = {
  colors,
  borderRadius: {
    sm: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '1rem',
    full: '9999px'
  },
  typography: {
    fontFamily: {
      primary: "'Inter', sans-serif",
      secondary: "'Poppins', sans-serif"
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem'
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700
    },
    lineHeight: {
      none: 1,
      tight: 1.25,
      normal: 1.5,
      relaxed: 1.625,
      loose: 2
    }
  },
  spacing: {
    xs: '0.5rem',
    sm: '0.75rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '2.5rem',
    '3xl': '3rem'
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
  },
  transitions: {
    base: 'all 0.3s ease',
    fast: 'all 0.15s ease',
    slow: 'all 0.5s ease'
  },
  shadows: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px rgba(0, 0, 0, 0.1)',
    lg: '0 8px 16px rgba(0, 0, 0, 0.1)',
    xl: '0 12px 24px rgba(0, 0, 0, 0.1)'
  },
  gradients: {
    primary: 'linear-gradient(135deg, #000000 0%, #BA9B37 100%)',
    secondary: 'linear-gradient(135deg, #BA9B37 0%, #FFC904 100%)',
    accent: 'linear-gradient(135deg, #FFC904 0%, #FFFFFF 100%)'
  }
};

export default theme;