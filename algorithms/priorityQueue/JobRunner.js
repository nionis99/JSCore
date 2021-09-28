"use strict";
exports.__esModule = true;
var Job_1 = require("./Job");
var JobRunner = /** @class */ (function () {
    function JobRunner(jobs) {
        this.jobs = [];
        this.jobs = jobs || [];
    }
    JobRunner.prototype.addJob = function (title, priority) {
        var isContain = false;
        var job = new Job_1["default"](title, priority);
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
    JobRunner.prototype.runFirst = function () {
        if (this.isEmpty())
            return console.log('There is no job');
        var _a = this.jobs[0], title = _a.title, priority = _a.priority;
        return console.log("First job is " + title + " and his priority is " + priority);
    };
    JobRunner.prototype.runLast = function () {
        if (this.isEmpty())
            return console.log('There is no job');
        var _a = this.jobs[this.jobs.length - 1], title = _a.title, priority = _a.priority;
        return console.log("Last job is " + title + " and his priority is " + priority);
    };
    JobRunner.prototype.runJobs = function () {
        if (this.isEmpty())
            return console.log('There is no jobs');
        else
            for (var i = 0; i < this.jobs.length; i++) {
                console.log(this.jobs[i].title + " and his priority is " + this.jobs[i].priority);
            }
    };
    JobRunner.prototype.isEmpty = function () {
        return this.jobs.length == 0;
    };
    return JobRunner;
}());
exports["default"] = JobRunner;
