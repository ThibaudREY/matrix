export declare class Matrix {
    private data;
    private _rows;
    private _cols;
    constructor(rows: number, cols: number, data?: Array<Array<number>>);
    rows: number;
    cols: number;
    /**
     * Gets a value at indices
     * @param {number} i
     * @param {number} j
     * @return {number}
     */
    get(i: number, j: number): number;
    /**
     * Sets a value at indices
     * @param {number} i
     * @param {number} j
     * @return {number}
     */
    set(i: number, j: number, v: number): number;
    /**
     * Returns true if the Matrix is square, false otherwise
     * @return {boolean}
     */
    isSquare(): boolean;
    /**
     *
     * @return {boolean}
     */
    isNpair(): boolean;
    /**
     * Adds n rows and n cols of digit
     * @param {number} n
     * @param {number} digit
     */
    addN(n: number, digit: number): void;
    /**
     * gets 4 submatrices if doable
     * @return {Array<Matrix>}
     */
    split(): Array<Matrix>;
    /**
     * Displays the Matrix in the standard output
     */
    display(): void;
    /**
     *
     * @param {number} exclude_row_from
     * @param {number} exclude_row_to
     * @param {number} exclude_col_from
     * @param {number} exclude_col_to
     * @return {Matrix}
     */
    subMatrix(exclude_row_from: number, exclude_row_to: number, exclude_col_from: number, exclude_col_to: number): Matrix;
    /**
     * Substracts another matrix
     * @param {Matrix} m
     */
    minus(m: Matrix): Matrix;
    /**
     * Adds another matrix
     * @param {Matrix} m
     */
    plus(m: Matrix): Matrix;
    /**
     *
     * @param {number} n
     * @return {this}
     */
    coef(n: number): this;
    /**
     *
     * @param {number} n
     * @return {Array<number>}
     */
    getRow(n: number): Array<number>;
    /**
     *
     * @return {this}
     */
    merge(top_right: Matrix, bottom_left: Matrix, bottom_right: Matrix): this;
}
