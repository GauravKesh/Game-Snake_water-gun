function P1Func(Player1,Player2,score1,score2){

    if (Player1 == "s" && Player2 == "s"){
        score1 += 1;
        score2 += 1;
    }

    else if (Player1 == "s" && Player2 == "w"){
        score1 += 1;
    }

    else if (Player1 == "s" && Player2 == "g"){

        score2 += 1;
    }
    else if (Player1 == "w" && Player2 == "w"){

        score1 += 1;
        score2 += 1;

    }
    else if (Player1 == "w" && Player2 == "s"){

        score2 += 1;

    }
    else if (Player1 == "w" && Player2 == "g"){

        score1 += 1;
    }
    else if (Player1 == "g" && Player2 == "g"){

        score1 += 1;
        score2 += 1;

    }
    else if (Player1 == "g" && Player2 == "s"){
        score1 += 1;
    }

    else if (Player1 == "g" && Player2 == "w"){
        score2 += 1;
    }

    else {
        alert("wrong input \n\t\t TRY AGAIN");
    }

    return [score1,score2];

}

alert("Hey Guys welcome to my first game !!\n\t \n it's 2 player game .\nThis is a snake water gun  game  .\n In last total score will be  shown\n READ THE INSTRUCTIONS CAREFULLY  \n you will have 10 match \n ");
var NoOfMatch = parseInt(("How many times do you want to play this game \n{MINIMUM MATCH-5}:-"));
var UserConfirm = confirm("Proceed\n\t********GOOD LUCK*********");
var i =0;
var p1arr = []
var p2arr = []
var score1 = 0; // score of player 1
var score2 = 0; // score of player 2

while(i=<NoOfMatch){
    var Player1 = prompt(
        `PLAYER1 ==>> Choose "s" for SNAKE, "w" for WATER, or "g" for GUN: (Match ${i + 1})`
      ).toLowerCase();
    
      var Player2 = prompt(
        `Player2 ==>> Choose "s" for SNAKE, "w" for WATER, or "g" for GUN: (Match ${i + 1})`
      ).toLowerCase();

      p1arr.push(Player1);
      p2arr.push(Player2);
    
      // Update scores
      var scores = P1Func(Player1, Player2, score1, score2);
      score1 = scores[0];
      score2 = scores[1];
    
      console.log(p1arr, "\n\t", p2arr);
    
      i++;
}

if(score1 > score2) {
    alert("player 1 is winner and total score is\t " + score1);

}

else if(score1 < score2) {
    alert("player 2 is winner and total score is\t " + score2);
}

else{
    alert("Match tie \n player1 and player 2 have same score\n\n" + "score of player1 :-"+score1+"\n score of player2 is:--"+score2);
}
