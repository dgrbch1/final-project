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
function bulletup(){
    $(".bullet").each( 
        function(){
            var top=$(this).position().top
            console.log(top)
            top=top-10;
            top=Math.max(top,0)
            $(this).css('top',top)
            if(top===0){
                $(this).remove(); 
            }
        }
    )
}
function tick(
    )
    {
        bulletup();
       alienmove();
    }
function aliendown(alien){
    var top=$(alien).position().top 
    console.log(top)
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
            } else {
                alienup(alien)
            }
        })
    
}

function alienup(alien){
    var top=$(alien).position().top 
    console.log(top)
    top=top-5
    top=Math.max(top,0)
    $(alien).css('top',top)
    if(top===0){
        $(alien).addClass("falling");
    }
 }
