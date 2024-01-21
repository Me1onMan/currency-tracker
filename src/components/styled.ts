import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
html {
 background-color: ${(props) => props.theme.bgColorPrimary};
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    color: #fff;
}

a {
    text-decoration: none;
}

a:hover {
    color: #00c459;
    cursor: pointer;
}
`;

export default Global;
