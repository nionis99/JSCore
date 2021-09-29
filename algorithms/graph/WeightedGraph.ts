export default class WeightedGraph {
    size: number;
    adjacencyList: number[][];

    constructor(size = 1) {
        this.size = size;
        this.adjacencyList = [[]] as number[][];
        for (let i = 0; i < size; i++) {
            this.adjacencyList[i] = [];
            for (let j = 0; j < size; j++) {
                this.adjacencyList[i][j] = 0;
            }
        }
    }

    addVertex() {
        this.size += 1;
        this.adjacencyList[this.size - 1] = [];
        for (let i = 0; i < this.size; i++) {
            this.adjacencyList[i][this.size - 1] = 0;
            this.adjacencyList[this.size - 1][i] = 0;
        }
    }

    removeVertex(vertex) {
        if (vertex < 0 || vertex > this.size - 1) {
            console.log('Invalid vertex');
        } else {
            while (vertex < this.size - 1) {
                for (let i = 0; i < this.size; i++) {
                    this.adjacencyList[i][vertex] = this.adjacencyList[i][vertex + 1];
                }
                for (let i = 0; i < this.size; i++) {
                    this.adjacencyList[vertex][i] = this.adjacencyList[vertex + 1][i];
                }
                vertex++;
            }
            this.adjacencyList.pop();
            this.size -= 1;
        }
    }


    checkAndSetVertexes(vertexFrom: number, vertexTo: number, weight = 0) {
        if (vertexFrom > this.size - 1 || vertexTo > this.size - 1) {
            throw new Error("invalid vertex");
        } else if (vertexFrom === vertexTo) {
            throw new Error('vertexes are equals');
        } else {
            this.adjacencyList[vertexFrom][vertexTo] = weight;
            this.adjacencyList[vertexTo][vertexFrom] = weight;
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
                matrixRow += ` ${this.adjacencyList[i][j]}`;
            }
            console.log(matrixRow);
        }
    }
}