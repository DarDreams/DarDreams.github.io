$(".tv_tnt").hide();
$(".tv_bitva").hide();
$(".tv_punch").hide();
$(".overlay").hide();

//document.querySelectorAll('.tnt>a:after').setAttribute("width","60px");
    
    $("li").click(function(){
        $(".tv_bitva").fadeOut();
        $(".tv_tnt")  .fadeOut();
        $(".tv_punch").fadeOut();
        //$(".tv_"+$(this).attr("class")).fadeIn();   
       $("li.tnt, li.bitva, li.punch").removeClass("animate__bounceOutLeft");
       $("li.tnt, li.bitva, li.punch").removeClass("animate__bounceInLeft");
       $("li.tnt, li.bitva, li.punch").removeClass("animate__animated");
        $(".tv_"+$(this).attr("class")).fadeIn(); 
        $("li.tnt, li.bitva, li.punch").addClass("animate__animated");
        console.clear();  
        console.log($(".tnt>a").css("width"));
    });
        
 function HideMenuToggle() {
    //console.log($("li").attr("class"));
    if ( $("li").attr("class") == "tnt animate__animated animate__bounceInLeft") {    
    $("li.tnt, li.bitva, li.punch").removeClass("animate__bounceInLeft");
    $("li.tnt, li.bitva, li.punch").addClass("animate__bounceOutLeft");
     $(".overlay").fadeOut(1000);
     $(".container").css("filter","blur(0px)");
     
        } else {       
            $("li.tnt, li.bitva, li.punch").removeClass("animate__bounceOutLeft");
            $("li.tnt, li.bitva, li.punch").addClass("animate__bounceInLeft");
            $(".overlay").fadeIn();
            $(".container").css("filter","blur(10px)");
            
            
        }
       // $(".hamburger").show();
 }
 
        
    $(".hamburger").click(function() {

        HideMenuToggle();    

    });

$(".overlay").click(function(){
    $("li.tnt, li.bitva, li.punch").removeClass("animate__bounceInLeft");
    $("li.tnt, li.bitva, li.punch").addClass("animate__bounceOutLeft");
    $(".overlay").fadeOut(1000);
    $(".container").css("filter","blur(0px)");
    //console.log("dd")
});
