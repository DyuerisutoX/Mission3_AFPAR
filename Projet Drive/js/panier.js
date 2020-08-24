$(document) .ready(function () {
    $(".dropdown-toggle").hover(function() {
        $(".dropdown-toggle").dropdown('show')
    })
    $(".dropdown-menu").mouseout(function() {
        $(".dropdown-toggle").dropdown('hide')
    })
})
