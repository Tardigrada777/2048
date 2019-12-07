import { BoardCellInterface } from '../interfaces/BoardCellInterface';
import { Model } from '../types';
import { BoardCell } from '../BoardCell';


export function getModelFromSize(size: number): Model {
    const MODEL: Model = [];
    
    for (let row = 0; row < size; row++) {
        const ROW: Array<BoardCell> = [];

        for (let col = 0; col < size; col++) {
            const CELL: BoardCellInterface = new BoardCell(row, col, 0);
            ROW.push(CELL);
        }

        MODEL.push(ROW);
    }

    MODEL[0][0] = new BoardCell(0, 0, 2);

    return MODEL;
}