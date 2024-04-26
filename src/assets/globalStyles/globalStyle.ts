import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {

}
* {
    box-sizing: border-box;
    font-family: "Open Sans", sans-serif;
    margin: 0;
    padding: 0;
}
body {
    color: #fff;
    background: #000;
}
.container {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    background: #EEEEEE;
}
.general-content {
    display: flex;
    gap: 1rem;
    background: transparent;
    padding: 1rem;
    margin: 15px;
    color: #000;
    box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
}
.default-div {
    display: flex;
    height: auto;
    min-width: 150px;
    flex-direction: column;
    border-bottom: 6px solid #323366 !important;
    border-radius: 4px;
    padding: 1rem;
    box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.2);
}
img {
    max-height: 250px;
    max-width: 250px;

}
`

export default GlobalStyles