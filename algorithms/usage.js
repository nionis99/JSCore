"use strict";
exports.__esModule = true;
var JobRunner_1 = require("./priorityQueue/JobRunner");
var Job_1 = require("./priorityQueue/Job");
var jobRunner = new JobRunner_1["default"]();
var generateRandomNumber = function (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
};
for (var i = 0; i < 10000; i++) {
    jobRunner.addJob(new Job_1["default"]("Job-" + (i + 1), generateRandomNumber(1, 10000)));
}
jobRunner.runJobs();
jobRunner.printExecuted();
