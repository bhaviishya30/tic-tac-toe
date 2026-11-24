let boxes = document.getElementsByClassName("box");
let turn = "X";
let count = 0;
let gameOver = false;

function play(i) {

    if(gameOver == true) {
        return;
    }

    if(boxes[i].innerHTML == "") {

        boxes[i].innerHTML = turn;

        count++;

        checkWinner();

        if(gameOver == false) {

            if(turn == "X") {
                turn = "O";
            }
            else {
                turn = "X";
            }

            document.getElementById("turn").innerHTML =
            "Player " + turn + " Turn";
        }

    }

    else {
        alert("It is already filled!");
    }

}


function checkWinner() {

    let a = boxes[0].innerHTML;
    let b = boxes[1].innerHTML;
    let c = boxes[2].innerHTML;

    if(a != "" && a == b && b == c ||

       boxes[3].innerHTML != "" &&
       boxes[3].innerHTML == boxes[4].innerHTML &&
       boxes[4].innerHTML == boxes[5].innerHTML ||

       boxes[6].innerHTML != "" &&
       boxes[6].innerHTML == boxes[7].innerHTML &&
       boxes[7].innerHTML == boxes[8].innerHTML ||

       boxes[0].innerHTML != "" &&
       boxes[0].innerHTML == boxes[3].innerHTML &&
       boxes[3].innerHTML == boxes[6].innerHTML ||

       boxes[1].innerHTML != "" &&
       boxes[1].innerHTML == boxes[4].innerHTML &&
       boxes[4].innerHTML == boxes[7].innerHTML ||

       boxes[2].innerHTML != "" &&
       boxes[2].innerHTML == boxes[5].innerHTML &&
       boxes[5].innerHTML == boxes[8].innerHTML ||

       boxes[0].innerHTML != "" &&
       boxes[0].innerHTML == boxes[4].innerHTML &&
       boxes[4].innerHTML == boxes[8].innerHTML ||

       boxes[2].innerHTML != "" &&
       boxes[2].innerHTML == boxes[4].innerHTML &&
       boxes[4].innerHTML == boxes[6].innerHTML) {

        document.getElementById("result").innerHTML =
        "Player " + turn + " Wins!";

        gameOver = true;

    }

    else if(count == 9) {

        document.getElementById("result").innerHTML =
        "Match Draw!";

        gameOver = true;

    }

}


function restart() {

    location.reload();

}
