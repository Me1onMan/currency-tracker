import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
html {
 background-color: ${({ theme }) => theme.colors.bgColorPrimary};
 max-width: ${({ theme }) => theme.sizes.screenSize.laptopL};
 margin: 0 auto;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    color: ${({ theme }) => theme.colors.black};
}

a {
    text-decoration: none;
}

a:hover, select:hover, button:hover {
    cursor: pointer;
}

a:hover {
    color: ${({ theme }) => theme.colors.linkHover};
}

input, select {
    outline: none;
}
`;

export default Global;
