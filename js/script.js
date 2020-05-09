var a = 5;


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
            } else
            {
                $('.page').show();
                window.print()
                $('.page').hide();
                $('#aboutme').show();
            }

        }
    );

})
console.log(a);