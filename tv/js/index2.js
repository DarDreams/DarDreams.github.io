$(".tv_tnt").hide();
$(".tv_bitva").hide();
$(".tv_punch").hide();
$(".overlay").hide();

    
    $("li").click(function(){
        $(".tv_bitva").fadeOut();
        $(".tv_tnt")  .fadeOut();
        $(".tv_punch").fadeOut();
        //$(".tv_"+$(this).attr("class")).fadeIn();   
        $("li.tnt, li.bitva, li.punch").removeClass("animate__bounceOutLeft");
        $("li.tnt, li.bitva, li.punch").removeClass("animate__bounceInLeft");
        $("li.tnt, li.bitva, li.punch").removeClass("animate__animated");
        $(".tv_"+$(this).attr("class")).fadeIn();   
    });
        
 function HideMenuToggle() {
    //console.log($("li").attr("class"));
    if ( $("li").attr("class") == "tnt    animate__animated animate__bounceInLeft") {    
    $("li.tnt, li.bitva, li.punch").removeClass("animate__bounceInLeft");
    $("li.tnt, li.bitva, li.punch").addClass("animate__bounceOutLeft");
    
     //$(".overlay").hide();
    
        } else {       
            $("li.tnt, li.bitva, li.punch").removeClass("animate__bounceOutLeft");
            $("li.tnt, li.bitva, li.punch").addClass("animate__bounceInLeft");
            $(".overlay").show();
        }
      
    
 }
 
        
    $(".hamburger").click(function() {
       // $(".menu").fadeToggle();   
       
        HideMenuToggle();    
        
        //$(".overlay").show();
        //$(".overlay").toggle();
        
    
    

       if ($(".container").css("filter") == "blur(0px)") {
           $(".container").css("filter","blur(10px)")} else {
           $(".container").css("filter","blur(0px)")    
        }
    
        
    });

$(".overlay").click(function(){
    //$(".overlay").fadeOut();
    //HideMenuToggle();
    $(".container").css("filter","blur(0px)");
});
    

