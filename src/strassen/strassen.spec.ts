import {Strassen} from "./strassen";
import {Matrix} from "../matrix/matrix";

describe('run', function () {
    let a = new Matrix(512, 512);
    let b = new Matrix(512, 512);
    let s = new Strassen();

    let start: number = Date.now();
    s.run(a, b);
    console.log(Date.now() - start);
});