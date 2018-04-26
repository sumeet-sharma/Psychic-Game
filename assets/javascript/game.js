    // Define alphabet variables that computer can pick from..
       var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
       
       // Set the initial global variables
       var wins = 0;
       var losses = 0;
       var guessesLeft = 9;

       // Array to hold the user guesses
       var guesses = [];

       // guesses by user
       var userGuess = null;

       // guess by pc
       var pcGuess = letters[Math.floor(Math.random(letters.length)*26)];
       console.log(pcGuess);

       
        document.onkeypress = function(event){
           userGuess = event.key;
           guesses.push(userGuess);
           document.getElementById("guessedWords").innerHTML = "Your guesses so far: "+guesses;

           if(userGuess == pcGuess && guessesLeft !== 0){
                wins++;
                document.getElementById("wins").innerHTML = "wins: "+wins; 
                alert("You Won!");
                losses = 0;
                guessesLeft = 9;
                guesses = [];
                document.getElementById("loses").innerHTML = "losses: "+losses;
                document.getElementById("tries").innerHTML = "Guesses left: "+guessesLeft;
                document.getElementById("guessedWords").innerHTML = "Your guesses so far: "+guesses;
                pcGuess = letters[Math.floor(Math.random(letters.length)*26)];
                console.log(pcGuess);
            }

            else if(userGuess !== pcGuess && guessesLeft !== 0){
                losses++;
                guessesLeft--;
                document.getElementById("loses").innerHTML = "losses: "+losses;
                document.getElementById("tries").innerHTML = "Guesses left: "+guessesLeft;
            }

            else{
                alert("GAME OVER!");

            }
       }
