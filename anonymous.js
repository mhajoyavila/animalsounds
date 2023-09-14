// var numberOfAnimalButtons = document.querySelectorAll(".animal").length;
// for (var i = 0; i < numberOfAnimalButtons; i++) {

// document.querySelectorAll(".cat")[i].addEventListener("click", function() {

// let cat = new Audio ("/music/cat.mp3");
// cat.play();
// });

// document.querySelectorAll(".doggy")[i].addEventListener("click", function() {

// let doggy = new Audio ("/music/doggy.mp3");
// doggy.play();
// });

// document.querySelectorAll(".piggy")[i].addEventListener("click", function() {

// let piggy = new Audio ("/music/piggy.mp3");
// piggy.play();
// });
        
// document.querySelectorAll(".giraffe")[i].addEventListener("click", function() {

// let giraffe = new Audio ("/music/giraffe.mp3");
// giraffe.play();
// });
// }


var numberOfAnimalButtons = document.querySelectorAll(".animal").length;

for (var i = 0; i <numberOfAnimalButtons; i++) {

    document.querySelectorAll(".animal")[i].addEventListener("click", function() {

        var buttons = this.innerText;

        switch (buttons) {
            case "cat":
                var cat = new Audio ("music/cat.mp3")
                cat.play();
                break;
            case "doggy":
                var doggy = new Audio ("music/doggy.mp3")
                doggy.play();
                break;
            case "giraffe":
                var giraffe = new Audio ("music/giraffe.mp3")
                giraffe.play();
                break;
            case "piggy":
                var piggy = new Audio ("music/piggy.mp3")
                piggy.play();
                break;
            default:
                break;
        }

});
}