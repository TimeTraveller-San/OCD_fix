// ==UserScript==
// @name         Remove disqus
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  yeeeeeeeeeeeeeeeeeeee
// @author       Time Traveller
// @match        http://readberserk.com/*
// @require http://code.jquery.com/jquery-1.12.4.min.js
// @grant        none
// @run-at      document-idle
// ==/UserScript==


$(document).ready(function() {
      $(document).find("#disqus_thread").hide();
      $(".single-chapter").css("background-color","black");
      $(".chapter-hero").css("background-color","black");
      $(".zoom__image").css("background-color","gray !important");
});




