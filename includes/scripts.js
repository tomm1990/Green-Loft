var vid = document.getElementById("bgvid");
var pauseButton = document.querySelector("#polina button");

$(document).ready(function() {
var image = $('#mainIndex');
    //while(true){
//    image.fadeOut(1000, 
//                  function () {
//        image.css("background", "url(../images/Fruits2.jpg) no-repeat");
//        image.fadeIn(1000);
//    });
//    image.fadeOut(1000, 
//                  function () {
//        image.css("background", "url(../images/Fruits3.jpg) no-repeat");
//        image.fadeIn(1000);
//    });
//     image.fadeOut(1000, 
//                  function () {
//        image.css("background", "url(../images/Fruits4.jpg) no-repeat");
//        image.fadeIn(1000);
//    });
//        image.fadeOut(1000, 
//                  function () {
//        image.css("background", "url(../images/Fruits5.jpg) no-repeat");
//        image.fadeIn(1000);
//    });
    //}
});

function vidFade() {
  vid.classList.add("stopfade");
}


vid.addEventListener('ended', function() {
    // only functional if "loop" is removed 
    vid.pause();
    // to capture IE10
    vidFade();
}); 


pauseButton.addEventListener("click", function() {
  vid.classList.toggle("stopfade");
  if (vid.paused) {
    vid.play();
    pauseButton.innerHTML = "Pause";
  } else {
    vid.pause();
    pauseButton.innerHTML = "Paused";
  }
});


