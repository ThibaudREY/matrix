import {Matrix} from "../matrix/matrix";
const spawn = require('threads').spawn;


export class Strassen {

    public run(A: Matrix, B: Matrix): Matrix {

        if (!A.isSquare() || !B.isSquare() || A.rows !== B.rows)
            throw new Error('Unsupported operation');

        return this.compute(A, B);
    }

    private compute(A: Matrix, B: Matrix): Matrix {
        if (A.cols === 1) {
            return new Matrix(1, 1, [[A.get(0, 0) * B.get(0, 0)]])
        } else {
            let n: number = undefined;

            if (this.nextPowerOfTwo(A.cols) !== A.cols) {
                n = this.nextPowerOfTwo(A.cols) - A.cols;
                A.addN(n, 0);
                B.addN(n, 0);
            }

            let a11 = A.split()[0];
            let a12 = A.split()[1];
            let a21 = A.split()[2];
            let a22 = A.split()[3];

            let b11 = B.split()[0];
            let b12 = B.split()[1];
            let b21 = B.split()[2];
            let b22 = B.split()[3];

            let q1 = this.compute(a11.minus(a12), b22);
            let q2 = this.compute(a21.minus(a22), b11);
            let q3 = this.compute(a22, b11.plus(b21));
            let q4 = this.compute(a11, b12.plus(b22));
            let q5 = this.compute(a11.plus(a22), b22.minus(b11));
            let q6 = this.compute(a11.plus(a21), b11.plus(b12));
            let q7 = this.compute(a12.plus(a22), b21.plus(b22));

            let c11 = q1.minus(q3).minus(q5).plus(q7);
            let c12 = q4.minus(q1);
            let c21 = q2.plus(q3);
            let c22 = q2.coef(-1).minus(q4).plus(q5).plus(q6);

            if (n)
                return c11.merge(c12, c21, c22)
                    .subMatrix(
                        A.rows - n,
                        A.rows - 1,
                        A.cols - n,
                        A.cols - 1
                    );

            return c11.merge(c12, c21, c22);
        }
    }

    private nextPowerOfTwo(n: number) {
        if (n === 0)
            return 1;
        n--;
        n |= n >> 1;
        n |= n >> 2;
        n |= n >> 4;
        n |= n >> 8;
        n |= n >> 16;
        return n + 1;
    }

}