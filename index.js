for (let index = 0; index < document.querySelectorAll(".drum").length; index++) {

  document.querySelectorAll(".drum")[index].addEventListener("click", function(){
    var buttonInnerHTML = this.innerHTML;
    sound(buttonInnerHTML);
    clickAnimation(buttonInnerHTML);
  })


}

document.addEventListener("keypress",function(event){
  sound(event.key);
  clickAnimation(event.key);
});

function sound(key) {

  switch (key) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;

    default:
      console.log(buttonInnerHTML);
  }
}

function clickAnimation(value){
  var activeButton = document.querySelector("." + value);
  activeButton.classList.add("pressed");

  setTimeout(function(){activeButton.classList.remove("pressed");},100);
}
