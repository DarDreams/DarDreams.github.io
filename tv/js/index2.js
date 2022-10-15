$(".tv_tnt").hide();
$(".tv_bitva").hide();
$(".tv_punch").hide();
$(".menu").hide();
$(".overlay").hide();

    
    $("li").click(function(){
        //alert(".tv_"+$(this).attr("class"));
        $(".tv_bitva").fadeOut();
        $(".tv_tnt")  .fadeOut();
        $(".tv_punch").fadeOut();
        $(".tv_"+$(this).attr("class")).fadeIn();   
    });
        
 
        
    $(".hamburger").click(function() {
        
        $(".menu").fadeToggle();       
        $(".overlay").fadeToggle();
    
    

       if ($(".container").css("filter") == "blur(0px)") {
          $(".container").css("filter","blur(10px)")} else {
          $(".container").css("filter","blur(0px)")    
        }
    

    });

$(".overlay").click(function(){
    $(".overlay").fadeToggle();
    $(".menu").fadeToggle();
    $(".container").css("filter","blur(0px)");
});
    

