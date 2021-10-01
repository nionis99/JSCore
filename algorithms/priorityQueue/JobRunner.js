"use strict";
exports.__esModule = true;
var JobRunner = /** @class */ (function () {
    function JobRunner(jobs) {
        if (jobs === void 0) { jobs = []; }
        this.jobs = [];
        this.executed = [];
        this.jobs = jobs;
    }
    JobRunner.prototype.enqueue = function (job) {
        var isContain = false;
        for (var i = 0; i < this.jobs.length; i++) {
            if (this.jobs[i].priority > job.priority) {
                this.jobs.splice(i, 0, job);
                isContain = true;
                break;
            }
        }
        if (!isContain) {
            this.jobs.push(job);
        }
    };
    JobRunner.prototype.dequeue = function () {
        if (this.isEmpty()) {
            return console.log('There is no job');
        }
        return this.jobs.shift();
    };
    JobRunner.prototype.runJobs = function () {
        if (this.isEmpty()) {
            return console.log('There is no jobs');
        }
        for (var i = 0; i < this.jobs.length;) {
            this.executed.push(this.jobs[i].priority);
            this.dequeue();
        }
    };
    JobRunner.prototype.printExecuted = function () {
        console.log(this.executed.toString());
    };
    JobRunner.prototype.jobsCount = function () {
        return this.jobs.length;
    };
    JobRunner.prototype.isEmpty = function () {
        return this.jobsCount() == 0;
    };
    return JobRunner;
}());
exports["default"] = JobRunner;
