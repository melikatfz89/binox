
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
    document.querySelector('.background-btnscroll').style.background = `conic-gradient(#e63972 0deg, #e63972 ${angle}deg, transparent ${angle}deg)`;
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
        headerElem.style.backgroundColor='#CFD6C1';
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

//mousemove
const circleMouse=document.querySelector('.circle')
const circlespanMouse=document.querySelector('.span-circle')


document.addEventListener('mousemove' ,(event)=>{
    const X=event.clientX+window.scrollX;
    const Y=event.clientY+window.scrollY;

    circlespanMouse.style.left=(X+20)+ 'px'
    circlespanMouse.style.top=(Y+20) +'px'


    circleMouse.style.left=X+ 'px'
    circleMouse.style.top=Y +'px'

    circleMouse.classList.add('classCircle')
    circlespanMouse.classList.add('classCirclespan')
     
    //تغییر رنگ المان با تغییر بک گراند روشن و تیره
    // const backgroundColor=getComputedStyle(document.elementFromPoint(X, Y)).backgroundColor
    // const rgb=backgroundColor.match(/\d+/g);
    // if(rgb){
    //     const [r,g,b]=rgb.map(Number)
    //     const brightness = (r * 0.299 + g * 0.587 + b * 0.114);
    //     if(brightness>100){
    //         circlespanMouse.style.backgroundColor='black'
    //         circleMouse.style.borderColor ='black'
    //     }
    //     else{
    //         circlespanMouse.style.backgroundColor='white'
    //         circleMouse.style.borderColor ='white'
    //     }
    // }
    // circleMouse.style.transform=`translate(${X}px,${Y}px)`
    // circle.style.transform=`translate(${X}px,${Y}px)`
});

// counter
let divElem=document.getElementById('div-counter');
let showNumber = 0;
let x = setInterval(function counter(){
    divElem.innerHTML=showNumber;
    showNumber++
    if(showNumber>=3001){
        clearInterval(x);
  }
},10)


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


