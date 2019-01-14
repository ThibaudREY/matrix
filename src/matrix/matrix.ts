export class Matrix {

    private data: number[][] = null;
    private rows: number = 0;
    private cols: number = 0;

    constructor(rows: number, cols: number) {

        this.data = [...Array<Array<number>>(rows)]
            .map(() => [...Array<number>(cols)].map(() => 0));

        this.rows = rows;
        this.cols = cols;

        let z = 0;

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                this.data[i][j] = z++;
            }
        }
    }

    /**
     * Returns true if the Matrix is square, false otherwise
     * @return {boolean}
     */
    public isSquare(): boolean {
        return this.rows === this.cols;
    }

    /**
     *
     * @return {boolean}
     */
    public isNpair(): boolean {
        return this.rows === this.cols && this.rows % 2 === 0;
    }

    /**
     * Adds n rows and n cols of digit
     * @param {number} n
     * @param {number} digit
     */
    public addN(n: number, digit: number): void {
        for (let i = 1; i <= n; i++)
            this.data.push(new Array<number>(this.cols).fill(digit));

        this.data = this.data.map((a: Array<number>) => a.concat(new Array<number>(n).fill(digit)));
        this.cols += n;
        this.rows += n;
    }

    public split(): Array<Matrix> {
        if (!this.isNpair())
            throw new Error('n is not pair');

        return [
            this.subMatrix((this.rows / 2), this.rows - 1, (this.cols / 2), this.cols - 1),
            this.subMatrix((this.rows / 2), this.rows - 1, 0, (this.cols / 2) - 1),
            this.subMatrix(0, (this.rows / 2) - 1,(this.cols / 2), this.cols - 1),
            this.subMatrix(0, (this.rows / 2) - 1,0, (this.cols / 2) - 1)
        ];
    }

    /**
     * Displays the Matrix in the standard output
     */
    public display(): void {
        process.stdout.write("[");
        for (let row: number = 0; row < this.rows; ++row) {
            if (row != 0) {
                process.stdout.write(" ");
            }

            process.stdout.write("[");

            for (let col: number = 0; col < this.cols; ++col) {
                process.stdout.write(this.data[row][col].toString());

                if (col != this.cols - 1) {
                    process.stdout.write(" ");
                }
            }

            process.stdout.write("]");

            if (row == this.rows - 1) {
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
            this.rows - ((exclude_row_to - exclude_row_from) + 1),
            this.cols - ((exclude_col_to - exclude_col_from) + 1)
        );

        for (let row: number = 0, p: number = 0; row < this.rows; row++) {

            if (row < exclude_row_from || row > exclude_row_to) {
                for (let col: number = 0, q: number = 0; col < this.cols; col++) {
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