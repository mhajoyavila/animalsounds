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
        buttonAnimation(buttons)
        playSound(buttons);
    })

}
    document.addEventListener("keydown", function (e) {
        buttonAnimation(e.key)
        playSound(e.key)
        })

        function playSound(key){
        switch (key) {
            case "c":
                var cat = new Audio ("music/cat.mp3");
                cat.play();
                break;
            case "d":
                var doggy = new Audio ("music/doggy.mp3");
                doggy.play();
                break;
            case "g":
                var giraffe = new Audio ("music/giraffe.mp3");
                giraffe.play();
                break;
            case "p":
                var piggy = new Audio ("music/piggy.mp3");
                piggy.play();
                break;
            default:
                console.log(key);
                break;
        }

    }
    function buttonAnimation(currentKey) {
        var activeButton = document.querySelector("." + currentKey);
        activeButton.classList.add("pressed");
        setTimeout(function() {
        activeButton.classList.remove("pressed");
        }, 100);
       }
