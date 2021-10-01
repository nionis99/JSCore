import JobRunner from "./priorityQueue/JobRunner";
import Job from "./priorityQueue/Job";
import WeightedGraph from "./graph/WeightedGraph";
import dijkstra from "./graph/dijkstra";

const jobRunner = new JobRunner();

const generateRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) + min);
};

for (let i = 0; i < 10000; i++) {
    jobRunner.enqueue(new Job(`Job-${i + 1}`, generateRandomNumber(1, 10000)))
}
console.log("Before: ", jobRunner.jobsCount());
jobRunner.runJobs();
jobRunner.printExecuted();
console.log("After: ", jobRunner.jobsCount());
console.log(jobRunner.isEmpty());

const weightedGraph = new WeightedGraph();
weightedGraph.addVertex(); // 0
weightedGraph.addVertex(); // 1
weightedGraph.addVertex(); // 2
weightedGraph.addVertex(); // 3
weightedGraph.addEdge(0,1,4);
weightedGraph.addEdge(1,2,13);
weightedGraph.addEdge(1,3,16);
weightedGraph.addEdge(2,3,8);
weightedGraph.addEdge(2,4,12);
weightedGraph.addEdge(0,4,25);
dijkstra(weightedGraph.adjacencyList, 0);

