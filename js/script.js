var a = 5;


$(document).ready(function(){
    $('.page').hide();
    $('#aboutme').show();

    $('.nav-link').click(
        function(event){
            event.preventDefault();
            $('.page').hide();
            $('#'+$(this).attr('data-page')).show();
        }
    );

})
console.log(a);