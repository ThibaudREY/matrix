import {Matrix} from "./matrix/matrix";
import {Naive} from "./naive/naive";

let a = new Matrix(2, 2, [[1, 1], [1, 1]]);
let b = new Matrix(2, 2, [[2, 2], [2, 2]]);

let n = new Naive();

n.run(a, b).display();