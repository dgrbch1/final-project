// JavaScript File
$(document).ready(function() {
    $("body").keydown(function(event) {
        var player = $('#player');
        if (event.which===37){
            var left=player.position().left;
            left=left-10;
           left=Math.max(left,0)
            player.css('left',left);
        }else if (event.which===39){
            var left=player.position().left;
            left=left+10;
            left=Math.min(left,450)
            player.css('left',left);
        }else if (event.which===32){
            shootbullet(player);
        }

    });
    setInterval(tick,30 )
    
});

function shootbullet(player){
    var bullet=$('<span class="bullet">')
    bullet.css('top',player.position().top-50)
   bullet.css('left',player.position().left+25)
    
$('#space').append(bullet)    
 }
function bulletup(alien){
    $(".bullet").each( 
        function(){
            var top=$(this).position().top
            //console.log(top)
            top=top-10;
            top=Math.max(top,0)
            $(this).css('top',top)
            if(top===0){
                $(this).remove(); 
            }
                    bulletcollision();

        }
        
    )
    
    
}
function tick()
    {
        bulletup();
       alienmove();
    }
function aliendown(alien){
    var top=$(alien).position().top 
   // console.log(top)
    top=top+5
    top=Math.min(top,500)
    $(alien).css('top',top)
    if(top===500){
        $(alien).removeClass("falling");
    }
 }
function alienappear(){
//alien needs to known when to appear
        
}

function alienmove(){
    $(".alien").each(
        function(){
            var alien=$(this);
            if(alien.hasClass("falling")){  
                aliendown(alien)
            } else if(alien.hasClass("rising")) {
                alienup(alien)
            }else if(alien.hasClass("freeze")){}
            aliencollision(alien, $("#player"))
        })
    
}

function alienup(alien){
    $(alien).addClass("rising");
    var top=$(alien).position().top 
    console.log(top)
    top=top-5
    top=Math.max(top,0)
    $(alien).css('top',top)
    if(top===0){
        $(alien).addClass("falling");
    }
 }
function aliencollision(alien,player){
var rect = alien.position();
// console.log("alien ",rect.top,rect.left);    
 var bye = player.position();
  //  console.log("player ",
//    bye.top,bye.left);
  alienbottom=rect.top+alien.height();
  playertop=bye.top;
  if (alienbottom >= playertop) {
      alienstop(alien);
  }
    
}

function alienstop(alien){
    alert("you lose");
    alien.removeClass("falling")
     alien.removeClass("rising")
     alien.addClass("freeze");
     aliendisappear(alien);
}
function aliendisappear(alien){
     $(".alien").hide();
}
function bulletcollision(){
    var alien = $(".alien").first();
 var done= alien.position();
 console.log ("alien ",done.top,done.left);
 var helpmeteacher=$(".bullet").position();
 console.log("bullet", helpmeteacher.top,helpmeteacher.left ); 
}