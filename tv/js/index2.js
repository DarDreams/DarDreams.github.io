$(".tv_tnt").hide();
$(".tv_bitva").hide();
$(".tv_punch").hide();
$(".menu").hide();
$(".overlay").hide();

$(this).click(function() {
    $(".tv_bitva").hide();
    $(".tv_punch").hide();
    $(this).show();
});

$(".bitva").click(function() {
    $(".tv_bitva").show();
    $(".tv_tnt").hide();
    $(".tv_punch").hide();
    });

 $(".ataka").click(function() {
    $(".tv_bitva").hide();
    $(".tv_tnt").unload();
    $(".tv_punch").show();
    });

$(".hamburger").click(function() {
   // $(".button").show();
    $(".menu").toggle();
    $(".overlay").toggle();
    
    

       if ($(".container").css("filter") == "blur(0px)") {
        $(".container").css("filter","blur(10px)")} else {
        $(".container").css("filter","blur(0px)")    
        }
    

    });

$(".overlay").click(function(){
    $(".overlay").toggle();
    $(".menu").toggle();
    $(".container").css("filter","blur(0px)");
});
    
