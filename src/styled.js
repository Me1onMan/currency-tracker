import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
html {
 background-color: #030304;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    color: #fff;
}
`;
export default Global;
