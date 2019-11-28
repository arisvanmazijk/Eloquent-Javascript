function min(a, b) {
    if (a < b) return a;
    return b;
   }
   
   console.log(min(0, 10));
   console.log(min(0, -10));
   
   function isEven(num) {
    if (num == 0) {
      return true;
    } else if (num == 1) {
      return false; 
    } else if ( num < 0) {
      return isEven(num *= -2);
    } else {
     return isEven(num - 2); 
    } 
   }
   
   function countBs(text) {
     let Bs = 0;
      for(let count = 0; count < text.length; count++) {
       if (text[count] == "B") {
         Bs++;
       }
     }
     return Bs;
   }
   
   
   function countChar(text,letter) {
     let char = 0;
      for(let count = 0; count < text.length; count++) {
       if (text[count] == letter) {
         char++;
       }
     }
     return char;  
   }