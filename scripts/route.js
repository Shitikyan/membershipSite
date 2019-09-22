$('nav li').click(function () {
    $.ajax({
        type: 'GET',
        url: 'includes/' + $(this).data('content') + '.html',
        dataType: 'html',
        success: function (response) {
            $('.canc').html(response);
        }
    });
});