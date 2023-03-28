console.clear();
$(".tv_tnt").hide();
$(".tv_bitva").hide();
$(".tv_punch").hide();
$(".overlay").hide();

//test
    if (($("body").width() > $(".tv").width()) || ($("body").height()>$(".tv").height())) 
    {
        let topTV = $("body").height()-$(".tv").height()+15;
        $(".tv").css("top",topTV);
    }
    {
    let leftTV = $("body").width()-$(".tv").width();
    $(".tv").css("left",leftTV);
}


//console.clear();
// console.log("TOP = " + topTV + "px");
// console.log("BODY_HEGIHT = " + $("body").height() + "-" + $(".tv").height());


//document.querySelectorAll('.tnt>a:after').setAttribute("width","60px");

    $("li").click(function(){
        $(".tv_bitva").hide();
        $(".tv_tnt")  .hide();
        $(".tv_punch").hide();
        //$(".tv_"+$(this).attr("class")).fadeIn();   
       $("li.tnt, li.bitva, li.punch").removeClass("animate__bounceOutLeft");
       $("li.tnt, li.bitva, li.punch").removeClass("animate__bounceInLeft");
       $("li.tnt, li.bitva, li.punch").removeClass("animate__animated");
        $(".tv_"+$(this).attr("class")).fadeIn(1000); 
        $("li.tnt, li.bitva, li.punch").addClass("animate__animated");
        console.log($(".tnt>a").css("width"));
    });
    
 function HideMenuToggle() {
    //console.log($("li").attr("class"));
    if ( $("li").attr("class") == "tnt animate__animated animate__bounceInLeft") {    
        $("li.tnt, li.bitva, li.punch").removeClass("animate__bounceInLeft");
        $("li.tnt, li.bitva, li.punch").addClass("animate__bounceOutLeft");
        $(".overlay").fadeOut(1000);
        //$(".hamburger").css("z-index","5");
        $(".tv").css("filter","blur(0px)");
     } else {       
        $("li.tnt, li.bitva, li.punch").removeClass("animate__bounceOutLeft");
        $("li.tnt, li.bitva, li.punch").addClass("animate__bounceInLeft");
        $(".overlay").fadeIn();
       // $(".hamburger").css("z-index","-1");
        $(".tv").css("filter","blur(10px)");           
        }
         //$(".hamburger").show();
 }
    
    $(".hamburger").click(function() {
        HideMenuToggle();    
    });

$(".overlay").click(function(){
    $("li.tnt, li.bitva, li.punch").removeClass("animate__bounceInLeft");
    $("li.tnt, li.bitva, li.punch").addClass("animate__bounceOutLeft");
    $(".overlay").fadeOut(1000);
    $(".container").css("filter","blur(0px)");
    $(".tv").css("filter","blur(0px)");
    console.log("dd!")
});
console.log("GAVNO PABOTAET!");