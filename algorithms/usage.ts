import JobRunner from "./priorityQueue/JobRunner";

const jobRunner = new JobRunner();

const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
};

for (let i = 0; i < 10000; i++) {
    jobRunner.addJob(`Job-${i + 1}`, generateRandomNumber(1, 10000))
}

jobRunner.runJobs();