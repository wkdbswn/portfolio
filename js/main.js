//////////////// 왼쪽 사이드 리모트 버튼 관련 스크립트 ////////////////

$(document).ready(function()
    {
        var wHeight = $(window).height(); // 열린 창의 세로 길이를 구해서 변수에 넣는다.
        console.log(wHeight);

        $(".Hfix").css("height", wHeight); // 위에서 구한 세로 길이로 height값 설정

        // 각 .Hfix의 top부터의 거리를 잰다.
        var pos = []; // 변수 pos는 배열이다.

        for(var i=1; i<8; i++){
            pos.push($("#section"+i).offset().top);
        }
        // for (초기값; 조건식; 증감식){실행}
        // 배열.push(값) : 값을 배열에 집어 넣는다
        console.log(pos);

        $(window).scroll(function(){
            var scrollH = $(window).scrollTop(); // 스크롤된 거리를 구해준다.
            $(".s_num").text(scrollH);


        // 스크롤 시 리모트 버튼 색상 변화
            if(scrollH < pos[1]){
                $("#remote a").removeClass("on");
                $("#remote a").eq(0).addClass("on");
            }
            else if(scrollH >= pos[1] && scrollH < pos[2]){
                $("#remote a").removeClass("on");
                $("#remote a").eq(1).addClass("on");
            }
            else if(scrollH >= pos[2] && scrollH < pos[3]){
                $("#remote a").removeClass("on");
                $("#remote a").eq(2).addClass("on");
            }
            else if(scrollH >= pos[3] && scrollH < pos[4]){
                $("#remote a").removeClass("on");
                $("#remote a").eq(3).addClass("on");
            }
            else if(scrollH >= pos[4] && scrollH < pos[5]){
                $("#remote a").removeClass("on");
                $("#remote a").eq(4).addClass("on");
            }
            else if(scrollH >= pos[5] && scrollH < pos[6]){
                $("#remote a").removeClass("on");
                $("#remote a").eq(5).addClass("on");
            }
            else{
                $("#remote a").removeClass("on");
                $("#remote a").eq(6).addClass("on");
            }
        });


        // 리모트 버튼을 누르면 부드럽게 움직이게
        $("#remote a").on("click", function(e){
            e.preventDefault();
            
            var target = $(this).attr("href"); // 클릭한 #(해쉬) 값을 변수에 넣는다.
            console.log(target);

            $("html, body").animate({scrollTop:$(target).offset().top}, 500);
        });
    });
