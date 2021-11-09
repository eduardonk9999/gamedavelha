class Player{
  constructor(name, playerNumberOne, playerNumberTwo){
    this.name = name
    this.playerNumberOne = playerNumberOne
    this.playerNumberTwo = playerNumberTwo
  }



  turn(playerNumberOne, playerNumberTwo){
    /*
    const asks = document.querySelectorAll('.board div')
    asks.forEach((ask) => {
      console.log(ask)
    })
    */
    playerNumberOne ? playerNumberTwo : function(){
      console.log(1)
    }

  }

  

}



function initGame(){
  const rootElementHTML = document.querySelector(".root")
  rootElementHTML.innerHTML = `
    <div class="board">
      <div data-position="p1"></div>
      <div data-position="p2"></div>
      <div data-position="p3"></div>
      <div data-position="p4"></div>
      <div data-position="p5"></div>
      <div data-position="p6"></div>
      <div data-position="p7"></div>
      <div data-position="p8"></div>
      <div data-position="p9"></div>
    </div>
  `
 

}
initGame()



const Players = new Player()
Players.turn('Jogador1', 'Jogador2')



/*
let element = 'x';
*/

const PlayerTwo = new Player()

PlayerTwo.playerNumberTwo = 2


/*
let elementTwo = 'o';
PlayerTwo.move(element)

*/