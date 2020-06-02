import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
    line-height: 1.15; 
    -webkit-text-size-adjust: 100%; 
  }
  body {
    margin: 0;
  }
  main {
    display: block;
  }
  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }
  hr {
    box-sizing: content-box; 
    height: 0; 
    overflow: visible; 
  }
  pre {
    font-family: monospace, monospace; 
    font-size: 1em; 
  }
  a {
    background-color: transparent;
    text-decoration: none;
  }
  abbr[title] {
    border-bottom: none; 
    text-decoration: underline; 
    text-decoration: underline dotted; 
  }
  b,
  strong {
    font-weight: bolder;
  }
  code,
  kbd,
  samp {
    font-family: monospace, monospace; 
    font-size: 1em; 
  }
  small {
    font-size: 80%;
  }
  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sub {
    bottom: -0.25em;
  }
  sup {
    top: -0.5em;
  }
  img {
    border-style: none;
  }
  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit; 
    font-size: 100%; 
    line-height: 1.15; 
    margin: 0; 
  }
  button,
  input { 
    overflow: visible;
  }
  button,
  select { 
    text-transform: none;
  }
  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }
  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }
  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }
  legend {
    box-sizing: border-box; 
    color: inherit; 
    display: table; 
    max-width: 100%; 
    padding: 0; 
    white-space: normal; 
  }
  progress {
    vertical-align: baseline;
  }
  textarea {
    overflow: auto;
  }
  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box; 
    padding: 0; 
  }
  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }
  [type="search"] {
    -webkit-appearance: textfield; 
    outline-offset: -2px; 
  }
  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  ::-webkit-file-upload-button {
    -webkit-appearance: button; 
    font: inherit; 
  }
  details {
    display: block;
  }
  summary {
    display: list-item;
  }
  template {
    display: none;
  }
  [hidden] {
    display: none;
  }

  input, button, select, textarea {
    outline: none;
    -webkit-appearance: none;
    border-radius: 0;
    border:0;
  }
  textarea{
      resize:none;
  }

  @font-face {
    font-family: "iconfont";
    src: url('./iconfont.eot?t=1591101008411');
    src: url('./iconfont.eot?t=1591101008411#iefix') format('embedded-opentype'), 
    url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
    url('./iconfont.woff?t=1591101008411') format('woff'),
    url('./iconfont.ttf?t=1591101008411') format('truetype'), 
    url('./iconfont.svg?t=1591101008411#iconfont') format('svg'); 
  }
  
  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  .icon-icon_close:before {
    content: "\e62c";
  }

  .icon-fangdajing:before {
    content: "\\e617";
  }
  
  .icon-shu:before {
    content: "\\e662";
  }
  
  .icon-xihuan:before {
    content: "\\e64e";
  }
  
  .icon-liaotianjilu:before {
    content: "\\e663";
  }
  
  .icon-zan1:before {
    content: "\\e64f";
  }
  
  .icon-wenzhang2:before {
    content: "\\e681";
  }
  
  .icon-yanjing-tianchong:before {
    content: "\\e67b";
  }
  
  .icon-huo:before {
    content: "\\e606";
  }
  
  .icon-renzhengguanli:before {
    content: "\\e650";
  }
  
  .icon-nan:before {
    content: "\\e609";
  }
  
  .icon-dashujukeshihuaico-:before {
    content: "\\e7fe";
  }
  
  .icon-lingdang:before {
    content: "\\e890";
  }
  
  .icon-nv:before {
    content: "\\e614";
  }
  
  .icon-lishi:before {
    content: "\\e60e";
  }
  
  .icon-yingyong:before {
    content: "\\e61c";
  }
  
  .icon-bqxin:before {
    content: "\\e68b";
  }
  
  .icon-shang:before {
    content: "\\e611";
  }
  
  .icon-zuanshi:before {
    content: "\\e63c";
  }
  
  .icon-font:before {
    content: "\\e800";
  }
  
  .icon-pinglun:before {
    content: "\\e6ba";
  }
  
  .icon-dashang:before {
    content: "\\e691";
  }
  
  .icon-shuaxin:before {
    content: "\\e643";
  }
  
  .icon-zan:before {
    content: "\\e61f";
  }
  
  .icon-Pensyumaobi:before {
    content: "\\e708";
  }
  
  .icon-zhinanzhen:before {
    content: "\\e651";
  }
  
  .icon-shoujixiazai:before {
    content: "\\e608";
  }  
`
