export default function dijkstra(adjacencyMatrix: number[][], startVertex: number) {
    let nVertices = adjacencyMatrix[0].length;
    let shortestDistances = new Array(nVertices);
    let added = new Array(nVertices);

    for (let vertexIndex = 0; vertexIndex < nVertices; vertexIndex++) {
        shortestDistances[vertexIndex] = Number.MAX_VALUE;
        added[vertexIndex] = false;
    }

    shortestDistances[startVertex] = 0;
    let parents = new Array(nVertices);
    parents[startVertex] = -1;

    for (let i = 1; i < nVertices; i++) {
        let nearestVertex = -1;
        let shortestDistance = Number.MAX_VALUE;
        for (let vertexIndex = 0; vertexIndex < nVertices; vertexIndex++) {
            if (!added[vertexIndex] && shortestDistances[vertexIndex] < shortestDistance) {
                nearestVertex = vertexIndex;
                shortestDistance = shortestDistances[vertexIndex];
            }
        }

        added[nearestVertex] = true;

        for (let vertexIndex = 0; vertexIndex < nVertices; vertexIndex++) {
            let edgeDistance = adjacencyMatrix[nearestVertex][vertexIndex];

            if (edgeDistance > 0 && ((shortestDistance + edgeDistance) < shortestDistances[vertexIndex])) {
                parents[vertexIndex] = nearestVertex;
                shortestDistances[vertexIndex] = shortestDistance + edgeDistance;
            }
        }
    }

    printResults(startVertex, shortestDistances, parents);
}

function printResults(startVertex: number, distances: number[], parents: number[]) {
    let nVertices = distances.length;
    for (let vertexIndex = 0; vertexIndex < nVertices; vertexIndex++) {
        if (vertexIndex != startVertex) {
            console.log("Vertex     Distance");
            console.log(`${startVertex} -> ${vertexIndex} \t ${distances[vertexIndex]} \t`);
            console.log("********PATH********")
            printPath(vertexIndex, parents);
        }
        console.log('\n');
    }
}

function printPath(currentVertex: number, parents: number[]) {
    if (currentVertex == -1) return;

    printPath(parents[currentVertex], parents);
    console.log(currentVertex);
}