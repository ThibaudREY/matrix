import { Matrix } from "../matrix/matrix";
import 'subworkers';
export declare class Strassen {
    run(A: Matrix, B: Matrix): Matrix;
    private compute(A, B);
    private nextPowerOfTwo(n);
}
