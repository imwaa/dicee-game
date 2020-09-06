function getRandomInt() {
    return Math.floor(Math.random() * Math.floor(6) + 1);
}

function RollDice(){
    var dice1num = getRandomInt();
    var dice2num = getRandomInt();
    document.getElementById('dice1').src = "images/dice" + dice1num + ".png";
    document.getElementById('dice2').src = "images/dice" + dice2num + ".png";
    if(dice1num > dice2num){
        // alert("PLAYER 1 WINS!");
        document.getElementById('text1').classList.add("textEffect");
        document.getElementById('text2').classList.remove("textEffect");
    }
    else if (dice1num < dice2num) {
        // alert("PLAYER 2 WINS!");
        document.getElementById('text2').classList.add("textEffect");
        document.getElementById('text1').classList.remove("textEffect");

    }
    else {
        document.getElementById('text1').classList.add("textEffect");
        document.getElementById('text2').classList.add("textEffect");
    }
}