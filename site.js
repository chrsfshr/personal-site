// Cache selectors outside callback for performance. 
$(document).ready(function(){
   	var $window = $(window),
   	$stickyEl = $('#the-sticky-div');
});

       // elTop = $stickyEl.offset().top;

   // $window.scroll(function() {
   //      $stickyEl.toggleClass('sticky', $window.scrollTop() > elTop);
   //  });


// Show hide images

$(document).ready(function(){
    $(".show1").click(function(){
        $(".rw").toggle();
    });
    $(".show2").click(function(){
        $(".quote").toggle();
    });
    $(".show3").click(function(){
        $(".airquotes").toggle();
    });
    $(".show4").click(function(){
        $(".harmony").toggle();
    });
    $(".show5").click(function(){
        $(".gravity").toggle();
    });
    $(".show6").click(function(){
        $(".twitter").toggle();
    });


});