//Ejercicio 1 
function createScoreBoard() {
    let scoreBoard = {
      "The Best Ever": 1000000
    };
    return scoreBoard;
  }
  
  let myScoreBoard = createScoreBoard();

  console.log(myScoreBoard); // Output: { "The Best Ever": 1000000 }

  //Ejercicio 2

  function addPlayer(scoreBoard, playerName, playerScore) {
    scoreBoard[playerName] = playerScore;
    return scoreBoard;
  }
  

  //Ejercicio 3

  function removePlayer(scoreBoard, playerName) {
    delete scoreBoard[playerName];
    return scoreBoard;
  }
 
  //Ejercicio 4


  function updateScore(scoreBoard, playerName, addedScore) {
    scoreBoard[playerName] = scoreBoard[playerName]+ addedScore;
    return scoreBoard;
}
  //Ejercicio 5

  function applyMondayBonus(scoreBoard) {
    for (const player in scoreBoard) {
        scoreBoard[player] += 100;
    }
    return scoreBoard;
}
  
  //Ejercicio 6

  function normalizeScore(params) {
    return params.normalizeFunction(params.score);
}

function normalize(score) {
    return 2 * score + 10;
}

const params = { score: 400, normalizeFunction: normalize };
console.log(normalizeScore(params));