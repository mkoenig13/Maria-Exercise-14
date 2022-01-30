
$("document").ready(function(){

$("#container2").click(function(){
        $("#container2").animate({
          opacity: '0',
          height: '300px',
          width: '100%',},2000,function(){
          });
        
        })


    $(".menu2").children().click(function(){
            console.log("click")
            $(this).toggleClass("menuitems")
            $(this).toggleClass("menuitems2")
    })


$(".menu4").children().click(function(){
  
  $(this).toggleClass("menuitems4")
  $(this).toggleClass("menuitems3")
})


$("#scroll").click(function(){
          scrollTo(0,7500)
      })



      $("#wide").click(function(){
        $("#wide").animate({
          opacity: '0',
          height: '100px',
          width: '700%',},2000,function(){
          });
        
        })

  
        $("#wide2").click(function(){
          $("#wide2").animate({
            opacity: '0',
            height: '100px',
            width: '-5000%',},2000,function(){
            });
          
          })
        


$( ".menu3" ).children().draggable();


$("#fadein").click(function(){
    $("#fadein").animate({
      opacity: '100',
      height: '1500px',
      width: '100%',},2000,function(){
      });
    
    })
    $("#scroll2").click(function(){
      scrollTo(0,0)
  })

    });
