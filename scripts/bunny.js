function appear() {
    var appear = document.querySelector(".bunnyPreview__bunny");
    
      var windowHeight = window.innerHeight;
      var elementTop = appear.getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        appear.classList.add("appearIn");
        
      } else {
        
        appear.classList.remove("appearIn");
      }
    
  }

  window.addEventListener("scroll", appear);

  appear();