//An object that controls the game
const gameController = (() => {
   let turnsGoneBy = 0;
   let playerTurn = 1;

   // array that stores the current plays 
   let checkForWinnerArray = [".", ".", ".", ".", ".", ".", ".", ".", "."];

   //creating buttons for each box in the gameboard grid
   function gameBoxButton (){
      let thisDataID = this.getAttribute("data-id");

      //if else to assign player squares
      if (this.textContent == ""){
         if (playerTurn == 1){
            this.textContent = user1.getxoro();

            checkForWinnerArray[thisDataID] = user1.getxoro();
            console.log("array test", checkForWinnerArray)

            ++turnsGoneBy;
            console.log(user1.getName(), "changed data-id:", thisDataID, "to x.")
            console.log("Number of turns gone by:", turnsGoneBy)
            playerTurn = 2;
            
         }

         else if (playerTurn == 2){
            this.textContent = user2.getxoro();

            checkForWinnerArray[thisDataID] = user2.getxoro();
            console.log("array test", checkForWinnerArray)
            ++turnsGoneBy;
            console.log(user2.getName(), "changed data-id:", thisDataID, "to o.")
            console.log("Number of turns gone by:", turnsGoneBy)
            playerTurn = 1;
         }
      }

      // statement to stop the same square from being clicked more than once
      else if (this.textContent == "x" || this.textContent == "o"){
         console.log("The player cannot choose a square that has already been changed")
      }

      //function that anounces a winner and resets the gameboard
      function gameOver(winner){

         winner = winner;
         console.log("winner is", winner)
         let i = 0;
         checkForWinnerArray.forEach(element => {
            
            document.getElementById(i).textContent = "";
            checkForWinnerArray[i]= "";
            turnsGoneBy = 0;
            playerTurn = 1;
            ++i
         })
         i = 0;
      }

      // Player1 wins
      if (checkForWinnerArray[0] == "X" && checkForWinnerArray[1] == "X" && checkForWinnerArray[2] == "X"
         || checkForWinnerArray[3] == "X" && checkForWinnerArray[4] == "X" && checkForWinnerArray[5] == "X"
         || checkForWinnerArray[6] == "X" && checkForWinnerArray[7] == "X" && checkForWinnerArray[8] == "X"
         || checkForWinnerArray[0] == "X" && checkForWinnerArray[3] == "X" && checkForWinnerArray[6] == "X"
         || checkForWinnerArray[1] == "X" && checkForWinnerArray[4] == "X" && checkForWinnerArray[7] == "X"
         || checkForWinnerArray[2] == "X" && checkForWinnerArray[5] == "X" && checkForWinnerArray[8] == "X"
         || checkForWinnerArray[0] == "X" && checkForWinnerArray[4] == "X" && checkForWinnerArray[8] == "X"
         || checkForWinnerArray[2] == "X" && checkForWinnerArray[4] == "X" && checkForWinnerArray[6] == "X"){

            gameOver(user1.getName());
      }
      
      // Player 2 wins
      if (checkForWinnerArray[0] == "O" && checkForWinnerArray[1] == "O" && checkForWinnerArray[2] == "O"
         || checkForWinnerArray[3] == "O" && checkForWinnerArray[4] == "O" && checkForWinnerArray[5] == "O"
         || checkForWinnerArray[6] == "O" && checkForWinnerArray[7] == "O" && checkForWinnerArray[8] == "O"
         || checkForWinnerArray[0] == "O" && checkForWinnerArray[3] == "O" && checkForWinnerArray[6] == "O"
         || checkForWinnerArray[1] == "O" && checkForWinnerArray[4] == "O" && checkForWinnerArray[7] == "O"
         || checkForWinnerArray[2] == "O" && checkForWinnerArray[5] == "O" && checkForWinnerArray[8] == "O"
         || checkForWinnerArray[0] == "O" && checkForWinnerArray[4] == "O" && checkForWinnerArray[8] == "O"
         || checkForWinnerArray[2] == "O" && checkForWinnerArray[4] == "O" && checkForWinnerArray[6] == "O"){

            gameOver(user2.getName());
      }
      
      if(turnsGoneBy == 9){
         console.log("This game was a tie")
         gameOver("No one!")
      }
   }

   return {gameBoxButton}
   
})();

//creating a player factory. xoro = x or o
const player = (name, xoro) => {
   const getName = () => name;
   const getxoro = () => xoro;

   return{
      getName, getxoro
   }
};

//initializing the two players
const user1 = player('Player 1', 'X');
const user2 = player('Player 2', 'O');

//An object that creates and displays the game's board
const gameboard = (() => {
   'use strict';
   //Creates the gameboard
   // let scoreCheckArray = new Array(9);
   let _gameBoardArray = (['1', '2', '3', '4', '5', '6', '7', '8', '9']);
   let gameBoard = document.createElement("div");
   
   gameBoard.setAttribute('id', "gameBoard");   
   document.getElementById("gameContainer").appendChild(gameBoard);
   console.log(_gameBoardArray);

   //Creates the grid on the Game Board. Gameboxes are the individual squares in the grid
   _gameBoardArray.forEach(element => {
      let gameBox = document.createElement("div");
      gameBox.setAttribute('id', _gameBoardArray.indexOf(element));
      gameBox.dataset.id = _gameBoardArray.indexOf(element);
      gameBox.classList.add("gameBoxes");
      document.getElementById("gameBoard").appendChild(gameBox);
      gameBox.addEventListener("click", gameController.gameBoxButton);
   });

})();