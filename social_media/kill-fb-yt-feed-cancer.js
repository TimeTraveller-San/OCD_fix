// ==UserScript==
// @name         Kill fb-yt feed cancer
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Remove facebook, youtubem whatsapp feed and stories
// @author       TimeTraveller
// @match        https://www.facebook.com/*
// @match        https://web.whatsapp.com/*
// @match        https://www.youtube.com/
// @require      http://code.jquery.com/jquery-1.12.4.min.js
// @grant        none
// ==/UserScript==

(function() {
    $(document).find("._4-u2 _1-ib _2tyk _20os _4-u8").hide();
    $(document).find("#u_ps_0_1_0").hide();
    $(document).find("#stream_pagelet").hide();
    $(document).find("#fb_stories_card_root").hide();
    $(document).find(".ytd-browse").hide();
    $(document).find("._5pcb _dp7 _4j3f").hide();
    $(document).find(".status-v3-list-panel-header").hide();
    $(document).find(".ytd-browse").hide();
})();
