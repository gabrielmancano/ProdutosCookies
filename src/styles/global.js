import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`


    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins';
        cursor: default;
    }

    body{
        background-color: ${(props) =>  {switch (props.type) {
                 case "barras": return '#ffffe6';
                  case "potes": return '#e6f2ff';
                 default: return '#ffcce6';
        }}};
    }

    li{
        list-style: none;
        cursor: pointer;
    }
    .arrow, p, li, button {
        cursor: pointer;
    }
`