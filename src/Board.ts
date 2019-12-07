import { BoardConfigInterface } from './interfaces/BoardConfigInterface';
import { BoardModel } from './BoardModel';
import { Model } from './types';


export class Board {
    private size: number;
    public model: BoardModel;
    
    constructor(config: BoardConfigInterface){
        this.size = config.size;
        this.model = new BoardModel({ size: this.size });
    }

}