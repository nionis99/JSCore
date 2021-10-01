"use strict";
exports.__esModule = true;
var JobRunner_1 = require("./priorityQueue/JobRunner");
var Job_1 = require("./priorityQueue/Job");
var WeightedGraph_1 = require("./graph/WeightedGraph");
var dijkstra_1 = require("./graph/dijkstra");
var jobRunner = new JobRunner_1["default"]();
var generateRandomNumber = function (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
};
for (var i = 0; i < 10000; i++) {
    jobRunner.enqueue(new Job_1["default"]("Job-" + (i + 1), generateRandomNumber(1, 10000)));
}
console.log("Before: ", jobRunner.jobsCount());
jobRunner.runJobs();
jobRunner.printExecuted();
console.log("After: ", jobRunner.jobsCount());
console.log(jobRunner.isEmpty());
var weightedGraph = new WeightedGraph_1["default"]();
weightedGraph.addVertex(); // 0
weightedGraph.addVertex(); // 1
weightedGraph.addVertex(); // 2
weightedGraph.addVertex(); // 3
weightedGraph.addEdge(0, 1, 4);
weightedGraph.addEdge(1, 2, 13);
weightedGraph.addEdge(1, 3, 16);
weightedGraph.addEdge(2, 3, 8);
weightedGraph.addEdge(2, 4, 12);
weightedGraph.addEdge(0, 4, 25);
(0, dijkstra_1["default"])(weightedGraph.adjacencyList, 0);
