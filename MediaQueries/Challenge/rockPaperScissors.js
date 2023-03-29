//creates an index for the user choice
let indexChoice = {
	1:"rock",
	2:"paper",
	3:"scissors"
}


//keeps track if game will be repeated
let gameStatus = true;

let playerScore = 0;
let cpuScore = 0;


while(gameStatus){
	let validation = false;
	console.log("*********ROCK******PAPER*****SCISSORS*********");
	let number = false;
	let choice = null;
	while(!number){
	choice = prompt("Please select your choice \n 1.rock \n 2.paper. \n 3.scissors \n Choice:");   
   	number = validNumber(choice);
   	let choiceCpu = Math.floor(Math.random() * 3) + 1;
   	game(choice, choiceCpu);
 
	}
	while(!validation){
    	let play = prompt("Do you want to play again? \n 1.yes \n 2.No \n 3.Maybe \n Choice:");  
    	validation = validNumber(play);
    	if (validation){
        	if (play == 1){
            	console.log('*****************NEW*****GAME*******************')
            	console.log(`*************SCORE**YOU:${playerScore}**********CPU:${cpuScore}*****`)
        	}
        	else if(play == 2){
            	console.log('****************GG*******GOOD BYE*************')
            	console.log(`*************FINAL SCORE**YOU:${playerScore}**********CPU:${cpuScore}*****`)
            	gameStatus = false;
        	}
        	else if (play == 3){
            	console.log('****************CPU***WILL DECIDE********')
           	 
            	gameStatus = Math.random() < 0.5;

            	if(gameStatus) {
                	console.log(`*************CPU WANTS A REMATCH!!!!!*****`)
                	console.log(`*************SCORE**YOU:${playerScore}**********CPU:${cpuScore}*****`)
            	}
            	else{
                	console.log(`*************CPU IS TIRED. GG!!!!!*****`)
                	console.log(`*************FINAL SCORE**YOU:${playerScore}**********CPU:${cpuScore}*****`)
            	}

        	}
    	}
	}
}

//checks if input by user is a valid option
function validNumber(choice){
	if (choice ==1 || choice ==2 || choice ==3){
    	return true;
	}
	else{
    	console.log("Not a valid input please select a number from 1 to 3")
    	return false;
	}
}


//checks who won based on the input of user and CPU
function game(human, PC){
	if(human == PC){
    	let P1 = decode(human);
    	let CPU1 = decode(PC);
    	tie(P1, CPU1);
	}
	else if((human == 1 && PC == 3) || (human == 2 && PC == 1) || (human == 3 && PC == 2)){
    	let P1 = decode(human);
    	let CPU1 = decode(PC)
    	win(P1, CPU1);
	}
	else if((human == 3 && PC == 1) || (human == 1 && PC == 2) || (human == 2 && PC == 3)){
    	let P1 = decode(human);
    	let CPU1 = decode(PC);
    	lose(P1,CPU1);
	}
	else{
    	error();
	}
}

//Performs actions done when Player Wins    
function win(human, computer){
	console.log(`You chose ${human} The computer chose ${computer}.You win!!`)
	playerScore++;
	return;

}

//Performs actions done when Player loses
function lose(human, computer){
	console.log(`You chose ${human} The computer chose ${computer}. You lost!!`)
	cpuScore++;
	return;
}

//Performs actions done when there is a tie
function tie(human, computer){
	console.log(`You chose ${human} The computer chose ${computer}. Its a Tie!!`)
    	return;
}

//Performs actions when neither the player or the CPU wins and its also not a tie
function error(){
	console.log(`Unexpected error, ending application`)
	exit;
}

//Changes the input of the user (ex.1 or 2) into an english representation of their choice
function decode(element){
    
	return indexChoice[element];
};
