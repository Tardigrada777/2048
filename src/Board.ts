import { BoardCellInterface } from './interfaces/BoardCellInterface';
import { getModelFromSize } from './utils/getModelFromSize';


export class Board {
    private size: number;
    public model: BoardCellInterface[][] = [];
    
    constructor(size: number){
        this.initModel();
        this.size = size;
    }

    public initModel() {
        this.model = getModelFromSize(this.size);
    }
}