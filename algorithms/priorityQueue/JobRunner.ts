import Job from "./Job";

export default class JobRunner {
    jobs: Job[] = [];
    executed: number[] = [];

    constructor(jobs: Job[] = []) {
        this.jobs = jobs;
    }

    enqueue(job: Job) {
        let isContain = false;
        for (let i = 0; i < this.jobs.length; i++) {
            if (this.jobs[i].priority > job.priority) {
                this.jobs.splice(i, 0, job);
                isContain = true;
                break;
            }
        }

        if (!isContain) {
            this.jobs.push(job);
        }
    }

    dequeue() {
        if (this.isEmpty()) {
            return console.log('There is no job');
        }

        return this.jobs.shift();
    }

    runJobs() {
        if (this.isEmpty()) {
            return console.log('There is no jobs');
        }
        for (let i = 0; i < this.jobs.length;) {
            this.executed.push(this.jobs[i].priority);
            this.dequeue();
        }
    }

    printExecuted() {
        console.log(this.executed.toString());
    }


    jobsCount() {
        return this.jobs.length;
    }

    isEmpty() {
        return this.jobsCount() == 0;
    }

}
