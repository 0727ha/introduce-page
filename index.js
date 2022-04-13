"open-in-browser.default":"chrome"
//마우스 올리면 랜덤 색 변경
var randomnum = 0;
 $("#color").mouseover(function(){
     var interval = setInterval(function(){

        randomnum = Math.random() * 0xffffff;
        randomnum = parseInt(randomnum);
        randomnum = randomnum.toString(16);

        $("#color").css("background","#"+randomnum);

     },50);
     $("color").mouseout(function(){
         clearInterval(interval);
     
     });
 });


 