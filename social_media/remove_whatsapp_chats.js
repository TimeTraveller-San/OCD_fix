// ==UserScript==
// @name         Web Whatsapp Remove Chats
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Whatsapp doesn't allow to archive chats forever, but this script does.
// @author       TimeTraveller-San
// @match        https://web.whatsapp.com/
// @require      http://code.jquery.com/jquery-3.4.1.min.js
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// @grant        GM_addStyle
// ==/UserScript==


var evil = "Name_of_the_contact/group_to_remove"

waitForKeyElements ("span._1hI5g[title=$evil]", getRidofEmWhatsappSucks);

function getRidofEmWhatsappSucks (jNode) {
    //I am not very proud of this code, but again, I know no JS
    //at all, this is just hacked together from numerous sources

    var slides = document.getElementsByClassName("_1hI5g");
    for (var i = 0; i < slides.length; i++) {
        var title = slides.item(i).title ;
        if (title == evil) {
            slides.item(i).parentNode.parentNode.parentNode.parentNode.remove();
            console.log("Removed Evil: " + evil);
        }
    }
}