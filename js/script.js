/*ans page tabs*/

$(function () {
    $("#ans-tabs").responsiveTabs({
        animation: 'slide',
    });
});
/*main content tab*/
$(function () {
    $("#main-content-container").responsiveTabs({
        animation: 'slide',
    });
});

/*counter up effect*/
$(function () {
    $(".counter").counterUp({
        delay: 15,
        time: 4500
    });
});