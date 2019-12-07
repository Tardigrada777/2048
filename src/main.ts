import { Game } from './Game';
import { getElementByClassName } from './utils/getElementByClassName';


const game = new Game({
    root: getElementByClassName('.app') 
});

