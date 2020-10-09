let pickMeButton = false;
let counter = 0;
const questions = [" ما هو أول وعد من الله للبشر؟",
"",
"",
];






function toggle(){
    if(pickMeButton) {
        document.getElementById("question").style.display = "none";
        document.getElementById("intro").children[0].style.display ="block";
    } else{
        document.getElementById("intro").children[0].style.display ="none";
        document.getElementById("question").style.display = "block";
        document.getElementById("question").textContent = questions[counter];
        counter++;
    }
    pickMeButton = !pickMeButton;
}


