import {Matrix} from "./matrix/matrix";
import {Naive} from "./naive/naive";
import {Strassen} from "./strassen/strassen";
const fs = require('fs');


// let a = new Matrix(256, 256);
// let b = new Matrix(256, 256);
//
let n = new Naive();
let s = new Strassen();
//
// let start: number = Date.now();
// s.run(a, b);
// console.log(Date.now() - start);

let nr = [];
let sr = [];

for (let i = 2; i < 2049; i++) {
    let a = new Matrix(i, i);
    let b = new Matrix(i, i);

    let start: number = Date.now();
    n.run(a, b);
    nr.push(Date.now() - start);

    start = Date.now();
    s.run(a, b);
    sr.push(Date.now() - start);
}

fs.writeFile(__dirname + '/res.csv', nr.join(',') + '\n' + sr.join(','));