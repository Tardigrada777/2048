import { BoardCellInterface } from '../interfaces/BoardCellInterface';
import { Model } from '../types';


export function getModelFromSize(size: number): BoardCellInterface[][] {
    const MODEL: Model = [];

    for (let row = 0; row < size; row++) {
        const ROW: BoardCellInterface[] = [];

        for (let col = 0; col < size; col++) {
            const CELL: BoardCellInterface = {
                row: row,
                column: col,
                value: 0
            }
            ROW.push(CELL);
        }

        MODEL.push(ROW);
    }

    return MODEL;
}