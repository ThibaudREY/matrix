import {Matrix} from "./matrix/matrix";
import {Naive} from "./naive/naive";
import {Strassen} from "./strassen/strassen";

let a = new Matrix(5, 5);
let b = new Matrix(5, 5);

let n = new Naive();
let s = new Strassen();

let start: number = Date.now();
s.run(a, b).display();
// console.log(Date.now() - start);