class WeightedGraph {
    size: number;
    matrix: number[][];

    constructor(size = 1) {
        this.size = size;
        this.matrix.push([]);
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                this.matrix[i][j] = 0;
            }
        }
    }

    addVertex() {
        this.size += 1;
        this.matrix.push([]);
        for (let i = 0; i < this.size; i++) {
            this.matrix[i][this.size - 1] = 0;
            this.matrix[this.size - 1][i] = 0;
        }
    }

    removeVertex(vertex) {
        if (vertex < 0 || vertex > this.size - 1) {
            console.log('Invalid vertex');
        } else {
            while (vertex < this.size - 1) {
                for (let i = 0; i < this.size; i++) {
                    this.matrix[i][vertex] = this.matrix[i][vertex + 1];
                }
                for (let i = 0; i < this.size; i++) {
                    this.matrix[vertex][i] = this.matrix[vertex + 1][i];
                }
                vertex++;
            }
            this.matrix.pop();
            this.size--;
        }
    }


    checkAndSetVertexes(vertexFrom: number, vertexTo: number, weight = 0) {
        if (vertexFrom > this.size - 1 || vertexTo > this.size - 1) {
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
        for (let i = 0; i < this.size; i++) {
            let matrixRow = '';
            for (let j = 0; j < this.size; j++) {
                matrixRow += ` ${this.matrix[i][j]}`;
            }
            console.log(matrixRow);
        }
    }
}