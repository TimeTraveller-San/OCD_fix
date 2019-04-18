// ==UserScript==
// @name         Remove whatsapp chats
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description Remove facebook feed and whatsapp stories
// @author       You
// @match        https://web.whatsapp.com/*
// @require http://code.jquery.com/jquery-1.12.4.min.js
// @require  https://gist.github.com/raw/2625891/waitForKeyElements.js
// @grant    GM_addStyle
// ==/UserScript==



waitForKeyElements ("div#main", actionFunction);

function actionFunction () {
    $('div._2wP_Y:has(span._1wjpf[title="chat name 1"])').remove();
    $('div._2wP_Y:has(span._1wjpf[title="chat name 2"])').remove();
    $('div._2wP_Y:has(span._1wjpf[title="chat name 3"])').remove();
}

