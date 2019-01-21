import {Matrix} from "../matrix/matrix";

export class Naive {
    public run(A: Matrix, B: Matrix): Matrix {

        if (A.rows !== B.cols)
            throw new Error('Unsupported operation');

        let C: Matrix = new Matrix(A.rows, B.cols, new Array<Array<number>>(A.rows).fill(new Array<number>(A.cols).fill(0)));

        for (let i = 0; i < A.cols; i++) {
            for (let j = 0; j < B.rows; j++) {
                for (let m = 0; m < A.cols; m++) {
                    C.set(i, j, C.get(i, j) + A.get(i, m) * B.get(m, j));
                }
            }
        }

        return C;
    }
}