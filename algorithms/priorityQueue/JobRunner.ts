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

    runFirst() {
        if (this.isEmpty()) {
            return console.log('There is no job');
        }
        const {title, priority} = this.jobs[0];
        return console.log(`First job is ${title} and his priority is ${priority}`);
    }

    runLast() {
        if (this.isEmpty()) {
            return console.log('There is no job');
        }
        const {title, priority} = this.jobs[this.jobs.length - 1];
        return console.log(`Last job is ${title} and his priority is ${priority}`);
    }


    runJobs() {
        if (this.isEmpty()) {
            return console.log('There is no jobs');
        }
        for (let i = 0; i < this.jobs.length;) {
            // console.log(`${this.jobs[i].title} and his priority is ${this.jobs[i].priority}`); // Jobs
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
