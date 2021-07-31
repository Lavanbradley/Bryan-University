var readlineSync = require('readline-sync');

const name = readlineSync.question('Please enter your name');

readlineSync.question('Hello ' + name + ' , Welcome to fight island. Press enter to begin battle');

const blueCornerFighters = ['Conor McGregor', 'Daniel Cormier', 'John Jones', 'Chael Sonnen']

const treasure = ['Left hook', 'Right hook', 'Take down', 'Arm bar'];

var prize = [];

let userCardio = 40;
const fightOrFlight = ['Fight', 'Chicken out', 'Faint'];
let punch = treasure[Math.floor(Math.random() * treasure.length)];

function octagon() {
  const punchingPower = Math.floor(Math.random() * (5 - 4 + 3) + 5);
  const blueCornerFighter = blueCornerFighters[Math.floor(Math.random() * blueCornerFighters.length)];
  let blueCornerCardio = 40;
  const blueCornerFightersPower = Math.floor(Math.random() * (5 - 3 + 2) + 5);

  const index = readlineSync.keyInSelect(fightOrFlight, 'Ready to fight?');

  if (fightOrFlight[index] == 'Chicken out') {
    return userCardio = 0;
  } else if (fightOrFlight[index] == 'Faint') {
    console.log(name + ': \n' + userCardio + '\nTreasure: ' + punch);
  } else if (fightOrFlight[index] === 'Fight') {
    let key = Math.random();
    if (key <= .3) {
      console.log('Lets get ready to rumble!');
    } else if (key >= .3) {
      console.log(blueCornerFighter + ' is ready to rock!');


      while (blueCornerCardio > 0 && userCardio > 0) {
        const user = readlineSync.question('What would you like to do? Enter "r" to run or "f" to fight : ');

        switch (user) {
          case 'r':
            const run = Math.random();
            if (run < .5) {
              console.log('Before you could run away ' + blueCornerFighter + ' attacked you with ' + blueCornerFightersPower);
            } else {
              console.log('You ran away!!');
              break;
            }

          case 'f':
            blueCornerCardio -= punchingPower;
            console.log('You attacked ' + blueCornerFighter + ' with ' + punchingPower + ' punch power');

            userCardio -= blueCornerFightersPower;
            console.log('Fighter just attacked you with: ' + blueCornerFightersPower + ' attack power');

            if (blueCornerCardio <= 0) {
              console.log('You knocked ' + blueCornerFighter + '.\n' + blueCornerFighter + ' is fast asleep ' + punch);
              let loot = Math.random();
              if (loot <= .3) {
                prize.push(punch);
              }
            } else if (userCardio <= 0) {
              console.log(blueCornerFighter + ' has won the fight. Get back to training')
            }
        }
      }
    }
  }
}
while (userCardio > 0) {
  userRestore = function () {
    userActive = true;
    userCardio = 40;
  };
  userRestore();
  octagon();
}