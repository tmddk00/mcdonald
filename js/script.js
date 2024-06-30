// window.onload = function(){}

window.addEventListener('load', function(){
    // gnb메뉴
    const header = document.querySelector('.header');
    const hMenu = document.querySelector('.hMenu');
    const topSearch = document.querySelector('.topSearch');
    const srch = document.querySelector('.topSearch .srch');
    const close = document.querySelector('.topSearch .close');
    const aside = document.querySelector('.aside');
    const btnTop = document.querySelector('.btnTop');

    // hMenu에 마우스를 올리면(마우스가 들어가면) 헤더에 open클래스 적용
    hMenu.addEventListener('mouseenter', function(){
        header.classList.add('open');
    })

    // header영역에서 마우스가 떠나면 헤더에 open클래스 제거
    header.addEventListener('mouseleave', function(){
        header.classList.remove('open');

    })

    // srch를 클릭하면 탑서치에 open클래스 적용
    srch.addEventListener('click', function(){
        topSearch.classList.add('open');
    })

    // close를 클릭하면 탑서치에 open클래스 제거
    close.addEventListener('click', function(){
        topSearch.classList.remove('open');
    })

    // 얼마나 스크롤 됐는지 값을 구해서 변수에 담는다
    //window가 스크롤되면
    window.addEventListener('scroll', function(){
        const docScrollTop = document.querySelector('html').scrollTop

        if ( docScrollTop > 100 ){ //docScrollTop이 스크롤 100이상일때
            window.style.display = 'block'
            
        }else{
            window.style.display = 'none'
        }

        //btnTop을 클릭하면 맨 위로 올라가기
        btnTop.addEventListener('click', function(){
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
            })
        })
        
    })

});

var swiper = new Swiper('.mainSlide', {
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
   },
   pagination : {   // 페이저 버튼 사용자 설정
        el : '.pagination',  // 페이저 버튼을 담을 태그 설정
       clickable : true,  // 버튼 클릭 여부

   },
  
});