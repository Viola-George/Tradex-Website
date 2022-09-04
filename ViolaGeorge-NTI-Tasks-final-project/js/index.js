
$(document).ready(function(){

    
$(window).scroll(function () {  
    let wScroll=  $(window).scrollTop();
    if(wScroll >  featuresOffset-50)
    {
     $(".btnUp").fadeIn(500);
    }
    else
    {
     $(".btnUp").fadeOut(500);
 
    }
     
 })
 
 $(".btnUp").click(function(){
 
     $("html,body").animate( {scrollTop:'0'}, 1000);
 })
 
 
 $(".nav a").click(function(){
 
     let aHref =  $(this).attr("href");//#service#menu
 
     let sectionOffset  = $(aHref).offset().top;
 
     $("html,body").animate( {scrollTop:sectionOffset}, 1000);
 
 });
 
(function()
{

    
let colorBoxs = $(".color-box");

colorBoxs.eq(0).css("backgroundColor","orange");
colorBoxs.eq(1).css("backgroundColor","teal");
colorBoxs.eq(2).css("backgroundColor","tomato");
colorBoxs.eq(3).css("backgroundColor","black");
colorBoxs.eq(4).css("backgroundColor","yellow");
colorBoxs.eq(5).css("backgroundColor","purple");
colorBoxs.eq(6).css("backgroundColor","red");
colorBoxs.eq(7).css("backgroundColor","blue");
colorBoxs.eq(8).css("backgroundColor","blue");


let optionsBoxWidth  = $(".options-box").outerWidth();//
$("#options").css("left" , `-${optionsBoxWidth}`);


colorBoxs.click(function(){
    let color = $(this).css("backgroundColor");
    $("body").css("color" , color);

   
})


$("#options i").click(function(){

    if( $("#options").css("left") == "0px" )
    {
        $("#options").animate({left:`-${optionsBoxWidth}`} , 1000);
    }
    else
    {
        $("#options").animate({left:`0px`} , 1000);
    }

})

})();

})