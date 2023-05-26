import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
  body {
      font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
background: linear-gradient(-45deg, #f7b9a9, #a4f4ec, #96c7e4, #a4ebc8);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
    height: 100vh;
}




code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}
ul,
ol {
  list-style: none;
  margin: 0;
  padding: 0;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}
a {
  text-decoration: none;
  color: inherit;
}
button {
    cursor: pointer;
}
`;
