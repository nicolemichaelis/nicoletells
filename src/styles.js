import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  @keyframes rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  @keyframes snake {
    0% { stroke-dasharray: 0; stroke-dashoffset: 974; }
    100% { stroke-dasharray: 1848; stroke-dashoffset: -974; }
  }

  @keyframes pulse {
    0% { transform: scale(.8); opacity: 1; }
    100% { transform: scale(1); opacity: 0; }
  }

  @keyframes marquee {
    0% { transform: translate3d(0, 0, 0); }
    100% { transform: translate3d(-50%, 0, 0); }
  }

  :root {
    --ruby: #E02020;
    --amber: #FA6400;
    // --citrine: #F7B500;
    --citrine: #f5d400;
    --emerald: #6DD400;
    --amazonite: #44D7B6;
    --apatite: #32C5FF;
    --sapphire: #0091FF;
    --amethyst: #B620E0;
    --iolite: #6236FF;

    --swiper-theme-color: #000000 !important;

    --padding-default: 10px;
    --margin-p: 10px;
    --h2-bottom-margin: 10px;
    --rounded-corners: 10px;
    --content-max-width: 500px;


    --shadow-color: 0deg 0% 59%;
    --shadow-elevation-low:
      0.3px 0.3px 0.5px hsl(var(--shadow-color) / 0.34),
      0.6px 0.5px 0.9px -1.1px hsl(var(--shadow-color) / 0.36),
      1.4px 1.2px 2.1px -2.2px hsl(var(--shadow-color) / 0.39);
    --shadow-elevation-medium:
      0.3px 0.3px 0.5px hsl(var(--shadow-color) / 0.35),
      1.2px 1.1px 1.9px -0.7px hsl(var(--shadow-color) / 0.37),
      3px 2.6px 4.6px -1.5px hsl(var(--shadow-color) / 0.39),
      7.1px 6.2px 11px -2.2px hsl(var(--shadow-color) / 0.41);
    --shadow-elevation-high:
      0.3px 0.3px 0.5px hsl(var(--shadow-color) / 0.33),
      2.3px 2px 3.5px -0.3px hsl(var(--shadow-color) / 0.34),
      4.3px 3.8px 6.7px -0.6px hsl(var(--shadow-color) / 0.35),
      6.9px 6.1px 10.7px -1px hsl(var(--shadow-color) / 0.36),
      10.9px 9.5px 16.8px -1.3px hsl(var(--shadow-color) / 0.37),
      16.8px 14.7px 26px -1.6px hsl(var(--shadow-color) / 0.38),
      25.3px 22.2px 39.1px -1.9px hsl(var(--shadow-color) / 0.38),
      37.1px 32.4px 57.3px -2.2px hsl(var(--shadow-color) / 0.39);
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  *::selection {
    background-color: var(--amethyst);
    color: white;
  }

  html, body {
    height: 100%;
  }

  body {
    font-family: "Karla", "KarlaVariable", sans-serif;
    font-size: 14px;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    width: 100vw;
    overflow-x: hidden;
  }

  body.modal-open {
    overflow: hidden;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  h1 {
    font-size: 32px;
    font-family: "Fraunces", "FrauncesVariable", serif;
    font-weight: 800;
    text-align: center;

    @media (max-width: 481px) {
      font-size: 28px;
    }
  }

  h2 {
    font-size: 16px;
    font-weight: 400;
  }

  #root, #___gatsby {
    isolation: isolate;
  }

  #gatsby-focus-wrapper {
    width: 100vw;
    overflow-x: hidden;
  }

  @media (max-width: 700px) {
    .swiper-button-prev,
    .swiper-button-next,
    .swiper-button-prev::after,
    .swiper-button-next::after {
      display: none;
    }
  }
`

export const Section = styled.section`
  min-height: 75vh;
  padding: var(--padding-default);
  display: flex;
  align-items: center;
`

export const Flex = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`
