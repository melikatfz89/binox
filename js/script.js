
function scrollBorder(){
    window.scrollTo(0,0);
}


window.addEventListener('scroll', function() {
    // height page
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

    // scrolling cont
    const scrollTop = window.scrollY;
     
    // Calculate the angle relative to the scroll rate
    const angle = (scrollTop / scrollHeight) * 360;
 
    // Change conic-gradient based on angle
    document.querySelector('.background-btnscroll').style.background = `conic-gradient(#8DCF9B 0deg, #8DCF9B ${angle}deg, transparent ${angle}deg)`;
});

// scroll-threesectiongreen
let secOne=document.getElementById("first-scroll");
let secTwo=document.getElementById("second-scroll");
let secThree=document.getElementById("third-scroll");
function scrollcolordiv(){
    let sectionOne=document.documentElement.scrollTop;
    if (sectionOne>180 && sectionOne<360){
        secOne.classList.add("backSection");
    }
    else if (sectionOne>360 && sectionOne<430){
        secTwo.classList.add("backSection2");
    }
    else if(sectionOne>430 && sectionOne<500){
        secThree.classList.add("backSection3");
    }
    else{
        secOne.style.position=""
        secTwo.style.position=""
        secThree.style.position=""   
    }
}

// slider
const swiper = new Swiper('.swiper', {
    loop:true,
    autoplay:true,
    navigation:{
    nextEl:'.swiper-button-next',
    prevEl:'.swiper-button-prev',
    },
    pagination:{
        el:'.swiper-pagination',
        type:'fraction',
        clickable:true
    },
    // mousewheel: true,
    speed:3200,
});



// counter
jQuery(document).ready(function ($){
    $('.counter').counterUp({
       delay: 10,
       time: 3000
       });
  });