import { BoardCellInterface } from './interfaces/BoardCellInterface';
import { ModelConfigInterface } from './interfaces/ModelConfigInterface';
import { getModelFromSize } from './utils/getModelFromSize';
import { Model } from './types';
import { BoardCell } from './BoardCell';


export class BoardModel {
    private size: number;
    private fields: Array<BoardCellInterface[]>;

    constructor(config: ModelConfigInterface) {
        this.size = config.size;
        this.fields = this.initFields();
    }

    private initFields(): Model {
        return getModelFromSize(this.size);
    }

    public getCell(row: number, col: number): BoardCell {
        return this.fields[row][col];
    }

    public setCell(row: number, col: number, value: number) {
        this.fields[row][col].value = value;
    }
}