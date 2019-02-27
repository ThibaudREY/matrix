import {Matrix} from "./matrix/matrix";
import {Naive} from "./naive/naive";
import {Strassen} from "./strassen/strassen";
const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors());
app.use(express.json());

let n = new Naive();
let s = new Strassen();

app.post('/', function (req: any, res: any) {

    let a = new Matrix(req.body.A.size, req.body.A.size, req.body.A.data);
    let b = new Matrix(req.body.B.size, req.body.B.size, req.body.B.data);

    let start = Date.now();
    let naive = n.run(a, b).data;
    let naiveTime = Date.now() - start;

    start = Date.now();
    let strassen = s.run(a, b).data;
    let strassenTime = Date.now() - start;

    res.send({naive: naive, naiveTime: naiveTime, strassen: strassen, strassenTime: strassenTime})
});

app.listen(3000);

