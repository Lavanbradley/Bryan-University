var readlineSync = require('readline-sync');
var playerName = readlineSync.question("May I have your name please?");

var welcomeMessage = `Welcome ${playerName} to Escape Room Game Simulation!`;
console.log(welcomeMessage);

//Boolean Flags 
var isPlayerAlive = true;
var hasFoundKey = false;

while (isPlayerAlive == true) {
  const menuId = readlineSync.keyIn(`Enter 1 to put hand in hole \n Enter 2 to find the key, \n Enter 3 to open the door`, { limit: '$<1-3>' });
  if (menuId == 1) {
    //Player put the hand in the hole
    //Player is DEAD and game is over
    console.log(`${playerName}, oh no, you put your hand in the whole. Game is over.`);
    isPlayerAlive = false;
  }
  else if (menuId == 2 && hasFoundKey == false) {
    //Player selected option 2 and has not found the key yet
    console.log(`${playerName}, you found the key successfully. Proceed to menu option 3 to open the door successfully`);
    hasFoundKey = true;
  }
  else if (menuId == 2 && hasFoundKey == true) {
    //Player selected option 2 and has found the key previously
    console.log(`${playerName}, it appears that you already have the key. Do not waste your time with this menu option. Proceed to menu option 3 to open the door successfully`);
  }
  else if (menuId == 3 && hasFoundKey == false) {
    //Player selected option 3 and has not found the key yet
    console.log(`${playerName}, you have yet to find the key, please proceed to menu option 2 and find the key first!`);
  }
  else if (menuId == 3 && hasFoundKey == true) {
    //Player has selected option 3 and has found the key previously
    console.log(`${playerName}, Congratulations, you have opened the door successfully! Bravo!`);
    isPlayerAlive = false;
  }
};