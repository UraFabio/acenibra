let count = 1
let timer = 0 
document.getElementById("radio1").checked = true

setInterval(function(){
   timer++
   if(timer == 5){
    nextImage()
   }
}, 1000)

function nextImage(){
    timer = 0
    count++
    if(count>4){
        count = 1
    }

    document.getElementById("radio"+count).checked = true
}

function previousImage(){
    timer = 0
    count--
    if(count<1){
        count = 4
    }

    document.getElementById("radio"+count).checked = true
}

/* controlar as imagens manualmente */

document.addEventListener("DOMContentLoaded", function() {
    var touchstartX = 0;
    var touchendX = 0;
    targetElement = document.getElementById("slider")
  
    targetElement.addEventListener("touchstart", function(event) {
        touchstartX = event.changedTouches[0].screenX;

    }, false);
  
    targetElement.addEventListener("touchend", function(event) {
      touchendX = event.changedTouches[0].screenX;
      
      handleGesture();
    }, false);
  
    function handleGesture() {
        if(Math.abs(touchendX - touchstartX) > 100){

            if (touchendX > touchstartX) {
                // Deslizar da esquerda para a direita
                //console.log("Deslizou da esquerda para a direita.");
                // Execute a ação desejada aqui
               previousImage()
            }else{
                //console.log("Deslizou da direita para a esquerda.");
                nextImage();
            }
        }
    }
  });