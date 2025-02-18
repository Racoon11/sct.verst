$(document).ready(function() {
    $(document).keydown(function(event) {
        var keyCode = event.keyCode || event.which;
        var image = $("#myimg");
        var position = image.position();

        switch (keyCode) {
            case 37: // Left arrow key
                image.animate({ left: position.left - 100 }, "fast");
                break;
            case 39: // Right arrow key
                image.animate({ left: position.left + 100 }, "fast");
                break;
        }
    });
});