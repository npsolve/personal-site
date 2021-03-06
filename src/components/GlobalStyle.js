import normalize from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  html, body {
    height: 100%;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
    line-height: 1.6rem;
  }

  body {
    font-size: 1.6rem;
    font-family: 'avenir' !important;
    word-break: break-word;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'menlo' monospace;
  }

  h1 {
    line-height: 3.5rem;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  iframe {
    display: block;
    max-width: 100%;
    width: 100%;
    margin: 0 0 2rem 0;

    &.youtube {
      height: 20rem;

      @media (min-width: 550px) {
        height: 34rem;
      }
    }

  }

  blockquote {
    border-left: 5px solid gray;
    margin: 1.5em 10px;
    padding: 0.5em 10px;
    font-style: italic;
  }

  blockquote p {
    display: inline;
  }

  figure {
    margin: 0;
  }

  ul {
    padding: 0;
    list-style: square;
  }

  a {
    text-decoration: none;
    color: blue;
    border-bottom: 2px solid transparent;

    &:hover {
      color: #999;
      border-color: #999;
    }

    &.anchor {
      border: none;
    }
  }

  table {
    margin-bottom: 1rem;
    border-collapse: collapse;
    padding: 1rem;
    display: block;
    overflow-x: auto;
    width: 100%;
    white-space: nowrap;
  }
  table tr {
    border-top: 1px solid black;
    background-color: white;
  }
  
  table tr th {
    font-weight: bold;
    border: 1px solid black;
    text-align: left;
    margin: 0;
    padding: 6px 13px;
  }
  table tr td {
    border: 1px solid black;
    text-align: left;
    margin: 0;
    padding: 6px 13px;
  }

  p {
    margin: 0 0 2rem 0;
    font-size: 1.8rem;
  }

  twitterwidget {
    margin: 0 auto;
  }

  .sidebar {
    margin-left: auto;
    margin-right: auto;

    @media (min-width: 520px) {
      width: calc(50% + 1em);
      clear: both;
      float: right;
      padding-left: 1em;
    }

    &.left {
      float: left;
      padding-left: 0;
      padding-right: 1em;
    }

    img {
      width: 100%;
    }
  }

  .blog-full,
  .blog-inset {
    margin-left: auto;
    margin-right: auto;
    width: 100%;

    img {
      width: 100%;
    }
  }

  .blog-inset {
    @media (min-width: 520px) {
      margin-top: 2em;
      margin-bottom: 2em;
      width: 90%;
    }
  }

  .blog-section {

    &:not(:first-child) {
      margin-top: 2em;
    }

    h1, h2, h3, h4, h5, h6 {
      margin-bottom: 0.5rem;

      & + p {
        margin-top: 0.5rem;
      }
    }

    ul {
      margin: 0 0 1.5rem 1.5rem;

      @media (min-width: 520px) {
        margin-left: 2.5rem;
      }
    }

    li {
      margin: 1rem 0;
      p {
        margin: 0;
      }
    }
  }

  :not(pre) > code[class*="language-"], pre[class*="language-"] {
    font-size: 1rem;
  }

  .grvsc-container .grvsc-line-highlighted {
    background-color: #000000;
    display: block;
    margin-right: -1rem;
    margin-left: -1rem;
    padding-right: 1rem;
    padding-left: 0.75rem;
    border-left: 0.25rem solid #f99;
  }

  .gatsby-resp-image-wrapper {
    @media (min-width: 520px) {
      margin-top: 2em;
      margin-bottom: 2em;
      width: 80%;
    }
  }
`;

export default GlobalStyle;
