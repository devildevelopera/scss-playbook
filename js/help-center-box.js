$(() => {
    var div = $("#help-center-box-draggable").draggable({
        containment: "parent",
        drag: () => {
            $('h3').text('Left: ' + div.offset().left + ' - Top: ' + div.offset().top);
        }
    });

    $(".hdr-menu ul li:first-child img").on('click', () => {
        if ($('#help-center-box-draggable').is(":visible")) {
            $("#help-center-box-draggable").hide();
            $("#modal-overlay").hide();
        } else {
            $("#help-center-box-draggable").show();
            $("#modal-overlay").show();
        }
    });

    $("#help-center-box-draggable >div:first-child div:last-child img").on('click', () => {
        $("#help-center-box-draggable").hide();
        $("#modal-overlay").hide();
    });
});