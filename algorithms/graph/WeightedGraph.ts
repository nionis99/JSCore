export default class WeightedGraph {
    size: number;
    matrix: number[][];

    constructor(size = 1) {
        this.size = size;
        this.matrix = [[]] as number[][];
        for (let i = 1; i <= size; i++) {
            this.matrix[i] = [];
            for (let j = 1; j <= size; j++) {
                this.matrix[i][j] = 0;
            }
        }
    }

    addVertex() {
        this.size += 1;
        this.matrix[this.size] = [];
        for (let i = 1; i <= this.size; i++) {
            this.matrix[i][this.size] = 0;
            this.matrix[this.size][i] = 0;
        }
    }

    removeVertex(vertex) {
        if (vertex < 0 || vertex > this.size) {
            console.log('Invalid vertex');
        } else {
            while (vertex < this.size) {
                for (let i = 1; i <= this.size; i++) {
                    this.matrix[i][vertex] = this.matrix[i][vertex + 1];
                }
                for (let i = 1; i <= this.size; i++) {
                    this.matrix[vertex][i] = this.matrix[vertex + 1][i];
                }
                vertex++;
            }
            this.matrix.pop();
            this.size -= 1;
        }
    }


    checkAndSetVertexes(vertexFrom: number, vertexTo: number, weight = 0) {
        if (vertexFrom > this.size || vertexTo > this.size) {
            throw new Error("invalid vertex");
        } else if (vertexFrom === vertexTo) {
            throw new Error('vertexes are equals');
        } else {
            this.matrix[vertexFrom][vertexTo] = weight;
            this.matrix[vertexTo][vertexFrom] = weight;
        }
    }

    addEdge(vertexFrom: number, vertexTo: number, weight = 1) {
        return this.checkAndSetVertexes(vertexFrom, vertexTo, weight);
    }

    removeEdge(vertexFrom: number, vertexTo: number) {
        return this.checkAndSetVertexes(vertexFrom, vertexTo);
    }

    printAdjacencyMatrix() {
        for (let i = 1; i <= this.size; i++) {
            let matrixRow = '';
            for (let j = 1; j <= this.size; j++) {
                matrixRow += ` ${this.matrix[i][j]}`;
            }
            console.log(matrixRow);
        }
    }
}