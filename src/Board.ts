import { BoardCellInterface } from './interfaces/BoardCellInterface';
import { getModelFromSize } from './utils/getModelFromSize';
import { BoardConfigInterface } from './interfaces/BoardConfigInterface';


export class Board {
    private size: number;
    public model: BoardCellInterface[][] = [];
    
    constructor(config: BoardConfigInterface){
        this.initModel();
        this.size = config.size;
    }

    public initModel() {
        this.model = getModelFromSize(this.size);
    }
}