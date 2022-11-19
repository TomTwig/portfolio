var slideIndex = document.getElementsByClassName("asset__picture__image").length-1;
var reverse =true;


setInterval(()=>{



  

let x = document.getElementsByClassName("asset__picture__image");
  if(reverse){

    x[slideIndex].classList.add("fadeOut");
    x[slideIndex].classList.remove("fadeIn");
    slideIndex--;

   

  
  }else{
 


    x[slideIndex].classList.add("fadeIn");
    x[slideIndex].classList.remove("fadeOut");
    slideIndex++;
    

  
  }

  if(slideIndex<0){
    slideIndex =0;
    reverse=false;
  }

  if(slideIndex > x.length-1){
    slideIndex = x.length-1;
    reverse=true;
  }



  
},3000);



  
