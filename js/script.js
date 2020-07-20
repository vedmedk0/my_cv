$(document).ready(function(){
    var timeToFade = 300
    var currentState = 'aboutme'
    $('.page').hide();
    $('#'+currentState).show();

    //navbar hrefs
    $('.nav-link, .inline-link').click(
        function(event){
            event.preventDefault();
            var currentPage = $('#' + currentState)
            currentState = $(this).attr('data-page')
            if (currentState!=="print"){
                currentPage.fadeTo(timeToFade,0,function(){
                    $(window).scrollTop(0);
                    currentPage.removeAttr('style');
                    currentPage.hide();
                    $('#'+ currentState).fadeIn(timeToFade);
                })
            } else //pressed "print" button
            {
                $('.page').show();
                window.print();
                $('.page').hide();
                currentState = 'aboutme'
                $('#'+currentState).show();
            }

        }
    );

})