import {Matrix} from "./matrix/matrix";

let m = new Matrix(5, 5);

m.display();

m.split().forEach(m => m.display());
