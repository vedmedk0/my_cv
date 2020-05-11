$(document).ready(function(){
    var timeToFade = 400
    var currentState = 'aboutme'
    $('.page').hide();
    $('#'+currentState).show();

    //navbar hrefs
    $('.nav-link, .inline-link').click(
        function(event){
            event.preventDefault();
            var currentPage = $('#' + currentState)
            currentPage.fadeTo(timeToFade)
            setTimeout(timeToFade)
            currentPage.removeAttr('style');
            currentPage.hide();
            currentState = $(this).attr('data-page')
            if (currentState!=="print"){
                $('#'+ currentState).fadeIn(timeToFade);
            } else //pressed "print" button
            {
                $('.page').show();
                window.print()
                $('.page').hide();
                currentState = 'aboutme'
                $('#'+currentState).show();
            }

        }
    );

})