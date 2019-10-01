// ==UserScript==
// @name        Taskade
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Time Traveller
// @match        https://www.taskade.com/*
// @require       http://code.jquery.com/jquery-1.12.4.min.js
// @grant        none
// @run-at      document-idle
// ==/UserScript==



$(document).ready(function() {
    $(".bg").css("background-image","url(\"https://i.imgur.com/tI0hzPX.jpg\")");
});
