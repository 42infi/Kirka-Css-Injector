// ==UserScript==
// @name         Kirka Css Injector
// @author       ©2022 infi
// @version      1.1
// @match        *://kirka.io/*
// @run-at       document-start
// @icon         https://www.google.com/s2/favicons?domain=kirka.io
// ==/UserScript==

//               REPLACE THE LINK IN THE " " WITH YOUR OWN CSS LINK
const cssLink = "https://cdn.discordapp.com/attachments/738010330780926004/955078958918033438/Titans.css";

document.addEventListener("DOMContentLoaded", () => {

    let cssLinkElem = document.createElement("link");
    cssLinkElem.href = cssLink;
    cssLinkElem.rel = "stylesheet";

    document.head.append(cssLinkElem);

});