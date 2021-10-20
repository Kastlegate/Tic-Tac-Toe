const gameboard = (() => {
   'use strict';
   //Creates the gameboard
   let _gameBoardArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
   let gameBoard = document.createElement("div");
   gameBoard.setAttribute('id', "gameBoard");   
   document.getElementById("gameContainer").appendChild(gameBoard);
   console.log(_gameBoardArray);

   //creating buttons
   function gameBoxButton (){
      let thisDataID = this.getAttribute("data-id");
      
      //if else to assign player squares
      if (this.textContent == ""){
         this.textContent = "x";
         console.log("Player changed data-id:", thisDataID, "to x.")
      }
      else if (this.textContent == "x"){
         console.log("The player cannot choose a square that they have already changed")
      }
      else if(this.textContent == "o"){
         console.log("The player cannot choose a square that was changed by the other player")
      }    
      
      //for statement to run through gameBoxes and check for winner
      //for
   }

   

   //Creates the grid on the Game Board
   _gameBoardArray.forEach(element => {
      let gameBox = document.createElement("div");
      gameBox.setAttribute('id', _gameBoardArray.indexOf(element));
      gameBox.dataset.id = _gameBoardArray.indexOf(element);
      gameBox.classList.add("gameBoxes");
      
      let gameBoxText = document.createElement("div");
      gameBoxText.textContent = "";
      
      //testing o square
      if(_gameBoardArray.indexOf(element) == 4){
         gameBoxText.textContent = "o";
      }

      document.getElementById("gameBoard").appendChild(gameBox);
      document.getElementById(_gameBoardArray.indexOf(element)).appendChild(gameBoxText);
      gameBox.addEventListener("click", gameBoxButton);


   });

   //creating a player factory
   const player = (name) => {
      const getName = () => name;

      return{
         getName
      }
   };

   //initializing the two players
   const user = player('player1');
   const computer = player('player2');


})();