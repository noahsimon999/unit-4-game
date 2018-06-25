$(document).ready(function() {

    // set up game

    var randomNum = Math.floor(Math.random() * (120 - 19) ) + 19;
    var totalNum = 0;
    var crys1 = Math.floor(Math.random() * (12 - 1) ) + 1;
    var crys2 = Math.floor(Math.random() * (12 - 1) ) + 1;
    var crys3 = Math.floor(Math.random() * (12 - 1) ) + 1;
    var crys4 = Math.floor(Math.random() * (12 - 1) ) + 1;
    var wins = 0;
    var losses = 0;
    var coin = new Audio("assets/soundEffects/coin.wav");
    var winner = new Audio("assets/soundEffects/winnerCoins.wav");
    var loser = new Audio("assets/soundEffects/loserCoins.wav");
    $( "#randomNumber" ).html( "<h1>Target Price: $" + randomNum + "</h1>" );
    $( "#totalScore" ).html( "<h1>Current Price: $" + totalNum + "</h1>" );
    $( "#wins" ).html( "<h2>Wins: " + wins + "</h2>" );
    $( "#losses" ).html( "<h2>Losses: " + losses + "</h2>" );

    // reset

    function reset() {
        randomNum = Math.floor(Math.random() * (120 - 19) ) + 19;
        totalNum = 0;
        crys1 = Math.floor(Math.random() * (12 - 1) ) + 1;
        crys2 = Math.floor(Math.random() * (12 - 1) ) + 1;
        crys3 = Math.floor(Math.random() * (12 - 1) ) + 1;
        crys4 = Math.floor(Math.random() * (12 - 1) ) + 1;
        $( "#randomNumber" ).html( "<h1>Target Price: $" + randomNum + "</h1>" );
        $( "#totalScore" ).html( "<h1>Current Price: $" + totalNum + "</h1>" );
        $( "#wins" ).html( "<h2>Wins: " + wins + "</h2>" );
        $( "#losses" ).html( "<h2>Losses: " + losses + "</h2>" );
    }

    // generate random number between 19-120
    // give crystals a value between 1-12
    // count when crystals are clicked and display score
    // win/ loss conditions
    // reset

    $("#crystal1").on("click", function() {
        totalNum = totalNum + crys1;
        coin.play();
        $("#crystal1").addClass(".swing");
        $( "#totalScore" ).html( "<h1>Current Price: $" + totalNum + "</h1>" );
        if (totalNum === randomNum) {
            winner.play();
            wins ++;
            $( "#wins" ).html( "<h2>Wins: " + wins + "</h2>" );
            setTimeout(reset, 100);
        } else if (totalNum > randomNum) {
            loser.play();
            losses++;
            $( "#losses" ).html( "<h2>Losses: " + losses + "</h2>" );
            setTimeout(reset, 100);
        }
    });
    $("#crystal2").on("click", function() {
        totalNum = totalNum + crys2;
        coin.play();
        $( "#totalScore" ).html( "<h1>Current Price: $" + totalNum + "</h1>" );
        if (totalNum === randomNum) {
            winner.play();
            wins ++;
            $( "#wins" ).html( "<h2>Wins: " + wins + "</h2>" );
            setTimeout(reset, 100);
        } else if (totalNum > randomNum) {
            loser.play();
            losses++;
            $( "#losses" ).html( "<h2>Losses: " + losses + "</h2>" );
            setTimeout(reset, 100);
        }
    });
    $("#crystal3").on("click", function() {
        totalNum = totalNum + crys3;
        coin.play();
        $( "#totalScore" ).html( "<h1>Current Price: $" + totalNum + "</h1>" );
        if (totalNum === randomNum) {
            winner.play();
            wins ++;
            $( "#wins" ).html( "<h2>Wins: " + wins + "</h2>" );
            setTimeout(reset, 100);
        } else if (totalNum > randomNum) {
            loser.play();
            losses++;
            $( "#losses" ).html( "<h2>Losses: " + losses + "</h2>" );
            setTimeout(reset, 100);
        }
    });
    $("#crystal4").on("click", function() {
        totalNum = totalNum + crys4;
        coin.play();
        $( "#totalScore" ).html( "<h1>Current Price: $" + totalNum + "</h1>" );
        if (totalNum === randomNum) {
            winner.play();
            wins ++;
            $( "#wins" ).html( "<h2>Wins: " + wins + "</h2>" );
            setTimeout(reset, 100);
        } else if (totalNum > randomNum) {
            loser.play();
            losses++;
            $( "#losses" ).html( "<h2>Losses: " + losses + "</h2>" );
            setTimeout(reset, 100);
        }
    });
})