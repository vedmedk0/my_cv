function expand_all(){
    $('.collapse').each(function(){
        $(this).addClass('show');
    });
    $('.accordion-btn').each(function(){
        $(this).attr('aria-expanded','true');
    });
}
function collapse_all(){
    $('.collapse').each(function(){
        $(this).removeClass('show');
    });
    $('.accordion-btn').each(function(){
        $(this).attr('aria-expanded','false');
    });
}


$(document).ready(function(){

//    var tour = new Tour({
//      steps: [
//      {
//        element: "#accordion",
//        title: "Welcome to the my CV page",
//        content: "You can click this accordion items"
//      },
//      {
//        element: "#navbarNav",
//        title: "Other pages of my cv",
//        content: "You can switch pages here"
//      },
//      {
//        element: "#Print",
//        placement: "left",
//        title: "Print function",
//        content: "You can print or export to PDF my cv here"
//      },
//
//    ]});

//    tour.restart(); //TODO make tour

    // Initialize the tour
//    tour.init();

    collapse_all();
    var timeToFade = 300
    var currentState = 'aboutme'
    $('.page').hide();
    $('#'+currentState).show();


    // Start the tour
//    tour.start();

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
                expand_all();
                window.print();
                $('.page').hide();
                currentState = 'aboutme'
                collapse_all();
                $('#'+currentState).show();
            }

        }
    );

})