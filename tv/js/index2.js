$(".tv_tnt").hide();
$(".tv_bitva").hide();
$(".tv_ataka").hide();

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
    $(".tv_tnt").hide();
    $(".tv_ataka").show();
    });

    $(".button").click(function() {
        //$(".button").hide();
        $(".menu").css({"left":"20px"});
        });
    
