$(".tv_tnt").hide();
$(".tv_bitva").hide();
$(".tv_ataka").hide();
$(".menu").hide();

$(".tnt").click(function() {
    $(".tv_bitva").hide();
    $(".tv_ataka").hide();
    $(".tv_tnt").show();
});

$(".bitva").click(function() {
    $(".tv_bitva").show();
    $(".tv_tnt").hide();
    $(".tv_ataka").hide();
    });

 $(".ataka").click(function() {
    $(".tv_bitva").hide();
    $(".tv_tnt").unload();
    $(".tv_ataka").show();
    });

$(".hamburger").click(function() {
   // $(".button").show();
    $(".menu").toggle();
    });
    
