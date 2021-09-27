//retrieve the user input on this file
function route() {
    //retrieve the page from the URL and clean it up into a page ID
    let hashTag = window.location.hash;
    let pageId = hashTag.replace("#/", "");

    //function that lets the MODEL change the page content
    if(pageId == "") {
        //if no page was in the URL, nav to home
        MODEL.navToPage("home");
    }else {
        //otherwise nav to the specified page
        MODEL.navToPage(pageId);
    }
}

function initListeners() {
    //run the route function when the site first opens and whenever there is a change in the URL
    $(window).on("hashchange", route);
    route();
}

$(document).ready(function() {
    initListeners();
});