function myFunction1() {
  var ladyresponse;
  var answer1 =  document.getElementById('uinput1').value;

     if ((answer1 == '1413')  || (answer1 == '1 413') || (answer1 == '+1413'))  
     
     {
        ladyresponse = "Yes, that is CORRECT!";
    
    


  
  } else {
  
  ladyresponse = "NO, the chronicler checked it,<br> and it is not correct.";
  }
  //THIS IS WHAT IT CHANGES
  document.getElementById("demo1").innerHTML = ladyresponse;
}


function myFunction2() {
  var ladyresponse2;
  var answer2 =  document.getElementById('uinput2').value;

     if ((answer2 == '650')  || (answer2 == '6 5 0'))  
     
     {
      ladyresponse2 = "Yes, the chronicler says that's right!";
    
    


  
  } else {
  
  ladyresponse2 = "Nope. The chronicler just farted blue gas.<br> That means the answer is wrong.";
  }
  //THIS IS WHAT IT CHANGES
  document.getElementById("demo2").innerHTML = ladyresponse2;
}






function myFunction3() {
  var ladyresponse3;
  var answer3 =  document.getElementById('uinput3').value;

     if ((answer3 == '5803')  || (answer3 == '5 8 0 3') || (answer3 == '58 03') )  
     
     {
      ladyresponse3 = "Yes, the chronicler started humming.<br> That means you got the numbers right!";
    
    


  
  } else {
  
  ladyresponse3 = "Nope. The Chronicler rejected that answer.";
  }
  //THIS IS WHAT IT CHANGES
  document.getElementById("demo3").innerHTML = ladyresponse3;
}