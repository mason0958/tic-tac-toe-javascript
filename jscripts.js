var whosTurn = 1; //Init who's turn it is

var someoneWon = false;

var computerPlayer = true;

var winningCombos = [
	['A1', 'A2', 'A3'], //1
	['A1', 'B2', 'C3'], //2
	['A1', 'B1', 'C1'], //3
	['B1', 'B2', 'B3'], //4
	['C1', 'B2', 'A3'], //5
	['C1', 'C2', 'C3'], //6
	['A3', 'B3', 'C3'],
	['A2', 'B2', 'C2'] //7
];

var player1Squares = [];
var player2Squares = [];

var currentArray = ['A1', 'A2', 'A3', 'B1', 'B2', 'B3', 'C1', 'C2', 'C3'];




function markSquare(currentSquare) {
	console.dir(currentSquare);
	if(currentSquare.innerHTML == "X" || currentSquare.innerHTML == "O") {
		return "taken";
	}
	else {
		if (whosTurn == 1) {
			currentSquare.innerHTML = "X";
			whosTurn = 2;
			player1Squares.push(currentSquare.id);
			// console.log(player1Squares);
			winCheck(1, player1Squares);

			if(computerPlayer == true){
				computerMove();
				whosTurn = 1;
			}

		}
		else {
			currentSquare.innerHTML = "O";
			whosTurn = 1;
			player2Squares.push(currentSquare.id);
			// console.log(player2Squares);
			winCheck(2, player2Squares);
		}
	}
}


function computerMove() {

	// var randomComputerMove = Math.random() * 9;

	// for (var i = 0; i < currentArray.length; i++) {
	// 	for (var j = 0; j < currentArray[i].length; j++) {

	// 	 currentArray[i][j];
	// 	 document.getElementById('message').innerHTML = message;
	// 	}
		
	// }
	var needASquare = true;
	var squareDivs = document.getElementsByClassName('square');
	console.log(squareDivs);
	while(needASquare){
		var randomNumber = (Math.ceil(Math.random() * 8))+1;
		var randomSquare = squareDivs[randomNumber];
		// console.log(randomSquare);
		isTaken = markSquare(randomSquare);
		console.log(isTaken);

		// markSquare(isTaken);

		if(isTaken !== "taken") {
			needASquare = false;
		}
	}
	
	
}

function winCheck(whoJustWent, currentPlayerSquares) {
		for (var i = 0; i < winningCombos.length; i++) {
			// console.log(winningCombos[i]);
			rowCount = 0;
			// rowCount2 = 0;

			for (var j = 0; j < winningCombos[i].length; j++) {
				// console.log(winningCombos[j]);

				var winningSquare = winningCombos[i][j];

				if (currentPlayerSquares.indexOf(winningSquare) > -1) {
					//Player 1 has a HIT on the grid
					rowCount++;
				}

				if (rowCount === 3) {
					//player had all 3 of these j's. WIN!
					console.log("player " + whoJustWent + ", won!");
					gameOver(whoJustWent, winningCombos[i]);
				}


				// if (player1Squares.indexOf(winningSquare) > -1) {
				// 	//Player 1 has a HIT on the grid
				// 	rowCount++;
				// }
				// if (player2Squares.indexOf(winningSquare) > -1) {
				// 	//Player 1 has a HIT on the grid
				// 	rowCount2++;
				// }

				// if (rowCount === 3) {
				// 	//player had all 3 of these j's. WIN!
				// 	console.log("player 1, won!");
				// }

				// if (rowCount2 === 3) {
				// 	console.log("Player 2, won!");
				// }

			}
		}
	}



	function gameOver(whoJustWon, winningCombo) {
		var message = "Congratulations player #" + whoJustWon + ", you just won with " + winningCombo + "!";
		document.getElementById('message').innerHTML = message;
		for (var i = 0; i < winningCombo.length; i++) {
			document.getElementById(winningCombo[i]).className += ' winning-square';
		}
		someoneWon = true;
	}



