import JobRunner from "./priorityQueue/JobRunner";
import Job from "./priorityQueue/Job";

const jobRunner = new JobRunner();

const generateRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) + min);
};

for (let i = 0; i < 10000; i++) {
    jobRunner.addJob(new Job(`Job-${i + 1}`, generateRandomNumber(1, 10000)))
}

jobRunner.runJobs();
jobRunner.printExecuted();