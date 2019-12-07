import { GameConfigInterface } from './interfaces/GameConfigInterface';
import { Board } from './Board';


export class Game {
    public board: Board;
    public root: Element;

    constructor(config: GameConfigInterface) {
        this.root = config.root;
        this.board = config.board;
    }
}