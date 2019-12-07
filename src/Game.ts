import { GameConfigInterface } from './interfaces/GameConfigInterface';
import { Board } from './Board';


export class Game {
    private board: Board;
    private root: Element;

    constructor(config: GameConfigInterface) {
        this.root = config.root;
        this.board = config.board;
    }
}