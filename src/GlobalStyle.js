import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    transition: background-color 0.4s ease-in-out, color 0.4s ease-in-out;
  }

  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    font-family: ${({ theme }) => theme?.typography?.fontFamily?.primary || "'Inter', sans-serif"};
    background: ${({ theme }) => theme?.colors?.background || '#FFFFFF'};
    color: ${({ theme }) => theme?.colors?.text?.primary || '#000000'};
    line-height: ${({ theme }) => theme?.typography?.lineHeight?.normal || 1.5};
    transition: ${({ theme }) => theme?.transitions?.base || 'all 0.3s ease'};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme?.typography?.fontFamily?.secondary || "'Poppins', sans-serif"};
    color: ${({ theme }) => theme?.colors?.text?.primary || '#000000'};
    transition: ${({ theme }) => theme?.transitions?.base || 'all 0.3s ease'};
    margin: 0 0 1rem 0;
    letter-spacing: -0.02em;
  }

  p {
    color: ${({ theme }) => theme?.colors?.text?.secondary || '#000000'};
    transition: ${({ theme }) => theme?.transitions?.base || 'all 0.3s ease'};
    margin: 0 0 1rem 0;
    font-size: ${({ theme }) => theme?.typography?.fontSize?.base || '1rem'};
    line-height: ${({ theme }) => theme?.typography?.lineHeight?.relaxed || 1.625};
  }

  a {
    color: ${({ theme }) => theme?.colors?.primary || '#000000'};
    text-decoration: none;
    position: relative;
    transition: ${({ theme }) => theme?.transitions?.base || 'all 0.3s ease'};
    font-weight: ${({ theme }) => theme?.typography?.fontWeight?.medium || 500};

    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: -2px;
      left: 0;
      background: ${({ theme }) => theme?.colors?.secondary || '#BA9B37'};
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.3s ease;
    }

    &:hover {
      color: ${({ theme }) => theme?.colors?.accent || '#FFC904'};
      &:after {
        transform: scaleX(1);
        transform-origin: left;
      }
    }
  }

  button {
    cursor: pointer;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: ${({ theme }) => theme?.borderRadius?.md || '0.375rem'};
    font-family: ${({ theme }) => theme?.typography?.fontFamily?.primary || "'Inter', sans-serif"};
    font-weight: ${({ theme }) => theme?.typography?.fontWeight?.medium || 500};
    color: ${({ theme }) => theme?.colors?.button?.text || '#FFFFFF'};
    background: ${({ theme }) => theme?.colors?.button?.primary || '#000000'};
    transition: ${({ theme }) => theme?.transitions?.base || 'all 0.3s ease'};
    position: relative;
    overflow: hidden;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: ${({ theme }) => theme?.colors?.gradient?.secondary || 'linear-gradient(135deg, #BA9B37 0%, #FFC904 100%)'};
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    &:hover {
      transform: translateY(-2px);
      box-shadow: ${({ theme }) => theme?.shadows?.lg || '0 8px 16px rgba(0, 0, 0, 0.1)'};
      
      &:before {
        opacity: 0.2;
      }
    }

    &:active {
      transform: translateY(0);
    }
  }

  .card {
    background: ${({ theme }) => theme?.colors?.card || '#FFFFFF'};
    border-radius: ${({ theme }) => theme?.borderRadius?.xl || '1rem'};
    padding: ${({ theme }) => theme?.spacing?.lg || '1.5rem'};
    transition: ${({ theme }) => theme?.transitions?.base || 'all 0.3s ease'};
    border: 1px solid ${({ theme }) => theme?.colors?.border || '#BA9B37'};
    backdrop-filter: blur(12px);

    h1, h2, h3, h4, h5, h6 {
      color: ${({ theme }) => theme?.colors?.text?.primary || '#000000'};
    }
    
    p {
      color: ${({ theme }) => theme?.colors?.text?.secondary || '#000000'};
    }

    a {
      color: ${({ theme }) => theme?.colors?.primary || '#000000'};
      
      &:hover {
        color: ${({ theme }) => theme?.colors?.accent || '#FFC904'};
      }
    }

    &:hover {
      transform: translateY(-4px);
      box-shadow: ${({ theme }) => theme?.shadows?.lg || '0 8px 16px rgba(0, 0, 0, 0.1)'};
    }
  }

  input, textarea {
    background: ${({ theme }) => theme?.colors?.background || '#FFFFFF'};
    border: 1px solid ${({ theme }) => theme?.colors?.border || '#BA9B37'};
    border-radius: ${({ theme }) => theme?.borderRadius?.md || '0.375rem'};
    padding: 0.75rem 1rem;
    color: ${({ theme }) => theme?.colors?.text?.primary || '#000000'};
    font-family: ${({ theme }) => theme?.typography?.fontFamily?.primary || "'Inter', sans-serif"};
    transition: ${({ theme }) => theme?.transitions?.base || 'all 0.3s ease'};
    width: 100%;
    backdrop-filter: blur(8px);

    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme?.colors?.accent || '#FFC904'};
      box-shadow: 0 0 0 4px rgba(255, 201, 4, 0.2);
    }

    &::placeholder {
      color: ${({ theme }) => theme?.colors?.text?.muted || '#666666'};
    }
  }

  .container {
    transition: ${({ theme }) => theme?.transitions?.base || 'all 0.3s ease'};
    
    &:hover {
      transform: scale(1.01);
    }
  }

  .active-nav-link {
    color: ${({ theme }) => theme?.colors?.accent || '#FFC904'};
    font-weight: ${({ theme }) => theme?.typography?.fontWeight?.semibold || 600};
    position: relative;

    &:after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 100%;
      height: 2px;
      background: ${({ theme }) => theme?.colors?.accent || '#FFC904'};
      transform: scaleX(1);
    }
  }

  ::selection {
    background: rgba(255, 201, 4, 0.2);
    color: ${({ theme }) => theme?.colors?.text?.primary || '#000000'};
  }
`;

export default GlobalStyle; 