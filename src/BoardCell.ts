import { BoardCellInterface } from './interfaces/BoardCellInterface';


export class BoardCell implements BoardCellInterface{
    constructor(
        public row: number,
        public column: number,
        public value: number
    ){}
}