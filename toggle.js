var button = document.querySelector("button");
// var isRed = false;
// button.addEventListener("click", function(){
    //if red, make it white
    // if(isRed){
    //     document.body.style.backgroundColor = 'white'; 
    // }
    // //else make it red
    
    // else {
        
    //     document.body.style.backgroundColor = 'red'; 
    // }
    // isRed = !isRed; // makes isRed inverted.
// });
button.addEventListener("click", function(){
    
    document.body.classList.toggle('red');

});


