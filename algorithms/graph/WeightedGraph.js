"use strict";
exports.__esModule = true;
var WeightedGraph = /** @class */ (function () {
    function WeightedGraph(size) {
        if (size === void 0) { size = 1; }
        this.size = size;
        this.matrix = [[]];
        for (var i = 1; i <= size; i++) {
            this.matrix[i] = [];
            for (var j = 1; j <= size; j++) {
                this.matrix[i][j] = 0;
            }
        }
    }
    WeightedGraph.prototype.addVertex = function () {
        this.size += 1;
        this.matrix[this.size] = [];
        for (var i = 1; i <= this.size; i++) {
            this.matrix[i][this.size] = 0;
            this.matrix[this.size][i] = 0;
        }
    };
    WeightedGraph.prototype.removeVertex = function (vertex) {
        if (vertex < 0 || vertex > this.size) {
            console.log('Invalid vertex');
        }
        else {
            while (vertex < this.size) {
                for (var i = 1; i <= this.size; i++) {
                    this.matrix[i][vertex] = this.matrix[i][vertex + 1];
                }
                for (var i = 1; i <= this.size; i++) {
                    this.matrix[vertex][i] = this.matrix[vertex + 1][i];
                }
                vertex++;
            }
            this.matrix.pop();
            this.size -= 1;
        }
    };
    WeightedGraph.prototype.checkAndSetVertexes = function (vertexFrom, vertexTo, weight) {
        if (weight === void 0) { weight = 0; }
        if (vertexFrom > this.size || vertexTo > this.size) {
            throw new Error("invalid vertex");
        }
        else if (vertexFrom === vertexTo) {
            throw new Error('vertexes are equals');
        }
        else {
            this.matrix[vertexFrom][vertexTo] = weight;
            this.matrix[vertexTo][vertexFrom] = weight;
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
        for (var i = 1; i <= this.size; i++) {
            var matrixRow = '';
            for (var j = 1; j <= this.size; j++) {
                matrixRow += " " + this.matrix[i][j];
            }
            console.log(matrixRow);
        }
    };
    return WeightedGraph;
}());
exports["default"] = WeightedGraph;
