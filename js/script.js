
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
let headerElem=document.querySelector('.box-header');
let navElem=document.querySelector('.navItem')
function scrollcolordiv(){
    let sectionOne=document.documentElement.scrollTop;
    if (sectionOne>0&& sectionOne<360){
        secOne.classList.add("backSection");
        headerElem.style.position='sticky';
        headerElem.style.top='0';
        headerElem.style.backgroundColor='#beecc8';
        navElem.style.color='black';

    }
    else if (sectionOne>360 && sectionOne<430){
        secTwo.classList.add("backSection2");
    }
    else if(sectionOne>430 && sectionOne<500){
        secThree.classList.add("backSection3");
    }
    else if (sectionOne<50){
        headerElem.style.position='';
        headerElem.style.top='';
        headerElem.style.backgroundColor='';
        navElem.style.color='';
    }
    else{
        secOne.style.position=""
        secTwo.style.position=""
        secThree.style.position=""   
    }
}
const boxmenuElem=document.querySelector('.open-close')
const divBox=document.querySelector('.box-menu')
const flagdiv=true

function showboxMenu(){
    divBox.classList.toggle('classlistOne');
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