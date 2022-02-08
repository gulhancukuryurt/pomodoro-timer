var minutes = 25;
var second = "00";
var count = 1; 

var click = new Audio("click.mp3");
var bell = new Audio("bell.mp3");

function template(){
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('second').innerHTML = second;
}

function start(){
   click.play();
   
   

   let sonuc = count++;

   document.getElementById('counting').innerHTML = `${sonuc}. Pomodoro`;


   minutes = 24;
   second = 59;

   document.getElementById('minutes').innerHTML = minutes;
   document.getElementById('second').innerHTML = second;

   var minutes_interval = setInterval(minutesTimer, 60000);
   var seconds_interval = setInterval(secondTimer, 1000);

   function minutesTimer(){
       minutes = minutes-1;
       document.getElementById('minutes').innerHTML = minutes;
   }

   

   function secondTimer(){
       second = second - 1; 
       document.getElementById('second').innerHTML = second;

       if(second <=0){
         if(minutes <=0){
               clearInterval(minutes_interval);
               clearInterval(seconds_interval);
               

               document.getElementById('message').innerHTML = 'Session Completed! Take a break.'
               bell.play();

           }
        second = 60;
       
        }
    }

}

function breakTime(){
    click.play();
    document.getElementById('message').innerHTML = 'Break Time!'

    minutes = 5; 
    second = "00";

   document.getElementById('minutes').innerHTML = minutes;
   document.getElementById('second').innerHTML = second;

   second= 59;
   var minutes_interval = setInterval(minutesTimer, 60000);
   var seconds_interval = setInterval(secondTimer, 1000);

   function minutesTimer(){
    minutes = minutes-1;
    document.getElementById('minutes').innerHTML = minutes; 
}
    function secondTimer(){
       
       second = second - 1; 
       
        document.getElementById('second').innerHTML = second;
       
       

       

       if(second <=0){
         if(minutes <=0){
               clearInterval(minutes_interval);
               clearInterval(seconds_interval);
               

               document.getElementById('message').innerHTML = 'Break Completed!'
               bell.play();

           }
        second = 60;
       
        }
    }

}







    
