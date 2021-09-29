"use strict";
exports.__esModule = true;
var WeightedGraph = /** @class */ (function () {
    function WeightedGraph(size) {
        if (size === void 0) { size = 1; }
        this.size = size;
        this.adjacencyList = [[]];
        for (var i = 0; i < size; i++) {
            this.adjacencyList[i] = [];
            for (var j = 0; j < size; j++) {
                this.adjacencyList[i][j] = 0;
            }
        }
    }
    WeightedGraph.prototype.addVertex = function () {
        this.size += 1;
        this.adjacencyList[this.size - 1] = [];
        for (var i = 0; i < this.size; i++) {
            this.adjacencyList[i][this.size - 1] = 0;
            this.adjacencyList[this.size - 1][i] = 0;
        }
    };
    WeightedGraph.prototype.removeVertex = function (vertex) {
        if (vertex < 0 || vertex > this.size - 1) {
            console.log('Invalid vertex');
        }
        else {
            while (vertex < this.size - 1) {
                for (var i = 0; i < this.size; i++) {
                    this.adjacencyList[i][vertex] = this.adjacencyList[i][vertex + 1];
                }
                for (var i = 0; i < this.size; i++) {
                    this.adjacencyList[vertex][i] = this.adjacencyList[vertex + 1][i];
                }
                vertex++;
            }
            this.adjacencyList.pop();
            this.size -= 1;
        }
    };
    WeightedGraph.prototype.checkAndSetVertexes = function (vertexFrom, vertexTo, weight) {
        if (weight === void 0) { weight = 0; }
        if (vertexFrom > this.size - 1 || vertexTo > this.size - 1) {
            throw new Error("invalid vertex");
        }
        else if (vertexFrom === vertexTo) {
            throw new Error('vertexes are equals');
        }
        else {
            this.adjacencyList[vertexFrom][vertexTo] = weight;
            this.adjacencyList[vertexTo][vertexFrom] = weight;
        }
    };
    WeightedGraph.prototype.addEdge = function (vertexFrom, vertexTo, weight) {
        if (weight === void 0) { weight = 1; }
        return this.checkAndSetVertexes(vertexFrom, vertexTo, weight);
    };
    WeightedGraph.prototype.removeEdge = function (vertexFrom, vertexTo) {
        return this.checkAndSetVertexes(vertexFrom, vertexTo);
    };
    WeightedGraph.prototype.printAdjacencyMatrix = function () {
        for (var i = 0; i < this.size; i++) {
            var matrixRow = '';
            for (var j = 0; j < this.size; j++) {
                matrixRow += " " + this.adjacencyList[i][j];
            }
            console.log(matrixRow);
        }
    };
    return WeightedGraph;
}());
exports["default"] = WeightedGraph;
