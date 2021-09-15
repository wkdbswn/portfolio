//////////////// 디자인 포트폴리오 안의 nav 관련 스크립트 ////////////////

$(document).ready(function(){
    var btn = $("nav li a");
    
    btn.click(function(){
        var btn_num = $(this).parent("li").index();
        // 클릭한 a가 몇번째 li 안에 있는건지 알아온다.
        
        btn.removeClass("on");
        $(this).addClass("on");
    });
    
    $(".thumb").isotope({
        itemSelector: '.element-item',
        layoutMode: 'fitRows',
        stagger: 30,

      });

      var btn1 = $("nav li:nth-child(1)");
      var btn2 = $("nav li:nth-child(2)");
      var btn3 = $("nav li:nth-child(3)");
      var btn4 = $("nav li:nth-child(4)");
      var btn5 = $("nav li:nth-child(5)");

      btn1.click(function(){
        $(".thumb").isotope({ filter: '.all'});
      });
      btn2.click(function(){
        $(".thumb").isotope({ filter: '.leaflet'});
      });
      btn3.click(function(){
        $(".thumb").isotope({ filter: '.ad'});
      });
      btn4.click(function(){
        $(".thumb").isotope({ filter: '.brochure'});
      });
      btn5.click(function(){
        $(".thumb").isotope({ filter: '.others'});
      });
        
});