$(".tv_tnt").hide();
$(".tv_bitva").hide();
$(".tv_punch").hide();
//$(".menu").hide();
$(".overlay").hide();

    
    $("li").click(function(){
        //alert(".tv_"+$(this).attr("class"));
        $(".tv_bitva").fadeOut();
        $(".tv_tnt")  .fadeOut();
        $(".tv_punch").fadeOut();
        $(".tv_"+$(this).attr("class")).fadeIn();   
    });
        
 function HideMenuToggle() {
    
    if ( $(".overlay").css("display") == "block") {  
    $("li.tnt, li.bitva, li.punch").removeClass("animate__bounceInLeft");
    $("li.tnt, li.bitva, li.punch").addClass("animate__bounceOutLeft");
        } else {
            $("li.tnt, li.bitva, li.punch").removeClass("animate__bounceOutLeft");
            $("li.tnt, li.bitva, li.punch").addClass("animate__bounceInLeft");
        }
                //    alert($(".overlay").is("visible"));
 }
 
        
    $(".hamburger").click(function() {
       // $(".menu").fadeToggle();   
        HideMenuToggle();    
        $(".overlay").fadeToggle();
    
    

       if ($(".container").css("filter") == "blur(0px)") {
           $(".container").css("filter","blur(10px)")} else {
           $(".container").css("filter","blur(0px)")    
        }
    

    });

$(".overlay").click(function(){
    $(".overlay").fadeToggle();
    //$(".menu").fadeToggle();
    $(".container").css("filter","blur(0px)");
});
    

