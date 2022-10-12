$(".tv_tnt").hide();
$(".tv_bitva").hide();
$(".tv_punch").hide();
$(".menu").hide();
$(".overlay").hide();

    
    $(".container").each(function () {
        
        $(this).click(function(){
            alert(this);
           // $(this).fadeIn();
           // $(".container").not($(this)).fadeOut();
        })
        
       
        
    });


    // $(".tnt").click(function() {
    //     $(".tv_bitva").fadeOut();
    //     $(".tv_tnt")  .fadeIn();
    //     $(".tv_punch").fadeOut();
    // });

    // $(".bitva").click(function() {
    //     $(".tv_bitva").fadeIn();
    //     $(".tv_tnt")  .fadeOut();
    //     $(".tv_punch").fadeOut();
    // });


    // $(".punch").click(function() {
    //     $(".tv_bitva").fadeOut();
    //     $(".tv_tnt")  .fadeOut();
    //     $(".tv_punch").fadeIn();
    // });
        
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
    
// $(".overlay").mousemove(function(){
//     $(".menu").attr("opacity","1");
// });
