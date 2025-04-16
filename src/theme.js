const theme = {
  colors: {
    primary: '#003135',    // Dark Teal - Main brand color
    secondary: '#024950',  // Deep Teal - Secondary brand color
    accent: '#964734',     // Rust Red - Call to action, important elements
    highlight: '#0FA4AF',  // Bright Teal - Highlights, interactive elements
    light: '#AFDDE5',     // Light Blue - Backgrounds, subtle elements
    
    // Variations for hover states and gradients
    primaryDark: '#002528',
    primaryLight: '#004145',
    secondaryDark: '#013940',
    secondaryLight: '#035960',
    accentDark: '#863D2C',
    accentLight: '#A65240',
    highlightDark: '#0D8F99',
    highlightLight: '#11B9C5',

    // Text colors
    text: {
      primary: '#003135',
      secondary: '#024950',
      light: '#FFFFFF',
      dark: '#002528',
      muted: '#6B7280'
    },

    // Background variations
    background: {
      primary: '#FFFFFF',
      secondary: '#AFDDE5',
      dark: '#003135',
      light: '#F8FBFC'
    },

    // Status colors
    status: {
      success: '#0FA4AF',
      error: '#964734',
      warning: '#F59E0B',
      info: '#0FA4AF'
    }
  },
  layout: {
    maxWidth: '1200px',
    contentWidth: '1024px',
    sidebarWidth: '280px'
  },
  borderRadius: {
    none: '0',
    sm: '0.125rem',
    base: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px'
  },
  breakpoints: {
    xs: '320px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '2.5rem',
    '3xl': '3rem',
    '4xl': '4rem'
  },
  typography: {
    fontFamily: {
      primary: "'Inter', sans-serif",
      secondary: "'Playfair Display', serif"
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
      snug: 1.375,
      normal: 1.5,
      relaxed: 1.625,
      loose: 2
    }
  },
  shadows: {
    sm: '0 1px 2px rgba(0, 49, 53, 0.05)',
    base: '0 2px 4px rgba(0, 49, 53, 0.1)',
    md: '0 4px 6px rgba(0, 49, 53, 0.1)',
    lg: '0 8px 16px rgba(0, 49, 53, 0.1)',
    xl: '0 16px 32px rgba(0, 49, 53, 0.1)',
    inner: 'inset 0 2px 4px rgba(0, 49, 53, 0.05)'
  },
  transitions: {
    base: 'all 0.3s ease',
    smooth: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    spring: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
    bounce: 'all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)'
  }
};

export default theme; 