window.onscroll = function (e) {
    if (document.body.scrollTop < 1552 || document.documentElement.scrollTop < 1552){
  
      document.getElementById("sonic").style.backgroundPosition = '-173px -6px';

    }
  
    if (document.body.scrollTop > 1552 && document.body.scrollTop < 3104 || 
        document.documentElement.scrollTop > 1552 && document.documentElement.scrollTop < 3104 ) {
  
      console.log('scrolled here ', document.body.scrollTop, document.documentElement.scrollTop);
  
      document.getElementById("sonic").style.backgroundPosition = '-144px -8px';

    } 
  
    if (document.body.scrollTop > 3104 && document.body.scrollTop < 4656 ||
      document.documentElement.scrollTop > 3104 && document.documentElement.scrollTop < 4656) {
  
      console.log('scrolled here ', document.body.scrollTop, document.documentElement.scrollTop);
  
      document.getElementById("sonic").style.backgroundPosition = '-48px -4px';

    }
  
    if (document.body.scrollTop > 4656 && document.body.scrollTop < 6208 ||
      document.documentElement.scrollTop > 4656 && document.documentElement.scrollTop < 6208) {
  
      console.log('scrolled here ', document.body.scrollTop, document.documentElement.scrollTop);
  
      document.getElementById("sonic").style.backgroundPosition = '-25px -5px';

    }
  
    if (document.body.scrollTop > 6208 && document.body.scrollTop < 7760 ||
      document.documentElement.scrollTop > 6208 && document.documentElement.scrollTop < 7760) {
  
      console.log('scrolled here ', document.body.scrollTop, document.documentElement.scrollTop);
  
      document.getElementById("sonic").style.backgroundPosition = '-1px -4px';
    
    }
  
  } 