var MODEL = (function() {
    //update the page content on this file
    function _navToPage(pageName) {
        $.get(`pages/${pageName}/${pageName}.html`, function(data) {
            $("#app").html(data);
        });
    }
    return {
        navToPage: _navToPage
    }
})();