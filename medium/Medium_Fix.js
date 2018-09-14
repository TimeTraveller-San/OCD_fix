// ==UserScript==
// @name        Medium Fix
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  not signing up now
// @author       You
// @match        https://medium.com/*
// @grant        none
// @require http://code.jquery.com/jquery-1.12.4.min.js

// ==/UserScript==


// i should probably stop using jquery but i am too dependent on it as of now .-.
//NOT SIGNING UP FOR MEDIUM AS OF NOW NO NO NO also, INCREASE READABILITY!!!!!!

$( document ).ready(function() {
     $(document).find(".u-fixed").hide();
     $(document).find(".u-bottom0").hide();
     $(document).find(".u-sizeFullWidth").hide();
});
