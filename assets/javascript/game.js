
          // Creates an array that lists out all of the options (Rock, Paper, or Scissors).
          var games  = [
          "risk", 
          "monopoly", 
          "sorry" ,
          "scrabble"
          ];

          //counters
          //var randomWord = "";
          var allowedGuesses = 0;
          var remainingGuesses = 0;


          var counterLosses = 0;
          var counterWins = 0;

          //var counterValid = 0;
          
          
          var counterGuesses = 0;
          var blanks = 0;


          //arrays to be used to hold values
          var invalidGuesses = [];
          var validGuesses = [];
          var wordLetters =[];
          var wordSpaces = [];
          var randomWord = [];
          

  // Start the game function
  function beganGame(){ 
  

  invalidGuesses = [];
  validGuesses = [];

  //generate random word from the Games array
   randomWord = games[Math.floor(Math.random() * games.length)];
  

   
   allowedGuesses = (randomWord.length * 2);
   wordLetters = randomWord.split("");
   remainingGuesses = allowedGuesses;
   blanks = wordLetters.length;

    console.log("randomword " + randomWord);
    console.log("Remaining " + remainingGuesses);
    console.log("allowed " +  allowedGuesses);
    console.log("wordletters "  + wordLetters);
    console.log("blanks " + blanks);


   
  

    var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"]; 



    for(var i = 0; i < (blanks); i++){
      validGuesses.push("_");

    }
  
    
    console.log("valid_guesses:" + validGuesses);
    console.log("wordLetter " + wordLetters);
    document.getElementById("blank-word").innerHTML = validGuesses.join(" "); 
    document.getElementById("allowed-guess").innerHTML = remainingGuesses;     
      
  }

 function validateLetters(letter){
    

    var foundLetter = false;

    for(var i = 0; i < blanks; i++){
        if(randomWord[i] === letter){
            foundLetter = true;
        

        }
      }

    if(foundLetter){
        for(i = 0; i < blanks; i++){
            if(randomWord[i] === letter){
            validGuesses[i] = letter;       

        }

        }
      }
     
    else{
        remainingGuesses--;
        invalidGuesses.push(letter)
    }

}           
                         
          
          
  function roundComplete(){
    
  //Push values to appropriate DIV
    document.getElementById("blank-word").innerHTML = validGuesses.join(" ");
    document.getElementById("allowed-guess").innerHTML = remainingGuesses;
    document.getElementById("invalid-guesses").innerHTML = invalidGuesses.join(" ");


    
    //Compare the letters pressed with the randomly generated number
    if(wordLetters.join(" ") === validGuesses.join(" ")){
        counterWins++;
        document.getElementById("blank-word").innerHTML = validGuesses.join(" ");
        document.getElementById('wins').innerHTML = counterWins++;
        alert("You won!! " + "The word is " + randomWord);
        beganGame();

    }
    else if(remainingGuesses === 0){
        document.getElementById('losses').innerHTML  = counterLosses ++;
        document.getElementById('invalid-guesses').innerHTML = "";
        alert("Sorry, You Lost. Try it Again");        
        beganGame();
    }


}  
//invoke beganGame function
beganGame();
document.onkeyup = function(event){
    
    var letterPressed = String.fromCharCode(event.keyCode).toLowerCase();
    
    validateLetters(letterPressed);
    roundComplete();

}  
//Reset the game
      $("#clear").on("click", function() {
        //clear variables
          var letterPressed  = " ";
         allowedGuesses = 0;
         remainingGuesses = 0;
         counterLosses = 0;
         counterWins = 0;
         counterGuesses = 0;
         blanks = 0;

         invalidGuesses = [];
         validGuesses = [];
         wordLetters =[];          
         wordSpaces = [];
         randomWord = [];

        beganGame();

       
        $("#display").empty();
      });
                
        
