$(document).ready(function () {
    $('.image-wrapper img').click(function() {

        $('.load-image img').remove();
        $('.load-title h3').html('');
        $('.load-text p').html('');

        var i;
        var count = $(this).data('cont').text.length;

        for (i = 0; i<count; i++) {
            $('.load-text p').append( $(this).data('cont').text[i]);
        }

        var tit = $(this).data("title");
        $('.load-title').append('<h3>'+ tit +'</h3>');
        var program = $(this).data('program');
        $(".load-image").append('<img src="icon/' + program + '.png" alt="' + program + '" title="' + program + '"/>');
    });
});
