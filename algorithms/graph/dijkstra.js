"use strict";
exports.__esModule = true;
function dijkstra(adjacencyMatrix, startVertex) {
    var nVertices = adjacencyMatrix[0].length;
    var shortestDistances = new Array(nVertices);
    var added = new Array(nVertices);
    for (var vertexIndex = 0; vertexIndex < nVertices; vertexIndex++) {
        shortestDistances[vertexIndex] = Number.MAX_VALUE;
        added[vertexIndex] = false;
    }
    shortestDistances[startVertex] = 0;
    var parents = new Array(nVertices);
    parents[startVertex] = -1;
    for (var i = 1; i < nVertices; i++) {
        var nearestVertex = -1;
        var shortestDistance = Number.MAX_VALUE;
        for (var vertexIndex = 0; vertexIndex < nVertices; vertexIndex++) {
            if (!added[vertexIndex] && shortestDistances[vertexIndex] < shortestDistance) {
                nearestVertex = vertexIndex;
                shortestDistance = shortestDistances[vertexIndex];
            }
        }
        added[nearestVertex] = true;
        for (var vertexIndex = 0; vertexIndex < nVertices; vertexIndex++) {
            var edgeDistance = adjacencyMatrix[nearestVertex][vertexIndex];
            if (edgeDistance > 0 && ((shortestDistance + edgeDistance) < shortestDistances[vertexIndex])) {
                parents[vertexIndex] = nearestVertex;
                shortestDistances[vertexIndex] = shortestDistance + edgeDistance;
            }
        }
    }
    printResults(startVertex, shortestDistances, parents);
}
exports["default"] = dijkstra;
function printResults(startVertex, distances, parents) {
    var nVertices = distances.length;
    for (var vertexIndex = 0; vertexIndex < nVertices; vertexIndex++) {
        if (vertexIndex != startVertex) {
            console.log("Vertex     Distance");
            console.log(startVertex + " -> " + vertexIndex + " \t " + distances[vertexIndex] + " \t");
            console.log("********PATH********");
            printPath(vertexIndex, parents);
        }
        console.log('\n');
    }
}
function printPath(currentVertex, parents) {
    if (currentVertex == -1)
        return;
    printPath(parents[currentVertex], parents);
    console.log(currentVertex);
}
