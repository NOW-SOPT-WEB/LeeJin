import { css } from "@emotion/react";

export const GlobalStyle = css({
  "*": {
    padding: 0,
    margin: 0,
    boxSizing: "border-box",
  },

  "ul, ol, li": {
    listStyle: "none",
  },

  "html, body": {
    fontSize: "18px",
  },

  a: {
    textDecoration: "none",
  },
});