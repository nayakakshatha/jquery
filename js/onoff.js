$(function(){
    var flag= true;
    $("#onoroff").click(function(){
        if(flag){
        var imgname = "images/off.jpg"
      flag= false;
        }else{
            var imgname = "images/on.jpg" 
            flag = true;
        }

  
        $("img").attr("src",imgname);
    });
    /* show hide toggle example*/
    $("#btnhide").click(function(){
        $("#randomtext").hide();
    });
    $("#btnshow").click(function(){
        $("#randomtext").show();
    });
    $("#btntoggle").click(function(){
        $("#randomtext").toggle();
    });
    /* end example*/
     $("#fadein").click(function(){
        $("#box").fadeIn();
    });
     $("#fadeout").click(function(){
        $("#box").fadeOut();
    });
    
});