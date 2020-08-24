$(document) .ready(function () {
    $(".dropdown-toggle").hover(function() {
        $(".dropdown-toggle").dropdown('show')
    }, function () {
        $(".dropdown-toggle").dropdown('hide')
    })
})