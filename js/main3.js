//////////////// 헤더 안의 li 관련 스크립트 ////////////////

$(document).ready(function()
    {   
        var $menuItem = $("#header_in li") // 메뉴 버튼을 변수로
        
        $menuItem.click(function(){
            $("#header_in li").removeClass("on");
            $(this).addClass("on");

            var el = $(this).find("a").attr("href"); // 클릭한 a의 속성 href의 속성값을 변수에 넣는다.

            var $el = $(el);
            // var headerH = $("header").height(); // header의 세로 길이를 변수에 넣는다.
            //console.log($el);
            scrollTo($el);
        });

        function scrollTo(element){
            var offsetTop = element.offset().top; // 엘리먼트의 top에서부터의 위치값
            console.log("offset의 값은?" + offsetTop);
            var scrollTotal = offsetTop; // 엘리먼트의 위치값에서 hh를 빼준다.

            $("html, body").animate({scrollTop:scrollTotal}, 1000, "swing");
        }
    });
