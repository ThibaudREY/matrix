export class Matrix {

    private data: number[][] = null;
    private _rows: number = 0;
    private _cols: number = 0;

    constructor(rows: number, cols: number, data: Array<Array<number>> = null) {

        this.data = [...Array<Array<number>>(rows)]
            .map((row: Array<number>, row_index: number) => [...Array<number>(cols)].map(
                (col: number, col_index: number) => {
                    if (data) {
                        return <any>data[row_index][col_index];
                    } else
                        return 0;
                }));

        this._rows = rows;
        this._cols = cols;

    }


    get rows(): number {
        return this._rows;
    }

    get cols(): number {
        return this._cols;
    }

    /**
     * Gets a value at indices
     * @param {number} i
     * @param {number} j
     * @return {number}
     */
    public get(i: number, j: number) {

        if (i >= this._rows || i < 0 || j >= this._cols || j < 0)
            throw new Error('Index out of bounds');

        return this.data[i][j];
    }

    /**
     * Sets a value at indices
     * @param {number} i
     * @param {number} j
     * @return {number}
     */
    public set(i: number, j: number, v: number) {

        if (i >= this._rows || i < 0 || j >= this._cols || j < 0)
            throw new Error('Index out of bounds');

        return this.data[i][j] = v;
    }

    /**
     * Returns true if the Matrix is square, false otherwise
     * @return {boolean}
     */
    public isSquare(): boolean {
        return this._rows === this._cols;
    }

    /**
     *
     * @return {boolean}
     */
    public isNpair(): boolean {
        return this._rows === this._cols && this._rows % 2 === 0;
    }

    /**
     * Adds n rows and n cols of digit
     * @param {number} n
     * @param {number} digit
     */
    public addN(n: number, digit: number): void {
        for (let i = 1; i <= n; i++)
            this.data.push(new Array<number>(this._cols).fill(digit));

        this.data = this.data.map((a: Array<number>) => a.concat(new Array<number>(n).fill(digit)));
        this._cols += n;
        this._rows += n;
    }

    /**
     * gets 4 submatrices if doable
     * @return {Array<Matrix>}
     */
    public split(): Array<Matrix> {
        if (!this.isNpair())
            throw new Error('n is not pair');

        return [
            this.subMatrix((this._rows / 2), this._rows - 1, (this._cols / 2), this._cols - 1),
            this.subMatrix((this._rows / 2), this._rows - 1, 0, (this._cols / 2) - 1),
            this.subMatrix(0, (this._rows / 2) - 1, (this._cols / 2), this._cols - 1),
            this.subMatrix(0, (this._rows / 2) - 1, 0, (this._cols / 2) - 1)
        ];
    }

    /**
     * Displays the Matrix in the standard output
     */
    public display(): void {
        process.stdout.write("[");
        for (let row: number = 0; row < this._rows; ++row) {
            if (row != 0) {
                process.stdout.write(" ");
            }

            process.stdout.write("[");

            for (let col: number = 0; col < this._cols; ++col) {
                process.stdout.write(this.data[row][col].toString());

                if (col != this._cols - 1) {
                    process.stdout.write(" ");
                }
            }

            process.stdout.write("]");

            if (row == this._rows - 1) {
                process.stdout.write("]");
            }

            process.stdout.write('\n');
        }
    }

    /**
     *
     * @param {number} exclude_row_from
     * @param {number} exclude_row_to
     * @param {number} exclude_col_from
     * @param {number} exclude_col_to
     * @return {Matrix}
     */
    public subMatrix(exclude_row_from: number, exclude_row_to: number, exclude_col_from: number, exclude_col_to: number): Matrix {

        let result: Matrix = new Matrix(
            this._rows - ((exclude_row_to - exclude_row_from) + 1),
            this._cols - ((exclude_col_to - exclude_col_from) + 1)
        );

        for (let row: number = 0, p: number = 0; row < this._rows; row++) {

            if (row < exclude_row_from || row > exclude_row_to) {
                for (let col: number = 0, q: number = 0; col < this._cols; col++) {
                    if (col < exclude_col_from || col > exclude_col_to) {
                        result.data[p][q] = this.data[row][col];

                        ++q;
                    }
                }

                ++p;
            }
        }

        return result;
    }
}