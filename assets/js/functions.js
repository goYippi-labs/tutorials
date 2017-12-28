var $=jQuery;

$.fn.loadBlog = function(url,items) {
    //Credit: http://stackoverflow.com/questions/10943544/how-to-parse-an-rss-feed-using-javascript
    items = items || 3;

    this.html("<p class='ie-hidden'>Querying goYippi Blog for " + url + "...</p>");

    var target = this;

    $.ajax(url, {
        accepts:{
            xml:"application/rss+xml"
        },
        dataType:"xml",
        success:function(data) {
            var i = 0;
            var list = $('<dl/>');
            target.empty().append(list);
            $(data).find("item").each(function () {
                i++;
                if (i <= items) {
                    list.append('<dt><a href="'+ $(this).find("link").text() +'">' + $(this).find("title").text() + '</a></dt>');
                    list.append('<dd>' + $(this).find("description").text() + '</dd>');
                }
            });
        },
        error:function() {
            alert('Error');
        }
    });
}

$(document).ready(function($) {
	$('html').removeClass('no-js').addClass('js-active');

    $("#goyippi-blog").each(function() {
        $(this).loadBlog($(this).data('url'),$(this).data('items'));
    });

    //Toogle Mobile Nav
	$('.navi-button').click(function() {
		$('.navigation').toggleClass('navi-open');
	});
});
