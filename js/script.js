$(document).ready(function(){
    $('.page').hide();
    $('#aboutme').show();

    //navbar hrefs
    $('.nav-link, .inline-link').click(
        function(event){
            event.preventDefault();
            $('.page').hide();
            var page_id = $(this).attr('data-page')
            if (page_id!=="print"){
                $('#'+ page_id).show();
            } else //pressed "print" button
            {
                $('.page').show();
                window.print()
                $('.page').hide();
                $('#aboutme').show();
            }

        }
    );

})