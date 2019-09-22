var currentContent;

$('nav li').click(function () {
    var content = $(this).data('content');
    if (content && currentContent === content)
        return;
    
    currentContent = content;

    $("nav li").removeClass("active");
    $("nav a").removeClass("active");
    $(this).addClass("active");
    $.ajax({
        type: 'GET',
        url: 'includes/' + content + '.html',
        dataType: 'html',
        success: function (response) {
            $('.canc').html(response);
        }
    });
});