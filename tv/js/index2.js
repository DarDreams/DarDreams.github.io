$(".tv_tnt").hide();
$(".tv_bitva").hide();
$(".tv_punch").hide();
$(".menu").hide();
$(".overlay").hide();


  
//   $(".button_mini").each(function(i){
//     $(this).on("click",function(){
//         $("#order .modal__descr").text($(".catalog-item__subtitle").eq(i).text())
//     });
//   });



$(".tnt").click(function() {
     $(".tv_bitva").fadeOut();
     $(".tv_tnt").show();
     $(".tv_punch").hide();
    });

    $(".bitva").click(function() {
        $(".tv_bitva").show();
        $(".tv_tnt").hide();
        $(".tv_punch").hide();
        });


    $(".punch").click(function() {
        $(".tv_bitva").hide();
        $(".tv_tnt").unload();
        $(".tv_punch").show();
        });

    $(".hamburger").click(function() {
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
    
