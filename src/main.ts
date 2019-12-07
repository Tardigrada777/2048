import { Game } from './Game';
import { getElementByClassName } from './utils/getElementByClassName';
import { Board } from './Board';
import { BoardConfigInterface } from './interfaces/BoardConfigInterface';


const boardConfig: BoardConfigInterface = {
    size: 4
}

const game = new Game({
    root: getElementByClassName('game'),
    board: new Board(boardConfig)
});

console.log(game)

