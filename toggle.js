var button = document.querySelector("button");
var isRed = false;
button.addEventListener("click", function(){
    //if white, make it red

    if(isRed){
        document.body.style.backgroundColor = 'white';
        
    }
    //else make it white
    
    else {
        
        document.body.style.backgroundColor = 'red';

        
    }
    isRed = !isRed;

    
});

