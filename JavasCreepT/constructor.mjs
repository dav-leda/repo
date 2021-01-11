
import { ver } from './index.mjs';

const createObject = (initialScore) => {

    let accumulator = initialScore;

    return {

        addOnePoint: () => { ++accumulator },
        showScore: () => accumulator, 
    }
}

var obj = createObject(1);
obj.addOnePoint();
let resultado = obj.showScore();

ver ( resultado )

