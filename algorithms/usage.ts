import JobRunner from "./priorityQueue/JobRunner";
import Job from "./priorityQueue/Job";

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