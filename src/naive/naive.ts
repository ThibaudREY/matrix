import {Matrix} from "../matrix/matrix";

export class Naive {
    public run(A: Matrix, B: Matrix): Matrix {

        let C: Matrix = new Matrix(A.rows, B.cols)

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