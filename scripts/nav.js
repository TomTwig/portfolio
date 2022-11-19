const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');

const nav1 = document.getElementById('navItem-home');
const nav2 = document.getElementById('navItem-webdevelopment');
const nav3 = document.getElementById('navItem-gamedevelopment');
const nav4 = document.getElementById('navItem-3d');
const nav5 = document.getElementById('navItem-about');
const navElements = [nav1, nav2, nav3, nav4, nav5];
let isOverlayActive = false;


overlay.addEventListener("animationend",()=>{

  if(overlay.classList.contains("overlay-slide-left")){
    overlay.style.width = "0vw"
  }
 
});

function slideOut(){

  navElements.forEach((navElement, index)=>{
    navElement.classList.remove(`slide-in-${index+1}`);
    navElement.classList.add(`slide-out-${index+1}`);
  }

  )
  
}

function slideIn(){
  navElements.forEach((navElement, index)=>{
    navElement.classList.add(`slide-in-${index+1}`);
    navElement.classList.remove(`slide-out-${index+1}`);
  }
  )
}

function addClickEvents(){
  navElements.forEach((navElement) => {
    navElement.addEventListener('click',toggleNav);
  }
  )
}

function toggleNav(){
  overlay.style.width = "100vw";
  menuBars.classList.toggle('change');

  if (overlay.classList.contains('overlay-active')) {

    overlay.classList.add('overlay-slide-right');
    overlay.classList.remove('overlay-slide-left');
    slideIn();

    overlay.classList.remove('overlay-active');
  
    
  }else{
    
    overlay.classList.add('overlay-slide-left');
    overlay.classList.remove('overlay-slide-right');
    slideOut();
    overlay.classList.add('overlay-active');


    
  }
}

menuBars.addEventListener('click',toggleNav);
addClickEvents();


